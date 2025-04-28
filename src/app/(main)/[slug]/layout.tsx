import React from 'react';

const PostsLayout = ({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default PostsLayout;
