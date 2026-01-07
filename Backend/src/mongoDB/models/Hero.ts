import mongoose, { Schema } from "mongoose";

const HeroMongoSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: new Schema(
    {
      looks: { type: String, required: true },
      clothes: { type: String, required: true },
      treasure: { type: String, required: true },
      likes: { type: String, required: true },
      dislikes: { type: String, required: true },
    },
    { _id: false }
  ),
  traits: new Schema(
    {
      spellcaster: { type: Boolean, required: true },
      spellSchool: { type: String },
      special: { type: [String], default: [] },
      combat: { type: [String], default: [] },
    },
    { required: true, _id: false }
  ),

  stats: new Schema(
    {
      brawn: { type: Number, required: true },
      magic: { type: Number, required: true },
      lives: { type: Number, required: true },
      speed: { type: Number, required: true },
    },
    { _id: false, required: true }
  ),
  startingEquipment: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

export const HeroModel = mongoose.model("Hero", HeroMongoSchema);
