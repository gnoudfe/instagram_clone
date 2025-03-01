"use client";
import LikeButton from "@/components/common/LikeButton/LikeButton";
import CommentIcon from "@/components/icons/Comment/CommentIcon";
import SaveIcon from "@/components/icons/Save/SaveIcon";

import React, { useState } from "react";

const PostActions = () => {
  const [isLike, setIsLike] = useState(false);

  const handleLike = (): void => {
    setIsLike(!isLike);
  };

  return (
    <div className="flex flex-row justify-between mt-1">
      <div className="flex gap-4 items-center">
        <LikeButton isLike={isLike} handleLike={handleLike} />
        <div className="cursor-pointer  hover:opacity-80">
          <CommentIcon />
        </div>
      </div>
      <div className="cursor-pointer hover:opacity-80">
        <SaveIcon />
      </div>
    </div>
  );
};

export default PostActions;
