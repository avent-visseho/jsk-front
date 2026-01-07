"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";
import Cookies from "js-cookie";
import api from "@/services/api";
import { AuthService } from "@/services/AuthService";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface AuthContextType {
    user: any | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (email: string, password: string, rememberMe: boolean, callbackUrl?: string) => Promise<void>;
    logout: () => void;
    updateUser: (userData: any) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const initAuth = async () => {
            const accessToken = Cookies.get("auth_token");
            const userData = localStorage.getItem("user");

            if (accessToken && userData) {
                setUser(JSON.parse(userData));
            }
            setIsLoading(false);
        };

        initAuth();
    }, []);

    const login = async (email: string, password: string, rememberMe: boolean, callbackUrl?: string) => {
        try {
            const data = await AuthService.login({ email, password }, "user");
            const { auth_token, refresh_token, user: userData } = data;

            const expires = rememberMe ? 7 : undefined; // 7 days or session
            Cookies.set("auth_token", auth_token, { expires });
            Cookies.set("refresh_token", refresh_token, { expires });
            Cookies.set("remember_me", String(rememberMe), { expires });

            localStorage.setItem("user", JSON.stringify(userData));
            setUser(userData);

            toast.success("Connexion réussie !");
            router.push(callbackUrl || "/dashboard");
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Erreur de connexion");
            throw error;
        }
    };

    const logout = () => {
        Cookies.remove("auth_token");
        Cookies.remove("refresh_token");
        Cookies.remove("remember_me");
        localStorage.removeItem("user");
        setUser(null);
        router.push("/auth/login");
    };

    const updateUser = (userData: any) => {
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout, updateUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
