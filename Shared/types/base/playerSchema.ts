import { z } from "zod";
import { ItemSchema } from "./generalGamedataSchema";

export const PlayerHeroSchema = z.object({
  heroId: z.string(),
  spellIds: z.array(z.string()),
  equipmentIds: z.array(z.string()),
});

export const PlayerSchema = z.object({
  userName: z.string(),
  email: z.string(),
  inventory: z.object({
    heroes: z.array(z.string()),
    itemsIds: z.array(z.string()),
  }),
  levelsClear: z.array(z.string()), //names/ids for cleared levels - flags system???
  team: z.array(z.string()), //heroId in the inventory/heroes array that are selected
});
