import { Link } from "react-router-dom";
import NoLogin from "../globals/noLogin";
import { useAuthStore } from "../../storage/authStore";
import { useAdminToggle } from "../../storage/adminToggleStore";

export default function Home() {
  const user = useAuthStore((s) => s.user);
  const isLocalAdmin = useAdminToggle((s) => s.isAdmin);
  const isLoggedIn = useAuthStore((s) => s.isAuthenticated);

  if (!isLoggedIn) return <NoLogin />;
  return (
    <div className="home">
      <ul>
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
