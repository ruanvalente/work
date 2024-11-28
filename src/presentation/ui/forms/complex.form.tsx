"use client";

import { useForm } from "@/presentation/hooks/use-form";

export const ComplexForm: React.FC = () => {
  const { values, errors, handleChange, setError, clearErrors, resetForm, handleBlur } =
    useForm({
      username: "",
      password: "",
      rememberMe: false,
      gender: "",
      country: "",
    });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearErrors();

    if (!values.username) {
      setError("username", "Username is required");
    }
    if (!values.password) {
      setError("password", "Password is required");
    }

    console.log("Form values:", values);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-24 space-y-6 w-full max-w-md mx-auto p-6 bg-white border-zinc-50 shadow-lg rounded-md"
    >
      {/* Username */}
      <div className="space-y-2">
        <label className="block text-zinc-950">Username:</label>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`w-full p-2 rounded-md bg-zinc-200 text-zinc-400 placeholder-gray-500 border ${
            errors?.username ? "border-red-500" : "border-gray-700"
          } focus:outline-none focus:ring-2 focus:ring-gray-500`}
          placeholder="Enter your username"
        />
        {errors?.username && (
          <p className="text-red-500 text-sm">{errors.username}</p>
        )}
      </div>

      {/* Password */}
      <div className="space-y-2">
        <label className="block">Password:</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          className={`w-full p-2 rounded-md bg-zinc-200 text-zinc-400 placeholder-gray-500 border ${
            errors?.password ? "border-red-500" : "border-zinc-700"
          } focus:outline-none focus:ring-2 focus:ring-zinc-500`}
          placeholder="Enter your password"
        />
        {errors?.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>

      {/* Remember Me */}
      <div className="flex items-center space-x-2">
        <label className="flex items-center ">
          <input
            type="checkbox"
            name="rememberMe"
            checked={values.rememberMe}
            onChange={handleChange}
            className="w-4 h-4 rounded border-zinc-700 bg-zinc-200 focus:ring-2 focus:ring-zinc-500 outline-none checked:text-zinc-700"
          />
          <span className="ml-2">Remember Me</span>
        </label>
      </div>

      {/* Gender */}
      <div className="space-y-2">
        <label className="block">Gender:</label>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={values.gender === "male"}
              onChange={handleChange}
              onBlur={handleBlur}
              className="w-4 h-4 rounded-full border-gray-700 bg-gray-800 focus:ring-2 focus:ring-gray-500"
            />
            <span className="ml-2">Male</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={values.gender === "female"}
              onChange={handleChange}
              className="w-4 h-4 rounded-full border-gray-700 bg-gray-800 focus:ring-2 focus:ring-gray-500"
            />
            <span className="ml-2">Female</span>
          </label>
        </div>
      </div>

      {/* Country */}
      <div className="space-y-2">
        <label className="block">Country:</label>
        <select
          name="country"
          value={values.country}
          onChange={handleChange}
          className="w-full p-2 rounded-md bg-zinc-200 placeholder-zinc-500 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          <option value="">Select</option>
          <option value="usa">USA</option>
          <option value="brazil">Brazil</option>
        </select>
      </div>

      {/* Actions */}
      <div className="flex justify-end space-x-4">
        <button
          type="submit"
          className="px-4 py-2 bg-zinc-700 text-white rounded-md shadow hover:bg-transparent hover:transition-all hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={resetForm}
          className="px-4 py-2 rounded-md shadow hover:bg-zinc-600  hover:transition-all hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Reset
        </button>
      </div>
    </form>
  );
};
