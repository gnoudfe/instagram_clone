"use client";
import LikeIcon from "@/components/icons/Like/LikeIcon";
import LikedIcon from "@/components/icons/Liked/LikedIcon";
import { motion } from "framer-motion";
import React from "react";

interface LikeButtonProps {
  isLike: boolean;
  handleLike: () => void;
}

const LikeButton = ({ isLike = false, handleLike }: LikeButtonProps) => {
  return (
    <button
      className="cursor-pointer hover:opacity-80 relative"
      role="button"
      onClick={handleLike}
    >
      <div className={isLike ? "opacity-0" : "opacity-100"}>
        <LikeIcon />
      </div>
      {isLike && (
        <motion.div
          animate={{ scale: [0.5, 1.2, 1], opacity: 1 }}
          className="absolute top-0 right-0"
          transition={{
            duration: 0.4,
          }}
        >
          <LikedIcon />
        </motion.div>
      )}
    </button>
  );
};

export default LikeButton;
