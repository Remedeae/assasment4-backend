import z from "zod";
import type { LoggedUserSchema } from "@heroapp/shared";

export type LoggedUser = z.infer<typeof LoggedUserSchema>;

export type LoggedUserResponse = {
  user: LoggedUser | null;
  isAuthenticated: boolean;
  token: string | null;
};

export type AuthStore = {
  user: LoggedUser | null;
  token: string | null;
  isTrueAdmin: boolean;
  isAuthenticated: boolean;

  setAuth: (data: LoggedUserResponse) => void;
  clearAuth: () => void;
};
//---------------------------
export type AdminToggle = {
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
};
