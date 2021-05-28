import React, { useState } from "react";
import { useAuthContext } from "../context/FirebaseContext";

interface Value {
  email: string;
  password: string;
}

export default function register() {
  const [value, setValue] = useState<Value>();
  const [error, setError] = useState<string>();
  const [isLoading, setIsloading] = useState<boolean>(false);
  const { signUp } = useAuthContext();

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    try {
      setError("");
      setIsloading(true);
      await signUp(value.email, value.password);
      setIsloading(false);
    } catch (err) {
      setError(err.message);
      setIsloading(false);
    }
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <div>
      <form>
        <input
          type="text"
          name="email"
          onChange={(e) => handleChange(e)}
          placeholder="email"
        />
        <input
          type="text"
          name="password"
          onChange={(e) => handleChange(e)}
          placeholder="password"
        />
        {error && <p>{error}</p>}
        <button
          type="submit"
          onClick={(e) => handleSubmit(e)}
          disabled={isLoading}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
