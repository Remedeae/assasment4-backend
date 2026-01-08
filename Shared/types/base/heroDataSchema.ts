import { z } from "zod";
import { StatBlockSchema, spellSchool } from "./generalGamedataSchema";

const HeroDescriptionSchema = z.object({
  looks: z.string(),
  clothes: z.string(),
  treasure: z.string(),
  likes: z.string(),
  dislikes: z.string(),
});

const HeroTraitsSchema = z.object({
  spellcaster: z.boolean(),
  spellSchool: z.enum(spellSchool).optional().nullable(),
  special: z.array(z.string()).optional().nullable(),
  combat: z.array(z.string()).optional().nullable(),
});

export const HeroSchema = z.object({
  name: z.string(),
  image: z.string().optional().nullable(),
  description: HeroDescriptionSchema,
  traits: HeroTraitsSchema,
  stats: StatBlockSchema,
  startingEquipment: z.array(z.string()),
});
