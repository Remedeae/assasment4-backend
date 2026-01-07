import { z } from "zod";

export const PlayerHeroSchema = z.object({
  heroId: z.string(),
  spellIds: z.array(z.string()),
  equipmentIds: z.array(z.string()),
  createdAt: z.date(),
});

export const PlayerSchema = z.object({
  auth0Id: z.string().min(1),
  userName: z.string().min(1),
  email: z.string(),
  inventory: z.object({
    heroes: z.array(z.string()).default([]),
    itemsIds: z.array(z.string()).default([]),
  }),
  levelsClear: z.array(z.string()).default([]), //names/ids for cleared levels - flags system???
  team: z.array(z.string()).default([]), //heroId in the inventory/heroes array that are selected
  createdAt: z.date(),
});
