import { z } from "zod";

const StatSchema = z.number().min(0).max(10);
export const equipHand = ["Main-hand", "Off-hand", "Two-hand", "Any-hand"];
export const weaponType = ["melee", "versatile", "thrown", "ranged", "magic"];

export const spellSchool = [
  "fire",
  "frost",
  "water",
  "earth",
  "arcane",
  "shaman",
  "heretic",
  "miracle",
  "goblin",
  "shadow",
];
export const spellType = ["fire", "cold", "primal", "spirit"];

export const StatBlockSchema = z.object({
  brawn: StatSchema,
  magic: StatSchema,
  lives: StatSchema,
  speed: StatSchema,
});

export const ItemSchema = z.object({
  name: z.string(),
  type: z.array(z.string()),
  description: z.string().optional().nullable(),
  modifier: z.string().optional().nullable(),
  tier: z.number().min(0).max(3).optional().nullable(),
  equipHand: z.enum(equipHand).optional().nullable(),
  weapontype: z.enum(weaponType).optional().nullable(),
  price: z.number().positive().optional().nullable(),
  quantity: z.number().default(1),
});

export const SpellSchema = z.object({
  name: z.string(),
  school: z.enum(spellSchool),
  type: z.enum(spellType),
  description: z.string().optional().nullable(),
});
