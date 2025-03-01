"use client";
import { AnimatePresence, motion } from "framer-motion";
import LikeIconType2 from "@/components/icons/Like/LikeIconType2";
import React, { useState } from "react";

interface HeartsType {
  id: number;
  positionX: number;
  positionY: number;
}

const PostContent = () => {
  const [hearts, setHearts] = useState<HeartsType[]>([]);

  const handleLikePost = (e: React.MouseEvent) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newHearts = {
      id: Date.now(),
      positionX: x,
      positionY: y,
    };

    setHearts((prev) => [...prev, newHearts]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== newHearts.id));
    }, 1000);
  };
  return (
    <div
      className="w-full mt-3 relative overflow-hidden"
      onDoubleClick={handleLikePost}
    >
      <img
        src="https://data.designervn.net/2020/10/12608_8040b633df346bd3f1379ddb90490a64.png"
        alt=""
        className="w-full h-full object-contain  border border-zinc-500 rounded-sm  "
      />

      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            style={{
              left: heart.positionX,
              top: heart.positionY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              rotate: [-60, -50, -40, -30, -20, -10, 0, 10, 20],
              scale: [0, 1.2, 1],
              opacity: [0, 1, 1],
              y: [0, 0, -heart.positionY - 120],
            }}
    
            exit={{ scale: 0, opacity: 0 }}
            className="absolute top-1/2 left-1/2 transform "
          >
            <LikeIconType2 />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
export default PostContent;
