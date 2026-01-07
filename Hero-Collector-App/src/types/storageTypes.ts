import z from "zod";
import type { LoggedUserSchema } from "../../../Shared/types/authRes";

export type LoggedUser = z.infer<typeof LoggedUserSchema>;

export type LoggedUserResponse = {
  user: LoggedUser;
  isAuthenticated: boolean;
};

export type AuthStore = {
  user: LoggedUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  setAuth: (user: LoggedUser | null) => void;
  clearAuth: () => void;
};
