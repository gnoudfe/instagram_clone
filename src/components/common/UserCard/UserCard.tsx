import { UserDataType } from "@/types/users";
import React from "react";

interface UserCardProps {
  userData: UserDataType;
}

const UserCard = ({ userData }: UserCardProps) => {
  return (
    <div className="flex items-center  w-full justify-between">
      <div className="flex items-center gap-3">
        <img
          src={
            userData?.profilePicture ||
            "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg"
          }
          alt="avatar image"
          className="w-[44px] h-[44px] rounded-full object-cover block cursor-pointer"
        />
        <div className="flex flex-col">
          <h4 className="text-sm font-semibold">{userData.username}</h4>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
