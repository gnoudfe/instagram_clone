import { MoreHorizontal } from "lucide-react";
import React from "react";

const PostHeader = () => {
  return (
    <div className="w-full flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-2">
        <img
          src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg"
          alt=""
          className="w-[32px] h-[32px] rounded-full object-cover cursor-pointer"
        />
        <h4 className="text-white text-sm font-medium ">Duongg</h4>
        <div className="w-1 h-1 rounded-full bg-gray-600"></div>
        <span className="text-sm font-medium  text-zinc-400">24m</span>
      </div>

      <MoreHorizontal />
    </div>
  );
};

export default PostHeader;
