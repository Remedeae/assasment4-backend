import { backendURL } from "../../../../api/urls.js";
export default function LogoutButton() {
  const handleLogin = () => {
    window.location.href = `${backendURL}/logout`;
  };
  return <button onClick={handleLogin}>Log Out</button>;
}
