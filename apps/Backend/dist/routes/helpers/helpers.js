import { errMsg, validateData } from "../../middleware/validatorHelpes.js";
import { HttpError } from "../../middleware/errorHandler.js";
import { Types } from "mongoose";
import { HeroModel } from "../../mongoDB/models/Hero.js";
import { SpellModel, ItemModel } from "../../mongoDB/models/GameData.js";
import { PlayerHeroModel } from "../../mongoDB/models/Player.js";
import * as zodOutput from "../../types/validation/mongoOutput.js";
import * as tsinput from "@heroapp/shared";
import { z } from "zod";
//constructs a Player hero from heroId ready for posting
export const constructPlayerHero = async (heroId, session) => {
    const heroExists = await HeroModel.exists({ _id: heroId });
    if (!heroExists) {
        throw new HttpError(404, `Hero with id ${heroId} does not exsist`, null);
    }
    const heroSpellItems = await HeroModel.findById(heroId)
        .select("startingEquipment traits.spellSchool createdAt name -_id")
        .session(session);
    const spells = heroSpellItems?.traits?.spellSchool
        ? await SpellModel.find({
            school: { $in: [heroSpellItems?.traits?.spellSchool] },
        })
            .select("_id")
            .session(session)
        : [];
    const equipmentIds = heroSpellItems?.startingEquipment
        ? heroSpellItems.startingEquipment
        : [];
    const spellIds = spells.map((s) => s._id.toString());
    const hero = {
        heroId,
        equipmentIds,
        spellIds,
    };
    const validatedHero = validateData(hero, tsinput.InputPlayerHero, errMsg[3]);
    return validatedHero;
};
//Adds spells and items from the heroes known spelltype and startingequipment (item Ids)
export const hydrateHeroes = async (heroes) => {
    const fullHeroes = await Promise.all(heroes.map(async (h) => {
        const spells = h.traits.spellSchool
            ? await SpellModel.find({ school: h.traits.spellSchool }).lean()
            : [];
        const items = await ItemModel.find({
            _id: {
                $in: h.startingEquipment.map((id) => new Types.ObjectId(id)),
            },
        }).lean();
        return { hero: h, spells, equipment: items };
    }));
    const validatedFullHeroes = validateData(fullHeroes, z.array(zodOutput.BOutputFullHero), errMsg[0]);
    return validatedFullHeroes;
};
//Adds spells and items to a player hero based on items/spells array
export const hydratePlayerHeroes = async (user) => {
    const playerHeroIds = user.inventory.heroes;
    const objectIds = playerHeroIds.map((id) => new Types.ObjectId(id));
    const heroes = await PlayerHeroModel.find({
        _id: { $in: objectIds },
    });
    const fullHeroes = await Promise.all(heroes.map(async (h) => {
        const [hero, spells, equipment] = await Promise.all([
            HeroModel.findOne({ _id: h.heroId }),
            SpellModel.find({ _id: { $in: h.spellIds } }),
            ItemModel.find({ _id: { $in: h.equipmentIds } }),
        ]);
        return { hero, spells, equipment };
    }));
    const validatedFullHeroes = validateData(fullHeroes, z.array(zodOutput.BOutputFullPlayerHero), errMsg[0]);
    return validatedFullHeroes;
};
//adds items from the item Ids in player inventory
export const hydrateItems = async (user) => {
    const itemIds = user.inventory.itemsIds;
    const objectIds = itemIds.map((id) => new Types.ObjectId(id));
    const items = await ItemModel.find({ _id: { $in: objectIds } });
    const validatedItems = validateData(items, z.array(zodOutput.BOutputItem), errMsg[0]);
    return validatedItems;
};
//content for a PUT function that validates and updates a DB entry based on mongoDB id
export const updateById = async (id, type, body, schema, Model) => {
    const validatedBody = validateData(body, schema, errMsg[3]);
    const updated = await Model.findByIdAndUpdate(id, { $set: validatedBody }, { new: true });
    if (!updated) {
        throw new HttpError(404, `${type} with id ${id} not found.`, null);
    }
    return updated;
};
//content for a DELETE function that deletes a DB entry based on mongoDB id
export const deleteByID = async (id, type, Model) => {
    const deleted = await Model.findByIdAndDelete(id);
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
//# sourceMappingURL=helpers.js.map