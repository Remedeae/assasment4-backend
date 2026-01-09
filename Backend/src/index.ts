import "dotenv/config";
import express from "express";
import pkg from "express-openid-connect";
import connectDB from "./mongoDB/db";
import cors from "cors";
import type { CorsOptions } from "cors";

import { authMiddleware, requiresAdmin } from "./middleware/auth/auth";
import { errorHandler } from "./middleware/errorHandler";

import allUserRoutes from "./routes/admin/allUsersRoutes";
import heroRoutes from "./routes/admin/heroRoutes";
import itemRoutes from "./routes/admin/itemRoutes";
import spellRoutes from "./routes/admin/spellRoutes";
import adminUserRoutes from "./routes/admin/userRoutes";

import signUpRoute from "./routes/signUpRoutes";
import checkAuthRoute from "./routes/checkAuthRoute";

import playGameRoutes from "./routes/user/playGameRoutes";
import userRoutes from "./routes/user/userRoutes";

import { PORT, frontendURL } from "../../Shared/variables/url";

const corsOptions: CorsOptions = {
  origin: [frontendURL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const app = express();
const { requiresAuth } = pkg;

connectDB();

app.get("/", (req, res) => {
  res.redirect("http://localhost:5173/home");
});

app.use(authMiddleware);
app.use(express.json());
app.use(cors(corsOptions));

app.use("/signup/user", signUpRoute);
app.use("/loggedUser", requiresAuth(), checkAuthRoute);

app.use("/allUsers", requiresAuth(), requiresAdmin, allUserRoutes);
app.use("/gameitems/heroes", requiresAuth(), requiresAdmin, heroRoutes);
app.use("/gameitems/items", requiresAuth(), requiresAdmin, itemRoutes);
app.use("/gameitems/spells", requiresAuth(), requiresAdmin, spellRoutes);
app.use("/collection/admin", requiresAuth(), requiresAdmin, adminUserRoutes);

app.use("/game", requiresAuth(), playGameRoutes);
app.use("/user", requiresAuth(), userRoutes);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
