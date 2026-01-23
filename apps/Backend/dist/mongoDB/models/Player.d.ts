import mongoose from "mongoose";
export declare const PlayerHeroModel: mongoose.Model<{
    createdAt: NativeDate;
    heroId: string;
    spellIds: string[];
    equipmentIds: string[];
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    heroId: string;
    spellIds: string[];
    equipmentIds: string[];
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    heroId: string;
    spellIds: string[];
    equipmentIds: string[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    heroId: string;
    spellIds: string[];
    equipmentIds: string[];
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    heroId: string;
    spellIds: string[];
    equipmentIds: string[];
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    createdAt: NativeDate;
    heroId: string;
    spellIds: string[];
    equipmentIds: string[];
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
        createdAt: NativeDate;
        heroId: string;
        spellIds: string[];
        equipmentIds: string[];
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        createdAt: NativeDate;
        heroId: string;
        spellIds: string[];
        equipmentIds: string[];
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    createdAt: NativeDate;
    heroId: string;
    spellIds: string[];
    equipmentIds: string[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: NativeDate;
    heroId: string;
    spellIds: string[];
    equipmentIds: string[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const PlayerModel: mongoose.Model<{
    createdAt: NativeDate;
    auth0Id: string;
    userName: string;
    email: string;
    levelsClear: string[];
    team: string[];
    inventory?: {
        heroes: string[];
        items: string[];
    } | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    auth0Id: string;
    userName: string;
    email: string;
    levelsClear: string[];
    team: string[];
    inventory?: {
        heroes: string[];
        items: string[];
    } | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    auth0Id: string;
    userName: string;
    email: string;
    levelsClear: string[];
    team: string[];
    inventory?: {
        heroes: string[];
        items: string[];
    } | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    auth0Id: string;
    userName: string;
    email: string;
    levelsClear: string[];
    team: string[];
    inventory?: {
        heroes: string[];
        items: string[];
    } | null;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    auth0Id: string;
    userName: string;
    email: string;
    levelsClear: string[];
    team: string[];
    inventory?: {
        heroes: string[];
        items: string[];
    } | null;
}, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
    createdAt: NativeDate;
    auth0Id: string;
    userName: string;
    email: string;
    levelsClear: string[];
    team: string[];
    inventory?: {
        heroes: string[];
        items: string[];
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
        createdAt: NativeDate;
        auth0Id: string;
        userName: string;
        email: string;
        levelsClear: string[];
        team: string[];
        inventory?: {
            heroes: string[];
            items: string[];
        } | null;
    }, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<{
        createdAt: NativeDate;
        auth0Id: string;
        userName: string;
        email: string;
        levelsClear: string[];
        team: string[];
        inventory?: {
            heroes: string[];
            items: string[];
        } | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    createdAt: NativeDate;
    auth0Id: string;
    userName: string;
    email: string;
    levelsClear: string[];
    team: string[];
    inventory?: {
        heroes: string[];
        items: string[];
    } | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: NativeDate;
    auth0Id: string;
    userName: string;
    email: string;
    levelsClear: string[];
    team: string[];
    inventory?: {
        heroes: string[];
        items: string[];
    } | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=Player.d.ts.map