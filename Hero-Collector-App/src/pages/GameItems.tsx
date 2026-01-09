import { useState } from "react";
import { useAuthStore } from "../storage/authStore";
import AllHeroes from "../components/pages/gameItems/AllHeroes";
import AllItems from "../components/pages/gameItems/AllItems";
import AllSpells from "../components/pages/gameItems/AllSpells";

export default function GameItems() {
  const user = useAuthStore((s) => s.user?.roles);
  const [itemTypeDisplay, setItemTypeDisplay] = useState<number>(0);

  if (!user?.includes("admin")) {
    return (
      <div>
        <h1>401: Unauthorized</h1>
      </div>
    );
  }
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
