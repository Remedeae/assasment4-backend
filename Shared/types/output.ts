import { z } from "zod";
import { ItemSchema, SpellSchema } from "./base/generalGamedataSchema";
import { HeroSchema } from "./base/heroDataSchema";
import { PlayerSchema, PlayerHeroSchema } from "./base/playerSchema";

export const OutputItem = ItemSchema.extend({
  id: z.string(),
});

export const OutputSpell = SpellSchema.extend({
  id: z.string(),
});

export const OutputHero = HeroSchema.extend({
  id: z.string(),
  createdAt: z.date(),
});

export const OutputPlayer = PlayerSchema.extend({
  id: z.string(),
  createdAt: z.date(),
});
export const OutputPlayerHero = PlayerHeroSchema.extend({
  id: z.string(),
  createdAt: z.date(),
});
export const OutputFullPlayerHero = z.object({
  hero: OutputHero,
  spells: z.array(OutputSpell),
  equipment: z.array(OutputItem),
  id: z.string(),
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
