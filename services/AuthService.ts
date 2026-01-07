import api from "./api";
import { ILogin, IRegister } from "./types/auth";

export const AuthService = {
    login: async (data: ILogin, channel: "admin" | "user" = "user") => {
        const response = await api.post(`/auth/login?channel=${channel}`, data);
        return response.data;
    },

    register: async (data: any) => {
        const response = await api.post(`/auth/signup`, data);
        return response.data;
    },

    refresh: async (refreshToken: string) => {
        // Note: The interceptor will use this to get a new token pair
        const response = await api.post(`/auth/refresh`, {}, {
            headers: {
                Authorization: `Bearer ${refreshToken}`
            }
        });
        return response.data;
    },

    forgotPassword: async (email: string) => {
        const response = await api.post(`/auth/forgot-password`, { email });
        return response.data;
    },

    resetPassword: async (data: any) => {
        const response = await api.post(`/auth/reset-password`, data);
        return response.data;
    },

    verifyEmail: async (token: string) => {
        const response = await api.post(`/auth/verify`, { token });
        return response.data;
    }
};
