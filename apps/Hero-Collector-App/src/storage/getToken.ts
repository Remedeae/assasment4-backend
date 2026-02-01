import { useEffect } from "react";
import { useAuthStore } from "./authStore";
import { URLSearchParams } from "url";
import { jwtDecode } from "jwt-decode";
import type { LoggedUserResponse, LoggedUser } from "../types/storageTypes";

export const useTokenFromUrl = () => {
  const setAuth = useAuthStore((s) => s.setAuth);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      const decodedToken: LoggedUser | null = jwtDecode(token);

      const auth: LoggedUserResponse = decodedToken
        ? {
            token,
            isAuthenticated: true,
            user: {
              userName: decodedToken.userName || null,
              email: decodedToken.email || null,
              auth0Id: decodedToken.auth0Id || null,
              roles: decodedToken.roles || [],
            },
          }
        : {
            token: null,
            isAuthenticated: false,
            user: null,
          };
      setAuth(auth);
      window.history.replaceState({}, document.title, "/home");
    }
  }, [setAuth]);
};
