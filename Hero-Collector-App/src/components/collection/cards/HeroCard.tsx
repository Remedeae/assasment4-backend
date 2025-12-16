import type { Hero } from "../../../../../Backend/src/schemas/dataSchemas/heroDataSchema.ts";
import type { Spell } from "../../../../../Backend/src/schemas/dataSchemas/generalGamedataSchema.ts";
import SpellCard from "../cards/SpellCard.tsx";
import ItemCard from "../cards/ItemCard.tsx";
import { useState } from "react";

type HeroCardProps = {
  hero: Hero;
  knownSpells: Spell[];
};

export default function HeroCard({ hero, knownSpells }: HeroCardProps) {
  const [hoverItemId, setHoverItemId] = useState<string | null>(null);

  return (
    <>
      <h5>Name: {hero.name}</h5>
      <img src={hero.image} alt={`Portray of ${hero.name}`} />
      <h5 className="statblock">
        Brawn: {hero.stats.brawn} | Magic: {hero.stats.magic} | Lives:{" "}
        {hero.stats.lives} | Speed: {hero.stats.speed}
      </h5>
      <ul>
        <li>
          <strong>Looks:</strong> {hero.description.looks}
        </li>
        <li>
          <strong>Likes:</strong> {hero.description.likes}
        </li>
        <li>
          <strong>Dislikes:</strong> {hero.description.dislikes}
        </li>
        <li>
          <strong>Treasure:</strong> {hero.description.treasure}
        </li>
      </ul>
      <div>
        {hero.traits.special && (
          <>
            <strong>Special: </strong>
            <ul>
              {hero.traits.special?.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </>
        )}
        {hero.traits.combat && (
          <>
            <strong>Combat: </strong>
            <ul>
              {hero.traits.combat?.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div>
        {hero.traits.spellcaster && knownSpells.length > 0 && (
          <>
            <strong>Spells known: </strong>
            <ul>
              {knownSpells.map((s) => (
                <li
                  key={s.id}
                  onMouseEnter={() => setHoverItemId(s.id)}
                  onMouseLeave={() => setHoverItemId(null)}
                >
                  {s.name}
                  <SpellCard
                    display={hoverItemId === s.id}
                    name={s.name}
                    type={s.type}
                    description={s.description}
                  />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div>
        <strong>Starting Equipment: </strong>
        <ul>
          {hero.startingEquipment.map((e) => (
            <li
              key={e.id}
              onMouseEnter={() => setHoverItemId(e.id)}
              onMouseLeave={() => setHoverItemId(null)}
            >
              {e.name}
              <ItemCard
                display={hoverItemId === e.id}
                name={e.name}
                type={e.type}
                description={e.description}
                modifier={e.modifier}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
