import { Router } from "express";
import z from "../../../../Shared/node_modules/zod";

import { HttpError } from "../../middleware/errorHandler";
import { errMsg, validateData } from "../../middleware/validatorHelpes";
import { deleteByID, updateById } from "../helpers/helpers";

import { PlayerModel } from "../../mongoDB/models/Player";

import { OutputPlayer } from "../../../../Shared/types/output";
import { PlayerSchema } from "../../../../Shared/types/base/playerSchema";

const router = Router();

//get all users
router.get("", async (req, res, next) => {
  try {
    const users = await PlayerModel.find().lean();
    const validatedUsers = validateData(
      users,
      z.array(OutputPlayer),
      errMsg[0]
    );
    res.send(200).send(validatedUsers);
  } catch (error) {
    next(error);
  }
});

//delete user by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await PlayerModel.findById(id).lean();
    if (!user) {
      throw new HttpError(404, "User not found", null);
    }

    const deleted = await deleteByID(id, "User", PlayerModel);
    const adminStatus = deleted?.admin ? "Admin" : "User";
    res
      .status(200)
      .send(
        `${adminStatus} ${deleted?.userName} with id: ${id} successfully deleted`
      );
  } catch (error) {
    next(error);
  }
});

//update user by ID
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedUser = await updateById(
      id,
      "User",
      req.body,
      PlayerSchema,
      PlayerModel
    );
    const adminStatus = updatedUser.admin ? "Admin" : "User";
    res
      .status(200)
      .send(
        `${adminStatus} ${updatedUser?.userName} has successfully been updated.`
      );
  } catch (error) {
    next(error);
  }
});

export default router;
