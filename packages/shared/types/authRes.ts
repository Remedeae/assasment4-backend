import { z } from "zod";

export const LoggedUserSchema = z.object({
  username: z.string().optional().nullable(),
  roles: z.array(z.string()).optional().nullable(),
  email: z.email().optional().nullable(),
  auth0Id: z.string().optional().nullable(),
});
