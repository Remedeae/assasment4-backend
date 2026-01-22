import { useEffect, useState } from "react";
import type { SpellInput } from "@heroapp/shared";
import { spellSchool, spellType } from "@heroapp/shared";

import { api } from "../../../../../api/axios";
import { firstLetterToUpperCase } from "../../../../formatters/textFormatters";

export default function AddSpellForm({
  displayFormFalse,
}: {
  displayFormFalse: () => void;
}) {
  const [spell, setSpell] = useState<SpellInput>({
    name: "",
    school: spellSchool[0],
    type: spellType[0],
    description: null,
  });
  const [postSuccess, setPostSuccess] = useState<string | null>(null);

  const postSpell = async (body: SpellInput) => {
    const response = await api<string>("POST", "/gameitems/spells", body);
    setPostSuccess(response);
    setTimeout(() => {
      displayFormFalse();
    }, 1500);
  };

  useEffect(() => {
    console.log(spell);
  }, [spell]);

  return (
    <div>
      <div>
        <label htmlFor="name">Spell name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter spell name"
          value={spell.name}
          onChange={(e) =>
            setSpell((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        />

        <label htmlFor="school">School</label>
        <select
          id="school"
          value={spell.school}
          onChange={(e) =>
            setSpell((prev) => ({
              ...prev,
              school: e.target.value,
            }))
          }
        >
          {spellSchool.map((s) => (
            <option key={s} value={s}>
              {firstLetterToUpperCase(s)}
            </option>
          ))}
        </select>

        <label htmlFor="type">Type</label>
        <select
          id="type"
          value={spell.type}
          onChange={(e) =>
            setSpell((prev) => ({
              ...prev,
              type: e.target.value,
            }))
          }
        >
          {spellType.map((t) => (
            <option key={t} value={t}>
              {firstLetterToUpperCase(t)}
            </option>
          ))}
        </select>

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          placeholder="Enter spell description"
          value={spell?.description ?? ""}
          onChange={(e) =>
            setSpell((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
        />
      </div>
      <button onClick={() => postSpell(spell)}>Post spell</button>
      {postSuccess && <h3>{postSuccess}</h3>}
    </div>
  );
}
