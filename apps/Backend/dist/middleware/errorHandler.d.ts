import type { /* Request, */ Response } from "express";
export declare class HttpError extends Error {
    status: number;
    details?: unknown;
    constructor(status: number, message: string, details: unknown);
}
export declare function errorHandler(err: unknown, res: Response): void;
//# sourceMappingURL=errorHandler.d.ts.map