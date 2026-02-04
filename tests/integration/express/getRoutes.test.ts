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
import {
  outputMockUser,
  outputMockSpell1,
  outputMockSpell2,
  outputMockItemWeapon,
  outputMockItemItem,
  outputMockHero,
} from "../mockData";
import { HeroModel } from "../../../apps/Backend/src/mongoDB/models/Hero";

//players---------------
describe("GET /allUsers route", () => {
  test("returns all user", async () => {
    jest.spyOn(PlayerModel, "find").mockResolvedValue([outputMockUser as any]);
    const res = await request(app).get("/allUsers");

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });
});
//spells-----------------------
describe("GET /gameitems/spells route", () => {
  test("express returns data to /gameitems/spells, zod validates and returns correct values", async () => {
    jest
      .spyOn(SpellModel, "find")
      .mockResolvedValue([outputMockSpell1 as any, outputMockSpell2 as any]);
    const res = await request(app).get("/gameitems/spells");

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);
    expect(res.body[0].school).toBe(outputMockSpell1.school);
  });
});
//items------------------
describe("GET /gameitems/items route", () => {
  test("express returns data to /gameitems/items, zod validates and returns correct values", async () => {
    jest
      .spyOn(ItemModel, "find")
      .mockResolvedValue([
        outputMockItemWeapon as any,
        outputMockItemItem as any,
      ]);
    const res = await request(app).get("/gameitems/items");

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(2);
    expect(res.body[0].type).toHaveLength(2);
  });
});
