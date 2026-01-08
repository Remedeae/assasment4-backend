import { Router } from "express";
import mongoose from "mongoose";
import { PlayerHeroModel, PlayerModel } from "../../mongoDB/models/Player";
import { HeroModel } from "../../mongoDB/models/Hero";
import { constructPlayerHero } from "../helpers/helpers";
import { HttpError } from "../../middleware/errorHandler";

const router = Router();

//post random reward hero to player by auth0Id
router.post("/:auth0Id", async (req, res, next) => {
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      const { auth0Id } = req.params;
      const heroes = await HeroModel.find()
        .select("name _id")
        .lean()
        .session(session);

      if (heroes.length === 0) {
        throw new HttpError(400, "Error fetching hero IDs.", null);
      }

      const randomIndex = Math.floor(Math.random() * heroes.length);
      const heroTypeDoc = heroes[randomIndex];
      if (!heroTypeDoc) {
        throw new HttpError(500, "Failed to select random hero.", null);
      }
      const hero = await constructPlayerHero(
        heroTypeDoc._id.toString(),
        session
      );

      const createdHero = new PlayerHeroModel(hero);
      await createdHero.save({ session });

      await PlayerModel.findOneAndUpdate(
        { auth0Id },
        { $push: { "inventory.heroes": createdHero._id } },
        { session }
      );

      await session.commitTransaction();
      session.endSession();

      res
        .status(200)
        .send(
          `Congratulations, you have been awarded with ${heroTypeDoc.name.toString()}`
        );
    } catch (error) {
      next(error);
    }
  } catch (error) {
    next(error);
  }
});

export default router;
