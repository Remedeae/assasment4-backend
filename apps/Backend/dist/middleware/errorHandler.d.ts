import type { Response } from "express";
import { ZodError } from "zod";
export declare const formatZodError: (err: ZodError) => {
    path: string;
    message: string;
}[];
export declare class HttpError extends Error {
    status: number;
    details?: unknown;
    constructor(status: number, message: string, details: unknown);
}
export declare function errorHandler(err: unknown, res: Response): void;
//# sourceMappingURL=errorHandler.d.ts.map