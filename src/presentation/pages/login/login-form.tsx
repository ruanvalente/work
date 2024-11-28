"use client";

import { LoginUseCase } from "@/application/useCases/login.use-case";
import { AuthApiAdapter } from "@/infrastructure/adapters/auth/auth-api.adapter";
import { useForm } from "@/presentation/hooks/use-form";
import { Condition } from "@/presentation/ui/condition";
import { isFieldFilled } from "@/shared/utils/validations/is-field-filled";


export function LoginForm () {
  const { values, errors, setError, handleChange, handleBlur } = useForm({
    username: "",
    password: "",
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const authAdapter = new AuthApiAdapter();
    const loginUseCase = new LoginUseCase(authAdapter);

    try {
      const { username, password } = values;
      const token = await loginUseCase.execute(username, password);
      if (token) {
        console.log(`Login successful! Token: ${token}`);
      }
    } catch (error) {
      console.log("error", error);
      setError("username", "username is invalid");
      setError("username", "password is invalid");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
      </div>
      <button type="submit">Login</button>
      <Condition when={isFieldFilled(errors, "username")}>
        <p style={{ color: "red" }}>{errors.username}</p>
      </Condition>
      <Condition when={isFieldFilled(errors, "password")}>
        <p style={{ color: "red" }}>{errors.password}</p>
      </Condition>
    </form>
  );
}

