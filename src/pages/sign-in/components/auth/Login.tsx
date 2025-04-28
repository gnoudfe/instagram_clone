import { dancingScript } from '@/assets/fonts/fonts';
import Button from '@/components/common/Button';
import React from 'react';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <div className="w-full  border border-gray-700  rounded-lg p-8 mx-3 flex flex-col">
      <h1 className={`text-center text-3xl font-bold ${dancingScript.className}`}>Instagram</h1>
      <p className="text-center text-base w-full mt-4">
        Log in to see photos and videos from your friends.
      </p>
      <span className="w-full text-center mx-auto text-sm mt-4 relative block">
        <div className="before:absolute before:bg-gray-500 before:w-[45%] before:left-0 before:top-1/2  before:h-[2px]"></div>
        OR
        <div className="after:absolute after:bg-gray-500 after:w-[45%] after:right-0 after:top-1/2  after:h-[2px]"></div>
      </span>
      <div className="mt-5 ">
        <Button type="submit" fullWidth rounded="lg" variant="primary">
          Log in with Facebook
        </Button>
      </div>
      <div className="mt-5">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
