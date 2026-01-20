import { z } from "zod";
import * as g from "./base/generalGamedataSchema";
import * as h from "./base/heroDataSchema";
import * as p from "./base/playerSchema";
import { mongoIdSchema } from "./base/mongoId";

export const InputItem = g.ItemSchema.extend({
  description: z.string().optional(),
  modifier: z.string().optional(),
  tier: g.tierSchema.optional(),
  equipHand: g.equipHandSchema.optional(),
  weapontype: g.weaponTypeSchema.optional(),
  price: z.number().positive().optional(),
  quantity: z.number().optional(),
});

export const InputSpell = g.SpellSchema.extend({
  description: z.string().optional(),
});

export const InputHero = h.HeroSchema.extend({
  image: z.string().optional(),
  traits: h.HeroTraitsSchema.extend({
    spellSchool: h.SpellSchoolSchema.optional().nullable(),
    special: z.array(z.string()).optional(),
    combat: z.array(z.string()).optional(),
  }),
  startingEquipment: z.array(mongoIdSchema).optional(),
});

export const InputPlayer = p.PlayerSchema.extend({
  inventory: p.InventorySchema.extend({
    heroes: z.array(z.string()).optional(),
    itemsIds: z.array(z.string()).optional(),
  }),
  levelsClear: z.array(z.string()).optional(),
  team: z.array(z.string()).optional(),
});
export const InputPlayerHero = p.PlayerHeroSchema.extend({
  spellIds: z.array(z.string()).optional(),
  equipmentIds: z.array(z.string()).optional(),
});
