"use client";
import { AnimatePresence, motion } from "framer-motion";
import LikeIconType2 from "@/components/icons/Like/LikeIconType2";
import React, { useRef, useState, useEffect } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface HeartsType {
  id: number;
  positionX: number;
  positionY: number;
}

const PostContent = ({ postContent }: { postContent: string[] }) => {
  const [hearts, setHearts] = useState<HeartsType[]>([]);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true); // đảm bảo div đã render
  }, []);

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
      className="w-full mt-3 relative overflow-hidden select-none"
      onDoubleClick={handleLikePost}
    >
      {swiperReady && (
        <Swiper
          slidesPerView={1}
          pagination={{
            el: paginationRef.current!,
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}" tabIndex="${index}"></span>`;
            },
          }}
          modules={[Pagination]}
        >
          {postContent.map((url, index) => (
            <SwiperSlide key={index}>
              <img
                src={url}
                alt={url}
                className="w-full h-full object-cover aspect-[4/5] border border-zinc-800 rounded-sm"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div
        ref={paginationRef}
        className="swiper-pagination-posts mt-3 justify-center "
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
              rotate: [-60, 0, 20],
              scale: [0, 1.2, 1],
              opacity: [0, 1, 1],
              y: [0, 0, -heart.positionY - 120],
            }}
            transition={{ duration: 0.5 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute top-1/2 left-1/2 transform"
          >
            <LikeIconType2 />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default PostContent;
