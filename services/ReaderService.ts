import api from "./api";

export const ReaderService = {
    getProfile: async () => {
        const response = await api.get(`/users/me`);
        return response.data;
    },

    updateProfile: async (data: any) => {
        const response = await api.patch(`/users/profile`, data);
        return response.data;
    },

    changePassword: async (data: any) => {
        const response = await api.patch(`/users/change-password`, data);
        return response.data;
    },

    requestEmailChange: async (data: { newEmail: string }) => {
        const response = await api.post(`/users/request-email-change`, data);
        return response.data;
    },

    confirmEmailChange: async (data: { code: string }) => {
        const response = await api.post(`/users/confirm-email-change`, data);
        return response.data;
    },

    getFavorites: async () => {
        const response = await api.get(`/users/favorites/my`);
        return response.data;
    },

    addFavorite: async (postId: string) => {
        const response = await api.post(`/users/favorite/${postId}`);
        return response.data;
    },

    removeFavorite: async (postId: string) => {
        const response = await api.post(`/users/unfavorite/${postId}`);
        return response.data;
    },

    getHistory: async () => {
        // Backend has multiple history endpoints
        const [likes, comments] = await Promise.all([
            api.get(`/users/likes/history`),
            api.get(`/users/comments/history`)
        ]);
        return {
            likes: likes.data.data || [],
            comments: comments.data.data || []
        };
    },

    getComments: async () => {
        const response = await api.get(`/comment/my`);
        return response.data;
    },

    getRecommendations: async () => {
        const response = await api.get(`/recommendations/my`);
        return response.data;
    },

    addRecommendation: async (data: any) => {
        const response = await api.post(`/recommendations`, data);
        return response.data;
    },

    removeComment: async (commentId: string) => {
        const response = await api.delete(`/comment/${commentId}`);
        return response.data;
    },

    getReadHistory: async () => {
        const response = await api.get(`/users/read/history`);
        return response.data;
    },

    updateNotificationSettings: async (settings: any) => {
        // This uses the same update profile endpoint but we'll adapt it in backend
        const response = await api.patch(`/users/profile`, { notificationSettings: settings });
        return response.data;
    }
};
