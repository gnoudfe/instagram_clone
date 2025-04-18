import React from "react";
import ProfileInfor from "../components/profile_infor/ProfileInfor";
import StoryHighlight from "../components/story_highlight/StoryHighlight";
import ProfileContent from "../components/profile_content/ProfileContent";
import { AuthScoialsApi } from "@/services/apiRequest";
import { UserDataResponse } from "@/types/users";
import { getServerCookies } from "@/utils/serverCookies";

interface ProfileLayoutProps {
  slug: string;
}

async function getUserInfor() {
  const { cookieHeader } = await getServerCookies();
  const response = await AuthScoialsApi.GetUserInfor({
    cookie: cookieHeader,
    isServer: true,
  });
  return response;
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
