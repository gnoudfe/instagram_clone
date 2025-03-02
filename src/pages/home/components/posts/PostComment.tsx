import React from "react";

const PostComment = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-sm font-medium text-zinc-400 cursor-pointer">
        View all 282 comments
      </span>

      <span className="text-sm font-medium text-zinc-400 cursor-pointer">
        Add a comment...
      </span>
    </div>
  );
};

export default PostComment;
