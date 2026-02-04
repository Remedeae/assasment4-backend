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
  mockObjectId,
  outputMockHero,
  outputMockItemWeapon,
  outputMockSpell1,
  outputMockUser,
} from "../mockData";

//users------------------------
describe("DELETE /allUsers/:id", () => {
  test("deletes a user based on _id", async () => {
    jest
      .spyOn(PlayerModel, "findByIdAndDelete")
      .mockResolvedValue(outputMockUser as any);

    const res = await request(app).delete(`/allUsers/${mockObjectId}`);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe(
      `User ${outputMockUser.userName} successfully deleted`,
    );
    expect(PlayerModel.findByIdAndDelete).toHaveBeenCalledWith(
      mockObjectId.toString(),
    );
  });
});
//playerHeroes------------------------
describe("DELETE /collection/admin/deleteHero/:id", () => {
  test("deletes a player hero by _id", async () => {
    jest
      .spyOn(PlayerHeroModel, "findByIdAndDelete")
      .mockResolvedValue({ _id: mockObjectId } as any);

    const res = await request(app).delete(
      `/collection/admin/deleteHero/${mockObjectId}`,
    );

    expect(res.status).toBe(200);
    expect(res.body.message).toBe(
      `Player hero id: ${mockObjectId} successfully deleted.`,
    );
    expect(PlayerHeroModel.findByIdAndDelete).toHaveBeenCalledWith(
      mockObjectId.toString(),
    );
  });
});
//items------------------------
describe("DELETE /gameitems/items/:id", () => {
  test("deletes an item by _id", async () => {
    jest
      .spyOn(ItemModel, "findByIdAndDelete")
      .mockResolvedValue(outputMockItemWeapon as any);

    const res = await request(app).delete(`/gameitems/items/${mockObjectId}`);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe(
      `Item ${outputMockItemWeapon.name} successfully deleted.`,
    );
    expect(ItemModel.findByIdAndDelete).toHaveBeenCalledWith(
      mockObjectId.toString(),
    );
  });
});
//spells------------------------
describe("DELETE /gameitems/spells/:id", () => {
  test("deletes a spell by _id", async () => {
    jest
      .spyOn(SpellModel, "findByIdAndDelete")
      .mockResolvedValue(outputMockSpell1 as any);

    const res = await request(app).delete(`/gameitems/spells/${mockObjectId}`);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe(
      `Spell ${outputMockSpell1.name} successfully deleted.`,
    );
    expect(SpellModel.findByIdAndDelete).toHaveBeenCalledWith(
      mockObjectId.toString(),
    );
  });
});
//heroes------------------------
describe("DELETE /gameitems/heroes/:id", () => {
  test("deletes a hero by _id", async () => {
    jest
      .spyOn(HeroModel, "findByIdAndDelete")
      .mockResolvedValue(outputMockHero as any);

    const res = await request(app).delete(`/gameitems/heroes/${mockObjectId}`);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe(
      `${outputMockHero.name} successfully deleted`,
    );
    expect(HeroModel.findByIdAndDelete).toHaveBeenCalledWith(
      mockObjectId.toString(),
    );
  });
});
