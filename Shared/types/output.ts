import { z } from "zod";
import * as g from "./base/generalGamedataSchema";
import * as h from "./base/heroDataSchema";
import { PlayerSchema, PlayerHeroSchema } from "./base/playerSchema";
import { mongoIdSchema } from "./base/mongoId";

export const OutputItem = g.ItemSchema.extend({
  _id: mongoIdSchema,
  description: z.string().nullable().default(null),
  modifier: z.string().nullable().default(null),
  tier: g.tierSchema.nullable().default(null),
  equipHand: g.equipHandSchema.nullable().default(null),
  weapontype: g.weaponTypeSchema.nullable().default(null),
  price: z.number().positive().nullable().default(null),
});

export const OutputSpell = g.SpellSchema.extend({
  description: z.string().nullable().default(null),
  _id: mongoIdSchema,
});

export const OutputHero = h.HeroSchema.extend({
  image: z.string().nullable().default(null),
  traits: h.HeroTraitsSchema.extend({
    spellSchool: h.SpellSchoolSchema.nullable().default(null),
  }),
  _id: mongoIdSchema,
  createdAt: z.date(),
});

export const OutputPlayer = PlayerSchema.extend({
  _id: mongoIdSchema,
  createdAt: z.date(),
});
export const OutputPlayerHero = PlayerHeroSchema.extend({
  _id: mongoIdSchema,
  createdAt: z.date(),
});
export const OutputFullPlayerHero = z.object({
  hero: OutputHero,
  spells: z.array(OutputSpell),
  equipment: z.array(OutputItem),
  _id: mongoIdSchema,
  createdAt: z.date(),
});

export const OutputFullPlayer = z.object({
  user: OutputPlayer,
  heroes: z.array(OutputFullPlayerHero),
  items: z.array(OutputItem),
});
export const OutputFullHero = z.object({
  hero: OutputHero,
  spells: z.array(OutputSpell),
  equipment: z.array(OutputItem),
});
