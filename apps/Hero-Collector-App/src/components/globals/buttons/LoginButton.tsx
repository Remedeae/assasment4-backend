import { backendURL } from "../../../../api/urls.js";
export default function LoginButton() {
  const handleLogin = () => {
    window.location.href = `${backendURL}/login`;
  };
  return <button onClick={handleLogin}>Log in!</button>;
}
