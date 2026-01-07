import type { Metadata } from "next";
import localFont from "next/font/local";
import "./reader.css";
import { Toaster } from "@/components/reader/ui/sonner";
import { Suspense } from "react";

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
    title: "Espace Lecteur - JSK Opinions",
    description: "Votre espace personnel sur JSK Opinions",
};

import { AuthProvider } from "@/components/providers/AuthContext";
import ReaderGuard from "@/components/reader/ReaderGuard";

export default function ReaderRootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <AuthProvider>
                    <Suspense fallback={null}>
                        <ReaderGuard>
                            <Toaster position="top-right" richColors />
                            {children}
                        </ReaderGuard>
                    </Suspense>
                </AuthProvider>
            </body>
        </html>
    );
}
