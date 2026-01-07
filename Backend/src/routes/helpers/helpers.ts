import { errMsg, validateData } from "../../middleware/validatorHelpes";
import { HttpError } from "../../middleware/errorHandler";

import type mongoose from "mongoose";
import { Model, Types } from "mongoose";
import { HeroModel } from "../../mongoDB/models/Hero";
import { SpellModel, ItemModel } from "../../mongoDB/models/GameData";
import { PlayerModel, PlayerHeroModel } from "../../mongoDB/models/Player";

import {
  OutputFullPlayerHero,
  OutputItem,
} from "../../../../Shared/types/output";
import type {
  PlayerHeroInput,
  PlayerOutput,
} from "../../../../Shared/types/types";
import { PlayerHeroSchema } from "../../../../Shared/types/base/playerSchema";
import { ZodObject } from "zod";

export const constructPlayerHero = async (
  heroId: string,
  session: mongoose.ClientSession
) => {
  const heroExists = await HeroModel.exists({ _id: heroId });
  if (!heroExists) {
    throw new HttpError(404, `Hero with id ${heroId} does not exsist`, null);
  }
  const heroSpellItems = await HeroModel.findById(heroId)
    .select("startingEquipment traits.spellSchool createdAt name -_id")
    .lean()
    .session(session);
  const spells = heroSpellItems?.traits?.spellSchool
    ? await SpellModel.find({
        school: { $in: [heroSpellItems?.traits?.spellSchool] },
      })
        .select("_id")
        .lean()
        .session(session)
    : [];
  const equipmentIds = heroSpellItems?.startingEquipment
    ? heroSpellItems.startingEquipment
    : [];
  const spellIds = spells.map((s) => s._id.toString());

  const hero: PlayerHeroInput = {
    heroId,
    equipmentIds,
    spellIds,
  };
  const validatedHero = validateData(hero, PlayerHeroSchema, errMsg[3]);
  return validatedHero;
};

export const hydratePlayerHeroes = async (user: PlayerOutput) => {
  const playerHeroIds: string[] = user.inventory.heroes;
  const objectIds = playerHeroIds.map((id) => new Types.ObjectId(id));
  const heroes = await PlayerHeroModel.find({
    _id: { $in: objectIds },
  }).lean();
  const fullHeroes = await Promise.all(
    heroes.map(async (h) => {
      const [hero, spells, equipment] = await Promise.all([
        HeroModel.findOne({ id: h.heroId }).lean(),
        SpellModel.find({ id: { $in: h.spellIds } }).lean(),
        ItemModel.find({ id: { $in: h.equipmentIds } }).lean(),
      ]);
      return { hero, spells, equipment };
    })
  );
  const validatedFullHeroes = validateData(
    fullHeroes,
    OutputFullPlayerHero,
    errMsg[0]
  );
  return validatedFullHeroes;
};

export const hydrateItems = async (user: PlayerOutput) => {
  const itemIds: string[] = user.inventory.itemsIds;
  const objectIds = itemIds.map((id) => new Types.ObjectId(id));
  const items = await ItemModel.find({ _id: { $in: objectIds } }).lean();
  const validatedItems = validateData(items, OutputItem, errMsg[0]);
  return validatedItems;
};

export const updateById = async <S extends ZodObject<any>>(
  id: string,
  type: string,
  body: unknown,
  schema: S,
  Model: Model<any>
) => {
  const validatedBody = validateData(body, schema, errMsg[3]);
  const updated = await Model.findByIdAndUpdate(
    id,
    { $set: validatedBody },
    { new: true, lean: true }
  );
  if (!updated) {
    throw new HttpError(404, `${type} with id ${id} not found.`, null);
  }

  return updated;
};

export const deleteByID = async (
  id: string,
  type: string,
  Model: Model<any>
) => {
  const deleted = await Model.findByIdAndDelete(id, { lean: true });
  if (!deleted) {
    throw new HttpError(404, `${type} with ${id} not found`, null);
  }
  return deleted;
};

/* export const adminStatusCheck = async (id: string, isAdmin: boolean) => {
  const check = await PlayerModel.exists({
    _id: id,
    admin: isAdmin,
  });
  const adminStatus = isAdmin ? " an admin" : "a user";
  if (!check) {
    throw new HttpError(
      403,
      `User is ${adminStatus}, you do not have permission to edit that.`,
      null
    );
  }
};
 */
