import { Router } from "express";
import { errMsg, validateData } from "../middleware/validatorHelpes";
import { PlayerSchema } from "../../../Shared/types/base/playerSchema";
import { PlayerModel } from "../mongoDB/models/Player";

const router = Router();

//post new user
router.post("", async (req, res, next) => {
  try {
    const validatedUser = validateData(req.body, PlayerSchema, errMsg[3]);
    const newUser = await PlayerModel.create(validatedUser);
    res.status(200).send(`User ${newUser?.userName} successfully created`);
  } catch (error) {
    next(error);
  }
});

export default router;
