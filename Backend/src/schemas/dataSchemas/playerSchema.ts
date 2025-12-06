import type { Spell } from "./generalGamedataSchema";
import type { Item } from "./generalGamedataSchema";

export type PlayerHero = {
  heroId: string;
  spells: Spell[];
  equipment: Item[];
};

export type Player = {
  id: string;
  userName: string;
  email: string;
  collection: {
    heroes: PlayerHero[];
    items: Item[];
  };
  levelsClear: string[]; //names/ids for cleared levels - flags system???
  team: number[]; //number in the collection/heroes array that are selected
};
