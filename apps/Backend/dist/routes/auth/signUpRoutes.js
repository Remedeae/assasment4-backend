import { Router } from "express";
import { errMsg, validateData } from "../../middleware/validatorHelpes.js";
import { InputPlayer } from "@heroapp/shared";
import { PlayerModel } from "../../mongoDB/models/Player.js";
import logger from "../../logger.js";
const router = Router();
//post new user
router.post("", async (req, res, next) => {
    try {
        const validatedUser = validateData(req.body, InputPlayer, errMsg[3]);
        const newUser = await PlayerModel.create(validatedUser);
        logger.info("Successfully created new user", newUser);
        res.status(201).send(`User ${newUser?.userName} successfully created`);
    }
    catch (error) {
        next(error);
    }
});
export default router;
//# sourceMappingURL=signUpRoutes.js.map