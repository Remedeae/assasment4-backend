export default function LoginButton() {
  const handleLogin = () => {
    window.location.href = "http://localhost:3000/login";
  };
  return <button onClick={handleLogin}>Log in!</button>;
}
