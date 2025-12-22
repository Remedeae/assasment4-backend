import { Router } from "express";

const router = Router();

//post new admin
router.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//delete admin by ID
router.delete("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//update admin by ID
router.put("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default router;
