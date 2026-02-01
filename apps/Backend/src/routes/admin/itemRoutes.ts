import { Router } from "express";
import { ItemModel } from "../../mongoDB/models/GameData.js";
import { BOutputItem } from "../../types/validation/mongoOutput.js";
import { validateData, errMsg } from "../../middleware/validatorHelpes.js";
import z from "zod";
import { InputItem } from "@heroapp/shared";
import { deleteByID, updateById } from "../helpers/helpers.js";
import logger from "../../logger.js";

const router = Router();

//get all items
router.get("", async (req, res, next) => {
  try {
    const items = await ItemModel.find();
    const validatedItems = validateData(items, z.array(BOutputItem), errMsg[0]);
    res.status(200).send(validatedItems);
  } catch (error) {
    next(error);
  }
});

//get item types
router.get("/types", async (req, res, next) => {
  try {
    const rawTypes = await ItemModel.find().select("type -_id");
    const validtedTypes = validateData(
      rawTypes,
      z.array(
        z.object({
          type: z.array(z.string()),
        }),
      ),
      errMsg[0],
    );
    const types = validtedTypes
      .map((t) => t.type)
      .flat()
      .filter((t, i, self) => i === self.indexOf(t));
    res.status(200).send(types);
  } catch (error) {
    next(error);
  }
});

//post item
router.post("", async (req, res, next) => {
  try {
    const validatedBody = validateData(req.body, InputItem, errMsg[3]);
    const createdItem = await ItemModel.create(validatedBody);
    logger.info(`Successfully created ${createdItem}`);
    res.status(200).send(`Successfully saved: ${createdItem}`);
  } catch (error) {
    next(error);
  }
});

//delete item by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedItem = await deleteByID(id, "Item", ItemModel);
    logger.info(`Deleted ${deletedItem}`);
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
      InputItem,
      ItemModel,
    );
    logger.info(`Item successfully updated to : ${updatedItem}`);
    res
      .status(200)
      .send({ message: `${updatedItem?.name} successfully updated.` });
  } catch (error) {
    next(error);
  }
});

export default router;
