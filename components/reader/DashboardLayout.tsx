"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Bell, LayoutDashboard, ListCheck, Heart, Clock, History, MessageSquare, Settings, Menu, X, LogOut, User, UserCircle, Home } from "lucide-react";
import { useState, useEffect } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { useAuth } from "@/components/providers/AuthContext";
import Logo from "@/assets/imgs/jed/blogs/logo.png";
import Image from "next/image";

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const menuItems = [
    { path: "/dashboard", label: "Tableau de bord", icon: LayoutDashboard },
    { path: "/recommendations", label: "Mes Recommandations", icon: ListCheck },
    { path: "/favorites", label: "Mes Favoris", icon: Heart },
    { path: "/comments", label: "Mes Commentaires", icon: MessageSquare },
    { path: "/history", label: "Mon historique", icon: History },
    { path: "/settings/notifications", label: "Paramètres", icon: Settings },
    //return to blog
    { path: "/", label: "Retour au blog", icon: Home },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    const pathname = usePathname();
    const router = useRouter();
    const { logout, user } = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [unreadCount] = useState(0);

    const handleLogout = () => {
        logout();
    };

    useEffect(() => {
        // Redirection logic is handled by ReaderGuard, so we don't need redundant checks here
    }, [pathname, router]);

    return (
        <div className="min-h-screen flex">
            {/* Sidebar - Desktop */}
            <aside className="hidden lg:flex flex-col w-[260px] fixed left-0 top-0 h-full p-6 glass-card border-r border-[rgba(74,144,226,0.1)]" style={{
                background: 'rgba(255,255,255,0.8)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
            }}>
                {/* Logo */}
                <div className="mb-8 px-4">
                    <Link href="/">
                        <Image src={Logo} alt="JSK Logo" className="h-8 w-auto mb-1" />
                    </Link>
                    <p className="text-xs text-[#8e8e93] font-medium tracking-wide uppercase px-1">Espace Lecteur</p>
                </div>

                {/* Menu */}
                <nav className="flex-1 space-y-2">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.path;

                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`flex items-center gap-3 px-4 py-3 rounded-[16px] transition-all duration-300 ${isActive
                                    ? 'bg-[#4a90e2] text-white shadow-[0_4px_16px_rgba(74,144,226,0.25)]'
                                    : 'text-[#5a6378] hover:bg-white/60 hover:text-[#4a90e2]'
                                    }`}
                            >
                                <Icon size={20} strokeWidth={2} />
                                <span className="text-sm font-medium">{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Logout */}
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-3 rounded-[16px] text-[#ff3b30] hover:bg-[#ff3b30]/10 transition-all duration-300 mt-4"
                >
                    <LogOut size={20} strokeWidth={2} />
                    <span className="text-sm font-medium">Déconnexion</span>
                </button>
            </aside>

            {/* Main Content */}
            <div className="flex-1 lg:ml-[240px]">
                {/* Header */}
                <header className="sticky top-0 z-10 h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between glass-card border-b border-[rgba(74,144,226,0.1)]" style={{
                    background: 'rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                }}>
                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2 rounded-[12px] hover:bg-white/60 text-[#5a6378] transition-all duration-300"
                    >
                        {isMobileMenuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
                    </button>

                    {/* Title - Hidden on mobile when menu is open */}
                    <h1 className={`text-lg font-medium text-[#1c1e21] ${isMobileMenuOpen ? 'hidden' : 'block'} lg:block`}>
                        {menuItems.find(item => item.path === pathname)?.label || 'Tableau de bord'}
                    </h1>

                    {/* Right side */}
                    <div className="flex items-center gap-4">
                        {/* Notifications */}
                        <button className="relative p-2 rounded-[12px] hover:bg-white/60 text-[#5a6378] transition-all duration-300">
                            <Bell size={20} strokeWidth={2} />
                            {unreadCount > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#ff3b30] text-white text-xs flex items-center justify-center font-medium">
                                    {unreadCount}
                                </span>
                            )}
                        </button>

                        {/* User Avatar with Dropdown */}
                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger asChild>
                                <button className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4a90e2] to-[#a0c4ff] flex items-center justify-center text-white text-sm font-bold shadow-[0_4px_16px_rgba(74,144,226,0.25)] hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-[#4a90e2]/50">
                                    {user?.fullName ? user.fullName.split(' ').map((n: string) => n[0]).join('').toUpperCase() : <User size={20} strokeWidth={2} />}
                                </button>
                            </DropdownMenu.Trigger>

                            <DropdownMenu.Portal>
                                <DropdownMenu.Content
                                    className="glass-card min-w-[200px] p-2 rounded-[16px] shadow-lg"
                                    style={{
                                        background: 'rgba(255,255,255,0.95)',
                                        backdropFilter: 'blur(12px)',
                                        WebkitBackdropFilter: 'blur(12px)',
                                        boxShadow: '0 8px 32px rgba(31,38,135,0.15)',
                                    }}
                                    sideOffset={5}
                                    align="end"
                                >
                                    <DropdownMenu.Item asChild>
                                        <Link
                                            href="/profile"
                                            className="flex items-center gap-3 px-4 py-3 rounded-[12px] text-[#1c1e21] hover:bg-white/60 transition-all duration-300 outline-none cursor-pointer"
                                        >
                                            <UserCircle size={18} strokeWidth={2} />
                                            <span className="text-sm font-medium">Mon profil</span>
                                        </Link>
                                    </DropdownMenu.Item>

                                    <DropdownMenu.Separator className="h-px bg-[rgba(74,144,226,0.1)] my-1" />

                                    <DropdownMenu.Item asChild>
                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center gap-3 px-4 py-3 rounded-[12px] text-[#ff3b30] hover:bg-[#ff3b30]/10 transition-all duration-300 outline-none cursor-pointer w-full"
                                        >
                                            <LogOut size={18} strokeWidth={2} />
                                            <span className="text-sm font-medium">Déconnexion</span>
                                        </button>
                                    </DropdownMenu.Item>
                                </DropdownMenu.Content>
                            </DropdownMenu.Portal>
                        </DropdownMenu.Root>
                    </div>
                </header>

                {/* Mobile Sidebar */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden fixed inset-0 z-20 bg-black/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
                        <aside className="w-[280px] h-full p-6 glass-card" style={{
                            background: 'rgba(255,255,255,0.95)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                        }} onClick={(e) => e.stopPropagation()}>
                            <div className="mb-8 flex items-center justify-between">
                                <div>
                                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                                        <Image src={Logo} alt="JSK Logo" className="h-8 w-auto mb-1" />
                                    </Link>
                                    <p className="text-xs text-[#8e8e93] font-medium tracking-wide uppercase px-1">Espace Lecteur</p>
                                </div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 rounded-[12px] hover:bg-white/60 text-[#5a6378]"
                                >
                                    <X size={20} strokeWidth={2} />
                                </button>
                            </div>

                            <nav className="space-y-2">
                                {menuItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = pathname === item.path;

                                    return (
                                        <Link
                                            key={item.path}
                                            href={item.path}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-[16px] transition-all duration-300 ${isActive
                                                ? 'bg-[#4a90e2] text-white shadow-[0_4px_16px_rgba(74,144,226,0.25)]'
                                                : 'text-[#5a6378] hover:bg-white/60 hover:text-[#4a90e2]'
                                                }`}
                                        >
                                            <Icon size={20} strokeWidth={2} />
                                            <span className="text-sm font-medium">{item.label}</span>
                                        </Link>
                                    );
                                })}
                            </nav>

                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    handleLogout();
                                }}
                                className="flex items-center gap-3 px-4 py-3 rounded-[16px] text-[#ff3b30] hover:bg-[#ff3b30]/10 transition-all duration-300 mt-6 w-full"
                            >
                                <LogOut size={20} strokeWidth={2} />
                                <span className="text-sm font-medium">Déconnexion</span>
                            </button>
                        </aside>
                    </div>
                )}

                {/* Page Content */}
                <main className="p-4 sm:p-6 lg:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
