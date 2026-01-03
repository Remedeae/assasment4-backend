import { Router } from "express";
import { PlayerHeroModel, PlayerModel } from "../../mongoDB/models/Player";
import { errMsg, validateData } from "../../middleware/validatorHelpes";
import {
  OutputFullPlayerHero,
  OutputPlayerHero,
  OutputPlayer,
} from "../../../../Shared/types/output";
import type {
  FullPlayerHeroOutput,
  PlayerHeroOutput,
} from "../../../../Shared/types/types";
import z from "zod";
import { Types } from "mongoose";
import { HeroModel } from "../../mongoDB/models/Hero";
import { SpellModel, ItemModel } from "../../mongoDB/models/GameData";
import { error } from "console";
import { PlayerHeroSchema } from "../../../../Shared/types/base/playerSchema";

const router = Router();

//get user by ID
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await PlayerModel.findById(id);
    if (!user) {
      res.status(404).send("User not found");
    }
    const validatedUser = validateData(user, OutputPlayer, errMsg[0]);
    res.status(200).send(validatedUser);
  } catch (error) {
    next(error);
  }
});

//get hero collection by playerId
router.get("/:id/heroes", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await PlayerModel.findById(id);
    if (!user) {
      res.status(404).send("User not found");
    }
    const validatedUser = OutputPlayer.safeParse(user);
    if (!validatedUser.success) {
      return res
        .status(500)
        .send({ message: errMsg[0], error: validatedUser.error });
    }
    const playerHeroIds: string[] = validatedUser.data.inventory.heroes;
    const objectIds = playerHeroIds.map((id) => new Types.ObjectId(id));
    const heroes = await PlayerHeroModel.find({
      _id: { $in: objectIds },
    }).lean();
    const fullHeroes = await Promise.all(
      heroes.map(async (h) => {
        const [hero, spells, equipment] = await Promise.all([
          HeroModel.findOne({ id: h.heroId }).lean(),
          SpellModel.find({ id: { $in: h.spellIds } }).lean(),
          ItemModel.find({ id: { $in: h.equipmentIds } }).lean(),
        ]);
        return { hero, spells, equipment };
      })
    );
    const validatedFullHeroes = validateData(
      fullHeroes,
      OutputFullPlayerHero,
      errMsg[0]
    );
    res.status(200).send(validatedFullHeroes);
  } catch (error) {
    next(error);
  }
});

//post new hero to user by ID
router.post("/:id/addHero", async (req, res, next) => {
  try {
    const newHero = validateData(req.body, PlayerHeroSchema, errMsg[3]);
  } catch (error) {
    next(error);
  }
});

//post new item to user by ID
router.post("/:id/addItem", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//edit user item inventory by userId
router.put("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//delete hero by heroId
router.delete("/:heroId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//update hero by heroId
router.put("/:heroId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default router;
