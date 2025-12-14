import { create } from "zustand";

type LoggedInStatusStore = {
  loggedInStatus: boolean;
  setLoggedInStatus: (loggedInStatus: boolean) => void;
};

export const useLoggedInStatusStore = create<LoggedInStatusStore>((set) => ({
  loggedInStatus: true,
  setLoggedInStatus: (status) => set({ loggedInStatus: status }),
}));
