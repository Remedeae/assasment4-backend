import "dotenv/config";
import { auth } from "express-openid-connect";
import type { Request, Response, NextFunction } from "express";
import { envSchema } from "../../types/validation/envValidation.js";
import { HttpError } from "../errorHandler.js";
import { backendURL } from "@heroapp/shared";

export const env = envSchema.parse(process.env);

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: env.SECRET,
  baseURL: backendURL,
  clientID: env.CLIENT_ID,
  clientSecret: env.CLIENT_SECRET,
  issuerBaseURL: env.ISSUE_BASE_URL,
  session: {
    cookie: {
      sameSite: "Lax",
      secure: process.env.MODE === "production",
    },
  },
  authorizationParams: {
    response_type: "code",
    response_mode: "query",
  },
};

export const authMiddleware = auth(config);

export const requiresAdmin = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const roles: string[] | null =
    req.oidc.user?.["https://remedeae-hero-collector/roles"] ?? [];
  if (!roles?.some((r) => r.toLowerCase() === "admin")) {
    return next(
      new HttpError(
        403,
        "Forbidden. Admin role required for this request.",
        null,
      ),
    );
  }
  next();
};
