import { z } from "zod";
import {
  ItemSchema,
  SpeelSchoolTypeSchema,
  SpellSchoolSchema,
  SpellSchema,
} from "./base/GamedataSchema";
import { HeroSchema } from "./base/heroDataSchema";
import { PlayerSchema, PlayerHeroSchema } from "./base/playerSchema";

import * as Output from "./output";

export type ItemInput = z.infer<typeof ItemSchema>;
export type ItemOutput = z.infer<typeof Output.ItemOutput>;

export type SpellInput = z.infer<typeof SpellSchema>;
export type SpellOutput = z.infer<typeof Output.SpellOutput>;

export type SpellSchoolInput = z.infer<typeof SpellSchoolSchema>;
export type SpellSchoolOutput = z.infer<typeof Output.SpellSchoolOutput>;

export type SchoolTypeInput = z.infer<typeof SpeelSchoolTypeSchema>;
export type SchoolTypeOutput = z.infer<typeof Output.SchoolTypeOutput>;

export type FullSpellOutput = z.infer<typeof Output.FullSpellOutput>;

export type HeroInput = z.infer<typeof HeroSchema>;
export type HeroOutput = z.infer<typeof Output.HeroOutput>;

export type PlayerInput = z.infer<typeof PlayerSchema>;
export type PlayerOutput = z.infer<typeof Output.PlayerOutput>;

export type PlayerHeroInput = z.infer<typeof PlayerHeroSchema>;
export type PlayerHeroOutput = z.infer<typeof Output.PlayerHeroOutput>;
export type FullPlayerHeroOutput = z.infer<typeof Output.FullPlayerHeroOutput>;
