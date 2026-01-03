import mongoose, { Schema } from "mongoose";
import {
  weaponType,
  equipHand,
  spellSchool,
  spellType,
} from "../../../../Shared/types/base/generalGamedataSchema";

const ItemMongoSchema = new Schema({
  name: { type: String, required: true },
  type: { type: [String], required: true },
  description: String,
  modifier: String,
  tier: Number,
  equipHand: { type: String, enum: equipHand },
  weapontype: {
    type: String,
    enum: weaponType,
  },
  price: Number,
  quantity: { type: Number, default: 1 },
});

const SpellMongoSchema = new Schema({
  name: { type: String, required: true },
  school: { type: String, enum: spellSchool, required: true },
  type: { type: String, enum: spellType, required: true },
  description: { type: String, require: true },
});

export const ItemModel = mongoose.model("Item", ItemMongoSchema);
export const SpellModel = mongoose.model("Spell", SpellMongoSchema);
