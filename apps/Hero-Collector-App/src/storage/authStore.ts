import { create } from "zustand";
import type { AuthStore, LoggedUserResponse } from "../types/storageTypes";

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  isTrueAdmin: false,
  isAuthenticated: false,

  setAuth: ({ user, token, isAuthenticated }: LoggedUserResponse) =>
    set({
      user,
      token,
      isAuthenticated,
      isTrueAdmin: user?.roles?.some(
        (r: string) => r.toLowerCase() === "admin",
      ),
    }),

  clearAuth: () =>
    set({
      user: null,
      token: null,
      isAuthenticated: false,
      isTrueAdmin: false,
    }),
}));
