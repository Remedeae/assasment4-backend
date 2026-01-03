import { Router } from "express";
import { SpellModel } from "../../mongoDB/models/GameData";
import { OutputSpell } from "../../../../Shared/types/output";
import { validateData, errMsg } from "../../middleware/validatorHelpes";
import z from "zod";
import { SpellSchema } from "../../../../Shared/types/base/generalGamedataSchema";

const router = Router();

//get all spells
router.get("", async (req, res, next) => {
  try {
    const spells = await SpellModel.find();
    const validatedSpells = validateData(
      spells,
      z.array(OutputSpell),
      errMsg[0]
    );
    res.status(200).send(validatedSpells);
  } catch (error) {
    next(error);
  }
});

//post spell
router.post("/", async (req, res, next) => {
  try {
    const validatedBody = validateData(req.body, SpellSchema, errMsg[3]);
    const newSpell = new SpellModel(validatedBody);
    await newSpell.save();
    res.status(200).send(`Successfully saved: ${newSpell}`);
  } catch (error) {
    next(error);
  }
});

//delete spell by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedSpell = await SpellModel.findByIdAndDelete(id);
    if (!deletedSpell) {
      res.status(404).json({ error: "Spell not found" });
    }
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
    const validatedBody = validateData(req.body, SpellSchema, errMsg[3]);
    const updatedSpell = await SpellModel.findByIdAndUpdate(id, validatedBody, {
      new: true,
    });
    if (!updatedSpell) {
      res.status(404).send({ error: "Spell not found." });
    }
    res
      .status(200)
      .send({ message: `Spell successfully updated to : ${updatedSpell}` });
  } catch (error) {
    next(error);
  }
});

export default router;
