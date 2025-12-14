import NoLogin from "../components/login/noLogin";
import AdminPlayerCollection from "../components/collection/admin/AdminPlayerCollection";
import PlayerCollection from "../components/collection/user/PlayerCollection";
import { useAdminStore } from "../storage/adminStore";
import { useLoggedInStatusStore } from "../storage/loginStore";

export default function Collection() {
  const admin = useAdminStore((s) => s.adminStatus);
  const loggedIn = useLoggedInStatusStore((s) => s.loggedInStatus);

  return (
    <div>
      {!loggedIn && <NoLogin />}
      {admin && <AdminPlayerCollection />}
      {!admin && <PlayerCollection />}
    </div>
  );
}
