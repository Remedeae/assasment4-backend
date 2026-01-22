import { z } from "zod";
export const PlayerHeroSchema = z.object({
    heroId: z.string(),
    spellIds: z.array(z.string()),
    equipmentIds: z.array(z.string()),
});
export const InventorySchema = z.object({
    heroes: z.array(z.string()),
    itemsIds: z.array(z.string()),
});
export const PlayerSchema = z.object({
    auth0Id: z.string().min(1),
    userName: z.string().min(1),
    email: z.string(),
    inventory: InventorySchema,
    levelsClear: z.array(z.string()), //names/ids for cleared levels - flags system???
    team: z.array(z.string()), //heroId in the inventory/heroes array that are selected
});
