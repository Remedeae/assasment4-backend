import "dotenv/config";
import express from "express";
import pkg from "express-openid-connect";
import connectDB from "./mongoDB/db.js";
import cors from "cors";
import type { CorsOptions } from "cors";

import { authMiddleware, requiresAdmin } from "./middleware/auth/auth.js";
import { errorHandler } from "./middleware/errorHandler.js";

import allUserRoutes from "./routes/admin/allUsersRoutes.js";
import heroRoutes from "./routes/admin/heroRoutes.js";
import itemRoutes from "./routes/admin/itemRoutes.js";
import spellRoutes from "./routes/admin/spellRoutes.js";
import adminUserRoutes from "./routes/admin/userRoutes.js";

import signUpRoute from "./routes/signUpRoutes.js";
import checkAuthRoute from "./routes/checkAuthRoute.js";

import playGameRoutes from "./routes/user/playGameRoutes.js";
import userRoutes from "./routes/user/userRoutes.js";

import { PORT, frontendURL } from "@heroapp/shared";

const corsOptions: CorsOptions = {
  origin: [frontendURL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const app = express();
const { requiresAuth } = pkg;

connectDB();

app.use(authMiddleware);
app.use(express.json());
app.use(cors(corsOptions));

app.get("/api/", (req, res) => {
  const isAuthenticated = req.oidc.isAuthenticated();
  if (!isAuthenticated) {
    res.redirect(`${frontendURL}`);
  }
  res.redirect(`${frontendURL}/home`);
});

app.use("/api/signup/user", signUpRoute);
app.use("/api/loggedUser", requiresAuth(), checkAuthRoute);

app.use("/api/allUsers", requiresAuth(), requiresAdmin, allUserRoutes);
app.use("/api/gameitems/heroes", requiresAuth(), requiresAdmin, heroRoutes);
app.use("/api/gameitems/items", requiresAuth(), requiresAdmin, itemRoutes);
app.use("/api/gameitems/spells", requiresAuth(), requiresAdmin, spellRoutes);
app.use(
  "/api/collection/admin",
  requiresAuth(),
  requiresAdmin,
  adminUserRoutes,
);

app.use("/api/game", requiresAuth(), playGameRoutes);
app.use("/api/user", requiresAuth(), userRoutes);

app.use(errorHandler);

const port = Number(process.env.PORT) || PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
