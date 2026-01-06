import { Router } from "express";
import { errMsg, validateData } from "../../middleware/validatorHelpes";
import { PlayerSchema } from "../../../../Shared/types/base/playerSchema";
import { PlayerModel } from "../../mongoDB/models/Player";

const router = Router();

//post new user
router.post("", async (req, res, next) => {
  try {
    const validetedUser = validateData(req.body, PlayerSchema, errMsg[3]);
    if (!validetedUser.admin) {
      await PlayerModel.create(validetedUser);
      res.status(200).send("User successfully created");
    } else {
      res
        .status(400)
        .send("Failed to create new user, admin flag must be set to 'false'.");
    }
  } catch (error) {
    next(error);
  }
});

export default router;
