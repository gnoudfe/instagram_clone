import React from "react";
import StoryItem from "./StoryItem";

const StoryLayout = () => {
  return (
    <div className="flex flex-row gap-6 flex-nowrap p-1 overflow-auto">
      <StoryItem />
      <StoryItem />
      <StoryItem />
      <StoryItem />
      <StoryItem />
      <StoryItem />
      <StoryItem />
      <StoryItem />
    </div>
  );
};

export default StoryLayout;
