"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/components/providers/AuthContext";
import { useSearchParams } from "next/navigation";
import Logo from "@/assets/imgs/jed/blogs/logo.png";
import Image from "next/image";


export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || undefined;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await login(email, password, rememberMe, callbackUrl);
        } catch (error) {
            console.error(error);
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
                <div className="mx-auto flex justify-center items-center">
                    <a href="/">
                        <Image className="logo w-auto h-[40px]" src={Logo} alt="" />
                    </a>
                </div>
                <h1 className="text-3xl font-bold text-[#1c1e21] mb-2">Connexion</h1>
                <p className="text-[#5a6378]">Accédez à votre espace lecteur</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1c1e21] mb-2">
                        Email
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

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-[#1c1e21] mb-2">
                        Mot de passe
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

                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="rounded border-[rgba(74,144,226,0.2)]"
                        />
                        <span className="text-[#5a6378]">Se souvenir de moi</span>
                    </label>

                    <Link href="/auth/forgot-password" className="text-[#4a90e2] hover:underline">
                        Mot de passe oublié ?
                    </Link>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-4 bg-[#4a90e2] text-white rounded-[12px] font-medium hover:bg-[#3a7bc8] transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_16px_rgba(74,144,226,0.25)]"
                >
                    {isLoading ? "Connexion..." : "Se connecter"}
                </button>
            </form>

            <div className="mt-6 text-center text-sm text-[#5a6378]">
                Pas encore de compte ?{" "}
                <Link href="/auth/register" className="text-[#4a90e2] hover:underline font-medium">
                    S'inscrire
                </Link>
            </div>
        </div>
    );
}
