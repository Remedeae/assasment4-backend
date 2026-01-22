import connectDB from "../db.js";
import { ItemModel, SpellModel } from "../models/GameData.js";
import { HeroModel } from "../models/Hero.js";
import { PlayerModel, PlayerHeroModel } from "../models/Player.js";
import { readCsv } from "./readCsv.js";
import { parseCSVRows } from "./validateCsv.js";
import {
  SpellCsvSchema,
  ItemCsvSchema,
} from "../../types/validation/csvValidation/csvValidation.js";

const seed = async () => {
  try {
    await connectDB();
    console.log("Reading CSV");
    //const spells = await readCsv("./src/mongoDB/seed/spells.csv");
    const items = await readCsv("./src/mongoDB/seed/items.csv");
    console.log("Validating CSVs");
    //const { valid, errors } = parseCSVRows(SpellCsvSchema, spells);
    const { valid, errors } = parseCSVRows(ItemCsvSchema, items);
    console.log(errors);

    if (errors.length) {
      console.error("Error validating CSV, seed failed");
      process.exit(1);
    }

    await ItemModel.insertMany(valid);
    //await SpellModel.insertMany(valid);
    console.log("DB seeded successfully");

    process.exit(0);
  } catch (error) {
    console.error("Seeding failed", error);
    process.exit(1);
  }
};
seed();
