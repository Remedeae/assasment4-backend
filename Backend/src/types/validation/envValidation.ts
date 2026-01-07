import z from "zod";

export const envSchema = z.object({
  DB_URL: z.string(),
  SECRET: z.string().min(1),
  BASEURL: z.url(),
  PORT: z.coerce.number().positive(),
  CLIENT_ID: z.string().min(1),
  CLIENT_SECRET: z.string().min(1),
  ISSUE_BASE_URL: z.url(),
  AUTH0_ACTION_SECRET: z.string(),
});
