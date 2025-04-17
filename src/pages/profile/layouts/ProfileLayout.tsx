import React from "react";
import ProfileInfor from "../components/profile_infor/ProfileInfor";
import StoryHighlight from "../components/story_highlight/StoryHighlight";
import ProfileContent from "../components/profile_content/ProfileContent";

interface ProfileLayoutProps {
  slug: string;
}

const ProfileLayout = ({ slug }: ProfileLayoutProps) => {
  return (
    <div className="mt-4 w-[100%] flex flex-col  gap-12 items-center justify-center  pl-[310px]">
      <ProfileInfor slug={slug} />
      <StoryHighlight />
      <ProfileContent />
    </div>
  );
};

export default ProfileLayout;
