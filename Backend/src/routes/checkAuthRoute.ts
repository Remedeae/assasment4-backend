import { Router } from "express";
import { LoggedUserSchema } from "../../../Shared/types/authRes";

const router = Router();

router.get("", async (req, res, next) => {
  try {
    const rawUser = req.oidc.user;
    console.log(req.oidc.accessToken?.token_type);
    const formattedUser = LoggedUserSchema.parse({
      userName: rawUser?.userName,
      email: rawUser?.email,
      roles: rawUser?.["https://hero-collector.dev/roles"],
      auth0Id: rawUser?.sub,
    });
    const isAuthenticated = formattedUser ? true : false;
    res.status(200).send({ isAuthenticated, user: formattedUser });
    //console.log(response);
  } catch (error) {
    next(error);
  }
});

export default router;
