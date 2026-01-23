import { z } from "zod";
export declare const ItemCsvSchema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodString>, z.ZodTransform<string[] | undefined, string>>>;
    description: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodOptional<z.ZodString>>;
    modifier: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodOptional<z.ZodString>>;
    tier: z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodOptional<z.ZodNumber>>;
    equipHand: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodOptional<z.ZodEnum<{
        [x: string]: string;
    }>>>;
    weapontype: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodOptional<z.ZodEnum<{
        [x: string]: string;
    }>>>;
    price: z.ZodPipe<z.ZodTransform<number | undefined, unknown>, z.ZodOptional<z.ZodNumber>>;
    quantity: z.ZodPipe<z.ZodTransform<number, unknown>, z.ZodNumber>;
}, z.core.$strip>;
export declare const SpellCsvSchema: z.ZodObject<{
    name: z.ZodString;
    school: z.ZodEnum<{
        [x: string]: string;
    }>;
    type: z.ZodEnum<{
        [x: string]: string;
    }>;
    description: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodOptional<z.ZodString>>;
}, z.core.$strip>;
export declare const HeroCsvSchema: z.ZodObject<{
    name: z.ZodString;
    title: z.ZodString;
    image: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodOptional<z.ZodString>>;
    description: z.ZodObject<{
        looks: z.ZodString;
        clothes: z.ZodString;
        treasure: z.ZodString;
        likes: z.ZodString;
        dislikes: z.ZodString;
    }, z.core.$strip>;
    traits: z.ZodObject<{
        spellcaster: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodBoolean>;
        spellSchool: z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodOptional<z.ZodEnum<{
            [x: string]: string;
        }>>>;
        special: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodString>, z.ZodTransform<string[] | undefined, string>>>;
        combat: z.ZodOptional<z.ZodPipe<z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodString>, z.ZodTransform<string[] | undefined, string>>>;
    }, z.core.$strip>;
    stats: z.ZodObject<{
        brawn: z.ZodPipe<z.ZodTransform<number, unknown>, z.ZodNumber>;
        magic: z.ZodPipe<z.ZodTransform<number, unknown>, z.ZodNumber>;
        lives: z.ZodPipe<z.ZodTransform<number, unknown>, z.ZodNumber>;
        speed: z.ZodPipe<z.ZodTransform<number, unknown>, z.ZodNumber>;
    }, z.core.$strip>;
    startingEquipment: z.ZodPipe<z.ZodString, z.ZodTransform<string[], string>>;
}, z.core.$strip>;
//# sourceMappingURL=csvValidation.d.ts.map