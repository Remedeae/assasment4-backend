import { Router } from "express";
import z from "zod";

import logger from "../../logger.js";

import { HttpError } from "../../middleware/errorHandler.js";
import { errMsg, validateData } from "../../middleware/validatorHelpes.js";
import { deleteByID, updateById } from "../helpers/helpers.js";

import { PlayerModel } from "../../mongoDB/models/Player.js";

import { BOutputPlayer } from "../../types/validation/mongoOutput.js";
import { InputPlayer } from "@heroapp/shared";

const router = Router();

//get all users
router.get("", async (req, res, next) => {
  try {
    const users = await PlayerModel.find();
    const validatedUsers = validateData(
      users,
      z.array(BOutputPlayer),
      errMsg[0],
    );
    logger.info(`Successfully reterived ${validatedUsers.length} users`);
    res.status(200).send(validatedUsers);
  } catch (error) {
    next(error);
  }
});

//delete user by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await deleteByID(id, "User", PlayerModel);
    logger.info({
      message: `User ${deleted.userName} successfully deleted`,
    });
    res
      .status(200)
      .json({ message: `User ${deleted.username} successfully deleted` });
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
      InputPlayer,
      PlayerModel,
    );
    logger.info("User has successfully been updated", updatedUser);
    res.status(200).send({
      message: `User ${updatedUser?.username} has successfully been updated.`,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
