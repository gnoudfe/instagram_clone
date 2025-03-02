import React from "react";

const UserCard = ({ userData, type }: any) => {
  return (
    <div className="flex items-center  w-full justify-between">
      <div className="flex items-center gap-3">
        <img
          src={userData.avatar}
          alt="avatar image"
          className="w-[44px] h-[44px] rounded-full object-cover block cursor-pointer"
        />
        <div className="flex flex-col">
          <h4 className="text-sm font-semibold">{userData.name}</h4>
          {type === "recommend" ? (
            <span className="text-xs text-zinc-400  line-clamp-1">
              Follow by {userData.username}
            </span>
          ) : (
            <span className="text-sm text-zinc-400">{userData.username}</span>
          )}
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
