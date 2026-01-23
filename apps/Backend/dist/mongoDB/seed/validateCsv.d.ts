import { z } from "zod";
export declare const parseCSVRows: <T>(schema: z.ZodSchema<T>, rows: unknown[]) => {
    valid: T[];
    errors: {
        row: number;
        error: z.ZodError;
    }[];
};
//# sourceMappingURL=validateCsv.d.ts.map