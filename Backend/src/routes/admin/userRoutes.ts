import { Router } from "express";
import mongoose from "mongoose";

import {
  constructPlayerHero,
  deleteByID,
  hydratePlayerHeroes,
  updateById,
} from "../helpers/helpers";
import { errMsg, validateData } from "../../middleware/validatorHelpes";

import { PlayerHeroModel, PlayerModel } from "../../mongoDB/models/Player";
import { ItemModel } from "../../mongoDB/models/GameData";

import {
  PlayerHeroSchema,
  PlayerSchema,
} from "../../../../Shared/types/base/playerSchema";
import { BOutputPlayer } from "../../types/validation/mongoOutput";

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

    res
      .status(200)
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
      return res.status(404).send(`User ${userId} not found`);
    }
  } catch (error) {
    next(error);
  }
});

//edit user userId
router.put("editUser/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await updateById(id, "User", req.body, PlayerSchema, PlayerHeroModel);
    res.status(200).send("Player successfully updated");
  } catch (error) {
    next(error);
  }
});

//delete player hero by id
router.delete("/deleteHero/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedHero = await deleteByID(id, "Hero", PlayerHeroModel);
    res
      .status(200)
      .send({ message: `Player hero id: ${id} successfully deleted.` });
  } catch (error) {
    next(error);
  }
});

//update player hero by id
router.put("/updateHero/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await updateById(id, "Hero", req.body, PlayerHeroSchema, PlayerHeroModel);
    res.status(200).send(`Player Hero id: ${id} updated successfully`);
  } catch (error) {
    next(error);
  }
});

export default router;
