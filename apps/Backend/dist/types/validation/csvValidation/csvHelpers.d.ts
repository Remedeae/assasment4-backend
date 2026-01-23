import { z } from "zod";
export declare const csvNumber: (schema: z.ZodNumber) => z.ZodPipe<z.ZodTransform<number, unknown>, z.ZodNumber>;
export declare const csvNumberOptional: (schema: z.ZodNumber) => z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodOptional<z.ZodNumber>>;
export declare const csvNumberDefault: (schema: z.ZodNumber, def: number) => z.ZodPipe<z.ZodTransform<number, unknown>, z.ZodNumber>;
export declare const csvArray: (arraySplitter: string) => z.ZodPipe<z.ZodString, z.ZodTransform<string[], string>>;
export declare const csvArrayOptional: (arraySplitter: string) => z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodString>, z.ZodTransform<string[] | undefined, string>>>;
export declare const csvStringOptional: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodOptional<z.ZodString>>;
export declare const csvEnumOptional: (values: string[]) => z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodOptional<z.ZodEnum<{
    [x: string]: string;
}>>>;
export declare const csvBoolean: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodBoolean>;
//# sourceMappingURL=csvHelpers.d.ts.map