import "dotenv/config";
import express from "express";
import connectDB from "./mongoDB/db";
import cors from "cors";
import type { CorsOptions } from "cors";
import { errorHandler } from "./middleware/errorHandler";

import allUserRoutes from "./routes/admin/allUsersRoutes";
import heroRoutes from "./routes/admin/heroRoutes";
import itemRoutes from "./routes/admin/itemRoutes";
import spellRoutes from "./routes/admin/spellRoutes";
import adminUserRoutes from "./routes/admin/userRoutes";
import adminSignUpRoutes from "./routes/admin/signUpRoutes";

import playGameRoutes from "./routes/user/playGameRoutes";
import userRoutes from "./routes/user/userRoutes";
import userSignUpRoutes from "./routes/user/signUpRoutes";

const corsOptions: CorsOptions = {
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
};

const PORT = 3000;
const app = express();

connectDB();

app.use(express.json());
app.use(cors(corsOptions));

app.use("/home/admin", allUserRoutes);
app.use("/gameitems/heroes", heroRoutes);
app.use("/gameitems/items", itemRoutes);
app.use("/gameitems/spells", spellRoutes);
app.use("/collection/admin", adminUserRoutes);
app.use("/signup/admin", adminSignUpRoutes);

app.use("/game", playGameRoutes);
app.use("/user", userRoutes);
app.use("/signup/user", userSignUpRoutes);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
