import React from "react";
import { dancingScript } from "@/assets/fonts/fonts";
import Button from "@/components/common/Button";
import RegisterForm from "./RegisterForm";
const Register = () => {
  return (
    <div className="w-full  border border-gray-700  rounded-lg p-12 flex flex-col">
      <h1
        className={`text-center text-3xl font-bold ${dancingScript.className}`}
      >
        Instagram
      </h1>
      <p className="text-center text-base w-full mt-4">
        Sign up to see photos and videos from your friends.
      </p>
      <div className="mt-5 ">
        <Button type="submit" fullWidth rounded="lg" variant="primary">
          Log in with Facebook
        </Button>
      </div>
      <div className="mt-5">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
