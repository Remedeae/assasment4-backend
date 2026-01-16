export default function LogoutButton() {
  const handleLogin = () => {
    window.location.href = "http://localhost:3000/logout";
  };
  return <button onClick={handleLogin}>Log Out</button>;
}
