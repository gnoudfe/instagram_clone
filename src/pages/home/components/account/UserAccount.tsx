import UserCard from '@/components/common/UserCard/UserCard';
import { getUserInfor } from '@/services/apiServer/userService';
import { UserDataResponse } from '@/types/users';
import React from 'react';

const UserAccount = async () => {
  const userInfordata: UserDataResponse = await getUserInfor();
  if (!userInfordata?.user) return null;
  return (
    <div>
      <UserCard userData={userInfordata?.user} />
    </div>
  );
};

export default UserAccount;
