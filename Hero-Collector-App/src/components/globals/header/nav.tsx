import { Link } from "react-router-dom";
import { useAdminStore } from "../../../storage/adminStore";
import { useLoggedInStatusStore } from "../../../storage/loginStore";

export default function Nav() {
  const adminStatus = useAdminStore((s) => s.adminStatus);
  const loggedIn = useLoggedInStatusStore((s) => s.loggedInStatus);

  if (!loggedIn) {
    return null;
  }
  return (
    <div>
      {!adminStatus ? (
        <div>
          <Link to="/home">Home</Link>
          <Link to="/collection">Collection</Link>
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
