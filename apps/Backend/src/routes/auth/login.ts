import { Router } from "express";
import { backendURL } from "@heroapp/shared";

const router = Router();

router.get("", (req, res) => {
  res.oidc.login({
    authorizationParams: {
      redirect_uri: backendURL,
      response_type: "code",
    },
  });
});

export default router;
