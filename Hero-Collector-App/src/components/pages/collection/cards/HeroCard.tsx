import type { FullPlayerHeroOutput } from "../../../../../../Shared/types/types.ts";
import SpellCard from "../cards/SpellCard.tsx";
import ItemCard from "../cards/ItemCard.tsx";
import { useState } from "react";

import placeholderImg from "../../../../assets/user.png";

type HeroCardProp = Omit<FullPlayerHeroOutput, "id" | "createdAt">;

export default function HeroCard({ hero, spells, equipment }: HeroCardProp) {
  const [hoverItemId, setHoverItemId] = useState<string | null>(null);

  return (
    <>
      <h5>Name: {hero.name}</h5>
      <img src={hero.image ?? placeholderImg} alt={`Portray of ${hero.name}`} />
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
        {hero.traits.spellcaster && spells.length > 0 && (
          <>
            <strong>Spells known: </strong>
            <ul>
              {spells.map((s) => (
                <li
                  key={s.id}
                  onMouseEnter={() => setHoverItemId(s.id)}
                  onMouseLeave={() => setHoverItemId(null)}
                >
                  {s.name}
                  <SpellCard
                    display={hoverItemId === s.id}
                    name={s.name}
                    school={s.school}
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
          {equipment.map((e) => (
            <li
              key={e.id}
              onMouseEnter={() => setHoverItemId(e.id)}
              onMouseLeave={() => setHoverItemId(null)}
            >
              {e.name}
              <ItemCard item={e} display={hoverItemId === e.id} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
