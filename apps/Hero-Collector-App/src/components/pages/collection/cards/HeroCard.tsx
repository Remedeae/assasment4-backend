import type { FullPlayerHeroOutput } from "@heroapp/shared";
import SpellCard from "../cards/SpellCard.tsx";
import ItemCard from "../cards/ItemCard.tsx";
import { useState } from "react";

import placeholderImg from "../../../../assets/user.png";

type HeroCardProp = Omit<FullPlayerHeroOutput, "_id" | "createdAt">;

export default function HeroCard({ hero, spells, equipment }: HeroCardProp) {
  const [hoverItemId, setHoverItemId] = useState<string | null>(null);

  return    <div className="herocard">
      <h4>Name: {hero.name}</h4>
      <h5 className="statblock">
        Brawn: {hero.stats.brawn} | Magic: {hero.stats.magic} | Lives:{" "}
        {hero.stats.lives} | Speed: {hero.stats.speed}
      </h5>
        <ul className="description">
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
        <img src={hero.image ?? placeholderImg} alt={`Portray of ${hero.name}`} />
      <div>
        {hero.traits.special && (
          <>
            <strong>Special: </strong>
            <ul className="special">
              {hero.traits.special?.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </>
        )}
        {hero.traits.combat && (
          <>
            <strong>Combat: </strong>
            <ul className="combat">
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
                  key={s._id}
                  onMouseEnter={() => setHoverItemId(s._id)}
                  onMouseLeave={() => setHoverItemId(null)}
                >
                  {s.name}
                  <SpellCard
                    display={hoverItemId === s._id}
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
              key={e._id}
              onMouseEnter={() => setHoverItemId(e._id)}
              onMouseLeave={() => setHoverItemId(null)}
            >
              {e.name}
              <ItemCard item={e} display={hoverItemId === e._id} />
            </li>
          ))}
        </ul>
      </div>
    <div/>
    </div>

}
