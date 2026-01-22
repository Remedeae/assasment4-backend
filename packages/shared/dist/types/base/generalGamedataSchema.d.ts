import { z } from "zod";
export declare const tierSchema: z.ZodNumber;
export declare const equipHand: string[];
export declare const weaponType: string[];
export declare const equipHandSchema: z.ZodEnum<{
    [x: string]: string;
}>;
export declare const weaponTypeSchema: z.ZodEnum<{
    [x: string]: string;
}>;
export declare const spellSchool: string[];
export declare const spellType: string[];
export declare const StatBlockSchema: z.ZodObject<{
    brawn: z.ZodNumber;
    magic: z.ZodNumber;
    lives: z.ZodNumber;
    speed: z.ZodNumber;
}, z.core.$strip>;
export declare const ItemSchema: z.ZodObject<{
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
    quantity: z.ZodNumber;
}, z.core.$strip>;
export declare const SpellSchema: z.ZodObject<{
    name: z.ZodString;
    school: z.ZodEnum<{
        [x: string]: string;
    }>;
    type: z.ZodEnum<{
        [x: string]: string;
    }>;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
