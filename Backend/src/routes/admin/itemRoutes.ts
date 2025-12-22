import { Router } from "express";

const router = Router();

//get all items
router.get("", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//post item by ID
router.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//delete item by ID
router.delete("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//update item by ID
router.put("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default router;
