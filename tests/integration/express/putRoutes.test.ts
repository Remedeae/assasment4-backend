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
import { mockObjectId } from "../mockData";

//user-------------
describe("PUT /allUsers/:id", () => {
  test("Updates a user based on _id, zod validates and strips", async () => {
    jest.spyOn(PlayerModel, "findByIdAndUpdate").mockResolvedValue({
      _id: mockObjectId.toHexString(),
      auth0Id: "999hhh",
      username: "Marthas",
    } as any);

    const res = await request(app)
      .put(`/allUsers/${mockObjectId}`)
      .send({ testStrip: true, auth0Id: "999hhh" });

    expect(res.status).toBe(200);
    expect(res.body.message).toBe(
      `User Marthas has successfully been updated.`,
    );
    expect(PlayerModel.findByIdAndUpdate).toHaveBeenCalledWith(
      mockObjectId.toString(),
      { $set: expect.objectContaining({ auth0Id: "999hhh" }) },
      { new: true },
    );
  });
});
//playerHero-----------------
describe("PUT /collection/admin/updateHero/:id", () => {
  test("Updates a playerHero based in _id, zod validates and strips", async () => {
    jest.spyOn(PlayerHeroModel, "findByIdAndUpdate").mockResolvedValue({
      _id: mockObjectId.toHexString(),
      spellIds: [mockObjectId.toHexString()],
    } as any);

    const res = await request(app)
      .put(`/collection/admin/updateHero/${mockObjectId}`)
      .send({ testStrip: true, equipmentIds: [mockObjectId.toHexString()] });

    expect(res.status).toBe(200);
    expect(res.body.message).toBe(
      `Player Hero id: ${mockObjectId} updated successfully`,
    );
    expect(PlayerHeroModel.findByIdAndUpdate).toHaveBeenCalledWith(
      mockObjectId.toString(),
      {
        $set: expect.objectContaining({
          equipmentIds: [mockObjectId.toHexString()],
        }),
      },
      { new: true },
    );
  });
});

//item-------------
describe("PUT /gameitems/items/:id", () => {
  test("Updates an item based in _id, zod validates and strips", async () => {
    jest.spyOn(ItemModel, "findByIdAndUpdate").mockResolvedValue({
      _id: mockObjectId.toHexString(),
      name: "Sword",
    } as any);

    const res = await request(app)
      .put(`/gameitems/items/${mockObjectId}`)
      .send({ testStrip: true, name: "Dagger" });

    expect(res.status).toBe(200);
    expect(res.body.message).toBe(`Sword successfully updated.`);
    expect(ItemModel.findByIdAndUpdate).toHaveBeenCalledWith(
      mockObjectId.toString(),
      { $set: expect.objectContaining({ name: "Dagger" }) },
      { new: true },
    );
  });
});
//spell-------------
describe("PUT /gameitems/spells/:id", () => {
  test("Updates a spell based in _id, zod validates and strips", async () => {
    jest.spyOn(SpellModel, "findByIdAndUpdate").mockResolvedValue({
      _id: mockObjectId.toHexString(),
      name: "Gasous Cloud",
    } as any);

    const res = await request(app)
      .put(`/gameitems/spells/${mockObjectId}`)
      .send({ testStrip: true, name: "Acid Rain" });

    expect(res.status).toBe(200);
    expect(res.body.message).toBe(`Gasous Cloud successfully updated.`);
    expect(SpellModel.findByIdAndUpdate).toHaveBeenCalledWith(
      mockObjectId.toString(),
      { $set: expect.objectContaining({ name: "Acid Rain" }) },
      { new: true },
    );
  });
});
//hero-------------
describe("PUT /gameitems/heroes/:id", () => {
  test("Updates a hero based in _id, zod validates and strips", async () => {
    jest.spyOn(HeroModel, "findByIdAndUpdate").mockResolvedValue({
      _id: mockObjectId.toHexString(),
      name: "Maggan the Destroyer",
    } as any);

    const res = await request(app)
      .put(`/gameitems/heroes/${mockObjectId}`)
      .send({ testStrip: true, name: "Molly the Meek" });

    expect(res.status).toBe(200);
    expect(res.body.message).toBe(`Sucessfully updated Maggan the Destroyer`);
    expect(HeroModel.findByIdAndUpdate).toHaveBeenCalledWith(
      mockObjectId.toString(),
      { $set: expect.objectContaining({ name: "Molly the Meek" }) },
      { new: true },
    );
  });
});
