import "dotenv/config";
import { auth } from "express-openid-connect";
import { envSchema } from "../../types/validation/envValidation.js";
import { HttpError } from "../errorHandler.js";
import { backendURL } from "../../variables/urls.js";
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
export const requiresAdmin = (req, res, next) => {
    const roles = req.oidc.user?.["https://remedeae-hero-collector/roles"] ?? [];
    if (!roles?.some((r) => r.toLowerCase() === "admin")) {
        return next(new HttpError(403, "Forbidden. Admin role required for this request.", null));
    }
    next();
};
//# sourceMappingURL=auth.js.map