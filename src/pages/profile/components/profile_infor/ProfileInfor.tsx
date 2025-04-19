"use client";
import Button from "@/components/common/Button";
import ModalSettings from "@/components/ui/ModalSettings/ModalSettings";
import { UserDataType } from "@/types/users";
import Link from "next/link";
import React, { useState } from "react";
interface ProfileInforProps {
  slug: string;
  userData: UserDataType;
}

const ProfileInfor = ({ slug, userData }: ProfileInforProps) => {
  const [isShowModalSettings, setIsShowModalSettings] = useState(false);

  const handleShowModalSettings = () => {
    setIsShowModalSettings(true);
  };

  const handleCloseModalSettings = () => {
    setIsShowModalSettings(false);
  };
  return (
    <>
      <div className="flex gap-[60px] w-full max-w-[935px]  pt-[30px]  items-center">
        <img
          src={userData?.profilePicture || undefined}
          alt=""
          className="w-[150px] h-[150px] object-cover rounded-full"
        />

        <div className="flex flex-col gap-6 pt-[10px]">
          <div className="flex items-center gap-6">
            <span className="text-2xl font-normal">{slug}</span>
            <div className="flex items-center gap-3">
              <Button size="sm" variant="secondary">
                View Archive
              </Button>
              <Link href={"/accounts"}>
                <Button size="sm" variant="secondary">
                  Edit Profile
                </Button>
              </Link>
              <div className="cursor-pointer" onClick={handleShowModalSettings}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Options"
                  fill="currentColor"
                  height="24"
                  role="img"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <title>Options</title>
                  <circle
                    cx="12"
                    cy="12"
                    fill="none"
                    r="8.635"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></circle>
                  <path
                    d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

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

          <span className="text-sm  text-white">{userData?.bio}</span>
        </div>
      </div>
     {isShowModalSettings && <ModalSettings  onClose={handleCloseModalSettings} />}
    </>
  );
};

export default ProfileInfor;
