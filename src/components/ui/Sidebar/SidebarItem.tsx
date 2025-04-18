import React from "react";

const SidebarItem = ({
  icon,
  name,
  onClick,
}: {
  icon: React.ReactNode;
  name: string;
  onClick?: () => void;
}) => {
  return (
    <li
      className="flex w-full items-center gap-5 cursor-pointer py-2 px-3 rounded-lg hover:bg-zinc-800 transition-all duration-200"
      onClick={onClick}
    >
      {icon}
      <span className=" text-white text-base">{name}</span>
    </li>
  );
};

export default SidebarItem;
