import { Suspense } from "react";
import Logo from "@/assets/imgs/jed/blogs/logo.png";
import Image from "next/image";
import { AuthProvider } from "@/components/providers/AuthContext";
import AuthGuard from "@/components/auth/AuthGuard";
import { Metadata } from "next";
import localFont from "next/font/local";
import "../(reader)/reader.css";

const geistSans = localFont({
    src: "../(public)/fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "../(public)/fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Authentification - JSK Opinions",
    description: "Authentification pour accéder à votre espace personnel sur JSK Opinions",
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <AuthProvider>
                    <div className="min-h-screen flex items-center justify-center p-4" style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    }}>
                        <Suspense fallback={null}>
                            <AuthGuard>
                                {children}
                            </AuthGuard>
                        </Suspense>
                    </div>
                </AuthProvider>
            </body>
        </html>
    );
}
