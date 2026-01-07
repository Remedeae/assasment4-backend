import NoLogin from "../components/globals/noLogin";
import PlayerCollection from "../components/collection/user/PlayerCollection";
import { useAdminStore } from "../storage/adminStore";
import { useLoggedInStatusStore } from "../storage/authStore";
import { useActiveUserStore } from "../storage/activeUserStore";
import { useParams } from "react-router-dom";

export default function Collection() {
  const admin = useAdminStore((s) => s.adminStatus);
  const loggedIn = useLoggedInStatusStore((s) => s.loggedInStatus);
  const user = useActiveUserStore((s) => s.userData);

  const { userIdParam } = useParams();

  return (
    <div>
      {!loggedIn && <NoLogin />}
      {admin && userIdParam && <PlayerCollection userId={userIdParam} />}
      {!admin && user && <PlayerCollection userId={user?.id} />}
    </div>
  );
}
