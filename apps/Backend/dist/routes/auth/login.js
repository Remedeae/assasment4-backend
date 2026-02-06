import { Router } from "express";
import { backendURL } from "../../variables/urls.js";
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
//# sourceMappingURL=login.js.map