import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 120000,
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = Cookies.get("refresh_token");

      if (refreshToken) {
        try {
          // Dynamic import to avoid circular dependency
          const { AuthService } = await import("./AuthService");
          const data = await AuthService.refresh(refreshToken);
          const { auth_token, refresh_token } = data;

          const expires = Cookies.get("remember_me") === "true" ? 7 : undefined;
          Cookies.set("auth_token", auth_token, { expires });
          Cookies.set("refresh_token", refresh_token, { expires });

          originalRequest.headers.Authorization = `Bearer ${auth_token}`;
          return api(originalRequest);
        } catch (refreshError) {
          Cookies.remove("auth_token");
          Cookies.remove("refresh_token");
          Cookies.remove("remember_me");
          localStorage.removeItem("user");
          if (typeof window !== "undefined") window.location.href = "/auth/login";
          return Promise.reject(refreshError);
        }
      }
    }
    return Promise.reject(error);
  }
);

export default api;

