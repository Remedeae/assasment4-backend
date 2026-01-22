import { z } from "zod";
import * as type from "@heroapp/shared";
import { isValidObjectId, Types } from "mongoose";

const mongoIdSchema = z.custom<Types.ObjectId>((v) => isValidObjectId(v), {
  message: "Invalid ObjectId",
});

export const BOutputItem = type.ItemSchema.extend({
  _id: mongoIdSchema,
});
export type BItemOutput = z.infer<typeof BOutputItem>;

export const BOutputSpell = type.SpellSchema.extend({
  _id: mongoIdSchema,
});
export type BSpellOutput = z.infer<typeof BOutputSpell>;

export const BOutputHero = type.HeroSchema.extend({
  _id: mongoIdSchema,
  createdAt: z.date(),
});
export type BHeroOutput = z.infer<typeof BOutputHero>;

export const BOutputPlayer = type.PlayerSchema.extend({
  _id: mongoIdSchema,
  createdAt: z.date(),
});
export type BPlayerOutput = z.infer<typeof BOutputPlayer>;

export const BOutputPlayerHero = type.PlayerHeroSchema.extend({
  _id: mongoIdSchema,
  createdAt: z.date(),
});
export type BPlayerHeroOutput = z.infer<typeof BOutputPlayerHero>;

export const BOutputFullPlayerHero = z.object({
  hero: BOutputHero,
  spells: z.array(BOutputSpell),
  equipment: z.array(BOutputItem),
  _id: mongoIdSchema,
  createdAt: z.date(),
});
export type BFullPlayerHeroOutput = z.infer<typeof BOutputFullPlayerHero>;

export const BOutputFullPlayer = z.object({
  user: BOutputPlayer,
  heroes: z.array(BOutputFullPlayerHero),
  items: z.array(BOutputItem),
});
export type BFullPlayerOutput = z.infer<typeof BOutputFullPlayer>;

export const BOutputFullHero = z.object({
  hero: BOutputHero,
  spells: z.array(BOutputSpell),
  equipment: z.array(BOutputItem),
});
export type BFullHeroOutput = z.infer<typeof BOutputFullHero>;
