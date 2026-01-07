"use client";

import DashboardLayout from "@/components/reader/DashboardLayout";
import { User as UserIcon, Mail, Calendar, Edit2, Lock } from "lucide-react";
import { useEffect, useState } from "react";
import { ReaderService } from "@/services/ReaderService";
import { toast } from "sonner";
import Loader from "@/components/Loader";
import { useAuth } from "@/components/providers/AuthContext";

export default function ProfilePage() {
    const { updateUser } = useAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: "",
        email: "",
        bio: "",
        joinDate: "",
    });
    const [stats, setStats] = useState({
        readCount: 0,
        favoriteCount: 0,
        commentCount: 0,
        recommendationCount: 0
    });
    const [isEditingPassword, setIsEditingPassword] = useState(false);
    const [passwordData, setPasswordData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    const [isChangingEmail, setIsChangingEmail] = useState(false);
    const [newEmail, setNewEmail] = useState("");
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [otpCode, setOtpCode] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const [userData, history, favorites, recommendations] = await Promise.all([
                    ReaderService.getProfile(),
                    ReaderService.getHistory(),
                    ReaderService.getFavorites(),
                    ReaderService.getRecommendations()
                ]);

                setProfile({
                    name: userData.fullName || "",
                    email: userData.email || "",
                    bio: userData.bio || "",
                    joinDate: new Date(userData.createdAt).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' }),
                });

                setStats({
                    readCount: userData.readCount || 0,
                    favoriteCount: favorites.data?.length || 0,
                    commentCount: history.comments?.length || 0,
                    recommendationCount: recommendations?.length || 0
                });
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProfile();
    }, []);

    const handleSave = async () => {
        try {
            const res = await ReaderService.updateProfile({
                fullName: profile.name,
                email: profile.email,
                bio: profile.bio
            });

            // Refresh store
            if (res.user) {
                updateUser(res.user);
            }

            setIsEditing(false);
            toast.success("Profil mis à jour avec succès");
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Erreur lors de la mise à jour");
        }
    };

    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            return toast.error("Les mots de passe ne correspondent pas");
        }

        try {
            await ReaderService.changePassword({
                oldPassword: passwordData.oldPassword,
                newPassword: passwordData.newPassword
            });
            toast.success("Mot de passe modifié avec succès");
            setPasswordData({ oldPassword: "", newPassword: "", confirmPassword: "" });
            setIsEditingPassword(false);
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Erreur lors de la modification");
        }
    };

    const handleRequestEmailChange = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newEmail || newEmail === profile.email) {
            return toast.error("Veuillez saisir une nouvelle adresse e-mail");
        }

        try {
            await ReaderService.requestEmailChange({ newEmail });
            toast.success("Un code de vérification a été envoyé à votre nouvelle adresse e-mail");
            setShowOtpModal(true);
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Erreur lors de la demande");
        }
    };

    const handleConfirmEmailChange = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!otpCode || otpCode.length !== 6) {
            return toast.error("Veuillez saisir un code à 6 chiffres");
        }

        try {
            const res = await ReaderService.confirmEmailChange({ code: otpCode });
            toast.success("Votre adresse e-mail a été mise à jour avec succès");

            // Update store and local state
            if (res.user) {
                updateUser(res.user);
                setProfile({ ...profile, email: res.user.email });
            }

            // Reset states
            setShowOtpModal(false);
            setIsChangingEmail(false);
            setNewEmail("");
            setOtpCode("");
        } catch (error: any) {
            toast.error(error.response?.data?.message || "Code invalide");
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
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <UserIcon size={28} className="text-[#4a90e2]" strokeWidth={2} />
                            <h2 className="text-2xl font-medium text-[#1c1e21]">Mon Profil</h2>
                        </div>
                        <button
                            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-[#4a90e2] text-white rounded-[12px] hover:bg-[#3a7bc8] transition-all"
                        >
                            <Edit2 size={18} strokeWidth={2} />
                            {isEditing ? "Enregistrer" : "Modifier"}
                        </button>
                    </div>

                    <div className="flex items-center gap-6 mb-8">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#4a90e2] to-[#a0c4ff] flex items-center justify-center text-white text-3xl font-medium shadow-[0_4px_16px_rgba(74,144,226,0.25)]">
                            {profile.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-[#1c1e21] mb-1">{profile.name}</h3>
                            <p className="text-[#5a6378] flex items-center gap-2">
                                <Calendar size={16} />
                                Membre depuis {profile.joinDate}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-[#1c1e21] mb-2">
                                Nom complet
                            </label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={profile.name}
                                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-[12px] border border-[rgba(74,144,226,0.2)] focus:border-[#4a90e2] focus:ring-2 focus:ring-[#4a90e2]/20 outline-none transition-all"
                                />
                            ) : (
                                <div className="flex items-center gap-2 text-[#5a6378]">
                                    <UserIcon size={18} />
                                    {profile.name}
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#1c1e21] mb-2">
                                Email
                            </label>
                            {isEditing ? (
                                <input
                                    type="email"
                                    disabled
                                    value={profile.email}
                                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-[12px] border border-[rgba(74,144,226,0.2)] focus:border-[#4a90e2] focus:ring-2 focus:ring-[#4a90e2]/20 outline-none transition-all"
                                />
                            ) : (
                                <div className="flex items-center gap-2 text-[#5a6378]">
                                    <Mail size={18} />
                                    {profile.email}
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#1c1e21] mb-2">
                                Bio
                            </label>
                            {isEditing ? (
                                <textarea
                                    value={profile.bio}
                                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-[12px] border border-[rgba(74,144,226,0.2)] focus:border-[#4a90e2] focus:ring-2 focus:ring-[#4a90e2]/20 outline-none transition-all resize-none"
                                />
                            ) : (
                                <p className="text-[#5a6378]">{profile.bio}</p>
                            )}
                        </div>
                    </div>
                </div>

                <div className="glass-card p-6 rounded-[20px]" style={{
                    background: 'rgba(255,255,255,0.6)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
                }}>
                    <h3 className="text-lg font-medium text-[#1c1e21] mb-4">Statistiques</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        <div className="text-center">
                            <div className="text-2xl font-medium text-[#4a90e2] mb-1">{stats.readCount}</div>
                            <div className="text-sm text-[#5a6378]">Articles lus</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-medium text-[#ff3b30] mb-1">{stats.favoriteCount}</div>
                            <div className="text-sm text-[#5a6378]">Favoris</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-medium text-[#34c759] mb-1">{stats.commentCount}</div>
                            <div className="text-sm text-[#5a6378]">Commentaires</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-medium text-[#ffcc00] mb-1">{stats.recommendationCount}</div>
                            <div className="text-sm text-[#5a6378]">Recommandations</div>
                        </div>
                    </div>
                </div>

                <div className="glass-card p-6 sm:p-8 rounded-[24px]" style={{
                    background: 'rgba(255,255,255,0.45)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow: '0 8px 32px rgba(31,38,135,0.08), inset 0 0 0 1px rgba(255,255,255,0.18)',
                }}>
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <Lock size={24} className="text-[#4a90e2]" strokeWidth={2} />
                            <h2 className="text-xl font-medium text-[#1c1e21]">Sécurité</h2>
                        </div>
                    </div>

                    <div className="space-y-6 w-full">
                        {/* Password Change Section */}
                        <div className="border-b border-[rgba(74,144,226,0.1)] pb-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-base font-medium text-[#1c1e21]">Mot de passe</h3>
                                {!isEditingPassword && (
                                    <button
                                        onClick={() => setIsEditingPassword(true)}
                                        className="text-sm font-medium text-[#4a90e2] hover:underline"
                                    >
                                        Modifier
                                    </button>
                                )}
                            </div>
                            {isEditingPassword ? (
                                <form onSubmit={handleChangePassword} className="space-y-4 w-full">
                                    <div className="w-full">
                                        <label className="block text-sm font-medium text-[#1c1e21] mb-2">
                                            Mot de passe actuel
                                        </label>
                                        <input
                                            type="password"
                                            required
                                            value={passwordData.oldPassword}
                                            onChange={(e) => setPasswordData({ ...passwordData, oldPassword: e.target.value })}
                                            className="w-full px-4 py-3 rounded-[12px] border border-[rgba(74,144,226,0.2)] focus:border-[#4a90e2] focus:ring-2 focus:ring-[#4a90e2]/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#1c1e21] mb-2">
                                            Nouveau mot de passe
                                        </label>
                                        <input
                                            type="password"
                                            required
                                            value={passwordData.newPassword}
                                            onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                            className="w-full px-4 py-3 rounded-[12px] border border-[rgba(74,144,226,0.2)] focus:border-[#4a90e2] focus:ring-2 focus:ring-[#4a90e2]/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#1c1e21] mb-2">
                                            Confirmer le nouveau mot de passe
                                        </label>
                                        <input
                                            type="password"
                                            required
                                            value={passwordData.confirmPassword}
                                            onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                            className="w-full px-4 py-3 rounded-[12px] border border-[rgba(74,144,226,0.2)] focus:border-[#4a90e2] focus:ring-2 focus:ring-[#4a90e2]/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="flex gap-3 pt-2">
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-[#4a90e2] text-white rounded-[12px] hover:bg-[#3a7bc8] transition-all"
                                        >
                                            Valider
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setIsEditingPassword(false);
                                                setPasswordData({ oldPassword: "", newPassword: "", confirmPassword: "" });
                                            }}
                                            className="px-4 py-2 bg-gray-100 text-gray-600 rounded-[12px] hover:bg-gray-200 transition-all"
                                        >
                                            Annuler
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <p className="text-[#5a6378] text-sm">
                                    Gérez votre mot de passe pour assurer la sécurité de votre compte.
                                </p>
                            )}
                        </div>

                        {/* Email Change Section */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-base font-medium text-[#1c1e21]">Adresse e-mail</h3>
                                {!isChangingEmail && (
                                    <button
                                        onClick={() => setIsChangingEmail(true)}
                                        className="text-sm font-medium text-[#4a90e2] hover:underline"
                                    >
                                        Modifier
                                    </button>
                                )}
                            </div>
                            {isChangingEmail ? (
                                <form onSubmit={handleRequestEmailChange} className="space-y-4 w-full">
                                    <div>
                                        <label className="block text-sm font-medium text-[#1c1e21] mb-2">
                                            Adresse e-mail actuelle
                                        </label>
                                        <input
                                            type="email"
                                            disabled
                                            value={profile.email}
                                            className="w-full px-4 py-3 rounded-[12px] border border-[rgba(74,144,226,0.2)] bg-gray-50 text-gray-500 cursor-not-allowed"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-[#1c1e21] mb-2">
                                            Nouvelle adresse e-mail
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={newEmail}
                                            onChange={(e) => setNewEmail(e.target.value)}
                                            className="w-full px-4 py-3 rounded-[12px] border border-[rgba(74,144,226,0.2)] focus:border-[#4a90e2] focus:ring-2 focus:ring-[#4a90e2]/20 outline-none transition-all"
                                            placeholder="nouvelle@email.com"
                                        />
                                    </div>
                                    <div className="flex gap-3 pt-2">
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-[#4a90e2] text-white rounded-[12px] hover:bg-[#3a7bc8] transition-all"
                                        >
                                            Envoyer le code
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setIsChangingEmail(false);
                                                setNewEmail("");
                                            }}
                                            className="px-4 py-2 bg-gray-100 text-gray-600 rounded-[12px] hover:bg-gray-200 transition-all"
                                        >
                                            Annuler
                                        </button>
                                    </div>
                                </form>
                            ) : (
                                <p className="text-[#5a6378] text-sm">
                                    Adresse actuelle : <span className="font-medium text-[#1c1e21]">{profile.email}</span>
                                </p>
                            )}
                        </div>
                    </div>

                    {/* OTP Modal */}
                    {showOtpModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setShowOtpModal(false)}>
                            <div className="glass-card p-8 rounded-[24px] max-w-md w-full mx-4" style={{
                                background: 'rgba(255,255,255,0.95)',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                boxShadow: '0 8px 32px rgba(31,38,135,0.15)',
                            }} onClick={(e) => e.stopPropagation()}>
                                <h3 className="text-xl font-medium text-[#1c1e21] mb-4">Vérification OTP</h3>
                                <p className="text-[#5a6378] text-sm mb-6">
                                    Un code à 6 chiffres a été envoyé à <span className="font-medium text-[#1c1e21]">{newEmail}</span>
                                </p>
                                <form onSubmit={handleConfirmEmailChange} className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-[#1c1e21] mb-2">
                                            Code de vérification
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            maxLength={6}
                                            value={otpCode}
                                            onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                                            className="w-full px-4 py-3 rounded-[12px] border border-[rgba(74,144,226,0.2)] focus:border-[#4a90e2] focus:ring-2 focus:ring-[#4a90e2]/20 outline-none transition-all text-center text-2xl tracking-widest font-mono"
                                            placeholder="000000"
                                        />
                                    </div>
                                    <div className="flex gap-3 pt-2">
                                        <button
                                            type="submit"
                                            className="flex-1 px-4 py-3 bg-[#4a90e2] text-white rounded-[12px] hover:bg-[#3a7bc8] transition-all font-medium"
                                        >
                                            Confirmer
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setShowOtpModal(false);
                                                setOtpCode("");
                                            }}
                                            className="flex-1 px-4 py-3 bg-gray-100 text-gray-600 rounded-[12px] hover:bg-gray-200 transition-all font-medium"
                                        >
                                            Annuler
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </DashboardLayout>
    );
}
