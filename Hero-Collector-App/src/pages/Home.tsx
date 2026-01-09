import NoLogin from "../components/globals/noLogin";
import AdminMenu from "./Users";
import UserMenu from "../components/pages/home/UserMenu";
import { useAuthStore } from "../storage/authStore";
import { useAdminToggle } from "../storage/adminToggleStore";

export default function Home() {
  const isAdmin = useAdminToggle((s) => s.isAdmin);
  const isLoggedIn = useAuthStore((s) => s.isAuthenticated);
  console.log(isAdmin);
  console.log(isLoggedIn);

  if (!isLoggedIn) return <NoLogin />;
  return (
    <div>
      {isAdmin && isLoggedIn && <AdminMenu />}
      {!isAdmin && isLoggedIn && <UserMenu />}
    </div>
  );
}
