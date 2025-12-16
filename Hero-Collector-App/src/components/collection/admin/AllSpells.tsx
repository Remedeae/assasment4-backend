import type { Spell } from "../../../../../Backend/src/schemas/dataSchemas/generalGamedataSchema";
import SpellCard from "../cards/SpellCard";

export default function AllSpells() {
  const spells: Spell[] = [];
  return (
    <ul>
      {spells.length > 0 &&
        spells.map((s) => (
          <li key={s.id}>
            <SpellCard
              display={true}
              name={s.name}
              type={s.type}
              description={s.description}
            />
          </li>
        ))}
    </ul>
  );
}
