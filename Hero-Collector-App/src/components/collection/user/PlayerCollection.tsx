import { useState } from "react";
import { Link } from "react-router-dom";
import MiniHeroCard from "../cards/MiniHeroCard";
import type { Hero } from "../../../../../Backend/src/schemas/dataSchemas/heroDataSchema";
import HeroCard from "../cards/HeroCard";
import type {
  Item,
  Spell,
} from "../../../../../Backend/src/schemas/dataSchemas/generalGamedataSchema";

type PlayerHero = {
  hero: Hero;
  spellsKnown: Spell[];
  equipment: Item[];
};
type UserId = {
  userId: string;
};

export default function PlayerCollection(props: UserId) {
  const heroes: PlayerHero[] = [];
  const team: string[] = [];
  const [search, setSearch] = useState<string>("");
  const [displayHeroId, setDisplayHeroId] = useState<string>(heroes[0].hero.id);
  const displayHero = heroes.find((h) => h.hero.id === displayHeroId);

  const fetchData = async () => {
    await props.userId;
  };

  fetchData(); //mockups for api calls

  return (
    <div>
      <h1>Collection</h1>
      <div>
        <p>?</p>
        <input
          type="text"
          placeholder="Search heroes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {heroes.length === 0 && (
        <h5>
          You have no heroes, play a <Link to="/game">Game</Link> to acuire one!
        </h5>
      )}
      {heroes.length > 0 && (
        <ul>
          {heroes
            .filter((h) =>
              h.hero.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((h) => (
              <li key={h.hero.id} onClick={() => setDisplayHeroId(h.hero.id)}>
                <MiniHeroCard name={h.hero.name} image={h.hero.image} />
              </li>
            ))}
        </ul>
      )}
      <div>
        {displayHero && (
          <HeroCard
            hero={displayHero.hero}
            knownSpells={displayHero.spellsKnown}
          />
        )}
      </div>
      <div>
        <h2>Team</h2>
        {team.length > 0 && (
          <ul>
            {heroes
              .filter((h) => team.includes(h.hero.id))
              .map((t) => (
                <li key={t.hero.id}>
                  <MiniHeroCard name={t.hero.name} image={t.hero.image} />
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}
