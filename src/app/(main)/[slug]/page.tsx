import ProfileLayout from "@/pages/profile/layouts/ProfileLayout";
import React from "react";

const ProfilePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  return <ProfileLayout slug={slug} />;
};

export default ProfilePage;
