import { backendURL } from "@heroapp/shared";
export default function LogoutButton() {
  const handleLogin = () => {
    window.location.href = `${backendURL}/logout`;
  };
  return <button onClick={handleLogin}>Log Out</button>;
}
