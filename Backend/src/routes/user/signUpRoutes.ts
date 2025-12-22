import { Router } from "express";

const router = Router();

//post new user
router.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default router;
