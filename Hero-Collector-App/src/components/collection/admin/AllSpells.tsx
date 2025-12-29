import type { FullSpellOutput } from "../../../../../Shared/types/types";
import SpellCard from "../cards/SpellCard";

export default function AllSpells() {
  const spells: FullSpellOutput[] = [];
  return (
    <ul>
      {spells.length > 0 &&
        spells.map((s) => (
          <li key={s.id}>
            <SpellCard
              display={true}
              name={s.name}
              school={s.school}
              schoolType={s.schoolType}
              description={s.description}
            />
          </li>
        ))}
    </ul>
  );
}
