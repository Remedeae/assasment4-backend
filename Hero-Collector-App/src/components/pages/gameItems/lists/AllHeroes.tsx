import { useEffect, useState } from "react";
import { api } from "../../../../../api/axios.ts";

import type { FullHeroOutput } from "../../../../../../Shared/types/types.ts";
import HeroCard from "../../collection/cards/HeroCard.tsx";

export default function AllHeroes() {
  const [heroes, setHeroes] = useState<FullHeroOutput[] | []>([]);
  useEffect(() => {
    const fetchHeroes = async () => {
      const response = await api<FullHeroOutput[]>("get", "/gameitems/heroes");
      setHeroes(response ?? []);
    };
    fetchHeroes();
  }, []);

  return (
    <>
      {heroes?.length !== 0 ? (
        <ul>
          {heroes?.map((h) => {
            return (
              <li key={h.hero._id}>
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
      ) : (
        <h3>No heroes found.</h3>
      )}
    </>
  );
}
