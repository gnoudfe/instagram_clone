"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import Link from "next/link";
import React, { useState } from "react";
import { Credentials } from "../../types/types";
import { validateField } from "@/utils/validateField";

const genders = [
  {
    id: 1,
    name: "Male",
  },
  {
    id: 2,
    name: "Female",
  },
  {
    id: 3,
    name: "Other",
  },
];

type Errors = Partial<Record<keyof Credentials, string>>;

const RegisterForm = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
    email: "",
    dob: "",
    gender: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const [showGender, setShowGender] = useState(false);

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
        type="text"
        placeholder="Username"
        name="username"
        value={credentials.username}
        onChange={handleChange}
      />
      {errors.username && (
        <p className="text-sm text-red-500"> {errors.username}</p>
      )}
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
      <Input
        type="date"
        placeholder="Date of brith"
        name="dob"
        value={credentials.dob}
        onChange={handleChange}
      />
      {errors.dob && <p className="text-sm text-red-500"> {errors.dob}</p>}
      <div
        className="relative w-full p-2 bg-[#121212] border border-gray-700 rounded text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none text-sm cursor-pointer  select-none"
        onClick={() => setShowGender(!showGender)}
      >
        {credentials.gender || "Gender"}
        {showGender && (
          <ul className="absolute  top-[50px] left-0 w-full bg-[#121212] rounded-lg ">
            {genders.map((gender) => (
              <li
                key={gender.id}
                className="w-full p-2 cursor-pointer hover:bg-slate-800 transition-all"
                onClick={() =>
                  setCredentials((prev) => ({ ...prev, gender: gender.name }))
                }
              >
                {gender.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      {errors.gender && (
        <p className="text-sm text-red-500"> {errors.gender}</p>
      )}
      <p className="text-sm text-white text-center">
        Already have an account?{" "}
        <Link href="/sign-in" className="text-slate-500  font-bold">
          Log in
        </Link>
      </p>

      <Button type="submit">Sign up</Button>
    </form>
  );
};

export default RegisterForm;
