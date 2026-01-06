import "dotenv/config";
import { auth } from "express-openid-connect";
import type { Request, Response, NextFunction } from "express";
import { envSchema } from "../../types/validation/envValidation";
import { HttpError } from "../errorHandler";

export const env = envSchema.parse(process.env);

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: env.SECRET,
  baseURL: env.BASEURL,
  clientID: env.CLIENT_ID,
  issuerBaseURL: env.ISSUE_BASE_URL,
};

export const authMiddleware = auth(config);

export const requiresAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const roles = req.oidc.user?.["https://remedeae-hero-collector"] as
    | string[]
    | undefined;
  if (!roles?.includes("admin")) {
    return next(
      new HttpError(
        403,
        "Forbidden. Admin role required for this request.",
        null
      )
    );
  }
  next();
};
