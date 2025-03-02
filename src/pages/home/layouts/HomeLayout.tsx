import React from "react";
import StoryLayout from "../components/stories/StoryLayout";
import PostLayout from "../components/posts/PostLayout";
import AccountLayout from "../components/account/AccountLayout";

const HomeLayout = () => {
  return (
    <div className="mt-4 w-[84%] flex pl-[300px] gap-32">
      <div className="max-w-[630px]  w-full flex flex-col gap-10">
        <StoryLayout />
        <div className="w-full px-16">
          <PostLayout />
        </div>
      </div>
      <div className="max-w-[320px] w-full h-full mt-4">
        <AccountLayout />
      </div>
    </div>
  );
};

export default HomeLayout;
