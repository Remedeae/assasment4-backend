import { z } from "zod";
import * as g from "./base/generalGamedataSchema.js";
import * as h from "./base/heroDataSchema.js";
import * as p from "./base/playerSchema.js";
import { mongoIdSchema } from "./base/mongoId.js";
export const InputItem = g.ItemSchema.extend({
    quantity: z.number().default(1),
}).strip();
export const InputSpell = g.SpellSchema.extend({}).strip();
export const InputHero = h.HeroSchema.extend({
    traits: h.HeroTraitsSchema.extend({
        special: z.array(z.string()).default([]),
        combat: z.array(z.string()).default([]),
    }),
    startingEquipment: z.array(mongoIdSchema).default([]),
}).strip();
export const InputPlayer = p.PlayerSchema.extend({
    roles: z.array(z.string()).default(["user"]),
    inventory: p.InventorySchema.extend({
        heroes: z.array(z.string()).default([]),
        items: z.array(z.string()).default([]),
    }),
    levelsClear: z.array(z.string()).default([]),
    team: z.array(z.string()).default([]),
}).strip();
export const InputPlayerHero = p.PlayerHeroSchema.extend({
    spellIds: z.array(z.string()).default([]),
    equipmentIds: z.array(z.string()).default([]),
}).strip();
