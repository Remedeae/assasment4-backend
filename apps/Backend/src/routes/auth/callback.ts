import "dotenv/config";
import { Router } from "express";
import { frontendURL } from "@heroapp/shared";

const router = Router();

router.get("", (req, res) => {
  if (!req.oidc.isAuthenticated() || !req.oidc.user) {
    return res.redirect(`${frontendURL}?error=login_failed`);
  }
  res.redirect(`${frontendURL}/collection/${req.oidc.user.sub}`);
});

export default router;
