import { Router } from "express";
import { LoggedUserSchema } from "@heroapp/shared";
import { HttpError } from "../middleware/errorHandler.js";
const router = Router();
router.get("", async (req, res, next) => {
    try {
        const isAuthenticated = req.oidc.isAuthenticated();
        if (isAuthenticated) {
            const rawUser = req.oidc.user;
            const formattedUser = LoggedUserSchema.parse({
                userName: rawUser?.nickname.split(/[._]/)[0],
                email: rawUser?.email,
                roles: rawUser?.["https://remedeae-hero-collector/roles"],
                auth0Id: rawUser?.sub,
            });
            res.status(200).send({ isAuthenticated, user: formattedUser });
        }
        throw new HttpError(401, "Not authenticated", null);
    }
    catch (error) {
        next(error);
    }
});
export default router;
//# sourceMappingURL=checkAuthRoute.js.map