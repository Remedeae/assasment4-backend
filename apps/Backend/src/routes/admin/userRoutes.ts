import { Router } from "express";
import mongoose from "mongoose";

import {
  constructPlayerHero,
  deleteByID,
  hydratePlayerHeroes,
  updateById,
} from "../helpers/helpers.js";
import { errMsg, validateData } from "../../middleware/validatorHelpes.js";

import { PlayerHeroModel, PlayerModel } from "../../mongoDB/models/Player.js";
import { ItemModel } from "../../mongoDB/models/GameData.js";

import { InputHero, InputPlayer, InputPlayerHero } from "@heroapp/shared";
import { BOutputPlayer } from "../../types/validation/mongoOutput.js";
import logger from "../../logger.js";

const router = Router();

//get user by ID
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await PlayerModel.findById(id);
    if (!user) {
      res.status(404).send("User not found");
    }
    const validatedUser = validateData(user, BOutputPlayer, errMsg[0]);
    res.status(200).send(validatedUser);
  } catch (error) {
    next(error);
  }
});

//get hero collection by playerId
router.get("/heroes/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await PlayerModel.findById(id);
    if (!user) {
      res.status(404).send("User not found");
    }
    const validatedUser = validateData(user, BOutputPlayer, errMsg[0]);
    const fullHeroes = await hydratePlayerHeroes(validatedUser);
    logger.info(`Successfully retrived ${fullHeroes.length} heroes`);
    res.status(200).send(fullHeroes);
  } catch (error) {
    next(error);
  }
});

//post new player hero by heroId to user by userID
router.post("/addHero/:userId/:heroId", async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { userId, heroId } = req.params;
    const hero = await constructPlayerHero(heroId, session);

    const createdHero = new PlayerHeroModel(hero);
    await createdHero.save({ session });

    const user = await PlayerModel.findByIdAndUpdate(
      userId,
      { $push: { "inventory.heroes": createdHero._id } },
      { session },
    );

    await session.commitTransaction();
    session.endSession();
    logger.info(
      `${JSON.stringify(createdHero.heroId)} added successfully to the user ${JSON.stringify(user?.userName)}'s roster`,
    );
    res
      .status(201)
      .send(
        `${createdHero.heroId} added successfully to the user ${user?.userName}'s roster`,
      );
  } catch (error) {
    next(error);
  }
});

//post new item by itemID to user by userID
router.put("/addItem/:userId/:itemId", async (req, res, next) => {
  try {
    const { itemId, userId } = req.params;
    const itemExsists = await ItemModel.exists({ _id: itemId });
    if (!itemExsists) {
      return res.status(404).send(`Item ${itemId} does not exsis!`);
    }
    const updated = await PlayerModel.findByIdAndUpdate(
      userId,
      {
        $push: { "inventory.items": itemId },
      },
      { runValidators: true },
    );
    if (!updated) {
      logger.info(`User ${JSON.stringify(userId)} not found`);
      return res.status(404).send(`User ${userId} not found`);
    }
  } catch (error) {
    next(error);
  }
});

//delete player hero by id
router.delete("/deleteHero/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await deleteByID(id, "Hero", PlayerHeroModel);
    logger.info(
      `Player hero id: ${JSON.stringify(deleted._id)} successfully deleted.`,
    );
    res
      .status(200)
      .send({
        message: `Player hero id: ${deleted._id} successfully deleted.`,
      });
  } catch (error) {
    next(error);
  }
});

//update player hero by id
router.put("/updateHero/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedHero = await updateById(
      id,
      "Hero",
      req.body,
      InputPlayerHero,
      PlayerHeroModel,
    );
    logger.info(
      `Player Hero id: ${JSON.stringify(updatedHero?._id)} updated successfully`,
    );
    res.status(200).send({
      message: `Player Hero id: ${updatedHero?._id} updated successfully`,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
