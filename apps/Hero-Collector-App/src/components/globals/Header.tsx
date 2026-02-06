import ActiveUser from "./header/ActiveUser";
import Nav from "./header/nav";
import { useAdminToggle } from "../../storage/adminToggleStore";
import { useAuthStore } from "../../storage/authStore";
import { api } from "../../../api/axios";
import type { PlayerOutput } from "@heroapp/shared";
import { useState } from "react";
export default function Header() {
  const isTrueAdmin = useAuthStore((s) => s.isTrueAdmin);
  const isAdmin = useAdminToggle((s) => s.isAdmin);
  const setIsAdmin = useAdminToggle((s) => s.setIsAdmin);

  const [test, setTest] = useState<PlayerOutput | null>(null);

  const handleTest = async () => {
    const res = await api<PlayerOutput>("get", "/allUsers");
    setTest(res);
  };

  return (
    <header>
      <Nav />
      <ActiveUser />
      {isTrueAdmin ? (
        <button className="admintoggle" onClick={() => setIsAdmin(!isAdmin)}>
          Swap to {!isAdmin && "Admin"}
          {isAdmin && "User"} view
        </button>
      ) : null}
      <button onClick={handleTest}>test refersh</button>
      <h1>{test?.username}</h1>
    </header>
  );
}
