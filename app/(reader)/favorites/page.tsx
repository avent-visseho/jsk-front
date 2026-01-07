"use client";

import DashboardLayout from "@/components/reader/DashboardLayout";
import { Heart, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { ReaderService } from "@/services/ReaderService";
import { toast } from "sonner";
import Loader from "@/components/Loader";
import Link from "next/link";
import { slugify } from "@/helpers/utils";

export default function Favorites() {
    const [favorites, setFavorites] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchFavorites = async () => {
            try {
                const data = await ReaderService.getFavorites();
                setFavorites(data.data || []);
            } catch (error) {
                console.error(error);
                toast.error("Erreur lors du chargement des favoris");
            } finally {
                setIsLoading(false);
            }
        };
        fetchFavorites();
    }, []);

    const handleRemove = async (postId: string) => {
        try {
            await ReaderService.removeFavorite(postId);
            setFavorites(prev => prev.filter(p => p.id !== postId));
            toast.success("Retiré des favoris");
        } catch (error) {
            toast.error("Erreur lors de la suppression");
        }
    };

    if (isLoading) return <Loader />;

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
                        <Heart size={28} className="text-[#ff3b30]" strokeWidth={2} />
                        <h2 className="text-2xl font-medium text-[#1c1e21]">Mes Favoris</h2>
                    </div>
                    <p className="text-[#5a6378]">
                        {favorites.length} article{favorites.length > 1 ? 's' : ''} sauvegardé{favorites.length > 1 ? 's' : ''}
                    </p>
                </div>

                <div className="space-y-4">
                    {favorites.map((article) => (
                        <Link
                            key={article.id}
                            href={`/blog/article/${slugify(article.title)}/${article.id}`}
                            className="block glass-card p-6 rounded-[20px] hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                            style={{
                                background: 'rgba(255,255,255,0.6)',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
                            }}
                            target="_blank"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-[rgba(74,144,226,0.1)] text-[#4a90e2]">
                                            {article.categories?.[0]?.name || "Général"}
                                        </span>
                                        <span className="text-xs text-[#8e8e93]">
                                            {new Date(article.createdAt).toLocaleDateString('fr-FR')}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-medium text-[#1c1e21] mb-2">{article.title}</h3>
                                    <p className="text-sm text-[#5a6378] line-clamp-2">
                                        {article.content.replace(/<[^>]*>?/gm, '').substring(0, 150)}...
                                    </p>
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleRemove(article.id);
                                    }}
                                    className="p-2 rounded-[12px] hover:bg-[#ff3b30]/10 text-[#ff3b30] transition-all"
                                >
                                    <Trash2 size={20} strokeWidth={2} />
                                </button>

                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
