import ActiveUser from "./header/ActiveUser";
import Nav from "./header/nav";
import { useAdminToggle } from "../../storage/adminToggleStore";
import { useAuthStore } from "../../storage/authStore";
import Frame from "./Frame";

export default function Header() {
  const isTrueAdmin = useAuthStore((s) => s.isTrueAdmin);
  const isAdmin = useAdminToggle((s) => s.isAdmin);
  const setIsAdmin = useAdminToggle((s) => s.setIsAdmin);

  return (
    <header>
      <Frame />
      <Nav />
      {isTrueAdmin ? (
        <button className="admintoggle" onClick={() => setIsAdmin(!isAdmin)}>
          Swap to {!isAdmin && "Admin"}
          {isAdmin && "User"} view
        </button>
      ) : null}
      <ActiveUser />
    </header>
  );
}
