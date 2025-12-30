import "dotenv/config";
import {connectBD} from "../db"
import mongoose from "mongoose";
import {
  ItemModel,
  SpellModel,
  SpellSchoolModel,
  SpellSchoolTypeModel,
} from "../models/GameData";
import { HeroModel } from "../models/Hero";
import { PlayerModel, PlayerHeroModel } from "../models/Player";

const seed = async () => {
try {
        await connectBD()

    const items = await ItemsModel.

    await mongoose.disconnect()
} catch (error) {
    console.error(error)
    process.exit(1)
}
}


