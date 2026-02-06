import { Router } from "express";
import { PlayerModel } from "../../mongoDB/models/Player.js";
import { LoggedUserSchema } from "@heroapp/shared";
import logger from "../../logger.js";

const router = Router();

router.get("", async (req, res, next) => {
  try {
    const isAuthenticated = req.oidc.isAuthenticated();
    if (!isAuthenticated) {
      return res.status(200).send({ isAuthenticated: false, user: null });
    }
    const rawUser = req.oidc.user;
    const auth0Id = rawUser?.sub;

    let user = await PlayerModel.findOne({ auth0Id });
    if (!user) {
      user = await PlayerModel.create({
        auth0Id,
        email: rawUser?.email,
        username: rawUser?.nickname.split(/[._]/)[0],
      });
    }

    const formattedUser = LoggedUserSchema.parse({
      username: user.username,
      email: user.email,
      roles: rawUser?.["https://remedeae-hero-collector/roles"] || [],
      auth0Id: user.auth0Id,
    });
    logger.info(
      `${JSON.stringify(formattedUser.username)} authenticated succeffully.`,
    );
    res.status(200).send({ isAuthenticated, user: formattedUser });
  } catch (error) {
    next(error);
  }
});

export default router;
