import { Router } from "express";

const router = Router();

//get user by ID
router.get("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//get hero collection by userId
router.get("/:id/heroes", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//post new hero to user by ID
router.post("/:id/addHero", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//post new item to user by ID
router.post("/:id/addItem", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//edit user item inventory by userId
router.put("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//delete hero by heroId
router.delete("/:heroId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

//update hero by heroId
router.put("/:heroId", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default router;
