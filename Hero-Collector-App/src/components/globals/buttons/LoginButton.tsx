export default function LoginButton() {
  const handleLogin = () => {
    window.location.href =
      "http://localhost:3000/login?returnTo=http://localhost:5173/home";
  };
  return <button onClick={handleLogin}>Log in!</button>;
}
