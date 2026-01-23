import mongoose from "mongoose";
export declare const HeroModel: mongoose.Model<{
    name: string;
    title: string;
    startingEquipment: string[];
    createdAt: NativeDate;
    image?: string | null;
    description?: {
        looks: string;
        clothes: string;
        treasure: string;
        likes: string;
        dislikes: string;
    } | null;
    traits?: {
        spellcaster: boolean;
        special: string[];
        combat: string[];
        spellSchool?: string | null;
    } | null;
    stats?: {
        brawn: number;
        magic: number;
        lives: number;
        speed: number;
    } | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    title: string;
    startingEquipment: string[];
    createdAt: NativeDate;
    image?: string | null;
    description?: {
        looks: string;
        clothes: string;
        treasure: string;
        likes: string;
        dislikes: string;
    } | null;
    traits?: {
        spellcaster: boolean;
        special: string[];
        combat: string[];
        spellSchool?: string | null;
    } | null;
    stats?: {
        brawn: number;
        magic: number;
        lives: number;
        speed: number;
    } | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    name: string;
    title: string;
    startingEquipment: string[];
    createdAt: NativeDate;
    image?: string | null;
    description?: {
        looks: string;
        clothes: string;
        treasure: string;
        likes: string;
        dislikes: string;
    } | null;
    traits?: {
        spellcaster: boolean;
        special: string[];
        combat: string[];
        spellSchool?: string | null;
    } | null;
    stats?: {
        brawn: number;
        magic: number;
        lives: number;
        speed: number;
    } | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    title: string;
    startingEquipment: string[];
    createdAt: NativeDate;
    image?: string | null;
    description?: {
        looks: string;
        clothes: string;
        treasure: string;
        likes: string;
        dislikes: string;
    } | null;
    traits?: {
        spellcaster: boolean;
        special: string[];
        combat: string[];
        spellSchool?: string | null;
    } | null;
    stats?: {
        brawn: number;
        magic: number;
        lives: number;
        speed: number;
    } | null;
}, mongoose.Document<unknown, {}, {
    name: string;
    title: string;
    startingEquipment: string[];
    createdAt: NativeDate;
    image?: string | null;
    description?: {
        looks: string;
        clothes: string;
        treasure: string;
        likes: string;
        dislikes: string;
    } | null;
    traits?: {
        spellcaster: boolean;
        special: string[];
        combat: string[];
        spellSchool?: string | null;
    } | null;
    stats?: {
        brawn: number;
        magic: number;
        lives: number;
        speed: number;
    } | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    name: string;
    title: string;
    startingEquipment: string[];
    createdAt: NativeDate;
    image?: string | null;
    description?: {
        looks: string;
        clothes: string;
        treasure: string;
        likes: string;
        dislikes: string;
    } | null;
    traits?: {
        spellcaster: boolean;
        special: string[];
        combat: string[];
        spellSchool?: string | null;
    } | null;
    stats?: {
        brawn: number;
        magic: number;
        lives: number;
        speed: number;
    } | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        name: string;
        title: string;
        startingEquipment: string[];
        createdAt: NativeDate;
        image?: string | null;
        description?: {
            looks: string;
            clothes: string;
            treasure: string;
            likes: string;
            dislikes: string;
        } | null;
        traits?: {
            spellcaster: boolean;
            special: string[];
            combat: string[];
            spellSchool?: string | null;
        } | null;
        stats?: {
            brawn: number;
            magic: number;
            lives: number;
            speed: number;
        } | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        name: string;
        title: string;
        startingEquipment: string[];
        createdAt: NativeDate;
        image?: string | null;
        description?: {
            looks: string;
            clothes: string;
            treasure: string;
            likes: string;
            dislikes: string;
        } | null;
        traits?: {
            spellcaster: boolean;
            special: string[];
            combat: string[];
            spellSchool?: string | null;
        } | null;
        stats?: {
            brawn: number;
            magic: number;
            lives: number;
            speed: number;
        } | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    name: string;
    title: string;
    startingEquipment: string[];
    createdAt: NativeDate;
    image?: string | null;
    description?: {
        looks: string;
        clothes: string;
        treasure: string;
        likes: string;
        dislikes: string;
    } | null;
    traits?: {
        spellcaster: boolean;
        special: string[];
        combat: string[];
        spellSchool?: string | null;
    } | null;
    stats?: {
        brawn: number;
        magic: number;
        lives: number;
        speed: number;
    } | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    title: string;
    startingEquipment: string[];
    createdAt: NativeDate;
    image?: string | null;
    description?: {
        looks: string;
        clothes: string;
        treasure: string;
        likes: string;
        dislikes: string;
    } | null;
    traits?: {
        spellcaster: boolean;
        special: string[];
        combat: string[];
        spellSchool?: string | null;
    } | null;
    stats?: {
        brawn: number;
        magic: number;
        lives: number;
        speed: number;
    } | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=Hero.d.ts.map