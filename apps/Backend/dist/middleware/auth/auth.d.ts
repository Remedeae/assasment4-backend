import "dotenv/config";
import type { Request, Response, NextFunction } from "express";
export declare const env: {
    DB_URL: string;
    SECRET: string;
    CLIENT_ID: string;
    CLIENT_SECRET: string;
    ISSUE_BASE_URL: string;
    AUTH0_ACTION_SECRET: string;
};
export declare const authMiddleware: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
export declare const requiresAdmin: (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=auth.d.ts.map