import Register from "@/pages/sign-in/components/auth/Register";
import ShowCase from "@/pages/sign-in/components/show-case/ShowCase";
import SignUpLayout from "@/pages/sign-in/layout/SignUpLayout";
import React from "react";

const page = () => {
  return (
    <SignUpLayout leftContent={<ShowCase />} rightContent={<Register />} />
  );
};

export default page;
