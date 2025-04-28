import Login from '@/pages/sign-in/components/auth/Login';
import SignInLayout from '@/pages/sign-in/layout/SignInLayout';
import React from 'react';

const LoginPage = () => {
  return <SignInLayout content={<Login />} />;
};

export default LoginPage;
