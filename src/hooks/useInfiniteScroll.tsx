import React, { useEffect, useRef } from "react";

type InfiniteScrollProps = {
  loadMore: () => void;
  hasMore: boolean | undefined;
  children: React.ReactNode;
};

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  loadMore,
  hasMore,
  children,
}) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore();
      }
    });

    observerRef.current = observer;

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadMore, hasMore]);

  return (
    <>
      {children}
      <div ref={sentinelRef} style={{ height: "20px" }} />{" "}
      {/* Đối tượng quan sát */}
    </>
  );
};

export default InfiniteScroll;
