import React from "react";
import ProfileInfor from "../components/profile_infor/ProfileInfor";
import StoryHighlight from "../components/story_highlight/StoryHighlight";
import ProfileContent from "../components/profile_content/ProfileContent";
import { PostDataResponse, UserDataResponse } from "@/types/users";
import {
  GetOtherUserPosts,
  GetUserInforById,
} from "@/services/apiServer/userService";

interface ProfileLayoutProps {
  slug: string;
}

const ProfileLayout = async ({ slug }: ProfileLayoutProps) => {
  const userInfordata: UserDataResponse = await GetUserInforById(slug);
  const userOtherPostsData: PostDataResponse = await GetOtherUserPosts({
    userId: slug,
  });
  console.log("userOtherPosts", userOtherPostsData);
  return (
    <div className="mt-4 w-[100%] flex flex-col  gap-12 items-center justify-center  pl-[310px]">
      <ProfileInfor
        userData={userInfordata?.user}
        isCurrentUser={userInfordata?.isCurrentUser}
        currentUserId={userInfordata?.currentUserId}
      />
      <StoryHighlight />
      <ProfileContent postsData={userOtherPostsData?.posts} />
    </div>
  );
};

export default ProfileLayout;
