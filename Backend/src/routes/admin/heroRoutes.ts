import { Router } from "express";

const router = Router();

//get all heroes
router.get("", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//post hero by ID
router.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//delete hero by ID
router.delete("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//update hero by ID
router.put("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default router;
