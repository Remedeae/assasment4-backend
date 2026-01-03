import mongoose, { Schema } from "mongoose";

const PlayerHeroMongoSchema = new Schema({
  heroId: { type: String, required: true },
  spellIds: { type: [String], default: [] },
  equipmentIds: { type: [String], default: [] },
});

const PlayerMongoSchema = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  inventory: new Schema({
    heroes: { type: [String], default: [] },
    items: { type: [String], default: [] },
  }),
  levelsClear: { type: [String], default: [] },
  team: { type: [String], default: [] },
});

export const PlayerHeroModel = mongoose.model(
  "PlayerHero",
  PlayerHeroMongoSchema
);
export const PlayerModel = mongoose.model("Player", PlayerMongoSchema);
