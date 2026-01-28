import { z } from "zod";
import { StatBlockSchema, spellSchool } from "./generalGamedataSchema.js";
import { mongoIdSchema } from "./mongoId.js";

const HeroDescriptionSchema = z.object({
  looks: z.string(),
  clothes: z.string(),
  treasure: z.string(),
  likes: z.string(),
  dislikes: z.string(),
});

export const SpellSchoolSchema = z.enum(spellSchool).nullable().default(null);
export const HeroTraitsSchema = z.object({
  spellcaster: z.boolean(),
  spellSchool: SpellSchoolSchema,
  special: z.array(z.string()),
  combat: z.array(z.string()),
});

export const HeroSchema = z.object({
  name: z.string(),
  title: z.string(),
  image: z.string().nullable().default(null),
  description: HeroDescriptionSchema,
  traits: HeroTraitsSchema,
  stats: StatBlockSchema,
  startingEquipment: z.array(mongoIdSchema),
});
