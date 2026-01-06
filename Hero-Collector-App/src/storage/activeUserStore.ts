import { create } from "zustand";
import type { PlayerOutput } from "../types/types";

type ActiveUserStore = {
  userData: PlayerOutput | null;
  setUserData: (userData: PlayerOutput | null) => void;
};

export const useActiveUserStore = create<ActiveUserStore>((set) => ({
  userData: null,
  setUserData: (status) => set({ userData: status }),
}));
