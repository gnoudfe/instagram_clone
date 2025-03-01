import React from "react";
import StoryLayout from "../components/stories/StoryLayout";
import PostLayout from "../components/posts/PostLayout";

const HomeLayout = () => {
  return (
    <div className="mt-4 w-[84%]">
      <div className="max-w-[630px] mx-auto w-full flex flex-col gap-10">
        <StoryLayout />
        <div className="w-full px-16">
          <PostLayout />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
