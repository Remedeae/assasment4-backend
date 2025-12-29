import { z } from "zod";
import { ItemSchema } from "./GamedataSchema";

export const PlayerHeroSchema = z.object({
  heroId: z.string(),
  spellIds: z.array(z.string()),
  equipmentIds: z.array(z.string()),
});

export const PlayerSchema = z.object({
  userName: z.string(),
  email: z.string(),
  collection: z.object({
    heroes: z.array(PlayerHeroSchema),
    items: z.array(ItemSchema),
  }),
  levelsClear: z.array(z.string()), //names/ids for cleared levels - flags system???
  team: z.array(z.string()), //heroId in the collection/heroes array that are selected
});
