import mongoose from "mongoose";
export declare const ItemModel: mongoose.Model<{
    type: string[];
    name: string;
    quantity: number;
    description?: string | null;
    modifier?: string | null;
    tier?: number | null;
    price?: number | null;
    equipHand?: string | null;
    weapontype?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    type: string[];
    name: string;
    quantity: number;
    description?: string | null;
    modifier?: string | null;
    tier?: number | null;
    price?: number | null;
    equipHand?: string | null;
    weapontype?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    type: string[];
    name: string;
    quantity: number;
    description?: string | null;
    modifier?: string | null;
    tier?: number | null;
    price?: number | null;
    equipHand?: string | null;
    weapontype?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    type: string[];
    name: string;
    quantity: number;
    description?: string | null;
    modifier?: string | null;
    tier?: number | null;
    price?: number | null;
    equipHand?: string | null;
    weapontype?: string | null;
}, mongoose.Document<unknown, {}, {
    type: string[];
    name: string;
    quantity: number;
    description?: string | null;
    modifier?: string | null;
    tier?: number | null;
    price?: number | null;
    equipHand?: string | null;
    weapontype?: string | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    type: string[];
    name: string;
    quantity: number;
    description?: string | null;
    modifier?: string | null;
    tier?: number | null;
    price?: number | null;
    equipHand?: string | null;
    weapontype?: string | null;
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
        type: string[];
        name: string;
        quantity: number;
        description?: string | null;
        modifier?: string | null;
        tier?: number | null;
        price?: number | null;
        equipHand?: string | null;
        weapontype?: string | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        type: string[];
        name: string;
        quantity: number;
        description?: string | null;
        modifier?: string | null;
        tier?: number | null;
        price?: number | null;
        equipHand?: string | null;
        weapontype?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    type: string[];
    name: string;
    quantity: number;
    description?: string | null;
    modifier?: string | null;
    tier?: number | null;
    price?: number | null;
    equipHand?: string | null;
    weapontype?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    type: string[];
    name: string;
    quantity: number;
    description?: string | null;
    modifier?: string | null;
    tier?: number | null;
    price?: number | null;
    equipHand?: string | null;
    weapontype?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const SpellModel: mongoose.Model<{
    type: string;
    name: string;
    school: string;
    description?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    type: string;
    name: string;
    school: string;
    description?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    type: string;
    name: string;
    school: string;
    description?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    type: string;
    name: string;
    school: string;
    description?: string | null;
}, mongoose.Document<unknown, {}, {
    type: string;
    name: string;
    school: string;
    description?: string | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    type: string;
    name: string;
    school: string;
    description?: string | null;
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
        type: string;
        name: string;
        school: string;
        description?: string | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        type: string;
        name: string;
        school: string;
        description?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    type: string;
    name: string;
    school: string;
    description?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    type: string;
    name: string;
    school: string;
    description?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=GameData.d.ts.map