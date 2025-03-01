import React from "react";

const StoryItem = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center ">
      <div className="w-[56px] h-[56px] rounded-full relative">
        <img
          src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg"
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
        <div className="absolute w-[65px] h-[65px] rounded-full border-2 border-red-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <span className="text-sm w-full block text-center">Duongg</span>
    </div>
  );
};

export default StoryItem;
