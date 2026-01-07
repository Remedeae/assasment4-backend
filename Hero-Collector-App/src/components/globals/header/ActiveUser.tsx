import { useAuthStore } from "../../../storage/authStore";
import type { LoggedUser } from "../../../types/storageTypes";

export default function ActiveUser() {
  const user: LoggedUser | null = useAuthStore((s) => s.user);

  const displayLoggedIn = user?.userName ?? "Logged out";
  const displayAccess = user?.roles?.includes("admin") ? "Admin" : null;

  return (
    <div>
      <h2>{displayLoggedIn}</h2>
      <h2>{displayAccess}</h2>
    </div>
  );
}
