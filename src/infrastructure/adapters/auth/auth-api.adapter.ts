import { AuthRepository } from "@/domain/repositories/auth/auth.repository";

export class AuthApiAdapter implements AuthRepository {
  private readonly baseUrl = '/api/auth';

  async login(username: string, password: string): Promise<string> {
    const response = await fetch(`${this.baseUrl}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      throw new Error('Invalid credentials');
    }

    const data = await response.json();
    return data.token;
  }
}
