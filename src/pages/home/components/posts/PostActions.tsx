"use client";
import React from "react";

const PostActions = () => {
  // const [likes, setLikes] = useState(likeCount);
  // const [isLiked, setIsLiked] = useState(initialLiked);

  // const handleLike = () => {
  //   if (isLiked) {
  //     setLikes(likes - 1);
  //   } else {
  //     setLikes(likes + 1);
  //   }
  //   setIsLiked(!isLiked);
  // };

  return (
    <div className="flex flex-row gap-4 items-center">
      Like
      <svg
        aria-label="Comment"
        className="x1lliihq x1n2onr6 x5n08af"
        fill="currentColor"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <title>Comment</title>
        <path
          d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="2"
        ></path>
      </svg>
    </div>
  );
};

export default PostActions;
