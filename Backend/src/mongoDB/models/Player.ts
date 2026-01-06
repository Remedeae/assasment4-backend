import mongoose, { Schema } from "mongoose";
import { lowercase, required } from "zod/mini";

const PlayerHeroMongoSchema = new Schema({
  heroId: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  spellIds: { type: [String], default: [] },
  equipmentIds: { type: [String], default: [] },
});

const PlayerMongoSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  admin: { type: Boolean, required: true, default: false },
  email: { type: String, required: true },
  inventory: new Schema(
    {
      heroes: { type: [String], default: [] },
      items: { type: [String], default: [] },
    },
    { _id: false }
  ),
  levelsClear: { type: [String], default: [] },
  team: { type: [String], default: [] },
});

export const PlayerHeroModel = mongoose.model(
  "PlayerHero",
  PlayerHeroMongoSchema
);
export const PlayerModel = mongoose.model("Player", PlayerMongoSchema);
