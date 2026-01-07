"use client";

import { useAuth } from "@/components/providers/AuthContext";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Loader from "@/components/Loader";

export default function ReaderGuard({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const publicRoutes = ["/auth/login", "/auth/register", "/auth/forgot-password", "/auth/reset-password"];
        const isPublicRoute = publicRoutes.some(route => pathname.includes(route));

        if (!isLoading && !isAuthenticated && !isPublicRoute) {
            router.push("/auth/login");
        }

        // If authenticated and on login/register, redirect to dashboard or callback
        if (!isLoading && isAuthenticated && isPublicRoute) {
            const callbackUrl = searchParams.get("callbackUrl");
            router.push(callbackUrl || "/dashboard");
        }
    }, [isAuthenticated, isLoading, pathname, router]);

    if (isLoading) {
        return <Loader />;
    }

    return <>{children}</>;
}
