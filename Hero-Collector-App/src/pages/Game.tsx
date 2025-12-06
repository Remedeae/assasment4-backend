import { Link } from "react-router-dom";
import Game1 from "../components/games/Game1";

export default function Game() {
  const admin: boolean = false;
  const user: boolean = true;

  if (!user) {
    return (
      <div>
        <h2>You must login to view this page!</h2>
        <button>
          <Link to="/login">Go to login!</Link>
        </button>
      </div>
    );
  }
  if (!admin && user) {
    return (
      <div>
        <Game1 />
      </div>
    );
  }
}
