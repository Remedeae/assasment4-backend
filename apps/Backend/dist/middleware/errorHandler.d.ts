import type { Request, Response, NextFunction } from "express";
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
export declare function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction): void;
//# sourceMappingURL=errorHandler.d.ts.map