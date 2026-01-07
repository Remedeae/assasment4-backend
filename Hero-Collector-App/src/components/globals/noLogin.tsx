import { Link } from "react-router-dom";

export default function NoLogin() {
  return (
    <div>
      <h2>You must login to view this page!</h2>
      <button>
        <Link to="/login">Go to login!</Link>
      </button>
    </div>
  );
}
