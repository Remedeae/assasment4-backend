import { Link } from "react-router-dom";
import { useAuthStore } from "../../../storage/authStore";
import type { LoggedUser } from "../../../types/storageTypes";
import { useAdminToggle } from "../../../storage/adminToggleStore";

export default function Nav() {
  const user: LoggedUser | null = useAuthStore((s) => s.user);
  const isLocalAdmin = useAdminToggle((s) => s.isAdmin);

  if (!user) {
    return null;
  }
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to={`/collection/${user?.auth0Id}`}>Collection</Link>
        </li>
        <li>
          <Link to="/game">Play</Link>
        </li>
        {isLocalAdmin && (
          <>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/gameitems">Heroes, Spells and Items</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
