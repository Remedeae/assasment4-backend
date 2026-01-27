import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../../../../api/axios";

import MiniHeroCard from "../cards/MiniHeroCard";
import {
  //ItemOutput,
  type FullPlayerHeroOutput,
  type PlayerOutput,
  type FullPlayerOutput,
} from "@heroapp/shared";
import HeroCard from "../cards/HeroCard";

type ID = {
  auth0Id?: string;
};

export default function PlayerCollection(auth0Id: ID) {
  const [user, setUser] = useState<PlayerOutput | null>(null);
  const [heroes, setHeroes] = useState<FullPlayerHeroOutput[]>([]);
  //const [items, setItems] = useState<ItemOutput[]>([]);
  const [displayHeroId, setDisplayHeroId] = useState<string>(heroes[0]._id);
  const displayHero = heroes.find((h) => h._id === displayHeroId);

  const [search, setSearch] = useState<string>("");

  const placeholderPortray: string = "cat";

  useEffect(() => {
    const fetchData = async () => {
      const response = await api<FullPlayerOutput>(
        "get",
        `/user/${auth0Id}/full`,
      );
      setUser(response.user);
      setHeroes(response.heroes);
      //setItems(response.items);
    };
    fetchData();
  }, [auth0Id]);

  return (
    <div className="collection">
      <header>
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
      </header>
      {heroes.length === 0 && (
        <h5>
          You have no heroes, play a <Link to="/game">Game</Link> to acuire one!
        </h5>
      )}
      {heroes.length > 0 && (
        <ul className="heroes">
          {heroes
            .filter((h) =>
              h.hero.name.toLowerCase().includes(search.toLowerCase()),
            )
            .map((h) => (
              <li key={h.hero._id} onClick={() => setDisplayHeroId(h.hero._id)}>
                <MiniHeroCard
                  name={h.hero.name}
                  image={h.hero.image ?? placeholderPortray}
                  title={h.hero.title}
                />
              </li>
            ))}
        </ul>
      )}
      <div className="displayHero">
        {displayHero && (
          <HeroCard
            hero={displayHero.hero}
            spells={displayHero.spells}
            equipment={displayHero.equipment}
          />
        )}
      </div>
      <div>
        <h2>Team</h2>
        {user && user?.team.length > 0 && (
          <ul>
            {heroes
              .filter((h) => user.team.includes(h.hero._id))
              .map((t) => (
                <li key={t.hero._id}>
                  <MiniHeroCard
                    name={t.hero.name}
                    image={t.hero.image || placeholderPortray}
                    title={""}
                  />
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
}
