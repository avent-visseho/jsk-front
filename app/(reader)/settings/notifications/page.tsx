"use client";

import DashboardLayout from "@/components/reader/DashboardLayout";
import { Settings } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { ReaderService } from "@/services/ReaderService";
import Loader from "@/components/Loader";


export default function NotificationSettings() {
    const [settings, setSettings] = useState({
        emailNotifications: true,
        newArticles: true,
        comments: false,
        recommendations: true,
        newsletter: true,
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const profile = await ReaderService.getProfile();
                if (profile.notificationSettings) {
                    setSettings(profile.notificationSettings);
                }
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchSettings();
    }, []);

    const handleToggle = async (key: keyof typeof settings) => {
        const newSettings = { ...settings, [key]: !settings[key] };
        setSettings(newSettings);

        try {
            await ReaderService.updateNotificationSettings(newSettings);
            toast.success("Paramètres mis à jour");
        } catch (error) {
            toast.error("Erreur lors de la mise à jour");
            setSettings(settings); // Rollback
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
                        <Settings size={28} className="text-[#4a90e2]" strokeWidth={2} />
                        <h2 className="text-2xl font-medium text-[#1c1e21]">Paramètres de notification</h2>
                    </div>
                    <p className="text-[#5a6378]">
                        Gérez vos préférences de notification
                    </p>
                </div>

                <div className="glass-card p-6 rounded-[20px]" style={{
                    background: 'rgba(255,255,255,0.6)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
                }}>
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-[#1c1e21] font-medium mb-1">Notifications par email</h3>
                                <p className="text-sm text-[#5a6378]">Recevoir des notifications par email</p>
                            </div>
                            <button
                                onClick={() => handleToggle('emailNotifications')}
                                className={`relative w-12 h-6 rounded-full transition-colors ${settings.emailNotifications ? 'bg-[#4a90e2]' : 'bg-[#e5e5ea]'
                                    }`}
                            >
                                <div
                                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${settings.emailNotifications ? 'translate-x-6' : 'translate-x-0.5'
                                        }`}
                                />
                            </button>
                        </div>

                        <div className="h-px bg-[rgba(74,144,226,0.1)]" />

                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-[#1c1e21] font-medium mb-1">Nouveaux articles</h3>
                                <p className="text-sm text-[#5a6378]">Être notifié des nouveaux articles</p>
                            </div>
                            <button
                                onClick={() => handleToggle('newArticles')}
                                className={`relative w-12 h-6 rounded-full transition-colors ${settings.newArticles ? 'bg-[#4a90e2]' : 'bg-[#e5e5ea]'
                                    }`}
                            >
                                <div
                                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${settings.newArticles ? 'translate-x-6' : 'translate-x-0.5'
                                        }`}
                                />
                            </button>
                        </div>

                        {/* <div className="h-px bg-[rgba(74,144,226,0.1)]" />

                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-[#1c1e21] font-medium mb-1">Réponses aux commentaires</h3>
                                <p className="text-sm text-[#5a6378]">Être notifié des réponses à vos commentaires</p>
                            </div>
                            <button
                                onClick={() => handleToggle('comments')}
                                className={`relative w-12 h-6 rounded-full transition-colors ${settings.comments ? 'bg-[#4a90e2]' : 'bg-[#e5e5ea]'
                                    }`}
                            >
                                <div
                                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${settings.comments ? 'translate-x-6' : 'translate-x-0.5'
                                        }`}
                                />
                            </button>
                        </div> */}

                        <div className="h-px bg-[rgba(74,144,226,0.1)]" />

                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-[#1c1e21] font-medium mb-1">Recommandations</h3>
                                <p className="text-sm text-[#5a6378]">Mises à jour sur vos recommandations</p>
                            </div>
                            <button
                                onClick={() => handleToggle('recommendations')}
                                className={`relative w-12 h-6 rounded-full transition-colors ${settings.recommendations ? 'bg-[#4a90e2]' : 'bg-[#e5e5ea]'
                                    }`}
                            >
                                <div
                                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${settings.recommendations ? 'translate-x-6' : 'translate-x-0.5'
                                        }`}
                                />
                            </button>
                        </div>

                        <div className="h-px bg-[rgba(74,144,226,0.1)]" />

                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-[#1c1e21] font-medium mb-1">Newsletter</h3>
                                <p className="text-sm text-[#5a6378]">Recevoir la newsletter hebdomadaire</p>
                            </div>
                            <button
                                onClick={() => handleToggle('newsletter')}
                                className={`relative w-12 h-6 rounded-full transition-colors ${settings.newsletter ? 'bg-[#4a90e2]' : 'bg-[#e5e5ea]'
                                    }`}
                            >
                                <div
                                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${settings.newsletter ? 'translate-x-6' : 'translate-x-0.5'
                                        }`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
