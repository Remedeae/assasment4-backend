import mongoose, { Schema } from "mongoose";

const ItemMongoSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  description: String,
  modifier: String,
});

const SpellSchoolTypeMongoSchema = new Schema({
  name: { type: String, required: true },
});

const SpellSchoolMongoSchema = new Schema({
  name: { type: String, required: true },
  typeId: { type: String, required: true },
});

const SpellMongoSchema = new Schema({
  name: { type: String, required: true },
  schoolId: { type: String, required: true },
  description: { type: String },
});

export const ItemModel = mongoose.model("Item", ItemMongoSchema);
export const SpellModel = mongoose.model("Spell", SpellMongoSchema);
export const SpellSchoolModel = mongoose.model(
  "SpellSchool",
  SpellSchoolMongoSchema
);
export const SpellSchoolTypeModel = mongoose.model(
  "SpellSchoolType",
  SpellSchoolTypeMongoSchema
);
