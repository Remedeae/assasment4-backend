import { Router } from "express";
import { ItemModel } from "../../mongoDB/models/GameData";
import { OutputItem } from "../../../../Shared/types/output";
import { validateData, errMsg } from "../../middleware/validatorHelpes";
import z from "../../../../Shared/node_modules/zod";
import { ItemSchema } from "../../../../Shared/types/base/generalGamedataSchema";
import { deleteByID, updateById } from "../helpers/helpers";

const router = Router();

//get all items
router.get("", async (req, res, next) => {
  try {
    const items = await ItemModel.find().lean();
    const validatedItems = validateData(items, z.array(OutputItem), errMsg[0]);
    res.status(200).send(validatedItems);
  } catch (error) {
    next(error);
  }
});

//post item
router.post("", async (req, res, next) => {
  try {
    const validatedBody = validateData(req.body, ItemSchema, errMsg[3]);
    validatedBody ?? (await ItemModel.create(validatedBody));
    res.status(200).send(`Successfully saved: ${validatedBody}`);
  } catch (error) {
    next(error);
  }
});

//delete item by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedItem = await deleteByID(id, "Item", ItemModel);
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
    const updatedItem = await updateById(
      id,
      "Item",
      req.body,
      ItemSchema,
      ItemModel
    );
    res
      .status(200)
      .send({ message: `Item successfully updated to : ${updatedItem}` });
  } catch (error) {
    next(error);
  }
});

export default router;
