import { useState } from "react";
import AllHeroes from "../components/pages/gameItems/lists/AllHeroes";
import AllItems from "../components/pages/gameItems/lists/AllItems";
import AllSpells from "../components/pages/gameItems/lists/AllSpells";
import AddHeroForm from "../components/pages/gameItems/addItems/AddHeroForm";
import AddItemForm from "../components/pages/gameItems/addItems/AddItemForm";
import AddSpellForm from "../components/pages/gameItems/addItems/AddSpellForm";
import { useAdminToggle } from "../storage/adminToggleStore";
import { firstLetterToUpperCase } from "../formatters/textFormatters";

export default function GameItems() {
  const isLocalAdmin = useAdminToggle((s) => s.isAdmin);
  const itemTypes: string[] = ["heroes", "items", "spells"];
  const [itemTypeDisplay, setItemTypeDisplay] = useState<string>(itemTypes[0]);
  const [displayForm, setDisplayForm] = useState<boolean>(false);

  if (!isLocalAdmin) {
    return (
      <div>
        <h1>401: Unauthorized</h1>
      </div>
    );
  }
  return (
    <div>
      <div>
        {itemTypes.map((i) => (
          <h2 key={i} onClick={() => setItemTypeDisplay(i)}>
            {firstLetterToUpperCase(i)}
          </h2>
        ))}
      </div>
      <button onClick={() => setDisplayForm(!displayForm)}>
        {displayForm
          ? `Return to ${itemTypeDisplay} view`
          : `Add new ${itemTypeDisplay}`}
      </button>

      {itemTypeDisplay === "heroes" &&
        (displayForm ? (
          <AddHeroForm displayFormFalse={() => setDisplayForm(false)} />
        ) : (
          <AllHeroes />
        ))}
      {itemTypeDisplay === "items" &&
        (displayForm ? (
          <AddItemForm displayFormFalse={() => setDisplayForm(false)} />
        ) : (
          <AllItems />
        ))}
      {itemTypeDisplay === "spells" &&
        (displayForm ? (
          <AddSpellForm displayFormFalse={() => setDisplayForm(false)} />
        ) : (
          <AllSpells />
        ))}
    </div>
  );
}
