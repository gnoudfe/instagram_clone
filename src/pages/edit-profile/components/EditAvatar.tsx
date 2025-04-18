"use client";
import Button from "@/components/common/Button";
import React, { useState } from "react";
import ModalEditAvatar from "./ModalEditAvatar";

const EditAvatar = () => {
  const [showEditAvatarModal, setShowEditAvatarModal] = useState(false);
  return (
    <>
      <div className="w-full rounded-xl p-4 bg-[#262626]">
        <div className="flex gap-3 items-center justify-between">
          <div className="flex gap-3 items-center">
            <img
              src="https://i.ytimg.com/vi/v9XyIGXcRck/maxresdefault.jpg"
              alt=""
              className="w-[60px] h-[60px] object-cover rounded-full"
            />
            <div className="flex flex-col gap-2">
              <span className="text-white font-semibold">gnoud020802</span>
            </div>
          </div>
          <Button size="md" onClick={() => setShowEditAvatarModal(true)}>
            Change avatar
          </Button>
        </div>
      </div>
      {showEditAvatarModal && <ModalEditAvatar setShowEditAvatarModal={setShowEditAvatarModal} />}
    </>
  );
};

export default EditAvatar;
