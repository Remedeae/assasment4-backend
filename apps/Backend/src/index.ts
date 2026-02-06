import "dotenv/config";
import express from "express";
import pkg from "express-openid-connect";
import connectDB from "./mongoDB/db.js";
import cors from "cors";
import type { CorsOptions } from "cors";

import logger from "./logger.js";

import { authMiddleware, requiresAdmin } from "./middleware/auth/auth.js";
import { errorHandler } from "./middleware/errorHandler.js";

import allUserRoutes from "./routes/admin/allUsersRoutes.js";
import heroRoutes from "./routes/admin/heroRoutes.js";
import itemRoutes from "./routes/admin/itemRoutes.js";
import spellRoutes from "./routes/admin/spellRoutes.js";
import adminUserRoutes from "./routes/admin/userRoutes.js";

import signUpRoute from "./routes/auth/signUpRoutes.js";
import checkAuthRoute from "./routes/auth/checkAuthRoute.js";
import loginRoute from "./routes/auth/login.js";
import callbackroute from "./routes/auth/callback.js";

import playGameRoutes from "./routes/user/playGameRoutes.js";
import userRoutes from "./routes/user/userRoutes.js";

import { PORT, frontendURL, backendURL } from "@heroapp/shared";
const isTest = process.env.JEST_WORKER_ID !== undefined;

const corsOptions: CorsOptions = {
  origin: [frontendURL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const app = express();
const { requiresAuth } = pkg;

app.use(authMiddleware);
app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  const url = req.oidc.isAuthenticated() ? `${frontendURL}/home` : frontendURL;
  res.redirect(url);
});

app.use("/auth0/register", signUpRoute);
app.use("/login", loginRoute);
app.use("/loggedUser", checkAuthRoute);
app.use("/callback", callbackroute);

app.use("/allUsers", requiresAuth(), requiresAdmin, allUserRoutes);
app.use("/gameitems/heroes", requiresAuth(), requiresAdmin, heroRoutes);
app.use("/gameitems/items", requiresAuth(), requiresAdmin, itemRoutes);
app.use("/gameitems/spells", requiresAuth(), requiresAdmin, spellRoutes);
app.use("/collection/admin", requiresAuth(), requiresAdmin, adminUserRoutes);

app.use("/game", requiresAuth(), playGameRoutes);
app.use("/user", requiresAuth(), userRoutes);

app.use(errorHandler);

if (!process.env.JEST_WORKER_ID) {
  connectDB();
  const port = Number(process.env.PORT) || PORT || 3000;
  app.listen(port, () => {
    logger.info(`Server is running at ${backendURL}`);
  });
}

export default app;
