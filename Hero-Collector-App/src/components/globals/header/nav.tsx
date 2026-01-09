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
      <Link to="/home">Home</Link>
      <Link to={`/collection/${user.auth0Id}`}>Collection</Link>
      <Link to="/game">Play</Link>
      {user?.roles?.includes("admin") && (
        <>
          <Link to="/users">Users</Link>
          <Link to="/gameitems">Heroes, Spells and Items</Link>
        </>
      )}
    </div>
  );
}
