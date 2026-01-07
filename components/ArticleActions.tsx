"use client";

import React, { useEffect, useState } from "react";
import { Heart, Bookmark } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { useAuth } from "@/components/providers/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";
import {
    likePost,
    unlikePost,
    addFavorite,
    removeFavorite,
} from "@/services/DataService";
import { FiFacebook, FiLinkedin, FiX } from "react-icons/fi";
import { handleSocialShare } from "@/helpers/utils";

interface ArticleActionsProps {
    postId: string;
    initialLikes: any[];
    initialFavorites: any[];
}

const ArticleActions: React.FC<ArticleActionsProps> = ({
    postId,
    initialLikes = [],
    initialFavorites = [],
}) => {
    const { user, isAuthenticated } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    const [likes, setLikes] = useState<any[]>(initialLikes);
    const [favorites, setFavorites] = useState<any[]>(initialFavorites);
    const [isLiked, setIsLiked] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);
    const [loading, setLoading] = useState(false);
    const [baseUrl, setBaseUrl] = useState("");

    useEffect(() => {
        setBaseUrl(window.location.origin);
        if (user) {
            setIsLiked(likes.some(l => l.id === user.id));
            setIsFavorited(favorites.some(f => f.id === user.id));
        }
    }, [user, likes, favorites]);

    const handleAuthRedirect = () => {
        toast.error("Veuillez vous connecter pour continuer");
        router.push(`/auth/login?callbackUrl=${encodeURIComponent(pathname)}`);
    };

    const handleLike = async () => {
        if (!isAuthenticated) return handleAuthRedirect();

        setLoading(true);
        try {
            if (isLiked) {
                await unlikePost(postId);
                setLikes(likes.filter(l => l.id !== user.id));
                setIsLiked(false);
            } else {
                await likePost(postId);
                setLikes([...likes, { id: user.id }]);
                setIsLiked(true);
            }
        } catch {
            toast.error("Erreur lors de l’action");
        } finally {
            setLoading(false);
        }
    };

    const handleFavorite = async () => {
        if (!isAuthenticated) return handleAuthRedirect();

        setLoading(true);
        try {
            if (isFavorited) {
                await removeFavorite(postId);
                setFavorites(favorites.filter(f => f.id !== user.id));
                setIsFavorited(false);
            } else {
                await addFavorite(postId);
                setFavorites([...favorites, { id: user.id }]);
                setIsFavorited(true);
            }
        } catch {
            toast.error("Erreur lors de l’action");
        } finally {
            setLoading(false);
        }
    };

    const shareUrl = `${baseUrl}${pathname}`;

    return (
        <div className="card border-0 shadow-sm rounded-4 my-5">
            <div className="card-body px-4 py-3">

                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">

                    {/* Actions */}
                    <div className="d-flex align-items-center" style={{
                        gap: "4px"
                    }}>

                        <button
                            onClick={handleLike}
                            disabled={loading}
                            className={`btn rounded-pill d-flex align-items-center bg-transparent p-0`}
                        >
                            <Heart
                                size={20}
                                fill={isLiked ? "blue" : "none"}
                                color={isLiked ? "blue" : "black"}
                            />
                            <span className={isLiked ? "fw-semibold" : "fw-semibold"} style={{
                                color: isLiked ? "blue" : "black",
                                fontSize: "16px",
                                padding: "0 4px"
                            }}>{likes.length}</span>
                        </button>

                        <button
                            onClick={handleFavorite}
                            disabled={loading}
                            className={`btn rounded-pill d-flex align-items-center gap-2 px-4 bg-transparent`}
                        >
                            <Bookmark
                                size={20}
                                fill={isFavorited ? "red" : "none"}
                                color={isFavorited ? "red" : "black"}
                            />
                            <span className={isFavorited ? "fw-semibold text-danger" : "fw-semibold"} style={{
                                fontSize: "16px",
                                padding: "0px 4px"
                            }}>
                                {" "}{favorites.length}
                            </span>
                        </button>
                    </div>

                    {/* Share */}
                    <div className="d-flex align-items-center gap-2">
                        <small className="text-muted text-uppercase fw-semibold me-2 pr-2">
                            Partager
                        </small>
                        <ul className="header-social-network">

                            <li className="list-inline-item">
                                <a
                                    href="#"
                                    className="social-icon fb text-xs-center"
                                    onClick={(e) => handleSocialShare(e, "facebook",shareUrl)}
                                    title="Facebook"
                                >
                                    <FiFacebook style={{ color: "#fff", fontSize: "16px" }} />
                                </a>

                            </li>
                            <li className="list-inline-item">
                                <a
                                    href="#"
                                    className="social-icon tw text-xs-center"
                                    onClick={(e) => handleSocialShare(e, "twitter",shareUrl)}
                                    title="X"
                                >
                                    <FiX style={{ color: "#fff", fontSize: "16px" }} />
                                </a>

                            </li>
                            <li className="list-inline-item">
                                <a
                                    href="#"
                                    className="social-icon in text-xs-center"
                                    onClick={(e) => handleSocialShare(e, "linkedin",shareUrl)}
                                    title="LinkedIn"
                                >
                                    <FiLinkedin style={{ color: "#fff", fontSize: "16px" }} />
                                </a>

                            </li>
                        </ul>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ArticleActions;
