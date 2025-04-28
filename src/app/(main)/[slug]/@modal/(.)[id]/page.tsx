import PostProfileModalLayout from '@/pages/profile/layouts/PostProfileModalLayout';
import React from 'react';

const PostModal = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return <PostProfileModalLayout postId={id} />;
};

export default PostModal;
