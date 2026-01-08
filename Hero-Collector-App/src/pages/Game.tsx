import Game1 from "../components/games/Game1";
import NoLogin from "../components/globals/noLogin";
import { useAuthStore } from "../storage/authStore";

export default function Game() {
  const loggedIn = useAuthStore((s) => s.isAuthenticated);

  return !loggedIn ? <NoLogin /> : <Game1 />;
}
