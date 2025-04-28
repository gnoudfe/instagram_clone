'use client';
import React, { useState } from 'react';
import PostModalContent from '../components/post_modal_content/PostModalContent';
import { useRouter } from 'next/navigation';
import ModalOptionsPosts from '@/components/ui/ModalOptionsPosts/ModalOptionsPosts';
import { useGetPostDetail } from '@/services/queries/usePost';
import { PostDetailDataResponse } from '@/types/users';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';

const PostProfileModalLayout = ({ postId }: { postId: string }) => {
  const router = useRouter();
  const [showOptionsModal, setShowOptionsModal] = useState(false);

  const { data } = useGetPostDetail({ postId: postId });

  const closeModal = () => {
    router.back();
  };
  return (
    <>
      <div className="fixed left-0 top-0 w-full h-full z-50 flex items-center justify-center">
        <div
          className="bg-[#111111c9] fixed left-0 top-0 w-full h-full z-50"
          onClick={closeModal}
        ></div>
        <div className="flex flex-col flex-grow items-center h-full justify-center">
          <div className="relative z-50 rounded-lg w-full h-full pt-10 pb-10 flex max-w-[70%]">
            <div className=" w-[55%] max-w-[700px]  aspect-[4/5]  select-none  relative">
              <Swiper
                slidesPerView={1}
                modules={[Navigation]}
                navigation={{
                  nextEl: `.btn-next-image-post-modal`,
                  prevEl: `.btn-prev-image-post-modal`,
                }}
                className="w-full h-full "
              >
                {data?.post?.images.map((url, index) => (
                  <SwiperSlide key={index}>
                    <img src={url} alt={url} className="w-full h-full object-cover rounded-sm " />
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
                showOptionsModal={showOptionsModal}
                setShowOptionsModal={setShowOptionsModal}
                postData={data as PostDetailDataResponse}
              />
            </div>
          </div>
        </div>
      </div>
      {showOptionsModal && (
        <ModalOptionsPosts postId={postId} setShowOptionsModal={setShowOptionsModal} type="Modal" />
      )}
    </>
  );
};

export default PostProfileModalLayout;
