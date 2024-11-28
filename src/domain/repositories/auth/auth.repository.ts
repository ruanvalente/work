export interface AuthRepository {
  login(username: string, password: string): Promise<string>; // Retorna o token
}
