import { z } from "zod";
import { Types } from "mongoose";
export declare const BOutputItem: z.ZodObject<{
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
    _id: z.ZodCustom<Types.ObjectId, Types.ObjectId>;
}, z.core.$strip>;
export type BItemOutput = z.infer<typeof BOutputItem>;
export declare const BOutputSpell: z.ZodObject<{
    name: z.ZodString;
    school: z.ZodEnum<{
        [x: string]: string;
    }>;
    type: z.ZodEnum<{
        [x: string]: string;
    }>;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    _id: z.ZodCustom<Types.ObjectId, Types.ObjectId>;
}, z.core.$strip>;
export type BSpellOutput = z.infer<typeof BOutputSpell>;
export declare const BOutputHero: z.ZodObject<{
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
    _id: z.ZodCustom<Types.ObjectId, Types.ObjectId>;
    createdAt: z.ZodDate;
}, z.core.$strip>;
export type BHeroOutput = z.infer<typeof BOutputHero>;
export declare const BOutputPlayer: z.ZodObject<{
    auth0Id: z.ZodString;
    userName: z.ZodString;
    email: z.ZodString;
    inventory: z.ZodObject<{
        heroes: z.ZodArray<z.ZodString>;
        itemsIds: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
    levelsClear: z.ZodArray<z.ZodString>;
    team: z.ZodArray<z.ZodString>;
    _id: z.ZodCustom<Types.ObjectId, Types.ObjectId>;
    createdAt: z.ZodDate;
}, z.core.$strip>;
export type BPlayerOutput = z.infer<typeof BOutputPlayer>;
export declare const BOutputPlayerHero: z.ZodObject<{
    heroId: z.ZodString;
    spellIds: z.ZodArray<z.ZodString>;
    equipmentIds: z.ZodArray<z.ZodString>;
    _id: z.ZodCustom<Types.ObjectId, Types.ObjectId>;
    createdAt: z.ZodDate;
}, z.core.$strip>;
export type BPlayerHeroOutput = z.infer<typeof BOutputPlayerHero>;
export declare const BOutputFullPlayerHero: z.ZodObject<{
    hero: z.ZodObject<{
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
        _id: z.ZodCustom<Types.ObjectId, Types.ObjectId>;
        createdAt: z.ZodDate;
    }, z.core.$strip>;
    spells: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        school: z.ZodEnum<{
            [x: string]: string;
        }>;
        type: z.ZodEnum<{
            [x: string]: string;
        }>;
        description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        _id: z.ZodCustom<Types.ObjectId, Types.ObjectId>;
    }, z.core.$strip>>;
    equipment: z.ZodArray<z.ZodObject<{
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
        _id: z.ZodCustom<Types.ObjectId, Types.ObjectId>;
    }, z.core.$strip>>;
    _id: z.ZodCustom<Types.ObjectId, Types.ObjectId>;
    createdAt: z.ZodDate;
}, z.core.$strip>;
export type BFullPlayerHeroOutput = z.infer<typeof BOutputFullPlayerHero>;
export declare const BOutputFullPlayer: z.ZodObject<{
    user: z.ZodObject<{
        auth0Id: z.ZodString;
        userName: z.ZodString;
        email: z.ZodString;
        inventory: z.ZodObject<{
            heroes: z.ZodArray<z.ZodString>;
            itemsIds: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        levelsClear: z.ZodArray<z.ZodString>;
        team: z.ZodArray<z.ZodString>;
        _id: z.ZodCustom<Types.ObjectId, Types.ObjectId>;
        createdAt: z.ZodDate;
    }, z.core.$strip>;
    heroes: z.ZodArray<z.ZodObject<{
        hero: z.ZodObject<{
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
            _id: z.ZodCustom<Types.ObjectId, Types.ObjectId>;
            createdAt: z.ZodDate;
        }, z.core.$strip>;
        spells: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            school: z.ZodEnum<{
                [x: string]: string;
            }>;
            type: z.ZodEnum<{
                [x: string]: string;
            }>;
            description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
            _id: z.ZodCustom<Types.ObjectId, Types.ObjectId>;
        }, z.core.$strip>>;
        equipment: z.ZodArray<z.ZodObject<{
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
            _id: z.ZodCustom<Types.ObjectId, Types.ObjectId>;
        }, z.core.$strip>>;
        _id: z.ZodCustom<Types.ObjectId, Types.ObjectId>;
        createdAt: z.ZodDate;
    }, z.core.$strip>>;
    items: z.ZodArray<z.ZodObject<{
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
        _id: z.ZodCustom<Types.ObjectId, Types.ObjectId>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type BFullPlayerOutput = z.infer<typeof BOutputFullPlayer>;
export declare const BOutputFullHero: z.ZodObject<{
    hero: z.ZodObject<{
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
        _id: z.ZodCustom<Types.ObjectId, Types.ObjectId>;
        createdAt: z.ZodDate;
    }, z.core.$strip>;
    spells: z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        school: z.ZodEnum<{
            [x: string]: string;
        }>;
        type: z.ZodEnum<{
            [x: string]: string;
        }>;
        description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
        _id: z.ZodCustom<Types.ObjectId, Types.ObjectId>;
    }, z.core.$strip>>;
    equipment: z.ZodArray<z.ZodObject<{
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
        _id: z.ZodCustom<Types.ObjectId, Types.ObjectId>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type BFullHeroOutput = z.infer<typeof BOutputFullHero>;
//# sourceMappingURL=mongoOutput.d.ts.map