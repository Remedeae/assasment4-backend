import { Router } from "express";
import { PlayerModel } from "../../mongoDB/models/Player";
import { errMsg, validateData } from "../../middleware/validatorHelpes";
import { HttpError } from "../../middleware/errorHandler";
import { OutputPlayer } from "../../../../Shared/types/output";
import {
  //adminStatusCheck,
  deleteByID,
  hydrateItems,
  hydratePlayerHeroes,
  updateById,
} from "../helpers/helpers";
import { PlayerSchema } from "../../../../Shared/types/base/playerSchema";
import { csvBoolean } from "../../types/validation/csvValidation/csvHelpers";

const router = Router();

//get user by username or email
router.get("/:credentials/:full", async (req, res, next) => {
  try {
    const cred = req.params.credentials.toLowerCase();
    const full = req.params.full.toLowerCase();
    const validateFull = validateData(full, csvBoolean, errMsg[2]);
    const user = await PlayerModel.findOne({
      $or: [{ userName: cred }, { email: cred }],
    }).lean();
    const validatedUser = validateData(user, OutputPlayer, errMsg[0]);
    if (!validateFull) {
      res.status(200).send(validatedUser);
      return;
    }
    const fullHeroes = await hydratePlayerHeroes(validatedUser);
    const inventoryItems = await hydrateItems(validatedUser);
    res
      .status(200)
      .send({ user: validatedUser, heroes: fullHeroes, items: inventoryItems });
  } catch (error) {
    next(error);
  }
});

//delete user by ID
/* router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const isUser = await PlayerModel.exists({
      _id: id,
      admin: false,
    });
    if (!isUser) {
      throw new HttpError(
        403,
        "You do not have permission to edit an admin.",
        null
      );
    }
    const deletedUser = await deleteByID(req.params.id, "User", PlayerModel);
    res
      .status(200)
      .send(`${deletedUser?.userName} with id ${deletedUser?._id} deleted.`);
  } catch (error) {
    next(error);
  }
}); */

//update user by ID
/* router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    //adminStatusCheck(id, false);
    const updatedUser = await updateById(
      id,
      "User",
      req.body,
      PlayerSchema,
      PlayerModel
    );
    res.status(200).send(`User ${updatedUser?.userName} has been updated.`);
  } catch (error) {
    next(error);
  }
}); */

export default router;
