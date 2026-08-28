import { useAuthStore } from "../../../storage/authStore";
import type { LoggedUser } from "../../../types/storageTypes";
import LoginButton from "../buttons/LoginButton";
import LogoutButton from "../buttons/LogoutButton";
import { firstLetterToUpperCase } from "../../../formatters/textFormatters";

export default function ActiveUser() {
  const user: LoggedUser | null = useAuthStore((s) => s.user);
  const isTrueAdmin = useAuthStore((s) => s.isTrueAdmin);

  const displayLoggedIn = user?.username ?? "Logged out";
  const displayAccess = isTrueAdmin ? "Admin" : null;

  return (
    <div className="activeUser">
      <h4>
        {displayAccess} {firstLetterToUpperCase(displayLoggedIn)}
      </h4>
      {user ? <LogoutButton /> : <LoginButton />}
    </div>
  );
}
