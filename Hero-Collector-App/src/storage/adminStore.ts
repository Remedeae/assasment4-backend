import { create } from "zustand";

type AdminStore = {
  adminStatus: boolean;
  setAdminStatus: (admin: boolean) => void;
};

export const useAdminStore = create<AdminStore>((set) => ({
  adminStatus: false,
  setAdminStatus: (status) => set({ adminStatus: status }),
}));
