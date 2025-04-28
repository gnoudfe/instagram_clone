'use client';
import NewPostIcon from '@/components/icons/NewPost/NewPostIcon';
import { usePostModal } from '@/context/ModalPostContext';
import { HeartIcon, HomeIcon, SearchIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const SidebarIcon = ({ onClose }: { onClose: () => void }) => {
  const { openModal } = usePostModal();

  return (
    <div className="w-[60px] bg-black flex flex-col items-center">
      <Link
        href={'/'}
        onClick={onClose}
        className="cursor-pointer w-[44px] h-[44px] flex items-center justify-center rounded-lg hover:bg-neutral-900 transition-all duration-300 mt-14"
      >
        <svg
          aria-label="Instagram"
          fill="currentColor"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <title>Instagram</title>
          <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
        </svg>
      </Link>

      <Link
        href={'/'}
        className="cursor-pointer w-[44px] h-[44px] flex items-center justify-center rounded-lg hover:bg-neutral-900 transition-all duration-300 mt-6"
        onClick={onClose}
      >
        <HomeIcon />
      </Link>
      <div
        onClick={openModal}
        className="cursor-pointer w-[44px] h-[44px] flex items-center justify-center rounded-lg hover:bg-neutral-900 transition-all duration-300 mt-6"
      >
        <NewPostIcon />
      </div>
      <div
        onClick={onClose}
        className="cursor-pointer w-[44px] h-[44px] flex items-center justify-center rounded-lg hover:bg-neutral-900 transition-all duration-300 mt-6"
      >
        <HeartIcon />
      </div>
      <div
        onClick={onClose}
        className="cursor-pointer w-[44px] h-[44px] flex items-center justify-center rounded-lg hover:bg-neutral-900 transition-all duration-300 mt-6"
      >
        <SearchIcon />
      </div>
    </div>
  );
};

export default SidebarIcon;
