import { regex, z } from "zod";

const StatSchema = z.number().min(0).max(10);

export const StatBlockSchema = z.object({
  brawn: StatSchema,
  magic: StatSchema,
  lives: StatSchema,
  speed: StatSchema,
});

export const ItemSchema = z.object({
  name: z.string(),
  type: z.array(z.string()),
  description: z.string().optional(),
  modifier: z.string().optional(),
  tier: z.number().min(0).max(3).optional(),
  equipHand: z
    .string()
    .regex(/^(Main|Two|Any|Off)-hand$/)
    .optional(),
  weapontype: z
    .enum(["melee", "versatile", "thrown", "ranged", "magic"])
    .optional(),
  price: z.number().positive().optional(),
  quantity: z.number().default(1),
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
