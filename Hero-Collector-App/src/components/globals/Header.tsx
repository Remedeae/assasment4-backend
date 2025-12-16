import ActiveUser from "./header/ActiveUser";
import Nav from "./header/nav";
import { useAdminStore } from "../../storage/adminStore";

export default function Header() {
  const admin = useAdminStore((s) => s.adminStatus);
  const setAdmin = useAdminStore((s) => s.setAdminStatus);

  const toggleAdmin = () => {
    if (admin) {
      setAdmin(false);
    } else {
      setAdmin(true);
    }
  };

  return (
    <div>
      <Nav />
      <ActiveUser />
      <button onClick={() => toggleAdmin()}>
        Swap to {!admin && "Admin"}
        {admin && "User"} view
      </button>
    </div>
  );
}
