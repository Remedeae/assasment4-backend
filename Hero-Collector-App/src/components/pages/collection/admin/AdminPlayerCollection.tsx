import PlayerCollection from "../user/PlayerCollection";
import { useState } from "react";

export default function AdminPlayerCollection() {
  const [userId] = useState<string>("1");
  return (
    <div>
      <PlayerCollection auth0Id={userId} />
    </div>
  );
}
