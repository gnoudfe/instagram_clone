import React from 'react';

const StoryItem = ({ size = 56 }) => {
  const borderSize = Math.ceil(size * 1.16);

  return (
    <div className="flex flex-col gap-2 items-center justify-center cursor-pointer">
      <div className="rounded-full relative" style={{ width: `${size}px`, height: `${size}px` }}>
        <img
          src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611765.jpg"
          alt=""
          className="w-full h-full rounded-full object-cover"
        />
        <div
          className="absolute rounded-full border-2 border-red-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ width: `${borderSize}px`, height: `${borderSize}px` }}
        />
      </div>
      <span className="text-sm w-full block text-center">Duongg</span>
    </div>
  );
};

export default StoryItem;
