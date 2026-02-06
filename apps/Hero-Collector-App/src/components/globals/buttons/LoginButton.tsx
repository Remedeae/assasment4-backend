import { backendURL } from "@heroapp/shared";
export default function LoginButton() {
  const handleLogin = () => {
    window.location.href = `${backendURL}/login`;
  };
  return <button onClick={handleLogin}>Log in!</button>;
}
