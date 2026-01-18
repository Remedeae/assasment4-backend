import { useEffect, useState } from "react";
import { api } from "../../../../../api/axios";

import type { SpellOutput } from "../../../../../../Shared/types/types";
import SpellCard from "../../collection/cards/SpellCard";

export default function AllSpells() {
  const [spells, setSpells] = useState<SpellOutput[] | []>([]);

  useEffect(() => {
    const fetchSpells = async () => {
      const response = await api<SpellOutput[]>("get", "/gameitems/spells");
      setSpells(response ?? []);
    };
    fetchSpells();
  }, [spells]);

  return (
    <>
      {spells?.length !== 0 ? (
        <ul>
          {spells.map((s) => (
            <li key={s._id}>
              <SpellCard
                display={true}
                name={s.name}
                school={s.school}
                type={s.type}
                description={s.description}
              />
            </li>
          ))}
        </ul>
      ) : (
        <h3>No spells found.</h3>
      )}
    </>
  );
}
