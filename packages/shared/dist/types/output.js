import { z } from "zod";
import * as g from "./base/generalGamedataSchema.js";
import * as h from "./base/heroDataSchema.js";
import { PlayerSchema, PlayerHeroSchema } from "./base/playerSchema.js";
import { mongoIdSchema } from "./base/mongoId.js";
export const OutputItem = g.ItemSchema.extend({
    _id: mongoIdSchema,
});
export const OutputSpell = g.SpellSchema.extend({
    _id: mongoIdSchema,
});
export const OutputHero = h.HeroSchema.extend({
    _id: mongoIdSchema,
    createdAt: z.date(),
});
export const OutputPlayer = PlayerSchema.extend({
    _id: mongoIdSchema,
    createdAt: z.date(),
});
export const OutputPlayerHero = PlayerHeroSchema.extend({
    _id: mongoIdSchema,
    createdAt: z.date(),
});
export const OutputFullPlayerHero = z.object({
    hero: OutputHero,
    spells: z.array(OutputSpell),
    equipment: z.array(OutputItem),
    _id: mongoIdSchema,
    createdAt: z.date(),
});
export const OutputFullPlayer = z.object({
    user: OutputPlayer,
    heroes: z.array(OutputFullPlayerHero),
    items: z.array(OutputItem),
});
export const OutputFullHero = z.object({
    hero: OutputHero,
    spells: z.array(OutputSpell),
    equipment: z.array(OutputItem),
});
