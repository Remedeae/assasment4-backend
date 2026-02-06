import { z } from "zod";
export declare const InputItem: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodArray<z.ZodString>;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    modifier: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    tier: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    equipHand: z.ZodDefault<z.ZodNullable<z.ZodEnum<{
        [x: string]: string;
    }>>>;
    weapontype: z.ZodDefault<z.ZodNullable<z.ZodEnum<{
        [x: string]: string;
    }>>>;
    price: z.ZodDefault<z.ZodNullable<z.ZodNumber>>;
    quantity: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
export declare const InputSpell: z.ZodObject<{
    name: z.ZodString;
    school: z.ZodEnum<{
        [x: string]: string;
    }>;
    type: z.ZodEnum<{
        [x: string]: string;
    }>;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const InputHero: z.ZodObject<{
    name: z.ZodString;
    title: z.ZodString;
    image: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    description: z.ZodObject<{
        looks: z.ZodString;
        clothes: z.ZodString;
        treasure: z.ZodString;
        likes: z.ZodString;
        dislikes: z.ZodString;
    }, z.core.$strip>;
    stats: z.ZodObject<{
        brawn: z.ZodNumber;
        magic: z.ZodNumber;
        lives: z.ZodNumber;
        speed: z.ZodNumber;
    }, z.core.$strip>;
    traits: z.ZodObject<{
        spellcaster: z.ZodBoolean;
        spellSchool: z.ZodDefault<z.ZodNullable<z.ZodEnum<{
            [x: string]: string;
        }>>>;
        special: z.ZodDefault<z.ZodArray<z.ZodString>>;
        combat: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
    startingEquipment: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const InputPlayer: z.ZodObject<{
    auth0Id: z.ZodString;
    username: z.ZodString;
    email: z.ZodString;
    roles: z.ZodDefault<z.ZodArray<z.ZodString>>;
    inventory: z.ZodObject<{
        heroes: z.ZodDefault<z.ZodArray<z.ZodString>>;
        items: z.ZodDefault<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>;
    levelsClear: z.ZodDefault<z.ZodArray<z.ZodString>>;
    team: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
export declare const InputPlayerHero: z.ZodObject<{
    heroId: z.ZodString;
    spellIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
    equipmentIds: z.ZodDefault<z.ZodArray<z.ZodString>>;
}, z.core.$strip>;
