"use client";
import React, { useState } from "react";
import PostModalContent from "../components/post_modal_content/PostModalContent";
import ProfileContent from "../components/profile_content/ProfileContent";
import {
  useGetOtherUserPostsQuery,
  useGetPostDetail,
} from "@/services/queries/usePost";
import { Postdata, PostDetailDataResponse } from "@/types/users";
import ModalOptionsPosts from "@/components/ui/ModalOptionsPosts/ModalOptionsPosts";
import Spinner from "@/components/common/Loading/Spinner";

const PostProfileLayoutSeperate = () => {
  return <div className="w-full h-[1px] bg-zinc-700"></div>;
};

const PostProfileLayout = ({ id, slug }: { id: string; slug: string }) => {
  const { data } = useGetPostDetail({ postId: id });
  const { data: listPosts, isLoading: isLoadingMorePosts } =
    useGetOtherUserPostsQuery({ userId: slug });

  const seeMorePosts = listPosts?.posts?.filter((post) => post._id !== id);
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  return (
    <>
      <div className="mt-4 w-[100%] flex flex-col  gap-12 items-center justify-center  pl-[310px]">
        <div className="relative z-50 rounded-lg w-full h-full  flex  max-w-[800px] border border-neutral-700">
          <div className=" w-[55%] aspect-[480/600] ">
            <img
              src={data?.post?.images[0]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className=" w-[45%] bg-black">
            <PostModalContent
              type={2}
              showOptionsModal={showOptionsModal}
              setShowOptionsModal={setShowOptionsModal}
              postData={data as PostDetailDataResponse}
            />
          </div>
        </div>
        <div className="w-full max-w-[900px]">
          <PostProfileLayoutSeperate />
          <span className="text-sm font-normal block mt-4">
            More posts from{" "}
            <span className="text-white font-semibold">
              {data?.post?.user?.username}
            </span>
          </span>
          {isLoadingMorePosts && <Spinner />}
          <div className="w-full mt-4">
            <ProfileContent postsData={seeMorePosts as Postdata[]} />
          </div>
        </div>
      </div>
      {showOptionsModal && (
        <ModalOptionsPosts setShowOptionsModal={setShowOptionsModal} />
      )}
    </>
  );
};

export default PostProfileLayout;
