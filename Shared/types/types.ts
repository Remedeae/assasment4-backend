import { z } from "zod";
import {
  ItemSchema,
  SpellSchema,
} from "../../../Shared/types/base/generalGamedataSchema";
import { HeroSchema } from "../../../Shared/types/base/heroDataSchema";
import {
  PlayerSchema,
  PlayerHeroSchema,
} from "../../../Shared/types/base/playerSchema";
import * as Output from "./output";

export type ItemInput = z.infer<typeof ItemSchema>;
export type ItemOutput = z.infer<typeof Output.OutputItem>;

export type SpellInput = z.infer<typeof SpellSchema>;
export type SpellOutput = z.infer<typeof Output.OutputSpell>;

export type HeroInput = z.infer<typeof HeroSchema>;
export type HeroOutput = z.infer<typeof Output.OutputHero>;

export type PlayerInput = z.infer<typeof PlayerSchema>;
export type PlayerOutput = z.infer<typeof Output.OutputPlayer>;

export type PlayerHeroInput = z.infer<typeof PlayerHeroSchema>;
export type PlayerHeroOutput = z.infer<typeof Output.OutputPlayerHero>;
export type FullPlayerHeroOutput = z.infer<typeof Output.OutputFullPlayerHero>;
