import React from "react";

const Comments = () => {
  return (
    <div className="w-full flex items-center gap-3">
      <img
        src="https://i.ytimg.com/vi/v9XyIGXcRck/maxresdefault.jpg"
        alt=""
        className="w-[32px] h-[32px] object-cover rounded-full cursor-pointer"
      />
      <div className="flex flex-col ">
        <div className="flex items-center gap-2">
          <span className="text-sm font-normal">Duongg</span>
          <span className="text-sm font-normal text-neutral-400">
            Taptelammau
          </span>
        </div>
        <span className="text-sm font-normal text-neutral-600">5d</span>
      </div>
    </div>
  );
};

export default Comments;
