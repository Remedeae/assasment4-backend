import type { StatBlock } from "./generalGamedataSchema";
import type { Item } from "./generalGamedataSchema";

export type HeroDescription = {
  looks: string;
  clothes: string;
  treasure: string;
  likes: string;
  dislikes: string;
};

export type HeroTraits = {
  spellcaster: boolean;
  spellSchool?: string;
  special?: string[];
  combat?: string;
};

export type Hero = {
  id: string;
  name: string;
  description: HeroDescription;
  traits: HeroTraits;
  stats: StatBlock;
  startingEquipment: Item[];
};
