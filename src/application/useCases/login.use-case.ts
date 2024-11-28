import { AuthRepository } from "@/domain/repositories/auth/auth.repository";

export class LoginUseCase {
  constructor(private authRepository: AuthRepository) {}

  async execute(username: string, password: string): Promise<string> {
    if (!username || !password) {
      throw new Error('Username and password are required.');
    }

    return this.authRepository.login(username, password);
  }
}
