"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { AuthService } from "@/services/AuthService";
import Logo from "@/assets/imgs/jed/blogs/logo.png";
import Image from "next/image";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import Link from "next/link";

export default function VerifyEmailPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const verifyEmail = async () => {
            if (!token) {
                setStatus("error");
                setMessage("Token de vérification manquant");
                return;
            }

            try {
                await AuthService.verifyEmail(token);
                setStatus("success");
                setMessage("Votre compte a été vérifié avec succès !");

                // Redirect to login after 3 seconds
                setTimeout(() => {
                    router.push("/auth/login");
                }, 3000);
            } catch (error: any) {
                setStatus("error");
                setMessage(error.response?.data?.message || "Le lien de vérification est invalide ou a expiré");
            }
        };

        verifyEmail();
    }, [token, router]);

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
                <h1 className="text-3xl font-bold text-[#1c1e21] mb-2">Vérification de votre compte</h1>
            </div>

            <div className="flex flex-col items-center justify-center py-8">
                {status === "loading" && (
                    <>
                        <Loader2 className="w-16 h-16 text-[#4a90e2] animate-spin mb-4" />
                        <p className="text-[#5a6378] text-center">Vérification en cours...</p>
                    </>
                )}

                {status === "success" && (
                    <>
                        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                        <p className="text-green-600 text-center font-medium mb-2">{message}</p>
                        <p className="text-[#5a6378] text-sm text-center">
                            Redirection vers la page de connexion...
                        </p>
                    </>
                )}

                {status === "error" && (
                    <>
                        <XCircle className="w-16 h-16 text-red-500 mb-4" />
                        <p className="text-red-600 text-center font-medium mb-6">{message}</p>
                        <div className="flex flex-col gap-3 w-full max-w-sm">
                            <Link
                                href="/auth/login"
                                className="w-full py-3 px-4 bg-[#4a90e2] text-white rounded-[12px] font-medium hover:bg-[#3a7bc8] transition-all text-center shadow-[0_4px_16px_rgba(74,144,226,0.25)]"
                            >
                                Aller à la connexion
                            </Link>
                            <Link
                                href="/auth/register"
                                className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-[12px] font-medium hover:bg-gray-200 transition-all text-center"
                            >
                                Créer un nouveau compte
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
