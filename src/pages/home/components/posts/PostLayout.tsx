"use client";
import React, { useCallback, useEffect, useState } from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostActions from "./PostActions";
import PostFooter from "./PostFooter";
import PostComment from "./PostComment";
import { useGetPostsFeed } from "@/services/queries/usePost";
import InfiniteScroll from "@/hooks/useInfiniteScroll";
import Spinner from "@/components/common/Loading/Spinner";
import ModalOptionsPosts from "@/components/ui/ModalOptionsPosts/ModalOptionsPosts";

const PostLayout = () => {
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useGetPostsFeed({ limit: 2 });
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [feedPosts, setFeedPosts] = useState<any[]>([]);

  const currentUserId = data?.pages[0]?.currentUserId;

  // Cập nhật feedPosts mỗi khi data thay đổi
  useEffect(() => {
    if (data) {
      const flatPosts = data.pages.flatMap((page) => page.posts || []);
      setFeedPosts(flatPosts);
    }
  }, [data]);

  // Hàm gọi khi xóa post thành công
  const handleDeletePost = (postId: string) => {
    setFeedPosts((prev) => prev.filter((post) => post._id !== postId));
    setShowOptionsModal(false);
  };

  // Load more function for InfiniteScroll
  const handleLoadMore = useCallback(() => {
    if (!isFetchingNextPage) {
      fetchNextPage();
    }
  }, [isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <Spinner />;

  return (
    <>
      <InfiniteScroll loadMore={handleLoadMore} hasMore={hasNextPage}>
        {feedPosts?.map((post) => (
          <div key={post._id}>
            <div className="border-b border-neutral-600 mb-4 pb-6 w-full flex flex-col gap-2">
              <PostHeader
                userData={post?.user}
                createdAt={post?.createdAt}
                currentUserId={currentUserId || ""}
                setShowOptionsModal={(show: boolean) => {
                  setSelectedPostId(post._id);
                  setShowOptionsModal(show);
                }}
              />
              <PostContent postContent={post?.images} />
              <PostActions />
              <PostFooter totalLikes={post?.likes} postTitle={post?.content} />
              <PostComment totalsComments={post?.comments} />
            </div>
          </div>
        ))}

        {isFetchingNextPage && <Spinner />}
      </InfiniteScroll>
      {showOptionsModal && (
        <ModalOptionsPosts
          setShowOptionsModal={setShowOptionsModal}
          postId={selectedPostId || ''}
          onDeletePost={handleDeletePost}
        />
      )}
    </>
  );
};

export default PostLayout;
