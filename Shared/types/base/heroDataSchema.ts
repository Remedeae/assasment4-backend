import { z } from "zod";
import { StatBlockSchema } from "./generalGamedataSchema";

const HeroDescriptionSchema = z.object({
  looks: z.string(),
  clothes: z.string(),
  treasure: z.string(),
  likes: z.string(),
  dislikes: z.string(),
});

const HeroTraitsSchema = z.object({
  spellcaster: z.boolean(),
  spellSchoolId: z.string().optional(),
  special: z.array(z.string()).optional(),
  combat: z.array(z.string()).optional(),
});

export const HeroSchema = z.object({
  name: z.string(),
  image: z.string().optional(),
  description: HeroDescriptionSchema,
  traits: HeroTraitsSchema,
  stats: StatBlockSchema,
  startingEquipment: z.array(z.string()),
});
