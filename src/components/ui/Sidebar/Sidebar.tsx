"use client";
import { dancingScript } from "@/assets/fonts/fonts";
import NewPostIcon from "@/components/icons/NewPost/NewPostIcon";
import { usePostModal } from "@/context/ModalPostContext";
import { HeartIcon, HomeIcon, MenuIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import SidebarItem from "./SidebarItem";
import { UserDataType } from "@/types/users";
import SearchUser from "../SearchUser/SearchUser";
import Notifications from "../Notifications/Notifications";

const Sidebar = ({ userData }: { userData: UserDataType }) => {
  const { openModal } = usePostModal();

  const [showSearchUser, setShowSearchUser] = React.useState(false);
  const [showNotifications, setShowNotifications] = React.useState(false);
  const [totalNotificationsUnread, setTotalNotificationsUnread] =
    React.useState(null);

  const handleShowNotifications = () => {
    setShowNotifications(true);
  };

  const handleCloseNotifications = () => {
    setShowNotifications(false);
  };

  const handleShowSearchUser = () => {
    setShowSearchUser(true);
  };

  const handleCloseSearchUser = () => {
    setShowSearchUser(false);
  };

  return (
    <>
      <div
        className={` flex flex-col justify-between fixed h-full overflow-hidden  transition-all duration-200 ${
          showSearchUser || showNotifications
            ? "w-[0%]"
            : "w-[14%]  border-r border-gray-600"
        }`}
      >
        <div className=" py-4 px-3">
          <Link href="/">
            <h2 className={` py-7 px-3 text-3xl  ${dancingScript.className}`}>
              Instagram
            </h2>
          </Link>
          <ul className="flex w-full flex-col items-start  gap-4">
            <SidebarItem
              icon={<HomeIcon />}
              name="Home"
              onClick={() => openModal()}
            />
            <SidebarItem
              icon={<NewPostIcon />}
              name="Create"
              onClick={() => openModal()}
            />
            <SidebarItem
              icon={<HeartIcon />}
              name="Notifications"
              onClick={handleShowNotifications}
              unReadTotals={totalNotificationsUnread}
            />

            <SidebarItem
              icon={<SearchIcon />}
              name="Search"
              onClick={() => handleShowSearchUser()}
            />
            {userData && (
              <Link href={`/${userData?._id}`} className="w-full">
                <li className="flex w-full items-center gap-5 cursor-pointer py-2 px-3 rounded-lg hover:bg-zinc-800 transition-all duration-200">
                  <img
                    src={
                      userData?.profilePicture ||
                      "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg"
                    }
                    alt="avatar profile"
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className=" text-white text-base">Profile</span>
                </li>
              </Link>
            )}
          </ul>
        </div>

        <div className="flex w-full  py-4 px-3 items-center gap-5 cursor-pointer  rounded-lg hover:bg-zinc-800 transition-all duration-200">
          <MenuIcon />
          <span className=" text-white text-base">More</span>
        </div>
      </div>
      {showSearchUser && (
        <SearchUser
          onClose={handleCloseSearchUser}
          searchUser={showSearchUser}
          setShowSearchUser={setShowSearchUser}
        />
      )}
      <Notifications
        showNotifications={showNotifications}
        userDataId={userData?._id}
        onClose={handleCloseNotifications}
        setTotalNotificationsUnread={
          setTotalNotificationsUnread as React.Dispatch<
            React.SetStateAction<number | null>
          >
        }
      />
    </>
  );
};

export default Sidebar;
