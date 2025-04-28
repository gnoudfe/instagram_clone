'use client';
import Input from '@/components/common/Input';
import { PostDetailDataResponse } from '@/types/users';
import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import Button from '@/components/common/Button';
const PostModalContentSeperate = () => {
  return <div className="w-full h-[1px] bg-zinc-700"></div>;
};

const PostModalContentSettingsOpiton = () => {
  return (
    <div className="cursor-pointer">
      <svg
        aria-label="More options"
        fill="currentColor"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <title>More options</title>
        <circle cx="12" cy="12" r="1.5"></circle>
        <circle cx="6" cy="12" r="1.5"></circle>
        <circle cx="18" cy="12" r="1.5"></circle>
      </svg>
    </div>
  );
};

const PostModalContentActions = () => {
  return (
    <div className="w-full flex items-center gap-3 p-5">
      <svg
        aria-label="Emoji"
        fill="currentColor"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
      >
        <title>Emoji</title>
        <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
      </svg>

      <Input type="text" placeholder="Add a comment..." name="comment" isTransparent={true} />
    </div>
  );
};

const PostModalContent = ({
  type = 1,
  postData,
  showOptionsModal,
  setShowOptionsModal,
}: {
  type?: 1 | 2;
  postData: PostDetailDataResponse;
  showOptionsModal: boolean;
  setShowOptionsModal: (show: boolean) => void;
}) => {
  return (
    <div className="w-full flex flex-col justify-between h-full">
      <div>
        <div className="w-full flex items-center justify-between p-5">
          <div className="flex items-center gap-3">
            <img
              src={
                postData?.post?.user?.profilePicture ||
                'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg'
              }
              alt={'avatar'}
              className="w-[32px] h-[32px] object-cover rounded-full cursor-pointer"
            />
            <span className="text-sm font-normal">{postData?.post?.user?.username}</span>
            <Button size="xs" variant="secondary">
              {postData?.post?.visibility}
            </Button>
          </div>
          {postData?.currentUserId === postData?.post?.user?._id && (
            <div onClick={() => setShowOptionsModal(!showOptionsModal)}>
              <PostModalContentSettingsOpiton />
            </div>
          )}
        </div>
        <PostModalContentSeperate />

        <div className="w-full flex flex-col gap-5 mt-2 p-5">
          <div className={`w-full flex  gap-3 ${type === 2 ? 'items-start' : 'items-center'}`}>
            <img
              src={
                postData?.post?.user?.profilePicture ||
                'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg'
              }
              alt="profile picture"
              className="w-[32px] h-[32px] object-cover rounded-full cursor-pointer"
            />
            <div className="flex flex-col ">
              <div
                className={`flex  ${
                  type === 2 ? 'flex-col gap-0 items-start' : 'gap-2 items-center'
                }`}
              >
                <span className="text-sm font-normal whitespace-nowrap">
                  {postData?.post?.user?.username}
                </span>
                <span className="text-sm font-normal text-neutral-400">
                  {postData?.post?.content}
                </span>
              </div>
              {postData?.post?.createdAt && (
                <span className="text-xs font-normal text-neutral-600">
                  {formatDistanceToNow(new Date(postData.post.createdAt), {
                    addSuffix: true,
                  })}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <PostModalContentSeperate />
        <PostModalContentActions />
      </div>
    </div>
  );
};

export default PostModalContent;
