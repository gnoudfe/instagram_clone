'use client';
import Spinner from '@/components/common/Loading/Spinner';
import { usePostModal } from '@/context/ModalPostContext';
import { useUserInfor } from '@/services/queries/useAuth';
import { useCreatePostMutation } from '@/services/queries/usePost';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const Visiblity = [
  {
    id: 1,
    value: 'Public',
  },
  {
    id: 2,
    value: 'Friends',
  },
  {
    id: 3,
    value: 'Private',
  },
];

interface ImageContentProps {
  finalImage: string[];
  finalFile: File[];
}

const ImageContent = ({ finalImage, finalFile }: ImageContentProps) => {
  const { confirmCloseModal } = usePostModal();
  const [showVisiblity, setShowVisiblity] = React.useState(false);
  const [content, setContent] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [currentVisiblity, setCurrentVisiblity] = React.useState(Visiblity[0].value);
  const router = useRouter();

  const queryClient = useQueryClient();
  const { data } = useUserInfor();

  const createPostMutation = useCreatePostMutation();

  const handlePost = async () => {
    if (!content.trim()) {
      setErrorMessage('Content cannot be empty.');
      return;
    }
    const formData = new FormData();
    finalFile.forEach((file) => {
      formData.append('images', file);
    });
    formData.append('content', content);
    formData.append('visibility', currentVisiblity);

    try {
      setIsLoading(true);
      setErrorMessage(''); // Reset error message before new request
      const response = await createPostMutation.mutateAsync(formData);
      if (response.status === 'success') {
        confirmCloseModal();
        queryClient.invalidateQueries({
          queryKey: ['get-posts-feed'],
          refetchType: 'all',
        });
        router.refresh();
      } else if (response.message) {
        setErrorMessage(response.message);
      }
    } catch (error: any) {
      console.log('error while posting', error);
      // Extract error message from API response if available
      if (error.response?.data?.message) {
        setErrorMessage(error.response.data.message);
      } else if (error.message) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Đã xảy ra lỗi khi đăng bài. Vui lòng thử lại sau.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowVisiblity = () => {
    setShowVisiblity(!showVisiblity);
  };

  const handleSelectVisiblity = (value: string) => {
    setCurrentVisiblity(value);
  };

  return (
    <div className="relative z-10 w-full max-w-[1000px] rounded-sm flex flex-col animate-fade-in">
      {/* header */}
      <div className="h-[42px] bg-black text-white  flex items-center justify-center font-semibold relative ">
        <span> Create new post</span>

        <span
          className="text-sm absolute right-5 text-blue-700 cursor-pointer"
          onClick={handlePost}
        >
          {isLoading ? <Spinner /> : 'Share'}
        </span>
      </div>
      {errorMessage && (
        <div className="absolute top-[42px] left-0 right-0 bg-red-500 text-white text-sm py-2 px-4 text-center animate-fade-in">
          {errorMessage}
        </div>
      )}
      {/* content */}
      <div className="flex h-full w-full ">
        <div className=" max-w-[600px] aspect-[4/5] w-full h-full  bg-neutral-800 relative">
          <Swiper
            slidesPerView={1}
            allowTouchMove={false}
            modules={[Navigation]}
            navigation={{
              nextEl: `.btn-next-image-content`,
              prevEl: `.btn-prev-image-content`,
            }}
            className="w-full h-full"
          >
            {finalImage.map((img) => (
              <SwiperSlide key={img} className="h-full w-full">
                <img
                  src={img || undefined}
                  alt="finalImage"
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div>
            <div className="btn-prev-image-content w-8 h-8 flex items-center justify-center rounded-full bg-white absolute z-10 top-1/2 left-2 cursor-pointer">
              <ArrowLeftIcon color="#000" />
            </div>
            <div className="btn-next-image-content  w-8 h-8 flex items-center justify-center rounded-full bg-white absolute z-10 top-1/2 right-2 cursor-pointer">
              <ArrowRightIcon color="#000" />
            </div>
          </div>
        </div>

        <div className="flex-1 bg-neutral-900 ">
          <div className="flex items-center gap-2 p-5">
            <img
              src={
                data?.user?.profilePicture ||
                'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg'
              }
              alt=""
              className="w-[28px] h-[28px] object-cover rounded-full"
            />
            <span className="text-sm text-white ">{data?.user?.username}</span>
          </div>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={`What's on your mind ${data?.user?.username}?`}
            maxLength={300}
            autoFocus
            className="w-full h-full p-5 bg-transparent text-white border-none outline-none max-h-[200px]  overflow-hidden resize-none"
          ></textarea>

          <div className="w-full p-5 flex flex-col gap-2 border-t-neutral-700 border-t">
            <div
              className="w-full cursor-pointer flex items-center justify-between"
              onClick={handleShowVisiblity}
            >
              <span>Visibility</span>
              <div
                className={showVisiblity ? 'rotate-0 transition-all' : 'rotate-180 transition-all'}
              >
                <svg
                  aria-label="Down chevron icon"
                  fill="currentColor"
                  height="16"
                  role="img"
                  viewBox="0 0 24 24"
                  width="16"
                >
                  <title>Down chevron icon</title>
                  <path d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"></path>
                </svg>
              </div>
            </div>
            {showVisiblity && (
              <div className="flex w-full flex-col gap-2 ">
                {Visiblity.map((item) => (
                  <div
                    className="w-full flex items-center justify-between cursor-pointer"
                    key={item.id}
                    onClick={() => handleSelectVisiblity(item.value)}
                  >
                    <span className="text-sm text-white">{item.value}</span>
                    <div
                      className={`w-[16px] h-[16px] border border-white rounded-full cursor-pointer ${
                        currentVisiblity === item.value ? 'bg-white' : ''
                      }`}
                    ></div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageContent;
