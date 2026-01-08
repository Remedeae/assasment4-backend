import { Router } from "express";
import { HeroModel } from "../../mongoDB/models/Hero";
import { errMsg, validateData } from "../../middleware/validatorHelpes";
import { OutputHero } from "../../../../Shared/types/output";
import z from "zod";
import { HeroSchema } from "../../../../Shared/types/base/heroDataSchema";
import { deleteByID, hydrateHeroes, updateById } from "../helpers/helpers";

const router = Router();

//get all heroes
router.get("", async (req, res, next) => {
  try {
    const heroes = await HeroModel.find().lean();
    const validatedHeroes = validateData(
      heroes,
      z.array(OutputHero),
      errMsg[3]
    );
    const fullHeroes = hydrateHeroes(validatedHeroes);
    res.status(200).send(validatedHeroes);
  } catch (error) {
    next(error);
  }
});

//post hero by ID
router.post("/", async (req, res, next) => {
  try {
    const validatedBody = validateData(req.body, HeroSchema, errMsg[0]);
    const newHero = validatedBody ?? (await HeroModel.create(validatedBody));
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
    res
      .status(200)
      .send(`${deletedHero?.name} with id ${id} successfully deleted`);
  } catch (error) {
    next(error);
  }
});

//update hero by ID
router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const updateHero = updateById(id, "Hero", req.body, HeroSchema, HeroModel);
  res.status(200).send(`Sucessfully updated ${updateHero}`);
  try {
  } catch (error) {
    next(error);
  }
});

export default router;
