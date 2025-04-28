'use client';
import { UserInfo } from '@/types/users';
import React from 'react';

type PostFooterProps = {
  totalLikes: UserInfo[];
  postTitle: string;
};

const PostFooter = ({ totalLikes, postTitle }: PostFooterProps) => {
  // const [expanded, setExpanded] = useState(false);

  // Giả sử đây là nội dung từ CMS, bao gồm cả HTML tags

  // const truncatedContent = postTitle.split(" ").slice(0, 30).join(" ");

  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm text-white font-bold cursor-pointer">
        {totalLikes?.length} likes
      </span>
      <div className="text-sm text-white font-medium pr-4">
        {/* {expanded ? (
          <div dangerouslySetInnerHTML={{ __html: postTitle }} />
        ) : (
          <>
            <div
              className="text-sm text-white font-medium inline pr-1"
              dangerouslySetInnerHTML={{ __html: truncatedContent }}
            />

            <span
              className="text-sm text-zinc-400 font-bold cursor-pointer inline-block "
              onClick={() => setExpanded(true)}
            >
              ... more
            </span>
          </>
        )} */}
        <div dangerouslySetInnerHTML={{ __html: postTitle }} />
      </div>
    </div>
  );
};

export default PostFooter;
