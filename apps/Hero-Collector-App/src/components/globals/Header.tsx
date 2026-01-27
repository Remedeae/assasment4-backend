import ActiveUser from "./header/ActiveUser";
import Nav from "./header/nav";
import { useAdminToggle } from "../../storage/adminToggleStore";
import { useAuthStore } from "../../storage/authStore";
export default function Header() {
  const isTrueAdmin = useAuthStore((s) => s.isTrueAdmin);
  const isAdmin = useAdminToggle((s) => s.isAdmin);
  const setIsAdmin = useAdminToggle((s) => s.setIsAdmin);

  return (
    <header>
      <Nav />
      <ActiveUser />
      {isTrueAdmin ? (
        <button className="admintoggle"
         onClick={() => setIsAdmin(!isAdmin)}>
          Swap to {!isAdmin && "Admin"}
          {isAdmin && "User"} view
        </button>
      ) : null}
    </header>
  );
}
