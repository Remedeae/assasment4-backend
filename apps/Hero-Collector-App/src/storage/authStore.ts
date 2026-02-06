import { create } from "zustand";
import type { AuthStore, LoggedUserResponse } from "../types/storageTypes";

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  isTrueAdmin: false,

  setAuth: ({ user, isAuthenticated }: LoggedUserResponse) =>
    set({
      user,
      isAuthenticated,
      isTrueAdmin: user?.roles?.some(
        (r: string) => r.toLowerCase() === "admin",
      ),
    }),

  clearAuth: () =>
    set({
      user: null,
      isAuthenticated: false,
      isTrueAdmin: false,
    }),
}));
