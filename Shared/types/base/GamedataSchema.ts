import { z } from "zod";

const StatSchema = z.number().min(0).max(10);

export const StatBlockSchema = z.object({
  brawn: StatSchema,
  magic: StatSchema,
  lives: StatSchema,
  speed: StatSchema,
});

export const ItemSchema = z.object({
  name: z.string(),
  type: z.string(),
  description: z.string().optional(),
  modifier: z
    .string()
    .regex(/^[+-]\s(99|[1-9][0-9]?)$/, {
      message:
        "Modifier must be of format '+ n' or '- n' where n is between 1 and 99",
    })
    .optional(),
});

export const SpeelSchoolTypeSchema = z.object({
  name: z.string().min(1),
});

export const SpellSchoolSchema = z.object({
  name: z.string().min(1),
  typeId: z.string(),
});

export const SpellSchema = z.object({
  name: z.string(),
  schoolId: z.string(),
  description: z.string().optional(),
});
