'use client';
import MoreOptions from '@/components/icons/MoreOptions/MoreOptions';
import { UserInfo } from '@/types/users';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';
import React from 'react';

type PostHeaderProps = {
  userData: UserInfo;
  createdAt: string;
  currentUserId: string;
  setShowOptionsModal: (show: boolean) => void;
};

const PostHeader = ({
  userData,
  createdAt,
  currentUserId,
  setShowOptionsModal,
}: PostHeaderProps) => {
  return (
    <div className="w-full flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-2">
        <Link href={`${userData?._id}`}>
          <img
            src={
              userData?.profilePicture ||
              'https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg'
            }
            alt=""
            className="w-[32px] h-[32px] rounded-full object-cover cursor-pointer"
          />
        </Link>
        <Link href={`${userData?._id}`} className="text-white text-sm font-medium ">
          {userData?.username}
        </Link>
        <div className="w-1 h-1 rounded-full bg-gray-600"></div>
        <span className="text-sm font-medium  text-zinc-400">
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </span>
      </div>
      {currentUserId === userData?._id && (
        <div onClick={() => setShowOptionsModal(true)}>
          <MoreOptions className="cursor-pointer hover:opacity-80" />
        </div>
      )}
    </div>
  );
};

export default PostHeader;
