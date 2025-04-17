import { dancingScript } from "@/assets/fonts/fonts";
import Explore from "@/components/icons/Explore/Explore";
import NewPostIcon from "@/components/icons/NewPost/NewPostIcon";
import { BellIcon, HomeIcon, MenuIcon, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const sidebarItems = [
  {
    id: 1,
    name: "Home",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "Search",
    icon: <Search />,
  },
  {
    id: 3,
    name: "Explore",
    icon: <Explore />,
  },
  {
    id: 4,
    name: "Notifications",
    icon: <BellIcon />,
  },
  {
    id: 5,
    name: "Create",
    icon: <NewPostIcon />,
  },
];

const Sidebar = () => {
  return (
    <div className="w-[16%] flex flex-col justify-between fixed h-full py-4 px-3  border-r border-gray-600">
      <div>
        <h2 className={` py-7 px-3 text-3xl  ${dancingScript.className}`}>
          Instagram
        </h2>
        <ul className="flex w-full flex-col items-start  gap-4">
          {sidebarItems.map((item) => (
            <li
              key={item.id}
              className="flex w-full items-center gap-5 cursor-pointer py-2 px-3 rounded-lg hover:bg-zinc-800 transition-all duration-200"
            >
              {item.icon}
              <span className=" text-white text-base">{item.name}</span>
            </li>
          ))}

          <Link href={"/profile"} className="w-full">
            <li className="flex w-full items-center gap-5 cursor-pointer py-2 px-3 rounded-lg hover:bg-zinc-800 transition-all duration-200">
              <img
                src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg"
                alt="avatar profile"
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className=" text-white text-base">Profile</span>
            </li>
          </Link>
        </ul>
      </div>

      <div className="flex w-full items-center gap-5 cursor-pointer py-2 px-3 rounded-lg hover:bg-zinc-800 transition-all duration-200">
        <MenuIcon />
        <span className=" text-white text-base">More</span>
      </div>
    </div>
  );
};

export default Sidebar;
