import StoryItem from "@/pages/home/components/stories/StoryItem";
import React from "react";

const StoryHighlight = () => {
  return (
    <div className="flex gap-[50px] items-center w-full max-w-[935px] ">
      <StoryItem size={77} />
      <StoryItem size={77} />
      <StoryItem size={77} />
    </div>
  );
};

export default StoryHighlight;
