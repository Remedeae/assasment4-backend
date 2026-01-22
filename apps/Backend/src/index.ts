import "dotenv/config";
import express from "express";
import pkg from "express-openid-connect";
import connectDB from "./mongoDB/db.js";
import cors from "cors";
import type { CorsOptions } from "cors";

import { authMiddleware, requiresAdmin } from "./middleware/auth/auth.js";
import { errorHandler } from "./middleware/errorHandler.js";

import allUserRoutes from "./api/routes/admin/allUsersRoutes.js";
import heroRoutes from "./api/routes/admin/heroRoutes.js";
import itemRoutes from "./api/routes/admin/itemRoutes.js";
import spellRoutes from "./api/routes/admin/spellRoutes.js";
import adminUserRoutes from "./api/routes/admin/userRoutes.js";

import signUpRoute from "./api/routes/signUpRoutes.js";
import checkAuthRoute from "./api/routes/checkAuthRoute.js";

import playGameRoutes from "./api/routes/user/playGameRoutes.js";
import userRoutes from "./api/routes/user/userRoutes.js";

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

app.get("/", (req, res) => {
  const isAuthenticated = req.oidc.isAuthenticated();
  if (!isAuthenticated) {
    res.redirect(`${frontendURL}`);
  }
  res.redirect(`${frontendURL}/home`);
});

app.use("/signup/user", signUpRoute);
app.use("/loggedUser", requiresAuth(), checkAuthRoute);

app.use("/allUsers", requiresAuth(), requiresAdmin, allUserRoutes);
app.use("", requiresAuth(), requiresAdmin, heroRoutes);
app.use("/gameitems/items", requiresAuth(), requiresAdmin, itemRoutes);
app.use("/gameitems/spells", requiresAuth(), requiresAdmin, spellRoutes);
app.use("/collection/admin", requiresAuth(), requiresAdmin, adminUserRoutes);

app.use("/game", requiresAuth(), playGameRoutes);
app.use("/user", requiresAuth(), userRoutes);

app.use(errorHandler);
/* app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
}); */
