import React from "react";
import { SignInLayoutProps } from "../types/type";

const SignInLayout = ({ content }: SignInLayoutProps) => {
  return (
    <div className="max-w-[430px] w-full mx-auto min-h-screen flex items-center justify-center">
      {content}
    </div>
  );
};

export default SignInLayout;
