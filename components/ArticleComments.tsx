"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/components/providers/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";
import { getCommentsByPost, postComment, updateComment, deleteComment } from "@/services/DataService";
import { formatPublishedDate, formatPublishedTime } from "@/helpers/utils";
import Loader from "./Loader";
import { Edit2, Trash2, X, Check } from "lucide-react";

interface ArticleCommentsProps {
    postId: string;
}

//l'intail doit etre MB ou MCB max 3 lettre
const getInitial = (name?: string) => {
    if (!name) return "?";

    return name
        .trim()
        .split(/\s+/)              // découpe par espaces
        .slice(0, 3)               // max 3 mots
        .map(word => word[0])      // première lettre de chaque mot
        .join("")
        .toUpperCase();
};


const ArticleComments: React.FC<ArticleCommentsProps> = ({ postId }) => {
    const { user, isAuthenticated } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    const [comments, setComments] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [posting, setPosting] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
    const [editingContent, setEditingContent] = useState("");
    const [actionLoading, setActionLoading] = useState<string | null>(null);

    useEffect(() => {
        fetchComments();
    }, [postId]);

    const fetchComments = async () => {
        setLoading(true);
        try {
            const res = await getCommentsByPost(postId);
            setComments(res.data.data || []);
        } catch {
            toast.error("Impossible de charger les commentaires");
        } finally {
            setLoading(false);
        }
    };

    const handleAuthRedirect = () => {
        toast.error("Veuillez vous connecter pour commenter");
        router.push(`/auth/login?callbackUrl=${encodeURIComponent(pathname)}`);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!isAuthenticated) {
            handleAuthRedirect();
            return;
        }

        if (!newComment.trim()) return;

        setPosting(true);
        try {
            await postComment({ postId, content: newComment });
            setNewComment("");
            toast.success("Commentaire publié");
            fetchComments();
        } catch {
            toast.error("Erreur lors de la publication");
        } finally {
            setPosting(false);
        }
    };

    const handleDelete = async (commentId: string) => {
        if (!confirm("Voulez-vous vraiment supprimer ce commentaire ?")) return;

        setActionLoading(commentId);
        try {
            await deleteComment(commentId);
            toast.success("Commentaire supprimé");
            fetchComments();
        } catch {
            toast.error("Erreur lors de la suppression");
        } finally {
            setActionLoading(null);
        }
    };

    const startEditing = (comment: any) => {
        setEditingCommentId(comment.id);
        setEditingContent(comment.content);
    };

    const cancelEditing = () => {
        setEditingCommentId(null);
        setEditingContent("");
    };

    const handleUpdate = async (commentId: string) => {
        if (!editingContent.trim()) return;

        setActionLoading(commentId);
        try {
            await updateComment(commentId, editingContent);
            toast.success("Commentaire mis à jour");
            setEditingCommentId(null);
            fetchComments();
        } catch {
            toast.error("Erreur lors de la modification");
        } finally {
            setActionLoading(null);
        }
    };

    return (
        <section className="mt-5 pt-5 border-top">

            {/* Header */}
            <div className="mt-4 d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold mb-0">
                    Commentaires
                    <span className="text-muted fw-normal ms-2">
                        ({comments.length})
                    </span>
                </h4>
            </div>

            {/* Form */}
            {isAuthenticated ? (
                <form onSubmit={handleSubmit} className="mb-5">
                    <div className="card border-0 shadow-sm rounded-4">
                        <div className="card-body p-4">

                            <textarea
                                className="form-control border-0 shadow-none fs-6"
                                rows={4}
                                placeholder="Écrivez votre commentaire…"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                disabled={posting}
                            />

                            <hr className="my-4" />

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center gap-3">

                                    {/* Initiale */}
                                    <div
                                        className="rounded-circle bg-light d-flex align-items-center justify-content-center fw-bold text-primary mr-3"
                                        style={{ width: 40, height: 40 }}
                                    >
                                        {getInitial(user?.fullName || user?.email)}
                                    </div>

                                    <small className="text-muted fw-medium">
                                        {user?.fullName || user?.email}
                                    </small>
                                </div>

                                <button
                                    type="submit"
                                    disabled={posting || !newComment.trim()}
                                    className="btn btn-primary px-4 rounded-pill d-flex align-items-center gap-2"
                                >
                                    {posting ? <Loader /> : "Publier"}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            ) : (
                <div className="card border-0 shadow-sm rounded-4 mb-5 bg-light">
                    <div className="card-body p-5 text-center">
                        <h5 className="fw-bold mb-3">Rejoignez la discussion</h5>
                        <p className="text-muted mb-4">
                            Connectez-vous pour partager votre avis sur cet article.
                        </p>
                        <button
                            onClick={handleAuthRedirect}
                            className="btn btn-primary px-5 rounded-pill fw-semibold"
                        >
                            Se connecter pour commenter
                        </button>
                    </div>
                </div>
            )}

            {/* Comments */}
            {loading ? (
                <div className="text-center py-5">
                    <Loader />
                </div>
            ) : comments.length === 0 ? (
                <div className="text-center py-5 bg-light rounded-4">
                    <p className="text-muted mb-0">
                        Aucun commentaire pour le moment.
                    </p>
                </div>
            ) : (
                <div className="d-flex flex-column gap-4">
                    {comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="card border-0 shadow-sm rounded-4"
                        >
                            <div className="card-body p-4 d-flex gap-3">

                                {/* Initiale */}
                                <div
                                    className="mr-3 rounded-circle bg-primary bg-opacity-10 text-white fw-bold d-flex align-items-center justify-content-center flex-shrink-0"
                                    style={{ width: 48, height: 48 }}
                                >
                                    {getInitial(comment.user?.fullName || comment.user?.email)}
                                </div>

                                <div className="flex-grow-1">
                                    <div className="d-flex justify-content-between align-items-center mb-1">
                                        <span className="fw-semibold">
                                            {comment.user?.fullName || comment.user?.email}
                                        </span>
                                        <div className="d-flex align-items-center gap-2">
                                            <small className="text-muted">
                                                {formatPublishedDate(comment.createdAt) + " à " + formatPublishedTime(comment.createdAt)}
                                            </small>

                                            {isAuthenticated && user?.id === comment.user?.id && (
                                                <div className="d-flex gap-1 ml-2">
                                                    {editingCommentId === comment.id ? (
                                                        <>
                                                            <button
                                                                onClick={() => handleUpdate(comment.id)}
                                                                className="btn btn-sm btn-link text-success p-0"
                                                                title="Valider"
                                                                disabled={actionLoading === comment.id}
                                                            >
                                                                <Check size={16} />
                                                            </button>
                                                            <button
                                                                onClick={cancelEditing}
                                                                className="btn btn-sm btn-link text-muted p-0"
                                                                title="Annuler"
                                                                disabled={actionLoading === comment.id}
                                                            >
                                                                <X size={16} />
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <button
                                                                onClick={() => startEditing(comment)}
                                                                className="btn btn-sm btn-link text-primary p-0"
                                                                title="Modifier"
                                                            >
                                                                <Edit2 size={14} />
                                                            </button>
                                                            <button
                                                                onClick={() => handleDelete(comment.id)}
                                                                className="btn btn-sm btn-link text-danger p-0"
                                                                title="Supprimer"
                                                                disabled={actionLoading === comment.id}
                                                            >
                                                                <Trash2 size={14} />
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {editingCommentId === comment.id ? (
                                        <textarea
                                            className="form-control form-control-sm border shadow-none mt-2"
                                            rows={3}
                                            value={editingContent}
                                            onChange={(e) => setEditingContent(e.target.value)}
                                            autoFocus
                                        />
                                    ) : (
                                        <p className="mb-0 text-secondary">
                                            {comment.content}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default ArticleComments;
