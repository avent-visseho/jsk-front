"use client";

import DashboardLayout from "@/components/reader/DashboardLayout";
import { ListCheck, CheckCircle2, Clock, AlertCircle, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ReaderService } from "@/services/ReaderService";
import { toast } from "sonner";
import Loader from "@/components/Loader";

const statusConfig = {
    pending: {
        label: "En attente",
        icon: Clock,
        color: "#ffcc00",
        bgColor: "rgba(255,204,0,0.1)",
    },
    "in-progress": {
        label: "En cours",
        icon: AlertCircle,
        color: "#4a90e2",
        bgColor: "rgba(74,144,226,0.1)",
    },
    completed: {
        label: "Terminée",
        icon: CheckCircle2,
        color: "#34c759",
        bgColor: "rgba(52,199,89,0.1)",
    },
};

export default function Recommendations() {
    const [recommendations, setRecommendations] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ subject: "", content: "", category: "Général" });

    useEffect(() => {
        fetchRecommendations();
    }, []);

    const fetchRecommendations = async () => {
        try {
            const data = await ReaderService.getRecommendations();
            setRecommendations(data || []);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await ReaderService.addRecommendation(formData);
            toast.success("Recommandation envoyée !");
            setIsModalOpen(false);
            setFormData({ subject: "", content: "", category: "Général" });
            fetchRecommendations();
        } catch (error) {
            toast.error("Erreur lors de l'envoi");
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
                    <div className="flex items-center justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                            <ListCheck size={28} className="text-[#4a90e2]" strokeWidth={2} />
                            <h2 className="text-2xl font-medium text-[#1c1e21]">Mes Recommandations</h2>
                        </div>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-[#4a90e2] text-white rounded-[12px] hover:bg-[#3a7bc8] transition-all shadow-[0_4px_12px_rgba(74,144,226,0.2)]"
                        >
                            <Plus size={20} />
                            <span className="hidden sm:inline">Recommander</span>
                        </button>
                    </div>
                    <p className="text-[#5a6378]">
                        Vos suggestions pour améliorer le blog
                    </p>
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                        <div className="glass-card w-full max-w-lg p-8 rounded-[24px] bg-white animate-in zoom-in-95 duration-200">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-[#1c1e21]">Nouvelle recommandation</h3>
                                <button onClick={() => setIsModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <X size={20} />
                                </button>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#1c1e21] mb-2">Sujet</label>
                                    <input
                                        required
                                        type="text"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 py-3 rounded-[12px] border border-[rgba(74,144,226,0.2)] focus:border-[#4a90e2] focus:ring-2 focus:ring-[#4a90e2]/20 outline-none transition-all"
                                        placeholder="Ex: Mode sombre"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#1c1e21] mb-2">Catégorie</label>
                                    <select
                                        value={formData.category}
                                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                        className="w-full px-4 py-3 rounded-[12px] border border-[rgba(74,144,226,0.2)] focus:border-[#4a90e2] focus:ring-2 focus:ring-[#4a90e2]/20 outline-none transition-all"
                                    >
                                        <option value="Interface">Interface</option>
                                        <option value="Fonctionnalité">Fonctionnalité</option>
                                        <option value="Contenu">Contenu</option>
                                        <option value="Autre">Autre</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#1c1e21] mb-2">Description</label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.content}
                                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                                        className="w-full px-4 py-3 rounded-[12px] border border-[rgba(74,144,226,0.2)] focus:border-[#4a90e2] focus:ring-2 focus:ring-[#4a90e2]/20 outline-none transition-all resize-none"
                                        placeholder="Décrivez votre suggestion ici..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 bg-[#4a90e2] text-white rounded-[12px] font-bold hover:bg-[#3a7bc8] transition-all"
                                >
                                    Envoyer la recommandation
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                <div className="space-y-4">
                    {recommendations.map((rec) => {
                        const status = statusConfig[rec.status as keyof typeof statusConfig];
                        const StatusIcon = status.icon;

                        return (
                            <div
                                key={rec.id}
                                className="glass-card p-6 rounded-[20px] hover:scale-[1.01] transition-all duration-300"
                                style={{
                                    background: 'rgba(255,255,255,0.6)',
                                    backdropFilter: 'blur(12px)',
                                    WebkitBackdropFilter: 'blur(12px)',
                                    boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
                                }}
                            >
                                <div className="flex items-start justify-between gap-4 mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-[rgba(74,144,226,0.1)] text-[#4a90e2]">
                                            {rec.category || "Général"}
                                        </span>
                                        <span className="text-xs text-[#8e8e93]">
                                            {new Date(rec.createdAt).toLocaleDateString('fr-FR')}
                                        </span>
                                    </div>
                                    <div
                                        className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                                        style={{
                                            backgroundColor: status.bgColor,
                                            color: status.color,
                                        }}
                                    >
                                        <StatusIcon size={14} strokeWidth={2} />
                                        {status.label}
                                    </div>
                                </div>
                                <h3 className="text-lg font-medium text-[#1c1e21] mb-2">{rec.subject}</h3>
                                <p className="text-sm text-[#5a6378]">{rec.content}</p>

                            </div>
                        );
                    })}
                </div>
            </div>
        </DashboardLayout>
    );
}
