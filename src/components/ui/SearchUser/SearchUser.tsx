"use client";
import { XIcon } from "lucide-react";
import React, { useRef, useState } from "react";
import SidebarIcon from "../SidebarIcon/SidebarIcon";
import { useClickOutside } from "@/hooks/useClickOutside";
import useDebounceValue from "@/hooks/useDebounceValue";
import { useSearchUser } from "@/services/queries/useUser";
import UserCard from "@/components/common/UserCard/UserCard";
import Link from "next/link";
import Spinner from "@/components/common/Loading/Spinner";

interface SearchUserProps {
  searchUser: boolean;
  onClose: () => void;
  setShowSearchUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchUser = ({
  onClose,
  setShowSearchUser,
}: SearchUserProps) => {
  const searchRef = useRef<HTMLDivElement>(null);
  const [searchUserQuery, setSearchUserQuery] = useState("");

  const debounceSearchUserQuery = useDebounceValue(searchUserQuery, 500);

  const { data, isLoading } = useSearchUser({
    keyword: debounceSearchUserQuery.trim() || "",
  });

  useClickOutside(searchRef, () => {
    setShowSearchUser(false);
  });

  const handleSearchUser = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchUserQuery(value);
  };

  return (
    <div
      ref={searchRef}
      className={` flex fixed h-full border-r border-gray-600 transition-all duration-300 overflow-hidden  w-[24%] animate-fade-in `}
    >
      <SidebarIcon onClose={onClose} />
      <div className="flex-1 flex flex-col gap-8 pt-4 pl-4 pr-4">
        <h2 className="text-2xl ">Search</h2>
        <input
          type="text"
          placeholder="Search"
          className=" p-2 rounded-lg  bg-[#363636] text-white text-base"
          onChange={handleSearchUser}
          value={searchUserQuery}
        />

        <div className="w-full flex flex-col border-t border-t-zinc-600 pt-4 gap-2">
          {isLoading && <Spinner />}
          {data?.users?.map((user) => (
            <Link
              href={` /${user._id}`}
              key={user._id}
              className="w-full flex items-center gap-2 cursor-pointer   hover:bg-stone-700  rounded-md p-2 transition-all duration-300"
              onClick={() => setShowSearchUser(false)}
            >
              <UserCard userData={user} />
            </Link>
          ))}
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
