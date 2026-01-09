import NoLogin from "../components/globals/noLogin";
import PlayerCollection from "../components/pages/collection/user/PlayerCollection";
import { useAdminToggle } from "../storage/adminToggleStore";
import { useAuthStore } from "../storage/authStore";
import { useParams } from "react-router-dom";

export default function Collection() {
  const auth0user = useAuthStore((s) => s.user);

  const isLocalAdmin = useAdminToggle((s) => s.isAdmin);
  const isTrueAdmin: boolean = auth0user?.roles?.includes("admin") ?? false;

  const { auth0Id } = useParams();
  const isViewingOtherUser = auth0Id && auth0Id !== auth0user?.auth0Id;

  if (!auth0user) {
    return (
      <>
        <NoLogin />
      </>
    );
  }
  return (
    <div>
      {!isTrueAdmin && isViewingOtherUser && <h1>401: Unauthorized</h1>}
      {!isLocalAdmin && auth0user?.auth0Id && (
        <PlayerCollection auth0Id={auth0user?.auth0Id} />
      )}
      {isTrueAdmin && auth0Id && <PlayerCollection auth0Id={auth0Id} />}
    </div>
  );
}
