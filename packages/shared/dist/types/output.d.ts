import { z } from "zod";
export declare const OutputItem: z.ZodObject<{
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
    _id: z.ZodString;
}, z.core.$strip>;
export declare const OutputSpell: z.ZodObject<{
    name: z.ZodString;
    school: z.ZodEnum<{
        [x: string]: string;
    }>;
    type: z.ZodEnum<{
        [x: string]: string;
    }>;
    description: z.ZodDefault<z.ZodNullable<z.ZodString>>;
    _id: z.ZodString;
}, z.core.$strip>;
export declare const OutputHero: z.ZodObject<{
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
    _id: z.ZodString;
    createdAt: z.ZodDate;
}, z.core.$strip>;
export declare const OutputPlayer: z.ZodObject<{
    auth0Id: z.ZodString;
    username: z.ZodString;
    email: z.ZodString;
    roles: z.ZodArray<z.ZodString>;
    inventory: z.ZodObject<{
        heroes: z.ZodArray<z.ZodString>;
        items: z.ZodArray<z.ZodString>;
    }, z.core.$strip>;
    levelsClear: z.ZodArray<z.ZodString>;
    team: z.ZodArray<z.ZodString>;
    _id: z.ZodString;
    createdAt: z.ZodDate;
}, z.core.$strip>;
export declare const OutputPlayerHero: z.ZodObject<{
    heroId: z.ZodString;
    spellIds: z.ZodArray<z.ZodString>;
    equipmentIds: z.ZodArray<z.ZodString>;
    _id: z.ZodString;
    createdAt: z.ZodDate;
}, z.core.$strip>;
export declare const OutputFullPlayerHero: z.ZodObject<{
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
        _id: z.ZodString;
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
        _id: z.ZodString;
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
        _id: z.ZodString;
    }, z.core.$strip>>;
    _id: z.ZodString;
    createdAt: z.ZodDate;
}, z.core.$strip>;
export declare const OutputFullPlayer: z.ZodObject<{
    user: z.ZodObject<{
        auth0Id: z.ZodString;
        username: z.ZodString;
        email: z.ZodString;
        roles: z.ZodArray<z.ZodString>;
        inventory: z.ZodObject<{
            heroes: z.ZodArray<z.ZodString>;
            items: z.ZodArray<z.ZodString>;
        }, z.core.$strip>;
        levelsClear: z.ZodArray<z.ZodString>;
        team: z.ZodArray<z.ZodString>;
        _id: z.ZodString;
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
            _id: z.ZodString;
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
            _id: z.ZodString;
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
            _id: z.ZodString;
        }, z.core.$strip>>;
        _id: z.ZodString;
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
        _id: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const OutputFullHero: z.ZodObject<{
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
        _id: z.ZodString;
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
        _id: z.ZodString;
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
        _id: z.ZodString;
    }, z.core.$strip>>;
}, z.core.$strip>;
