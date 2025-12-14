import { useState } from "react";

export default function UserLogin() {
  const [credentials, setCredentials] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {};

  return (
    <div>
      <div>
        <label htmlFor="credentials">Username or Email</label>
        <input
          type="text"
          id="credentials"
          placeholder="Enter username or email"
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
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
