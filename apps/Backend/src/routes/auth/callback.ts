import "dotenv/config";
import { Router } from "express";
import { frontendURL } from "../../variables/urls.js";

const router = Router();

router.get("", (req, res) => {
  if (!req.oidc.isAuthenticated()) {
    return res.redirect(`${frontendURL}?error=login_failed`);
  }
  res.redirect(`${frontendURL}/home`);
});

export default router;
