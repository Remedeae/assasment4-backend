jest.mock("express-openid-connect", () => ({
  __esModule: true,
  default: {
    requiresAuth: () => (req: any, res: any, next: any) => next(),
  },
}));
jest.mock("../../../apps/Backend/src/mongoDB/db", () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue(undefined),
}));
jest.mock("../../../apps/Backend/src/middleware/auth/auth", () => ({
  __esModule: true,
  authMiddleware: (req: any, res: any, next: any) => next(),
  requiresAdmin: (req: any, res: any, next: any) => next(),
}));

import request from "supertest";
import app from "../../../apps/Backend/src/index";
import {
  PlayerModel,
  PlayerHeroModel,
} from "../../../apps/Backend/src/mongoDB/models/Player";
import { SpellModel } from "../../../apps/Backend/src/mongoDB/models/GameData";
import { ItemModel } from "../../../apps/Backend/src/mongoDB/models/GameData";
import { HeroModel } from "../../../apps/Backend/src/mongoDB/models/Hero";
import {
  mockDate,
  mockHero,
  mockItemWeapon,
  mockObjectId,
  mockSpell1,
  outputMockHero,
  outputMockItemWeapon,
  outputMockSpell1,
} from "../mockData";

//item-------------
describe("POST /gameitems/items", () => {
  test("route creating new item", async () => {
    jest
      .spyOn(ItemModel, "create")
      .mockResolvedValue(outputMockItemWeapon as any);
    const res = await request(app)
      .post("/gameitems/items")
      .send(mockItemWeapon);
    expect(res.status).toBe(201);
    expect(res.text).toBe(`Successfully created: ${mockItemWeapon.name}`);
  });
});

//spell-------------
describe("POST /gameitems/spells", () => {
  test("route creating a new spell", async () => {
    jest.spyOn(SpellModel, "create").mockResolvedValue(outputMockSpell1 as any);
    const res = await request(app).post("/gameitems/spells").send(mockSpell1);

    expect(res.status).toBe(201);
    expect(res.text).toBe(`Successfully created: ${mockSpell1.name}`);
  });
});
//heroe-------------
describe("POST /gameitems/heroes/", () => {
  test("route for creating a new hero", async () => {
    jest.spyOn(HeroModel, "create").mockResolvedValue(outputMockHero as any);
    const res = await request(app).post("/gameitems/heroes/").send(mockHero);

    expect(res.status).toBe(201);
    expect(res.text).toBe(`Successfully created: ${mockHero.name}`);
  });
});
