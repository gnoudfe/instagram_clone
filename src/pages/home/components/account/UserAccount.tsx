import UserCard from "@/components/common/UserCard/UserCard";
import React from "react";

const accountDataMock = {
  id: 1,
  avatar:
    "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg",
  name: "_gnoud0208",
  username: "Dai Duong",
};

const UserAccount = () => {
  return (
    <div>
      <UserCard userData={accountDataMock} type="user-account" />
    </div>
  );
};

export default UserAccount;
