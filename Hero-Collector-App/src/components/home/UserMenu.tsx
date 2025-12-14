import { Link } from "react-router-dom";

export default function UserMenu() {
  return (
    <div>
      <h1>Menu</h1>
      <h3>
        <Link to="/game">Play!</Link>
      </h3>
      <h3>
        <Link to="/collection">View Collection</Link>
      </h3>
    </div>
  );
}
