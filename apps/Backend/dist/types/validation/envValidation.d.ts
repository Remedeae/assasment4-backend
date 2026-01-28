import z from "zod";
export declare const envSchema: z.ZodObject<{
    DB_URL: z.ZodString;
    SECRET: z.ZodString;
    CLIENT_ID: z.ZodString;
    CLIENT_SECRET: z.ZodString;
    ISSUE_BASE_URL: z.ZodURL;
    AUTH0_ACTION_SECRET: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=envValidation.d.ts.map