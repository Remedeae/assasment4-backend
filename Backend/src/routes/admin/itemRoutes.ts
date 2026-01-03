import { Router } from "express";
import { ItemModel } from "../../mongoDB/models/GameData";
import { OutputItem } from "../../../../Shared/types/output";
import { validateData, errMsg } from "../../middleware/validatorHelpes";
import z from "zod";
import { ItemSchema } from "../../../../Shared/types/base/generalGamedataSchema";

const router = Router();

//get all items
router.get("", async (req, res, next) => {
  try {
    const items = await ItemModel.find();
    const validatedItems = validateData(items, z.array(OutputItem), errMsg[0]);
    res.status(200).send(validatedItems);
  } catch (error) {
    next(error);
  }
});

//post item
router.post("/", async (req, res, next) => {
  try {
    const validatedBody = validateData(req.body, ItemSchema, errMsg[3]);
    const newItem = new ItemModel(validatedBody);
    await newItem.save();
    res.status(200).send(`Successfully saved: ${newItem}`);
  } catch (error) {
    next(error);
  }
});

//delete item by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedItem = await ItemModel.findByIdAndDelete(id);
    if (!deletedItem) {
      res.status(404).json({ error: "Item not found" });
    }
    res
      .status(200)
      .send({ message: `Item ${deletedItem?.name} successfully deleted.` });
  } catch (error) {
    next(error);
  }
});

//update item by ID
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const validatedBody = validateData(req.body, ItemSchema, errMsg[3]);
    const updatedItem = await ItemModel.findByIdAndUpdate(id, validatedBody, {
      new: true,
    });
    if (!updatedItem) {
      res.status(404).send({ error: "Item not found." });
    }
    res
      .status(200)
      .send({ message: `Item successfully updated to : ${updatedItem}` });
  } catch (error) {
    next(error);
  }
});

export default router;
