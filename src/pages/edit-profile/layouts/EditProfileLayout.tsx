import React from "react";
import EditAvatar from "../components/EditAvatar";
import EditBio from "../components/EditBio";

const EditProfileLayout = () => {
  return (
    <div className="mt-4 w-[100%] max-w-[1200px] mx-auto flex flex-col gap-6 pt-8 pl-[310px]">
      <h2 className="text-lg text-white font-semibold"> Edit profile</h2>
      <EditAvatar />
      <EditBio />
    </div>
  );
};

export default EditProfileLayout;
