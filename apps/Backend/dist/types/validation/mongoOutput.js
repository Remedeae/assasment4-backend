import { z } from "zod";
import * as type from "@heroapp/shared";
import { isValidObjectId } from "mongoose";
const mongoIdSchema = z.custom((v) => isValidObjectId(v), {
    message: "Invalid ObjectId",
});
export const BOutputItem = type.ItemSchema.extend({
    _id: mongoIdSchema,
});
export const BOutputSpell = type.SpellSchema.extend({
    _id: mongoIdSchema,
});
export const BOutputHero = type.HeroSchema.extend({
    _id: mongoIdSchema,
    createdAt: z.date(),
});
export const BOutputPlayer = type.PlayerSchema.extend({
    _id: mongoIdSchema,
    createdAt: z.date(),
});
export const BOutputPlayerHero = type.PlayerHeroSchema.extend({
    _id: mongoIdSchema,
    createdAt: z.date(),
});
export const BOutputFullPlayerHero = z.object({
    hero: BOutputHero,
    spells: z.array(BOutputSpell),
    equipment: z.array(BOutputItem),
    _id: mongoIdSchema,
    createdAt: z.date(),
});
export const BOutputFullPlayer = z.object({
    user: BOutputPlayer,
    heroes: z.array(BOutputFullPlayerHero),
    items: z.array(BOutputItem),
});
export const BOutputFullHero = z.object({
    hero: BOutputHero,
    spells: z.array(BOutputSpell),
    equipment: z.array(BOutputItem),
});
//# sourceMappingURL=mongoOutput.js.map