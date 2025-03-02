import React from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostActions from "./PostActions";
import PostFooter from "./PostFooter";
import PostComment from "./PostComment";

const PostLayout = () => {
  return (
    <div className="border-b border-gray-200 mb-4 pb-6 w-full flex flex-col gap-2">
      <PostHeader />
      <PostContent />
      <PostActions />
      <PostFooter />
      <PostComment />
    </div>
  );
};

export default PostLayout;
