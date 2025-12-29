import { z } from "zod";
import {
  ItemSchema,
  SpeelSchoolTypeSchema,
  SpellSchoolSchema,
  SpellSchema,
} from "./base/GamedataSchema";
import { HeroSchema } from "./base/heroDataSchema";
import { PlayerSchema, PlayerHeroSchema } from "./base/playerSchema";

export const ItemOutput = ItemSchema.extend({
  id: z.string(),
});

export const SpellOutput = SpellSchema.extend({
  id: z.string(),
});
export const SpellSchoolOutput = SpellSchoolSchema.extend({
  id: z.string(),
});
export const SchoolTypeOutput = SpeelSchoolTypeSchema.extend({
  id: z.string(),
});
export const FullSpellOutput = z.object({
  id: z.string(),
  name: z.string(),
  school: z.string(),
  schoolType: z.string(),
  description: z.string().optional(),
});

export const HeroOutput = HeroSchema.extend({
  id: z.string(),
});

export const PlayerOutput = PlayerSchema.extend({
  id: z.string(),
});
export const PlayerHeroOutput = PlayerHeroSchema.extend({
  id: z.string(),
});
export const FullPlayerHeroOutput = z.object({
  hero: HeroOutput,
  spells: z.array(FullSpellOutput),
  equipment: z.array(ItemOutput),
});
