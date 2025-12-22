import { Router } from "express";

const router = Router();

//get all spells
router.get("", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//post new spell
router.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//delete spell by ID
router.delete("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//update spell by ID
router.put("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default router;
