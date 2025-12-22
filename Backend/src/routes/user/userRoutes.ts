import { Router } from "express";

const router = Router();

//get user by username or email
router.get("/:credentials", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//delete user by ID
router.delete("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//update user by ID
router.put("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default router;
