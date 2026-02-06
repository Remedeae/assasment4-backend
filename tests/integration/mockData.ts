import mongoose from "mongoose";

export const mockObjectId = new mongoose.Types.ObjectId();
export const mockDate = new Date();

//user-----------------
export const mockUser = {
  username: "Maya",
  auth0Id: "auth0|333",
  email: "m@b.com",
  inventory: {
    heroes: [],
    items: [],
  },
  levelsClear: [],
  team: [],
};
export const outputMockUser = {
  ...mockUser,
  _id: mockObjectId.toHexString(),
  createdAt: mockDate,
};

//hero-----------------
export const mockHero = {
  name: "Edward Elric",
  title: "Full Metal Alchemist",
  image: null,
  description: {
    looks: "Blonde young man with yellow eyes and a metal arm. Short.",
    clothes: "Red cape with the State emblem on the back.",
    treasure: "A pocket watch",
    likes: "Studying alchemy and science.",
    dislikes: "Milk and beeing called short.",
  },
  traits: {
    spellcaster: true,
    spellSchool: "earth",
    special: [
      "Transmutation: Edward can restructure any objects shape and molecular structure.",
      "Edward can preform transmutations without drawing a transmutation circle first. He must be able clap his hands together, forming the circle in that way.",
    ],
    combat: [],
  },
  stats: {
    brawn: 3,
    magic: 5,
    lives: 3,
    speed: 8,
  },
  startingEquipment: [`${mockObjectId.toHexString()}`],
};

export const outputMockHero = {
  ...mockHero,
  _id: mockObjectId.toHexString(),
  createdAt: mockDate,
};

//spells---------------
export const mockSpell1 = {
  name: "Fireball",
  school: "fire",
  type: "fire",
  description: "Big fire goes boom",
};
export const outputMockSpell1 = {
  ...mockSpell1,
  _id: mockObjectId.toHexString(),
};

export const mockSpell2 = {
  name: "Ice Lance",
  school: "frost",
  type: "cold",
  description: "Piercing ice brrrr",
};
export const outputMockSpell2 = {
  ...mockSpell2,
  _id: mockObjectId.toHexString(),
};

//items---------------
export const mockItemWeapon = {
  name: "Axe",
  type: ["weapon", "tool"],
  description: "Useful as a tool.",
  modifier: "+2 to melee brwan",
  tier: 1,
  equipHand: "Main-hand",
  weapontype: "melee",
  price: 20,
  quantity: 1,
};
export const outputMockItemWeapon = {
  ...mockItemWeapon,
  _id: mockObjectId.toHexString(),
};

export const mockItemItem = {
  name: "Mirror",
  type: ["tool"],
  tier: 1,
  price: 5,
  quantity: 1,
};

export const outputMockItemItem = {
  ...mockItemItem,
  _id: mockObjectId.toHexString(),
};
