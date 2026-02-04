import { z } from "zod";
export declare const PlayerHeroSchema: z.ZodObject<{
    heroId: z.ZodString;
    spellIds: z.ZodArray<z.ZodString>;
    equipmentIds: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export declare const InventorySchema: z.ZodObject<{
    heroes: z.ZodArray<z.ZodString>;
    items: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export declare const PlayerSchema: z.ZodObject<{
    auth0Id: z.ZodString;
    userName: z.ZodString;
    email: z.ZodString;
    inventory: z.ZodObject<{
        heroes: z.ZodArray<z.ZodString>;
        items: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
    levelsClear: z.ZodArray<z.ZodString>;
    team: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
