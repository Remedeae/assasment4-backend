import { z } from "zod";
export declare const SpellSchoolSchema: z.ZodDefault<z.ZodNullable<z.ZodEnum<{
    [x: string]: string;
}>>>;
export declare const HeroTraitsSchema: z.ZodObject<{
    spellcaster: z.ZodBoolean;
    spellSchool: z.ZodDefault<z.ZodNullable<z.ZodEnum<{
        [x: string]: string;
    }>>>;
    special: z.ZodArray<z.ZodString>;
    combat: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
export declare const HeroSchema: z.ZodObject<{
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
    traits: z.ZodObject<{
        spellcaster: z.ZodBoolean;
        spellSchool: z.ZodDefault<z.ZodNullable<z.ZodEnum<{
            [x: string]: string;
        }>>>;
        special: z.ZodArray<z.ZodString>;
        combat: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
    stats: z.ZodObject<{
        brawn: z.ZodNumber;
        magic: z.ZodNumber;
        lives: z.ZodNumber;
        speed: z.ZodNumber;
    }, z.core.$strip>;
    startingEquipment: z.ZodArray<z.ZodString>;
}, z.core.$strip>;
