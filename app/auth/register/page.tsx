"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { AuthService } from "@/services/AuthService";
import Logo from "@/assets/imgs/jed/blogs/logo.png";
import Image from "next/image";


export default function RegisterPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            toast.error("Les mots de passe ne correspondent pas");
            return;
        }

        setIsLoading(true);

        try {
            await AuthService.register({
                fullName: formData.name,
                email: formData.email,
                password: formData.password,
            });

            toast.success("Compte créé avec succès ! Veuillez vérifier votre email.");
            router.push("/auth/login");
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
                <h1 className="text-3xl font-bold text-[#1c1e21] mb-2">Inscription</h1>
                <p className="text-[#5a6378]">Créez votre compte lecteur</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1c1e21] mb-2">
                        Nom complet
                    </label>
                    <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-[12px] border border-[rgba(74,144,226,0.2)] focus:border-[#4a90e2] focus:ring-2 focus:ring-[#4a90e2]/20 outline-none transition-all"
                        placeholder="Jean Dupont"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1c1e21] mb-2">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

                <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#1c1e21] mb-2">
                        Confirmer le mot de passe
                    </label>
                    <div className="relative">
                        <input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            className="w-full px-4 py-3 rounded-[12px] border border-[rgba(74,144,226,0.2)] focus:border-[#4a90e2] focus:ring-2 focus:ring-[#4a90e2]/20 outline-none transition-all pr-12"
                            placeholder="••••••••"
                            required
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
                    {isLoading ? "Création..." : "Créer mon compte"}
                </button>
            </form>

            <div className="mt-6 text-center text-sm text-[#5a6378]">
                Déjà un compte ?{" "}
                <Link href="/auth/login" className="text-[#4a90e2] hover:underline font-medium">
                    Se connecter
                </Link>
            </div>
        </div>
    );
}
