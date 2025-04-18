"use client";
import Comments from "@/components/common/Comments/Comments";
import Input from "@/components/common/Input";
import React from "react";

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

      <Input
        type="text"
        placeholder="Add a comment..."
        name="comment"
        isTransparent={true}
      />
    </div>
  );
};

const PostModalContent = ({
  showOptionsModal,
  setShowOptionsModal,
}: {
  showOptionsModal: boolean;
  setShowOptionsModal: (show: boolean) => void;
}) => {
  return (
    <div className="w-full flex flex-col justify-between h-full">
      <div>
        <div className="w-full flex items-center justify-between p-5">
          <div className="flex items-center gap-3">
            <img
              src="https://i.ytimg.com/vi/v9XyIGXcRck/maxresdefault.jpg"
              alt=""
              className="w-[32px] h-[32px] object-cover rounded-full cursor-pointer"
            />
            <span className="text-sm font-normal">Duongg</span>
          </div>
          <div onClick={() => setShowOptionsModal(!showOptionsModal)}>
            <PostModalContentSettingsOpiton />
          </div>
        </div>
        <PostModalContentSeperate />

        <div className="w-full flex flex-col gap-5 mt-2 p-5">
          <Comments />
          <Comments />
          <Comments />
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
