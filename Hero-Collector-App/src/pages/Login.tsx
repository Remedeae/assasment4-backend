import UserLogin from "../components/login/UserLogin";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "../storage/authStore";

export default function Login() {
  const loggedIn = useAuthStore((s) => s.isAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) navigate("/home");
  }, [loggedIn, navigate]);

  return (
    <div>
      <h1>Welcome to the Hero Collector App!</h1>
      <UserLogin />
    </div>
  );
}
