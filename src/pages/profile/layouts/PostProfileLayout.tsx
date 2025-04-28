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
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

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
          <div className=" w-[55%] max-w-[500px] aspect-[4/5] select-none relative">
            <Swiper
              slidesPerView={1}
              modules={[Navigation]}
              navigation={{
                nextEl: `.btn-next-image-post-modal`,
                prevEl: `.btn-prev-image-post-modal`,
              }}
              className="w-full h-full"
            >
              {data?.post?.images.map((url, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={url}
                    alt={url}
                    className="w-full h-full object-cover rounded-sm"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div>
              <div className="btn-prev-image-post-modal w-8 h-8 flex items-center justify-center rounded-full bg-white absolute z-10 top-1/2 left-2 cursor-pointer">
                <ArrowLeftIcon color="#000" />
              </div>
              <div className="btn-next-image-post-modal w-8 h-8 flex items-center justify-center rounded-full bg-white absolute z-10 top-1/2 right-2 cursor-pointer">
                <ArrowRightIcon color="#000" />
              </div>
            </div>
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
        <ModalOptionsPosts type="Detail" postId={id} setShowOptionsModal={setShowOptionsModal} />
      )}
    </>
  );
};

export default PostProfileLayout;
