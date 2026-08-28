import UserLogin from "../components/pages/login/UserLogin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "../storage/authStore";

export default function Login() {
  const loggedIn = useAuthStore((s) => s.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) navigate("/collection/:auth0Id");
    //console.log(loggedIn);
  }, [loggedIn, navigate]);

  return (
    <div className="login">
      <div>
        <h3>Welcome to the Hero Collector App!</h3>
        <h3>Home of the:</h3>
        <h1>
          <span className="D">D</span>ungeon <span>D</span>
          elvers <span className="D">D</span>elux<span>e</span>
        </h1>
      </div>
      <UserLogin />
    </div>
  );
}
