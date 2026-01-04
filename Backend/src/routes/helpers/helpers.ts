import { errMsg, validateData } from "../../middleware/validatorHelpes";
import type { PlayerHeroInput } from "../../../../Shared/types/types";
import { HeroModel } from "../../mongoDB/models/Hero";
import { SpellModel } from "../../mongoDB/models/GameData";
import { PlayerHeroSchema } from "../../../../Shared/types/base/playerSchema";
import type mongoose from "mongoose";
import { Model, Document } from "mongoose";
import { z, ZodObject } from "zod";

export const constructPlayerHero = async (
  heroId: string,
  session: mongoose.ClientSession
) => {
  const heroExists = await HeroModel.exists({ _id: heroId });
  if (!heroExists) {
    throw new Error(`Hero with id ${heroId} does noe exsist`);
  }
  const heroSpellItems = await HeroModel.findById(heroId)
    .select("startingEquipment traits.spellSchool name -_id")
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

  const hero: PlayerHeroInput = { heroId, equipmentIds, spellIds };
  const validatedHero = validateData(hero, PlayerHeroSchema, errMsg[3]);
  return validatedHero;
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
    throw new Error(`${type} with id ${id} not found.`);
  }

  return updated;
};
