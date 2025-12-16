import type { Hero } from "../../../../../Backend/src/schemas/dataSchemas/heroDataSchema.ts";
import type { Spell } from "../../../../../Backend/src/schemas/dataSchemas/generalGamedataSchema.ts";
import HeroCard from "../cards/HeroCard.tsx";

export default function AllHeroes() {
  const heroes: Hero[] = [];
  const spells: Spell[] = [];

  return (
    <div>
      <ul>
        {heroes?.map((h) => {
          const heroSpells =
            h.traits.spellcaster && h.traits.spellSchool
              ? spells.filter((s) => s.type === h.traits.spellSchool)
              : [];
          return (
            <li key={h.id}>
              {}
              <HeroCard hero={h} knownSpells={heroSpells} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
