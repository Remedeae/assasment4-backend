import { Router } from "express";
import { LoggedUserSchema } from "../../../Shared/types/authRes";

const router = Router();

router.get("", async (req, res, next) => {
  try {
    const rawUser = req.oidc.user;
    const formattedUser = LoggedUserSchema.parse({
      userName: rawUser?.nickName ?? rawUser?.name,
      roles: rawUser?.email,
      email: rawUser?.["https://hero-collector.dev/roles"],
      auth0Id: rawUser?.sub,
    });
    res.status(200).send({
      isAuthenticated: true,
      user: formattedUser,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
