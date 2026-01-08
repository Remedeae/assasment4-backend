import { useAuthStore } from "../storage/authStore";
import { api } from "../../api/axios";

import type { PlayerOutput } from "../../../Shared/types/types";
import { useEffect, useState } from "react";

import userAvatar from "../assets/user.png";
import { useNavigate } from "react-router-dom";

export default function AdminMenu() {
  const user = useAuthStore((s) => s.user?.roles);
  const [users, setUsers] = useState<PlayerOutput[] | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await api<PlayerOutput[]>("get", "/allUsers");
      setUsers(response ?? null);
    };
    fetchUsers();
  }, []);

  const handleUserRedirect = (auth0Id: string) => {
    navigate(`/collection/${auth0Id}`);
  };

  if (!user?.includes("admin")) {
    return (
      <div>
        <h1>Access denied</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id} onClick={() => handleUserRedirect(user.auth0Id)}>
            <img src={userAvatar} alt="User Avatar" />
            <h4>{user.userName}</h4>
            <h5>Joined: {user.createdAt.toDateString()}</h5>
          </li>
        ))}
      </ul>
    </div>
  );
}
