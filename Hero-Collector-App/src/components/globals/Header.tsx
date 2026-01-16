import ActiveUser from "./header/ActiveUser";
import Nav from "./header/nav";
import { useAdminToggle } from "../../storage/adminToggleStore";
import { useAuthStore } from "../../storage/authStore";
export default function Header() {
  const isTrueAdmin = useAuthStore((s) => s.isTrueAdmin);
  const isAdmin = useAdminToggle((s) => s.isAdmin);
  const setIsAdmin = useAdminToggle((s) => s.setIsAdmin);

  return (
    <div>
      <Nav />
      <ActiveUser />
      {isTrueAdmin ? (
        <button onClick={() => setIsAdmin(!isAdmin)}>
          Swap to {!isAdmin && "Admin"}
          {isAdmin && "User"} view
        </button>
      ) : null}
    </div>
  );
}
