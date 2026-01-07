"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { AuthService } from "@/services/AuthService";
import Logo from "@/assets/imgs/jed/blogs/logo.png";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [emailSent, setEmailSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await AuthService.forgotPassword(email);
            toast.success("Un email de réinitialisation a été envoyé");
            setEmailSent(true);
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Une erreur est survenue");
        } finally {
            setIsLoading(false);
        }
    };

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
                <h1 className="text-3xl font-bold text-[#1c1e21] mb-2">Mot de passe oublié ?</h1>
                <p className="text-[#5a6378]">
                    {emailSent
                        ? "Consultez votre boîte mail"
                        : "Entrez votre email pour recevoir un lien de réinitialisation"
                    }
                </p>
            </div>

            {emailSent ? (
                <div className="space-y-6">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-[12px]">
                        <p className="text-sm text-green-800">
                            Un email a été envoyé à <strong>{email}</strong>.
                            Cliquez sur le lien dans l'email pour réinitialiser votre mot de passe.
                        </p>
                    </div>
                    <Link
                        href="/auth/login"
                        className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#4a90e2] text-white rounded-[12px] font-medium hover:bg-[#3a7bc8] transition-all shadow-[0_4px_16px_rgba(74,144,226,0.25)]"
                    >
                        <ArrowLeft size={20} />
                        Retour à la connexion
                    </Link>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#1c1e21] mb-2">
                            Adresse email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-[12px] border border-[rgba(74,144,226,0.2)] focus:border-[#4a90e2] focus:ring-2 focus:ring-[#4a90e2]/20 outline-none transition-all"
                            placeholder="votre@email.com"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 px-4 bg-[#4a90e2] text-white rounded-[12px] font-medium hover:bg-[#3a7bc8] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_16px_rgba(74,144,226,0.25)]"
                    >
                        {isLoading ? "Envoi..." : "Envoyer le lien"}
                    </button>

                    <Link
                        href="/auth/login"
                        className="flex items-center justify-center gap-2 text-sm text-[#5a6378] hover:text-[#4a90e2] transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Retour à la connexion
                    </Link>
                </form>
            )}
        </div>
    );
}
