"use client";

import UserCard from "@/components/common/UserCard/UserCard";
import React from "react";
import { useUserInfor } from "@/services/queries/useAuth";

const UserAccount = () => {
  const { data, isLoading, error } = useUserInfor();

  if (isLoading) {
    return <div>Loading user info...</div>;
  }
  if (error) {
    return <div>Error loading user info</div>;
  }
  if (!data) return null;
  return (
    <div>
      <UserCard userData={data?.user} type="user-account" />
    </div>
  );
};

export default UserAccount;
