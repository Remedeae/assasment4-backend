import { useAuthStore } from "../../../storage/authStore";
import type { LoggedUser } from "../../../types/storageTypes";
import LoginButton from "../buttons/LoginButton";
import LogoutButton from "../buttons/LogoutButton";

export default function ActiveUser() {
  const user: LoggedUser | null = useAuthStore((s) => s.user);
  const isTrueAdmin = useAuthStore((s) => s.isTrueAdmin);

  const displayLoggedIn = user?.userName ?? "Logged out";
  const displayAccess = isTrueAdmin ? "Admin" : null;

  return (
    <div>
      <h2>
        {displayAccess}{" "}
        {displayLoggedIn.charAt(0).toUpperCase() + displayLoggedIn.slice(1)}
      </h2>
      {user ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}
