import PostProfileLayout from "@/pages/profile/layouts/PostProfileLayout";
import React from "react";

const PostsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <PostProfileLayout id={id} />;
};

export default PostsPage;
