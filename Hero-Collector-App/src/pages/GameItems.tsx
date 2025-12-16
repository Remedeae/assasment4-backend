import { useState } from "react";
import AllHeroes from "../components/collection/admin/AllHeroes";
import AllItems from "../components/collection/admin/AllItems";
import AllSpells from "../components/collection/admin/AllSpells";

export default function GameItems() {
  const [itemTypeDisplay, setItemTypeDisplay] = useState<number>(0);
  return (
    <div>
      <div>
        <h2 onClick={() => setItemTypeDisplay(0)}>Heroes</h2>
        <h2 onClick={() => setItemTypeDisplay(1)}>Items</h2>
        <h2 onClick={() => setItemTypeDisplay(2)}>Spells</h2>
      </div>
      {itemTypeDisplay === 0 && <AllHeroes />}
      {itemTypeDisplay === 1 && <AllItems />}
      {itemTypeDisplay === 2 && <AllSpells />}
    </div>
  );
}
