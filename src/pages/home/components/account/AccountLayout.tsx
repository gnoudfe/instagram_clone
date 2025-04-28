import React from 'react';
import Recommend from './Recommend';
import UserAccount from './UserAccount';

const AccountLayout = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <UserAccount />
      <Recommend />
    </div>
  );
};

export default AccountLayout;
