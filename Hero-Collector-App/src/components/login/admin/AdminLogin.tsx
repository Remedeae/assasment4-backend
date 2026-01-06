import { useState } from "react";

export default function AdminLogin() {
  const [credentials, setCredentials] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {};

  return (
    <div>
      <div>
        <label htmlFor="credentials">Admin name or Email</label>
        <input
          type="text"
          id="credentials"
          placeholder="Enter admin name or email"
          value={credentials}
          onChange={(e) => setCredentials(e.target.value)}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={handleLogin}>
          <a href="http://localhost:3000/login">Login</a>
        </button>
      </div>
    </div>
  );
}
