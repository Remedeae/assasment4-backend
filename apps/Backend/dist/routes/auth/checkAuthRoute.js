import { Router } from "express";
import { LoggedUserSchema } from "@heroapp/shared";
import logger from "../../logger";
const router = Router();
router.get("", async (req, res, next) => {
    try {
        const isAuthenticated = req.oidc.isAuthenticated();
        if (!isAuthenticated) {
            return res.status(200).send({ isAuthenticated: false, user: null });
        }
        const rawUser = req.oidc.user;
        const formattedUser = LoggedUserSchema.parse({
            username: rawUser?.nickname.split(/[._]/)[0],
            email: rawUser?.email,
            roles: rawUser?.["https://remedeae-hero-collector/roles"] || [],
            auth0Id: rawUser?.sub,
        });
        logger.info(`${JSON.stringify(formattedUser.username)} authenticated succeffully.`);
        res.status(200).send({ isAuthenticated, user: formattedUser });
    }
    catch (error) {
        next(error);
    }
});
export default router;
//# sourceMappingURL=checkAuthRoute.js.map