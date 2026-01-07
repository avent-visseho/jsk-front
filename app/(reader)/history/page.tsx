"use client";

import DashboardLayout from "@/components/reader/DashboardLayout";
import { Clock, MessageSquare, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { ReaderService } from "@/services/ReaderService";
import Loader from "@/components/Loader";

export default function History() {
    const [activity, setActivity] = useState<{ likes: any[], comments: any[], reads: any[] }>({ likes: [], comments: [], reads: [] });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const [basicHistory, readHistory] = await Promise.all([
                    ReaderService.getHistory(),
                    ReaderService.getReadHistory()
                ]);
                setActivity({
                    ...basicHistory,
                    reads: readHistory.data || []
                });
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchHistory();
    }, []);

    if (isLoading) return <Loader />;

    const allActivities = [
        ...activity.likes.map(l => ({ ...l, type: 'like' })),
        ...activity.comments.map(c => ({ ...c, type: 'comment' })),
        ...activity.reads.map(r => ({ ...r, type: 'read' }))
    ].sort((a, b) => new Date(b.createdAt || b.lastRead).getTime() - new Date(a.createdAt || a.lastRead).getTime());

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div className="glass-card p-6 sm:p-8 rounded-[24px]" style={{
                    background: 'rgba(255,255,255,0.45)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 32px rgba(31,38,135,0.08), inset 0 0 0 1px rgba(255,255,255,0.18)',
                }}>
                    <div className="flex items-center gap-3 mb-2">
                        <Clock size={28} className="text-[#4a90e2]" strokeWidth={2} />
                        <h2 className="text-2xl font-medium text-[#1c1e21]">Historique de lecture</h2>
                    </div>
                    <p className="text-[#5a6378]">
                        Vos activités récentes et consultations du mois en cours
                    </p>
                </div>

                <div className="space-y-4">
                    {allActivities.map((item: any, index: number) => (
                        <div
                            key={index}
                            className="glass-card p-6 rounded-[20px] hover:scale-[1.01] transition-all duration-300"
                            style={{
                                background: 'rgba(255,255,255,0.6)',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
                            }}
                        >
                            <div className="flex items-start gap-4">
                                <div className={`p-3 rounded-[12px] ${item.type === 'like' ? 'bg-red-50 text-red-500' : item.type === 'comment' ? 'bg-blue-50 text-blue-500' : 'bg-green-50 text-green-500'}`}>
                                    {item.type === 'like' ? <Heart size={20} /> : item.type === 'comment' ? <MessageSquare size={20} /> : <Clock size={20} />}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-4 mb-1">
                                        <h3 className="text-lg font-medium text-[#1c1e21] truncate">
                                            {item.type === 'like' ? 'Vous avez aimé cet article' : item.type === 'comment' ? 'Vous avez commenté' : 'Vous avez lu cet article'}
                                        </h3>
                                        <span className="text-xs text-[#8e8e93] whitespace-nowrap">
                                            {new Date(item.createdAt || item.lastRead).toLocaleDateString('fr-FR')}
                                        </span>
                                    </div>
                                    <p className="text-[#4a90e2] font-medium mb-2 truncate">
                                        {item.type === 'read' ? item.title : (item.type === 'like' ? item.title : item.post?.title)}
                                    </p>
                                    {item.type === 'read' && (
                                        <div className="text-sm text-[#5a6378]">
                                            Consulté <span className="font-bold text-[#10243f]">{item.readFrequency}</span> fois ce mois-ci
                                        </div>
                                    )}
                                    {item.type === 'comment' && (
                                        <div className="p-3 bg-white/40 rounded-[12px] text-sm text-[#5a6378] italic">
                                            "{item.content}"
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </DashboardLayout>
    );
}
