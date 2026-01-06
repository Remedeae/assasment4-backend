import { useAdminStore } from "../storage/adminStore";
import AdminLogin from "../components/login/admin/AdminLogin";
import UserLogin from "../components/login/user/UserLogin";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLoggedInStatusStore } from "../storage/loginStore";

export default function Login() {
  const admin = useAdminStore((s) => s.adminStatus);
  const setAdmin = useAdminStore((s) => s.setAdminStatus);
  const loggedIn = useLoggedInStatusStore((s) => s.loggedInStatus);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) navigate("/home");
  }, [loggedIn, navigate]);

  const toggleAdmin = () => {
    if (admin) {
      setAdmin(false);
    } else {
      setAdmin(true);
    }
  };
  return (
    <div>
      <h1>Login</h1>
      {admin && <AdminLogin />}
      {!admin && <UserLogin />}
      <button onClick={() => toggleAdmin()}>
        Login as {!admin && "Admin"}
        {admin && "User"}
      </button>
      <h4>
        Not signed up yet? Sign up <Link to="/signup">Here!</Link>
      </h4>
    </div>
  );
}
