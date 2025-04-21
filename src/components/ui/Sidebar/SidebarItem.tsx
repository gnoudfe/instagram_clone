import React from "react";

const SidebarItem = ({
  icon,
  name,
  onClick,
  unReadTotals,
}: {
  icon: React.ReactNode;
  name: string;
  unReadTotals?: number | null;
  onClick?: () => void;
}) => {
  return (
    <li
      className="flex w-full items-center  justify-between cursor-pointer py-2 px-3 rounded-lg hover:bg-zinc-800 transition-all duration-200"
      onClick={onClick}
    >
      <div className="flex gap-5">
        <span className=" min-w-[24px] min-h-[24px]"> {icon}</span>
        <span className=" text-white text-base">{name}</span>
      </div>
      {unReadTotals && (
        <div className="w-5 h-5 flex items-center justify-center rounded-full bg-red-500">
          <span className="text-xs">{unReadTotals}</span>
        </div>
      )}
    </li>
  );
};

export default SidebarItem;
