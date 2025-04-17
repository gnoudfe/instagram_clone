import React from "react";

interface ProfileInforProps {
  slug: string;
}

const ProfileInfor = ({ slug }: ProfileInforProps) => {
  return (
    <div className="flex gap-[100px] w-full max-w-[935px]  pt-[30px]  items-center justify-center">
      <div className="max-w-[150px] max-h-[150px] rounded-full">
        <img
          src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg"
          alt=""
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="flex flex-col gap-6 pt-[10px]">
        <span className="text-base font-normal">{slug}</span>

        <div className="flex items-center gap-4">
          <span className="text-sm font-normal text-[#A8A8A8]">
            <span className="text-white font-semibold">0</span> posts
          </span>
          <span className="text-sm font-normal text-[#A8A8A8]">
            <span className="text-white font-semibold">0</span> followers
          </span>
          <span className="text-sm font-normal text-[#A8A8A8]">
            <span className="text-white font-semibold">0</span> following
          </span>
        </div>

        <span className="text-sm  text-white">
          Find joy in the little things, work hard, stay humble and be kind
        </span>
      </div>
    </div>
  );
};

export default ProfileInfor;
