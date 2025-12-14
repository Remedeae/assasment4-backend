import AdminSignup from "../components/login/admin/AdminSignup";
import UserSignup from "../components/login/user/UserSignup";
import { useAdminStore } from "../storage/adminStore";

export default function SignUp() {
  const admin = useAdminStore((s) => s.adminStatus);
  //const setAdmin = useAdminStore((s) => s.setAdminStatus)

  return (
    <div>
      <h1>Login</h1>
      {admin && <AdminSignup />}
      {!admin && <UserSignup />}
    </div>
  );
}
