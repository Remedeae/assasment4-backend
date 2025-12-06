import { Link } from "react-router-dom";
import AdminPlayerCollection from "../components/collection/admin/AdminPlayerCollection";
import PlayerCollection from "../components/collection/user/PlayerCollection";

export default function Collection() {
  //import { useEffect, useState } from "react";

  /*   const [admin, setAdmin] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(false);

  useEffect(() => {
    setAdmin(true);
    setUser(true);
  }, []); */

  const admin: boolean = false;
  const user: boolean = true;

  if (!admin && !user) {
    return (
      <div>
        <h2>You must login to view this page!</h2>
        <button>
          <Link to="/login">Go to login!</Link>
        </button>
      </div>
    );
  }

  if (admin && !user) {
    return (
      <div>
        <AdminPlayerCollection />
      </div>
    );
  }
  if (!admin && user) {
    return (
      <div>
        <PlayerCollection />
      </div>
    );
  }
}
