import Link from "next/link";
import React from "react";

const ProfileContent = () => {
  return (
    <div className=" w-full max-w-[1000px] ">
      <div className=" grid grid-cols-3 gap-2 w-full pb-14">
        <Link href="profile/2">
          <img
            src="https://i.ytimg.com/vi/v9XyIGXcRck/maxresdefault.jpg"
            alt=""
            className="w-full h-full object-cover aspect-[307/410]"
          />
        </Link>
        <img
          src="https://i.ytimg.com/vi/v9XyIGXcRck/maxresdefault.jpg"
          alt=""
          className="w-full h-full object-cover aspect-[307/410]"
        />
        <img
          src="https://i.ytimg.com/vi/v9XyIGXcRck/maxresdefault.jpg"
          alt=""
          className="w-full h-full object-cover aspect-[307/410]"
        />
        <img
          src="https://i.ytimg.com/vi/v9XyIGXcRck/maxresdefault.jpg"
          alt=""
          className="w-full h-full object-cover aspect-[307/410]"
        />
      </div>
    </div>
  );
};

export default ProfileContent;
