//import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminMenu from "../components/home/AdminMenu";
import UserMenu from "../components/home/UserMenu";

export default function Home() {
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
        <AdminMenu />
      </div>
    );
  }
  if (!admin && user) {
    return (
      <div>
        <UserMenu />
      </div>
    );
  }
}
