import { useEffect, useState } from "react";
import { api } from "../../../api/axios.ts";

import type { FullHeroOutput } from "../../../../Shared/types/types.ts";
import HeroCard from "../collection/cards/HeroCard.tsx";

export default function AllHeroes() {
  const [heroes, setHeroes] = useState<FullHeroOutput[]>([]);
  useEffect(() => {
    const fetchHeroes = async () => {
      const response = await api<FullHeroOutput[]>("get", "/gameitems/heroes");
      setHeroes(response);
    };
    fetchHeroes();
  }, [heroes]);

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
