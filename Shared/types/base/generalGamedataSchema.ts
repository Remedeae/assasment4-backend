import { z } from "zod";

const StatSchema = z.number().min(0).max(20);
export const tierSchema = z.number().min(0).max(3);

export const equipHand = ["Main-hand", "Off-hand", "Two-hand", "Any-hand"];
export const weaponType = ["melee", "versatile", "thrown", "ranged", "magic"];
export const equipHandSchema = z.enum(equipHand);
export const weaponTypeSchema = z.enum(weaponType);

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
  description: z.string(),
  modifier: z.string(),
  tier: tierSchema,
  equipHand: equipHandSchema,
  weapontype: weaponTypeSchema,
  price: z.number().positive(),
  quantity: z.number(),
});

export const SpellSchema = z.object({
  name: z.string(),
  school: z.enum(spellSchool),
  type: z.enum(spellType),
  description: z.string(),
});
