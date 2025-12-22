import type { Item } from "./generalGamedataSchema";

export type PlayerHero = {
  heroId: string;
  spellIds: string[];
  equipmentIds: string[];
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
  team: string[]; //heroId in the collection/heroes array that are selected
};
