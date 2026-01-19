import { useEffect, useState } from "react";
import type {
  HeroInput,
  ItemOutput,
} from "../../../../../../Shared/types/types";
import { api } from "../../../../../api/axios";
import { spellSchool } from "../../../../../../Shared/types/base/generalGamedataSchema";
import { firstLetterToUpperCase } from "../../../../formatters/textFormatters";

export default function AddHeroForm({
  displayFormFalse,
}: {
  displayFormFalse: () => void;
}) {
  type ListItems = Pick<ItemOutput, "_id" | "name">;

  const [hero, setHero] = useState<HeroInput>({
    name: "",
    image: null,
    description: {
      looks: "",
      clothes: "",
      treasure: "",
      likes: "",
      dislikes: "",
    },
    traits: {
      spellcaster: false,
      spellSchool: null,
      special: [],
      combat: [],
    },

    stats: {
      brawn: 0,
      magic: 0,
      lives: 0,
      speed: 0,
    },
    startingEquipment: [],
  });
  const [postSuccess, setPostSuccess] = useState<string | null>(null);
  const [items, setItems] = useState<ListItems[]>([]);
  const [selectedItems] = useState<ListItems | null>(null);
  const [startingItems, setStartingItems] = useState<ListItems[]>([]);

  const [specials, setSpecials] = useState<string[]>([]);
  const [newSpecial, setNewSpecial] = useState<string>("");

  const [combat, setCombat] = useState<string[]>([]);
  const [newCombat, setNewCombat] = useState<string>("");

  const insertArrays = () => {
    const startingItemsIds = startingItems.map((i) => i._id);

    setHero((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        traits: {
          ...prev.traits,
          special: specials,
          combat: combat,
        },
        startingEquipment: startingItemsIds,
      };
    });
  };

  const postHero = async () => {
    insertArrays();
    const response = await api<string>("POST", "/gameitems/heroes", hero);
    setPostSuccess(response);
    setTimeout(() => {
      displayFormFalse();
    }, 1500);
  };

  useEffect(() => {
    const fetchItems = async () => {
      const response = await api<ItemOutput[]>("GET", "/gameitems/items");
      const addBoolean: ListItems[] = response.map((t) => ({
        _id: t._id,
        name: t.name,
        addToArray: false,
      }));
      setItems(addBoolean);
    };
    fetchItems();
  }, []);

  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter hero name"
          value={hero.name}
          onChange={(e) =>
            setHero((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        />

        <div>
          <h4>Description</h4>
          <label htmlFor="looks">Looks</label>
          <input
            type="text"
            id="looks"
            placeholder="Describe a few defining features of your hero"
            value={hero.description.looks}
            onChange={(e) =>
              setHero((prev) => {
                if (!prev) return prev;
                return {
                  ...prev,
                  description: {
                    ...prev.description,
                    looks: e.target.value,
                  },
                };
              })
            }
          />
          <label htmlFor="clothes">Clothes</label>
          <input
            type="text"
            id="clothes"
            placeholder="Describe how your hero dresses"
            value={hero.description.clothes}
            onChange={(e) =>
              setHero((prev) => {
                if (!prev) return prev;
                return {
                  ...prev,
                  description: {
                    ...prev.description,
                    clothes: e.target.value,
                  },
                };
              })
            }
          />
          <label htmlFor="treasure">Treasure</label>
          <input
            type="text"
            id="treasure"
            placeholder="Enter unique items your hero carries with them"
            value={hero.description.treasure}
            onChange={(e) =>
              setHero((prev) => {
                if (!prev) return prev;
                return {
                  ...prev,
                  description: {
                    ...prev.description,
                    treasure: e.target.value,
                  },
                };
              })
            }
          />
          <label htmlFor="likes">Likes</label>
          <input
            type="text"
            id="likes"
            placeholder="Enter things your hero likes"
            value={hero.description.likes}
            onChange={(e) =>
              setHero((prev) => {
                if (!prev) return prev;
                return {
                  ...prev,
                  description: {
                    ...prev.description,
                    likes: e.target.value,
                  },
                };
              })
            }
          />
          <label htmlFor="dislikes">Dislikes</label>
          <input
            type="text"
            id="dislikes"
            placeholder="Enter things your hero dislikes"
            value={hero.description.dislikes}
            onChange={(e) =>
              setHero((prev) => {
                if (!prev) return prev;
                return {
                  ...prev,
                  description: {
                    ...prev.description,
                    dislikes: e.target.value,
                  },
                };
              })
            }
          />
        </div>
        <div id="traits">
          <h4>Traits</h4>
          <div>
            <label htmlFor="spellcaster">Is the hero a spellcaster?</label>
            <input
              id="spellcaster"
              type="checkbox"
              checked={hero.traits.spellcaster}
              onChange={(e) =>
                setHero((prev) => {
                  if (!prev) return prev;
                  return {
                    ...prev,
                    traits: {
                      ...prev.traits,
                      spellcaster: e.target.checked,
                    },
                  };
                })
              }
            />

            {hero.traits.spellcaster && (
              <>
                <label htmlFor="spellschool">Spell School known</label>
                <select
                  id="spellschool"
                  value={hero.traits.spellSchool ?? ""}
                  onChange={(e) =>
                    setHero((prev) => {
                      if (!prev) return prev;
                      return {
                        ...prev,
                        traits: {
                          ...prev.traits,
                          spellSchool: e.target.value,
                        },
                      };
                    })
                  }
                >
                  {spellSchool.map((s) => (
                    <option key={s}>{firstLetterToUpperCase(s)}</option>
                  ))}
                </select>
              </>
            )}
          </div>
          <div>
            {specials.length > 0 && (
              <ul>
                {specials.map((i) => (
                  <li key={i}>
                    {firstLetterToUpperCase(i)}{" "}
                    <i
                      onClick={() => {
                        const filtered = specials.filter((s) => s !== i);
                        setSpecials(filtered);
                      }}
                    >
                      -
                    </i>
                  </li>
                ))}
              </ul>
            )}
            <label htmlFor="special">Special</label>
            <input
              id="special"
              type="text"
              placeholder="Enter name and description of out of combat abilities"
              value={newSpecial}
              onChange={(e) => setNewSpecial(e.target.value)}
            />
            <button
              type="button"
              onClick={() => {
                setSpecials((specials) => [...specials, newSpecial]);
                setNewSpecial("");
              }}
            >
              +
            </button>
          </div>
          <div>
            {combat.length > 0 && (
              <ul>
                {combat.map((i) => (
                  <li key={i}>
                    {firstLetterToUpperCase(i)}{" "}
                    <i
                      onClick={() => {
                        const filtered = combat.filter((s) => s !== i);
                        setCombat(filtered);
                      }}
                    >
                      -
                    </i>
                  </li>
                ))}
              </ul>
            )}
            <label htmlFor="combat">Combat specials</label>
            <input
              id="combat"
              type="text"
              placeholder="Enter name and description of combat abilities"
              value={newCombat}
              onChange={(e) => setNewCombat(e.target.value)}
            />
            <button
              type="button"
              onClick={() => {
                setCombat((combat) => [...combat, newCombat]);
                setNewCombat("");
              }}
            >
              +
            </button>
          </div>
        </div>
        <div>
          <h4>Stats</h4>
          <label htmlFor="brawn">Brawn</label>
          <input
            type="number"
            id="brawn"
            value={hero.stats.brawn}
            min={0}
            max={12}
            onChange={(e) =>
              setHero((prev) => {
                if (!prev) return prev;
                return {
                  ...prev,
                  stats: {
                    ...prev.stats,
                    brawn: e.target.value === "" ? 0 : Number(e.target.value),
                  },
                };
              })
            }
          />
          <label htmlFor="magic">Magic</label>
          <input
            type="number"
            id="magic"
            value={hero.stats.magic}
            min={0}
            max={12}
            onChange={(e) =>
              setHero((prev) => {
                if (!prev) return prev;
                return {
                  ...prev,
                  stats: {
                    ...prev.stats,
                    magic: e.target.value === "" ? 0 : Number(e.target.value),
                  },
                };
              })
            }
          />
          <label htmlFor="lives">Lives</label>
          <input
            type="number"
            id="Lives"
            value={hero.stats.lives}
            min={0}
            max={6}
            onChange={(e) =>
              setHero((prev) => {
                if (!prev) return prev;
                return {
                  ...prev,
                  stats: {
                    ...prev.stats,
                    lives: e.target.value === "" ? 0 : Number(e.target.value),
                  },
                };
              })
            }
          />
          <label htmlFor="speed">Speed</label>
          <input
            type="number"
            id="speed"
            value={hero.stats.speed}
            min={0}
            max={20}
            onChange={(e) =>
              setHero((prev) => {
                if (!prev) return prev;
                return {
                  ...prev,
                  stats: {
                    ...prev.stats,
                    speed: e.target.value === "" ? 0 : Number(e.target.value),
                  },
                };
              })
            }
          />
        </div>
        <label htmlFor="equipment">Starting Equipment</label>
        <select
          id="equipment"
          value={selectedItems?.name ?? ""}
          onChange={(e) => {
            const item = items.find((t) => t.name === e.target.value);
            if (!item) return;
            setStartingItems((startingItems) => [...startingItems, item]);
          }}
        >
          {items.map((i) => (
            <option key={i.name}>{firstLetterToUpperCase(i.name)}</option>
          ))}
        </select>
        {startingItems.length > 0 && (
          <ul>
            {startingItems.map((i) => (
              <li key={i._id}>
                {firstLetterToUpperCase(i.name)}{" "}
                <i
                  onClick={() => {
                    const filtered = startingItems.filter(
                      (s) => s._id !== i._id,
                    );
                    setStartingItems(filtered);
                  }}
                >
                  -
                </i>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={() => postHero()}>Post Hero</button>
      {postSuccess && <h3>{postSuccess}</h3>}
    </div>
  );
}
