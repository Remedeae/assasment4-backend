import { Router } from "express";
import { SpellModel } from "../../mongoDB/models/GameData.js";
import { BOutputSpell } from "../../types/validation/mongoOutput.js";
import { validateData, errMsg } from "../../middleware/validatorHelpes.js";
import z from "zod";
import { InputSpell } from "@heroapp/shared";
import { deleteByID, updateById } from "../helpers/helpers.js";
import logger from "../../logger.js";
import { log } from "node:console";

const router = Router();

//get all spells
router.get("", async (req, res, next) => {
  try {
    const spells = await SpellModel.find();
    const validatedSpells = validateData(
      spells,
      z.array(BOutputSpell),
      errMsg[0],
    );
    logger.info(`Successfully retrived ${validatedSpells.length} spells.`);
    res.status(200).send(validatedSpells);
  } catch (error) {
    next(error);
  }
});

//post spell
router.post("", async (req, res, next) => {
  try {
    const validatedBody = validateData(req.body, InputSpell, errMsg[3]);
    const createdSpell = await SpellModel.create(validatedBody);
    logger.info("Successfully reated new spell", createdSpell);
    res.status(201).send(`Successfully created: ${createdSpell.name}`);
  } catch (error) {
    next(error);
  }
});

//delete spell by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedSpell = await deleteByID(id, "Spell", SpellModel);
    logger.info("Deleted spell", deletedSpell);
    res
      .status(200)
      .send({ message: `Spell ${deletedSpell?.name} successfully deleted.` });
  } catch (error) {
    next(error);
  }
});

//update spell by ID
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedSpell = await updateById(
      id,
      "Spell",
      req.body,
      InputSpell,
      SpellModel,
    );
    logger.info("Spell successfully updated", updatedSpell);
    res
      .status(200)
      .send({ message: `${updatedSpell?.name} successfully updated.` });
  } catch (error) {
    next(error);
  }
});

export default router;
