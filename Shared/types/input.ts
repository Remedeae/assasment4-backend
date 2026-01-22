import { z } from "zod";
import * as g from "./base/generalGamedataSchema";
import * as h from "./base/heroDataSchema";
import * as p from "./base/playerSchema";
import { mongoIdSchema } from "./base/mongoId";

export const InputItem = g.ItemSchema.extend({
  quantity: z.number().default(1),
});

export const InputSpell = g.SpellSchema.extend({});

export const InputHero = h.HeroSchema.extend({
  traits: h.HeroTraitsSchema.extend({
    special: z.array(z.string()).default([]),
    combat: z.array(z.string()).default([]),
  }),
  startingEquipment: z.array(mongoIdSchema).default([]),
});

export const InputPlayer = p.PlayerSchema.extend({
  inventory: p.InventorySchema.extend({
    heroes: z.array(z.string()).default([]),
    itemsIds: z.array(z.string()).default([]),
  }),
  levelsClear: z.array(z.string()).default([]),
  team: z.array(z.string()).default([]),
});
export const InputPlayerHero = p.PlayerHeroSchema.extend({
  spellIds: z.array(z.string()).default([]),
  equipmentIds: z.array(z.string()).default([]),
});
