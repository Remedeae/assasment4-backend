import { create } from "zustand";
import type { AdminToggle } from "../types/storageTypes";

export const useAdminToggle = create<AdminToggle>((set) => ({
  isAdmin: false,
  setIsAdmin: (status) => set({ isAdmin: status }),
}));
