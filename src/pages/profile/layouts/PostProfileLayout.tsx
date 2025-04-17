import React from "react";
import PostModalContent from "../components/post_modal_content/PostModalContent";
import ProfileContent from "../components/profile_content/ProfileContent";

const PostProfileLayoutSeperate = () => {
  return <div className="w-full h-[1px] bg-zinc-700"></div>;
};

const PostProfileLayout = ({ id }: { id: string }) => {
  return (
    <div className="mt-4 w-[100%] flex flex-col  gap-12 items-center justify-center  pl-[310px]">
      <div className="relative z-50 rounded-lg w-full h-full  flex  max-w-[800px] border border-neutral-700">
        <div className=" w-[55%] aspect-[480/600] ">
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
      <div className="w-full max-w-[900px]">
        <PostProfileLayoutSeperate />
        <span className="text-sm font-normal block mt-4">
          More posts from <span className="text-white font-semibold">{id}</span>
        </span>
      <div className="w-full mt-4">  <ProfileContent /></div>
      </div>
    </div>
  );
};

export default PostProfileLayout;
