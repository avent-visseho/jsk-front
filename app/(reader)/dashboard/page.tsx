"use client";

import DashboardLayout from "@/components/reader/DashboardLayout";
import { ListCheck, Heart, Bell, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "@/components/providers/AuthContext";
import { ReaderService } from "@/services/ReaderService";
import Loader from "@/components/Loader";

export default function Dashboard() {
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [stats, setStats] = useState<any[]>([]);
    const [recentActivity, setRecentActivity] = useState<any[]>([]);

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                const [userData, history, favorites, recommendations] = await Promise.all([
                    ReaderService.getProfile(),
                    ReaderService.getHistory(),
                    ReaderService.getFavorites(),
                    ReaderService.getRecommendations()
                ]);

                setStats([
                    {
                        title: 'Recommandations',
                        value: recommendations?.length || 0,
                        change: 'Vos suggestions',
                        icon: ListCheck,
                        color: '#4a90e2',
                        bgColor: 'rgba(74,144,226,0.1)'
                    },
                    {
                        title: 'Favoris',
                        value: favorites.data?.length || 0,
                        change: 'Articles sauvegardés',
                        icon: Heart,
                        color: '#ff3b30',
                        bgColor: 'rgba(255,59,48,0.1)'
                    },
                    {
                        title: 'Commentaires',
                        value: history.comments?.length || 0,
                        change: 'Vos interventions',
                        icon: Bell,
                        color: '#ffcc00',
                        bgColor: 'rgba(255,204,0,0.1)'
                    },
                    {
                        title: 'Articles lus',
                        value: userData.readCount || 0,
                        change: 'Votre progression',
                        icon: TrendingUp,
                        color: '#34c759',
                        bgColor: 'rgba(52,199,89,0.1)'
                    },
                ]);

                const combined = [
                    ...history.likes.map((l: any) => ({ id: `l-${l.id}`, title: `Vous avez aimé "${l.title}"`, createdAt: l.createdAt, type: 'favorite' })),
                    ...history.comments.map((c: any) => ({ id: `c-${c.id}`, title: `Commentaire sur "${c.post?.title}"`, createdAt: c.createdAt, type: 'comment' })),
                    ...(recommendations || []).map((r: any) => ({ id: `r-${r.id}`, title: `Recommandation : ${r.subject}`, createdAt: r.createdAt, type: 'recommendation' }))
                ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 5);

                setRecentActivity(combined);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchDashboardData();
    }, []);

    const getTimeAgo = (date: string) => {
        const now = new Date();
        const past = new Date(date);
        const diffInMs = now.getTime() - past.getTime();
        const diffInMins = Math.floor(diffInMs / (1000 * 60));
        const diffInHours = Math.floor(diffInMins / 60);
        const diffInDays = Math.floor(diffInHours / 24);

        if (diffInDays > 0) return `Il y a ${diffInDays} jour${diffInDays > 1 ? 's' : ''}`;
        if (diffInHours > 0) return `Il y a ${diffInHours} heure${diffInHours > 1 ? 's' : ''}`;
        if (diffInMins > 0) return `Il y a ${diffInMins} minute${diffInMins > 1 ? 's' : ''}`;
        return "À l'instant";
    };

    if (isLoading) return <Loader />;

    return (
        <DashboardLayout>
            <div className="space-y-6">
                {/* Welcome Section */}
                <div className="glass-card p-6 sm:p-8 rounded-[24px]" style={{
                    background: 'rgba(255,255,255,0.45)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 32px rgba(31,38,135,0.08), inset 0 0 0 1px rgba(255,255,255,0.18)',
                }}>
                    <h2 className="text-2xl font-medium text-[#1c1e21] mb-2">Bienvenue sur votre espace JSK, {user?.fullName?.split(' ')[0]} ! 👋</h2>
                    <p className="text-[#5a6378]">
                        Voici un aperçu de votre activité récente sur le blog.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={index}
                                className="glass-card p-6 rounded-[20px] hover:scale-[1.02] transition-all duration-300"
                                style={{
                                    background: 'rgba(255,255,255,0.6)',
                                    backdropFilter: 'blur(12px)',
                                    WebkitBackdropFilter: 'blur(12px)',
                                    boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
                                }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div
                                        className="w-12 h-12 rounded-[16px] flex items-center justify-center"
                                        style={{
                                            backgroundColor: stat.bgColor,
                                            color: stat.color
                                        }}
                                    >
                                        <Icon size={24} strokeWidth={2} />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-3xl font-medium text-[#1c1e21] mb-1">{stat.value}</div>
                                    <div className="text-sm text-[#5a6378] mb-2">{stat.title}</div>
                                    <div className="text-xs text-[#8e8e93]">{stat.change}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Recent Activity */}
                <div className="glass-card p-6 sm:p-8 rounded-[24px]" style={{
                    background: 'rgba(255,255,255,0.45)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 32px rgba(31,38,135,0.08), inset 0 0 0 1px rgba(255,255,255,0.18)',
                }}>
                    <h3 className="text-xl font-medium text-[#1c1e21] mb-6">Activité récente</h3>

                    <div className="space-y-4">
                        {recentActivity.map((activity) => {
                            const typeColors: Record<string, { dot: string; bg: string }> = {
                                comment: { dot: '#4a90e2', bg: 'rgba(74,144,226,0.1)' },
                                favorite: { dot: '#ff3b30', bg: 'rgba(255,59,48,0.1)' },
                                recommendation: { dot: '#ffcc00', bg: 'rgba(255,204,0,0.1)' },
                                read: { dot: '#34c759', bg: 'rgba(52,199,89,0.1)' },
                            };

                            const colors = typeColors[activity.type] || typeColors.read;

                            return (
                                <div
                                    key={activity.id}
                                    className="flex items-start gap-4 p-4 rounded-[16px] hover:bg-white/40 transition-all duration-300"
                                >
                                    <div
                                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                        style={{ backgroundColor: colors.dot }}
                                    ></div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-[#1c1e21] font-medium truncate">{activity.title}</p>
                                        <p className="text-sm text-[#8e8e93] mt-1">{getTimeAgo(activity.createdAt)}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


                {/* Quick Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <button className="glass-card p-6 rounded-[20px] text-left hover:scale-[1.02] transition-all duration-300 group" style={{
                        background: 'rgba(255,255,255,0.6)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
                    }}>
                        <div className="w-12 h-12 rounded-[16px] bg-[rgba(74,144,226,0.1)] text-[#4a90e2] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <ListCheck size={24} strokeWidth={2} />
                        </div>
                        <h4 className="text-lg font-medium text-[#1c1e21] mb-2">Nouvelle recommandation</h4>
                        <p className="text-sm text-[#5a6378]">Partagez vos idées pour améliorer le blog</p>
                    </button>

                    <button className="glass-card p-6 rounded-[20px] text-left hover:scale-[1.02] transition-all duration-300 group" style={{
                        background: 'rgba(255,255,255,0.6)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
                    }}>
                        <div className="w-12 h-12 rounded-[16px] bg-[rgba(255,59,48,0.1)] text-[#ff3b30] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Heart size={24} strokeWidth={2} />
                        </div>
                        <h4 className="text-lg font-medium text-[#1c1e21] mb-2">Découvrir les articles</h4>
                        <p className="text-sm text-[#5a6378]">Explorez le contenu du blog</p>
                    </button>
                </div>
            </div>
        </DashboardLayout>
    );
}
