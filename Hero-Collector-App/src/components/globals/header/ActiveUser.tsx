import { useAdminStore } from "../../../storage/adminStore";
import { useLoggedInStatusStore } from "../../../storage/loginStore";

export default function ActiveUser() {
  const adminStatus = useAdminStore((s) => s.adminStatus);
  const loggedInStatus = useLoggedInStatusStore((s) => s.loggedInStatus);

  const displayLoggedIn = loggedInStatus ? "Logged in" : "Logged out";
  const displayAccess = adminStatus ? "Admin" : "User";

  return (
    <div>
      <h2>{displayLoggedIn}</h2>
      <h2>{displayAccess}</h2>
    </div>
  );
}
