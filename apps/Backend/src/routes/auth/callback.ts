import "dotenv/config";
import { Router } from "express";
import jwt from "jsonwebtoken";
import { frontendURL } from "@heroapp/shared";
import { error } from "node:console";

const router = Router();

router.get("", (req, res) => {
  const user = req.oidc.user;

  if (!user) {
    return res.redirect(`${frontendURL}?error=login_failed`);
  }
  const token = jwt.sign(
    {
      auth0Id: user.sub,
      userName: user.nickName,
      email: user.email,
      roles: user["https://remedeae-hero-collector/roles"] || [],
    },
    `${process.env.JWT_SECRET}`,
    { expiresIn: 300 },
  );
  res.redirect(`${frontendURL}/home?token=${token}`);
});

export default router;
