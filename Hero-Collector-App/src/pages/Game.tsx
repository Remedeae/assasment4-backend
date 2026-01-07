import Game1 from "../components/games/Game1";
import NoLogin from "../components/login/noLogin";
import { useLoggedInStatusStore } from "../storage/authStore";
//import { useAdminStore } from "../storage/adminStore";

export default function Game() {
  //const admin = useAdminStore((s) => s.adminStatus);
  const loggedIn = useLoggedInStatusStore((s) => s.loggedInStatus);

  return !loggedIn ? <NoLogin /> : <Game1 />;
}
