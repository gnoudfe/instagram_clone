import UserCard from "@/components/common/UserCard/UserCard";
import { XIcon } from "lucide-react";
import React from "react";

interface SearchUserProps {
  searchUser: boolean;
  onClose: () => void;
}

const SearchUser = ({ searchUser, onClose }: SearchUserProps) => {
  return (
    <div
      className={` flex fixed h-full border-r border-gray-600 transition-all duration-300 overflow-hidden ${
        searchUser ? " opacity-100 w-[24%] " : "invisible opacity-0 w-[0%]"
      }`}
    >
      <div className="w-[60px] bg-black flex flex-col"></div>
      <div className="flex-1 flex flex-col gap-8 pt-4 pl-4 pr-4">
        <h2 className="text-2xl ">Search</h2>
        <input
          type="text"
          placeholder="Search"
          className=" p-2 rounded-lg  bg-[#363636] text-white text-base"
        />
        <div className="w-full flex flex-col border-t border-t-zinc-600 pt-4 gap-2">
          {/* <div className="flex items-center gap-2 cursor-pointer w-full hover:bg-stone-700  rounded-md p-3 transition-all duration-300">
            <img
              src="https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg"
              alt=""
              className="w-[44px] h-[44px] rounded-full"
            />
            <div className="flex flex-col ">
              <span>Quynh diem</span>
              <span className="text-[12px] text-[#a8a8a8]">Follow</span>
            </div>
          </div> */}
        </div>
      </div>

      <div>
        <div
          className="absolute top-5 right-5 cursor-pointer"
          onClick={onClose}
        >
          <XIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchUser;
