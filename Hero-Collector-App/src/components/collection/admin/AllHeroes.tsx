import type { FullPlayerHeroOutput } from "../../../types/types.ts";
import HeroCard from "../cards/HeroCard.tsx";

export default function AllHeroes() {
  const heroes: FullPlayerHeroOutput[] = [];

  return (
    <div>
      <ul>
        {heroes?.map((h) => {
          return (
            <li key={h.hero.id}>
              {}
              <HeroCard
                hero={h.hero}
                spells={h.spells}
                equipment={h.equipment}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
