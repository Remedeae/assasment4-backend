import { z } from "../../../../Shared/node_modules/zod";
import * as gameitems from "../../../../Shared/types/base/generalGamedataSchema";
import * as hero from "../../../../Shared/types/base/heroDataSchema";
import * as player from "../../../../Shared/types/base/playerSchema";
import { Types } from "mongoose";

const mongoIdSchema = z.string().refine((v) => Types.ObjectId.isValid(v), {
  message: "Invalid MongoDb Object",
});

export const BOutputItem = gameitems.ItemSchema.extend({
  _id: mongoIdSchema,
});
export type BItemOutput = z.infer<typeof BOutputItem>;

export const BOutputSpell = gameitems.SpellSchema.extend({
  _id: mongoIdSchema,
});
export type BSpellOutput = z.infer<typeof BOutputSpell>;

export const BOutputHero = hero.HeroSchema.extend({
  _id: mongoIdSchema,
  createdAt: z.date(),
});
export type BHeroOutput = z.infer<typeof BOutputHero>;

export const BOutputPlayer = player.PlayerSchema.extend({
  _id: mongoIdSchema,
  createdAt: z.date(),
});
export type BPlayerOutput = z.infer<typeof BOutputPlayer>;

export const BOutputPlayerHero = player.PlayerHeroSchema.extend({
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
