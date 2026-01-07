import NoLogin from "../components/login/noLogin";
import AdminMenu from "../components/home/AdminMenu";
import UserMenu from "../components/home/UserMenu";
import { useLoggedInStatusStore } from "../storage/authStore";
import { useAdminStore } from "../storage/adminStore";

export default function Home() {
  const admin = useAdminStore((s) => s.adminStatus);
  const loggedIn = useLoggedInStatusStore((s) => s.loggedInStatus);

  return (
    <div>
      {!loggedIn && <NoLogin />}
      {admin && <AdminMenu />}
      {!admin && <UserMenu />}
    </div>
  );
}
