import z from "../../../../Shared/node_modules/zod";

export const envSchema = z.object({
  DB_URL: z.string(),
  SECRET: z.string().min(1),
  CLIENT_ID: z.string().min(1),
  CLIENT_SECRET: z.string().min(1),
  ISSUE_BASE_URL: z.url(),
  AUTH0_ACTION_SECRET: z.string(),
});
