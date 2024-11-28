'use client'

import { useState } from "react";
import { LoginUseCase } from "@/application/useCases/login.use-case";
import { AuthApiAdapter } from "@/infrastructure/adapters/auth/auth-api.adapter";

export const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const authAdapter = new AuthApiAdapter();
    const loginUseCase = new LoginUseCase(authAdapter);

    try {
      const token = await loginUseCase.execute(username, password);
      setSuccess(`Login successful! Token: ${token}`);
      setError('');
    } catch (error) {
      console.log('error', error)
      setError('');
      setSuccess('');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
};

