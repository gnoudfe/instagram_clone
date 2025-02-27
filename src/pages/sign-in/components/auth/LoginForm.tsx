"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Link from "next/link";
import React, { useState } from "react";
import { validateField } from "@/utils/validateField";
import { Credentials } from "../../types/type";

type Errors = Partial<Record<keyof Credentials, string>>;

const LoginForm = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name as keyof Credentials, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErros: Errors = {};
    Object.keys(credentials).forEach((key) => {
      const field = key as keyof Credentials;
      const error = validateField(field, credentials[field]);
      if (error) validationErros[field] = error;
    });
    setErrors(validationErros);
    if (Object.keys(validationErros).length > 0) {
      return;
    }

    try {
      console.log("Logging in with:", credentials);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form className="flex flex-col gap-3 w-full" onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Email"
        name="email"
        value={credentials.email}
        onChange={handleChange}
      />
      {errors.email && <p className="text-sm text-red-500"> {errors.email}</p>}
      <Input
        type="password"
        placeholder="Password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
      />
      {errors.password && (
        <p className="text-sm text-red-500"> {errors.password}</p>
      )}

      <p className="text-sm text-white text-center">
        Dont have an account yet?{" "}
        <Link href="/sign-up" className="text-slate-500  font-bold">
          Sign up
        </Link>
      </p>

      <Link
        href={"/forgot-password"}
        className="text-sm text-slate-500 text-center"
      >
        Forgot your password?
      </Link>

      <Button type="submit">Sign up</Button>
    </form>
  );
};

export default LoginForm;
