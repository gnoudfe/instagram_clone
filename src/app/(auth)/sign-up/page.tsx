import Register from '@/pages/sign-up/components/auth/Register';
import ShowCase from '@/pages/sign-up/components/show-case/ShowCase';
import SignUpLayout from '@/pages/sign-up/layout/SignUpLayout';
import React from 'react';

const page = () => {
  return <SignUpLayout leftContent={<ShowCase />} rightContent={<Register />} />;
};

export default page;
