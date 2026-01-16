import { Link } from "react-router-dom";
import { useAuthStore } from "../../../storage/authStore";

export default function AdminMenu() {
  const user = useAuthStore((s) => s.user);
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        <li>
          <Link to="/game">Play!</Link>
        </li>
        <li>
          <Link to={`/collection/${user?.auth0Id}`}>View your collection</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/gameitems">Heroes, Spells and Items</Link>
        </li>
      </ul>
    </div>
  );
}
