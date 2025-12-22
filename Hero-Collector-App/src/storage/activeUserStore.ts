import { create } from "zustand";
import type { Player } from "../../../Backend/src/schemas/dataSchemas/playerSchema.ts";

type ActiveUserStore = {
  userData: Player | null;
  setUserData: (userData: Player | null) => void;
};

export const useActiveUserStore = create<ActiveUserStore>((set) => ({
  userData: null,
  setUserData: (status) => set({ userData: status }),
}));
