"use client";
import React from "react";
import PostModalContent from "../components/post_modal_content/PostModalContent";
import { useRouter } from "next/navigation";

const PostProfileModalLayout = () => {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };
  return (
    <div className="fixed left-0 top-0 w-full h-full z-50 flex items-center justify-center">
      <div
        className="bg-[#111111c9] fixed left-0 top-0 w-full h-full z-50"
        onClick={closeModal}
      ></div>
      <div className="flex flex-col flex-grow items-center h-full justify-center">
        <div className="relative z-50 rounded-lg w-full h-full pt-10 pb-10 flex max-w-[70%]">
          <div className=" w-[55%] ">
            <img
              src="https://i.ytimg.com/vi/v9XyIGXcRck/maxresdefault.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" w-[45%] bg-black">
            <PostModalContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostProfileModalLayout;
