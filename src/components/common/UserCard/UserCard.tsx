import { UserDataType } from "@/types/users";
import React from "react";

interface UserCardProps {
  userData: UserDataType;
  type: string;
}

const UserCard = ({ userData, type }: UserCardProps) => {
  return (
    <div className="flex items-center  w-full justify-between">
      <div className="flex items-center gap-3">
        <img
          src={userData.profilePicture as string | undefined}
          alt="avatar image"
          className="w-[44px] h-[44px] rounded-full object-cover block cursor-pointer"
        />
        <div className="flex flex-col">
          <h4 className="text-sm font-semibold">{userData.username}</h4>
        </div>
      </div>
      {type === "recommend" ? (
        <button className="text-blue-600 text-xs font-bold  hover:text-blue-100 transition-all">
          Follow
        </button>
      ) : (
        <button className="text-blue-600 text-xs font-bold  hover:text-blue-100 transition-all">
          Switch
        </button>
      )}
    </div>
  );
};

export default UserCard;
