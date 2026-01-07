import { Link } from "react-router-dom";
import { useAuthStore } from "../../../storage/authStore";
import type { LoggedUser } from "../../../types/storageTypes";

export default function Nav() {
  const user: LoggedUser | null = useAuthStore((s) => s.user);

  if (!user) {
    return null;
  }
  return (
    <div>
      {!user?.roles?.includes("admin") ? (
        <div>
          <Link to="/home">Home</Link>
          <Link to="/collection">Game</Link>
          <Link to="/game">Play</Link>
        </div>
      ) : (
        <div>
          <Link to="/home">Users</Link>
          <Link to="/gameitems">Heroes, Spells and Items</Link>
        </div>
      )}
    </div>
  );
}
