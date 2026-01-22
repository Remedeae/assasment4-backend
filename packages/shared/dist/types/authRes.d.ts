import { z } from "zod";
export declare const LoggedUserSchema: z.ZodObject<{
    userName: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    roles: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString>>>;
    email: z.ZodNullable<z.ZodOptional<z.ZodEmail>>;
    auth0Id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
