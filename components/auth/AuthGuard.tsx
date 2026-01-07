"use client";

import { useAuth } from "@/components/providers/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        // If authenticated, redirect to dashboard or callback URL
        if (!isLoading && isAuthenticated) {
            const callbackUrl = searchParams.get("callbackUrl");
            router.push(callbackUrl || "/dashboard");
        }
    }, [isAuthenticated, isLoading, router, searchParams]);

    // Don't show auth pages if already authenticated
    if (isAuthenticated) {
        return null;
    }

    return <>{children}</>;
}
