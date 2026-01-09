import { Router } from "express";
import { SpellModel } from "../../mongoDB/models/GameData";
import { OutputSpell } from "../../../../Shared/types/output";
import { validateData, errMsg } from "../../middleware/validatorHelpes";
import z from "../../../../Shared/node_modules/zod";
import { SpellSchema } from "../../../../Shared/types/base/generalGamedataSchema";
import { deleteByID, updateById } from "../helpers/helpers";

const router = Router();

//get all spells
router.get("", async (req, res, next) => {
  try {
    const spells = await SpellModel.find().lean();
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
router.post("", async (req, res, next) => {
  try {
    const validatedBody = validateData(req.body, SpellSchema, errMsg[3]);
    validatedBody ?? (await SpellModel.create(validatedBody));
    res.status(200).send(`Successfully created: ${validatedBody}`);
  } catch (error) {
    next(error);
  }
});

//delete spell by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedSpell = await deleteByID(id, "Spell", SpellModel);
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
      SpellSchema,
      SpellModel
    );
    res
      .status(200)
      .send({ message: `Spell successfully updated to : ${updatedSpell}` });
  } catch (error) {
    next(error);
  }
});

export default router;
