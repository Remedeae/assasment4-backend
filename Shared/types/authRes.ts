import { z } from "zod";

export const LoggedUserSchema = z.object({
  userName: z.string().optional(),
  roles: z.array(z.string()).optional(),
  email: z.email().optional(),
});
