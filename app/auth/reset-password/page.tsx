"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { AuthService } from "@/services/AuthService";
import Logo from "@/assets/imgs/jed/blogs/logo.png";
import Image from "next/image";

export default function ResetPasswordPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!token) {
            toast.error("Lien invalide ou expiré");
            router.push("/auth/forgot-password");
        }
    }, [token, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            toast.error("Les mots de passe ne correspondent pas");
            return;
        }

        if (!token) {
            toast.error("Token manquant");
            return;
        }

        setIsLoading(true);

        try {
            await AuthService.resetPassword({
                token,
                newPassword: password,
            });

            toast.success("Mot de passe réinitialisé avec succès !");
            router.push("/auth/login");
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Une erreur est survenue");
        } finally {
            setIsLoading(false);
        }
    };

    if (!token) {
        return null;
    }

    return (
        <div className="glass-card w-full max-w-xl p-8 rounded-[24px]" style={{
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: '0 8px 32px rgba(31,38,135,0.15)',
        }}>
            <div className="text-center mb-8">
                <div className="mx-auto flex justify-center items-center mb-4">
                    <a href="/">
                        <Image className="logo w-auto h-[40px]" src={Logo} alt="" />
                    </a>
                </div>
                <h1 className="text-3xl font-bold text-[#1c1e21] mb-2">Nouveau mot de passe</h1>
                <p className="text-[#5a6378]">Choisissez un nouveau mot de passe sécurisé</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-[#1c1e21] mb-2">
                        Nouveau mot de passe
                    </label>
                    <div className="relative">
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-[12px] border border-[rgba(74,144,226,0.2)] focus:border-[#4a90e2] focus:ring-2 focus:ring-[#4a90e2]/20 outline-none transition-all pr-12"
                            placeholder="••••••••"
                            required
                            minLength={6}
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5a6378] hover:text-[#4a90e2] transition-colors"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#1c1e21] mb-2">
                        Confirmer le mot de passe
                    </label>
                    <div className="relative">
                        <input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-[12px] border border-[rgba(74,144,226,0.2)] focus:border-[#4a90e2] focus:ring-2 focus:ring-[#4a90e2]/20 outline-none transition-all pr-12"
                            placeholder="••••••••"
                            required
                            minLength={6}
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5a6378] hover:text-[#4a90e2] transition-colors"
                        >
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-4 bg-[#4a90e2] text-white rounded-[12px] font-medium hover:bg-[#3a7bc8] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_16px_rgba(74,144,226,0.25)]"
                >
                    {isLoading ? "Réinitialisation..." : "Réinitialiser le mot de passe"}
                </button>

                <div className="text-center text-sm text-[#5a6378]">
                    <Link href="/auth/login" className="text-[#4a90e2] hover:underline font-medium">
                        Retour à la connexion
                    </Link>
                </div>
            </form>
        </div>
    );
}
