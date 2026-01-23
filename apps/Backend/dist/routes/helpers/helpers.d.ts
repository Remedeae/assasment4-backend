import type mongoose from "mongoose";
import { Model, Types } from "mongoose";
import * as tsoutput from "../../types/validation/mongoOutput.js";
import { ZodObject } from "zod";
export declare const constructPlayerHero: (heroId: string, session: mongoose.ClientSession) => Promise<{
    heroId: string;
    spellIds: string[];
    equipmentIds: string[];
}>;
export declare const hydrateHeroes: (heroes: tsoutput.BHeroOutput[]) => Promise<{
    hero: {
        name: string;
        title: string;
        image: string | null;
        description: {
            looks: string;
            clothes: string;
            treasure: string;
            likes: string;
            dislikes: string;
        };
        traits: {
            spellcaster: boolean;
            spellSchool: string | null;
            special: string[];
            combat: string[];
        };
        stats: {
            brawn: number;
            magic: number;
            lives: number;
            speed: number;
        };
        startingEquipment: string[];
        _id: Types.ObjectId;
        createdAt: Date;
    };
    spells: {
        name: string;
        school: string;
        type: string;
        description: string | null;
        _id: Types.ObjectId;
    }[];
    equipment: {
        name: string;
        type: string[];
        description: string | null;
        modifier: string | null;
        tier: number | null;
        equipHand: string | null;
        weapontype: string | null;
        price: number | null;
        quantity: number;
        _id: Types.ObjectId;
    }[];
}[]>;
export declare const hydratePlayerHeroes: (user: tsoutput.BPlayerOutput) => Promise<{
    hero: {
        name: string;
        title: string;
        image: string | null;
        description: {
            looks: string;
            clothes: string;
            treasure: string;
            likes: string;
            dislikes: string;
        };
        traits: {
            spellcaster: boolean;
            spellSchool: string | null;
            special: string[];
            combat: string[];
        };
        stats: {
            brawn: number;
            magic: number;
            lives: number;
            speed: number;
        };
        startingEquipment: string[];
        _id: Types.ObjectId;
        createdAt: Date;
    };
    spells: {
        name: string;
        school: string;
        type: string;
        description: string | null;
        _id: Types.ObjectId;
    }[];
    equipment: {
        name: string;
        type: string[];
        description: string | null;
        modifier: string | null;
        tier: number | null;
        equipHand: string | null;
        weapontype: string | null;
        price: number | null;
        quantity: number;
        _id: Types.ObjectId;
    }[];
    _id: Types.ObjectId;
    createdAt: Date;
}[]>;
export declare const hydrateItems: (user: tsoutput.BPlayerOutput) => Promise<{
    name: string;
    type: string[];
    description: string | null;
    modifier: string | null;
    tier: number | null;
    equipHand: string | null;
    weapontype: string | null;
    price: number | null;
    quantity: number;
    _id: Types.ObjectId;
}[]>;
export declare const updateById: <S extends ZodObject<any>>(id: string, type: string, body: unknown, schema: S, Model: Model<any>) => Promise<any>;
export declare const deleteByID: (id: string, type: string, Model: Model<any>) => Promise<any>;
//# sourceMappingURL=helpers.d.ts.map