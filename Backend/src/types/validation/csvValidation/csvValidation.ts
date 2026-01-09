import { z } from "../../../../../Shared/node_modules/zod";
import * as h from "./csvHelpers";
import {
  equipHand,
  weaponType,
  spellSchool,
  spellType,
} from "../../../../../Shared/types/base/generalGamedataSchema";

const arraySplitter: string = "|";

export const ItemCsvSchema = z.object({
  name: z.string(),
  type: h.csvArrayOptional(arraySplitter),
  description: h.csvStringOptional,
  modifier: h.csvStringOptional,
  tier: h.csvNumberOptional(z.number().min(0).max(3)),
  equipHand: h.csvEnumOptional(equipHand),
  weapontype: h.csvEnumOptional(weaponType),
  price: h.csvNumberOptional(z.number().positive()),
  quantity: h.csvNumberDefault(z.number(), 1),
});

export const SpellCsvSchema = z.object({
  name: z.string(),
  school: z.enum(spellSchool),
  type: z.enum(spellType),
  description: h.csvStringOptional,
});

const StatCsvSchema = h.csvNumber(z.number().min(0).max(10));

const StatBlockSchema = z.object({
  brawn: StatCsvSchema,
  magic: StatCsvSchema,
  lives: StatCsvSchema,
  speed: StatCsvSchema,
});

const HeroDescriptionCsvSchema = z.object({
  looks: z.string(),
  clothes: z.string(),
  treasure: z.string(),
  likes: z.string(),
  dislikes: z.string(),
});

const HeroTraitsCsvSchema = z.object({
  spellcaster: h.csvBoolean,
  spellSchool: h.csvEnumOptional(spellSchool),
  special: h.csvArrayOptional(arraySplitter),
  combat: h.csvArrayOptional(arraySplitter),
});

export const HeroCsvSchema = z.object({
  name: z.string(),
  image: h.csvStringOptional,
  description: HeroDescriptionCsvSchema,
  traits: HeroTraitsCsvSchema,
  stats: StatBlockSchema,
  startingEquipment: h.csvArray(arraySplitter),
});
