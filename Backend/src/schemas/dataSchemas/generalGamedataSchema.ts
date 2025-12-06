export type StatBlock = {
  brawn: number;
  magic: number;
  lives: number;
  speed: number;
};

export type Item = {
  id: string;
  name: string;
  type: string;
  description: string;
  modifier: string;
};

export type Spell = {
  id: string;
  name: string;
  type: string;
  description: string;
};
