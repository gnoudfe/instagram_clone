import React from "react";
import ProfileInfor from "../components/profile_infor/ProfileInfor";
import StoryHighlight from "../components/story_highlight/StoryHighlight";
import ProfileContent from "../components/profile_content/ProfileContent";
import { UserDataResponse } from "@/types/users";
import { getUserInfor } from "@/services/apiServer/userService";

interface ProfileLayoutProps {
  slug: string;
}

const ProfileLayout = async ({ slug }: ProfileLayoutProps) => {
  const userInfordata: UserDataResponse = await getUserInfor();
  return (
    <div className="mt-4 w-[100%] flex flex-col  gap-12 items-center justify-center  pl-[310px]">
      <ProfileInfor slug={slug} userData={userInfordata?.user} />
      <StoryHighlight />
      <ProfileContent />
    </div>
  );
};

export default ProfileLayout;
