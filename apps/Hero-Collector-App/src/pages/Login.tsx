import UserLogin from "../components/pages/login/UserLogin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "../storage/authStore";

export default function Login() {
  const loggedIn = useAuthStore((s) => s.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) navigate("/home");
    //console.log(loggedIn);
  }, [loggedIn, navigate]);

  return (
    <div className="login">
      <div>
        <h1>Welcome to the Hero Collector App!</h1>
        <p>Home of the Dungeon Delvers Deluxe</p>
      </div>
      <UserLogin />
    </div>
  );
}
