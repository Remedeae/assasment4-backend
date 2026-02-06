import { Router } from "express";
import { PlayerModel } from "../../mongoDB/models/Player.js";
import { HttpError } from "../../middleware/errorHandler.js";
const AUTH0_ACTION_SECRET = process.env.AUTH0_ACTION_SECRET;

const router = Router();

//post new user via Auth0
router.post(
  "",
  (req, res, next) => {
    const auth = req.headers.authorization;
    if (auth !== `Bearer ${AUTH0_ACTION_SECRET}`) {
      return res.sendStatus(401);
    }
    next();
  },
  async (req, res, next) => {
    try {
      const { auth0Id, email, username } = req.body;

      if (!auth0Id) {
        throw new HttpError(400, "Missing Auth0Id", null);
      }
      const existing = await PlayerModel.findOne({ auth0Id });
      if (existing) {
        return res.sendStatus(200);
      }
      await PlayerModel.create({
        auth0Id,
        email,
        username,
      });
      res.sendStatus(201);
    } catch (error) {
      next(error);
    }
  },
);

export default router;
