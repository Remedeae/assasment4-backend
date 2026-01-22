import { useAuthStore } from "../storage/authStore";
import { api } from "../../api/axios";

import type { PlayerOutput } from "@heroapp/shared";
import { useEffect, useState } from "react";

import userAvatar from "../assets/user.png";
import { useNavigate } from "react-router-dom";
import { useAdminToggle } from "../storage/adminToggleStore";

export default function User() {
  const isLocalAdmin = useAdminToggle((s) => s.isAdmin);
  const isTrueAdmin = useAuthStore((s) => s.isTrueAdmin);
  const [users, setUsers] = useState<PlayerOutput[] | []>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await api<PlayerOutput[]>("get", "/allUsers");
      setUsers(response ?? []);
    };
    fetchUsers();
  }, []);

  const handleUserRedirect = (auth0Id: string) => {
    navigate(`/collection/${auth0Id}`);
  };

  if (!isTrueAdmin || !isLocalAdmin) {
    return (
      <div>
        <h1>Access denied</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Users</h1>
      {users?.length !== 0 ? (
        <ul>
          {users.map((user) => (
            <li
              key={user.auth0Id}
              onClick={() => handleUserRedirect(user.auth0Id)}
            >
              <img src={userAvatar} alt="User Avatar" />
              <h4>{user.userName}</h4>
              <h5>Joined: {new Date(user.createdAt).toDateString()}</h5>
            </li>
          ))}
        </ul>
      ) : (
        <h3>No users found.</h3>
      )}
    </div>
  );
}
