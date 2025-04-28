import React from 'react';
import { SignUpLayoutProps } from '../types/types';

const SignUpLayout = ({ leftContent, rightContent }: SignUpLayoutProps) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen text-white max-w-[1000px] mx-auto">
      {/* Left Column (Showcase) */}
      <div className="w-full md:w-1/2 p-4 flex items-center justify-center">{leftContent}</div>

      {/* Right Column (Auth) */}
      <div className="w-full md:w-1/2 p-4 flex items-center justify-center">{rightContent}</div>
    </div>
  );
};

export default SignUpLayout;
