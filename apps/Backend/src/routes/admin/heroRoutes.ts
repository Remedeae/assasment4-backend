import { Router } from "express";
import { HeroModel } from "../../mongoDB/models/Hero.js";
import { errMsg, validateData } from "../../middleware/validatorHelpes.js";
import { BOutputHero } from "../../types/validation/mongoOutput.js";
import z from "zod";
import { InputHero } from "@heroapp/shared";
import { deleteByID, hydrateHeroes, updateById } from "../helpers/helpers.js";
import logger from "../../logger.js";

const router = Router();

//get all heroes
router.get("", async (req, res, next) => {
  try {
    const heroes = await HeroModel.find().lean();
    const validatedHeroes = validateData(
      heroes,
      z.array(BOutputHero),
      errMsg[3],
    );
    const fullHeroes = await hydrateHeroes(validatedHeroes);
    res.status(200).send(fullHeroes);
  } catch (error) {
    next(error);
  }
});

//post hero by ID
router.post("/", async (req, res, next) => {
  try {
    const validatedBody = validateData(req.body, InputHero, errMsg[0]);
    const newHero = await HeroModel.create(validatedBody);
    logger.info(`Successfully created: ${newHero}`);
    res.status(200).send(`Successfully created: ${newHero.name}`);
  } catch (error) {
    next(error);
  }
});

//delete hero by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedHero = await deleteByID(id, "Hero", HeroModel);
    logger.info(`Hero Deleted: ${deletedHero}`);
    res.status(200).send(`${deletedHero?.name} successfully deleted`);
  } catch (error) {
    next(error);
  }
});

//update hero by ID
router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const updateHero = await updateById(
    id,
    "Hero",
    req.body,
    InputHero,
    HeroModel,
  );
  res.status(200).send(`Sucessfully updated ${updateHero?.name}`);
  try {
  } catch (error) {
    next(error);
  }
});

export default router;
