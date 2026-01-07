"use client";

import DashboardLayout from "@/components/reader/DashboardLayout";
import { MessageSquare, Trash2, Heart, Edit2, X, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { ReaderService } from "@/services/ReaderService";
import { toast } from "sonner";
import Loader from "@/components/Loader";
import { updateComment } from "@/services/DataService";

export default function Comments() {
    const [comments, setComments] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editContent, setEditContent] = useState("");

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const data = await ReaderService.getComments(); // This returns comments
            console.log(data);
            setComments(data.data || []);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await ReaderService.removeComment(id);
            setComments(prev => prev.filter(c => c.id !== id));
            toast.success("Commentaire supprimé");
        } catch (error) {
            toast.error("Erreur lors de la suppression");
        }
    };

    const startEditing = (comment: any) => {
        setEditingId(comment.id);
        setEditContent(comment.content);
    };

    const cancelEditing = () => {
        setEditingId(null);
        setEditContent("");
    };

    const handleUpdate = async (id: string) => {
        if (!editContent.trim()) {
            return toast.error("Le commentaire ne peut pas être vide");
        }

        try {
            await updateComment(id, editContent);
            setComments(prev => prev.map(c =>
                c.id === id ? { ...c, content: editContent } : c
            ));
            toast.success("Commentaire modifié");
            cancelEditing();
        } catch (error) {
            toast.error("Erreur lors de la modification");
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
                        <MessageSquare size={28} className="text-[#4a90e2]" strokeWidth={2} />
                        <h2 className="text-2xl font-medium text-[#1c1e21]">Mes Commentaires</h2>
                    </div>
                    <p className="text-[#5a6378]">
                        {comments.length} commentaire{comments.length > 1 ? 's' : ''} publié{comments.length > 1 ? 's' : ''}
                    </p>
                </div>

                <div className="space-y-4">
                    {comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="glass-card p-6 rounded-[20px] hover:scale-[1.01] transition-all duration-300"
                            style={{
                                background: 'rgba(255,255,255,0.6)',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
                            }}
                        >
                            <div className="flex items-start justify-between gap-4 mb-3">
                                <div className="flex-1">
                                    <h3 className="text-sm font-medium text-[#4a90e2] mb-1">{comment.post?.title}</h3>
                                    {editingId === comment.id ? (
                                        <div className="space-y-3">
                                            <textarea
                                                value={editContent}
                                                onChange={(e) => setEditContent(e.target.value)}
                                                className="w-full px-4 py-3 rounded-[12px] border border-[rgba(74,144,226,0.2)] focus:border-[#4a90e2] focus:ring-2 focus:ring-[#4a90e2]/20 outline-none transition-all resize-none"
                                                rows={3}
                                            />
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => handleUpdate(comment.id)}
                                                    className="flex items-center gap-2 px-3 py-2 bg-[#4a90e2] text-white rounded-[12px] hover:bg-[#3a7bc8] transition-all text-sm"
                                                >
                                                    <Check size={16} />
                                                    Enregistrer
                                                </button>
                                                <button
                                                    onClick={cancelEditing}
                                                    className="flex items-center gap-2 px-3 py-2 bg-gray-100 text-gray-600 rounded-[12px] hover:bg-gray-200 transition-all text-sm"
                                                >
                                                    <X size={16} />
                                                    Annuler
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <p className="text-[#1c1e21]">{comment.content}</p>
                                    )}
                                </div>
                                {editingId !== comment.id && (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => startEditing(comment)}
                                            className="p-2 rounded-[12px] hover:bg-[#4a90e2]/10 text-[#4a90e2] transition-all"
                                        >
                                            <Edit2 size={20} strokeWidth={2} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(comment.id)}
                                            className="p-2 rounded-[12px] hover:bg-[#ff3b30]/10 text-[#ff3b30] transition-all"
                                        >
                                            <Trash2 size={20} strokeWidth={2} />
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center gap-4 text-sm text-[#8e8e93]">
                                <span>{new Date(comment.createdAt).toLocaleDateString('fr-FR')}</span>
                                {comment.likes > 0 && (
                                    <>
                                        <span>•</span>
                                        <span className="flex items-center gap-1">
                                            <Heart size={14} className="fill-current" />
                                            {comment.likes}
                                        </span>
                                    </>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </DashboardLayout>
    );
}
