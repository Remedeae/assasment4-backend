import { Router } from "express";
import mongoose from "mongoose";
import { PlayerHeroModel, PlayerModel } from "../../mongoDB/models/Player";
import { errMsg, validateData } from "../../middleware/validatorHelpes";
import {
  OutputFullPlayerHero,
  OutputPlayer,
} from "../../../../Shared/types/output";
import { Types } from "mongoose";
import { HeroModel } from "../../mongoDB/models/Hero";
import { SpellModel, ItemModel } from "../../mongoDB/models/GameData";
import {
  PlayerHeroSchema,
  PlayerSchema,
} from "../../../../Shared/types/base/playerSchema";
import { constructPlayerHero, updateById } from "../helpers/helpers";

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
router.get("/heroes/:id", async (req, res, next) => {
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

//post new player hero by heroId to user by userID
router.post("/addHero/:userId/:heroId", async (req, res, next) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { userId, heroId } = req.params;
    const hero = await constructPlayerHero(heroId, session);

    const createdHero = new PlayerHeroModel(hero);
    await createdHero.save({ session });

    await PlayerModel.findByIdAndUpdate(
      userId,
      { $push: { "inventory.heroes": createdHero._id } },
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    res
      .status(200)
      .send(`Hero added successfully to the user ${userId}'s roster`);
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
      { runValidators: true }
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
    const deletedHero = await PlayerHeroModel.findByIdAndDelete(id, {
      lean: true,
    });
    if (!deletedHero) {
      res.status(404).json({ error: "Hero not found" });
    }
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
