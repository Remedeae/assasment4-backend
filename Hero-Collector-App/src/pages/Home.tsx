import NoLogin from "../components/globals/noLogin";
import AdminMenu from "./Users";
import UserMenu from "../components/home/UserMenu";
import { useAuthStore } from "../storage/authStore";
import { useAdminToggle } from "../storage/adminToggleStore";

export default function Home() {
  const isAdmin = useAdminToggle((s) => s.isAdmin);
  const isLoggedIn = useAuthStore((s) => s.isAuthenticated);

  return (
    <div>
      {!isLoggedIn && <NoLogin />}
      {isAdmin && <AdminMenu />}
      {!isAdmin && <UserMenu />}
    </div>
  );
}
