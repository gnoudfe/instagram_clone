import PostProfileLayout from "@/pages/profile/layouts/PostProfileLayout";
import React from "react";

const PostsPage = async ({
  params,
}: {
  params: Promise<{ id: string; slug: string }>;
}) => {
  const { id, slug } = await params;
  return <PostProfileLayout id={id} slug={slug} />;
};

export default PostsPage;
