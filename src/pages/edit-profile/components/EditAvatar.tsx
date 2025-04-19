"use client";
import Button from "@/components/common/Button";
import React, { useState } from "react";
import ModalEditAvatar from "./ModalEditAvatar";
import { UserDataType } from "@/types/users";

interface EditAvatarProps {
  userData: UserDataType;
}

const EditAvatar = ({ userData }: EditAvatarProps) => {
  const [showEditAvatarModal, setShowEditAvatarModal] = useState(false);

  const [isAvatarLoading, setIsAvatarLoading] = useState(false);
  return (
    <>
      <div className="w-full rounded-xl p-4 bg-[#262626]">
        <div className="flex gap-3 items-center justify-between">
          <div className="flex gap-3 items-center">
            <img
              src={userData?.profilePicture || undefined}
              alt=""
              className="w-[60px] h-[60px] object-cover rounded-full"
            />
            <div className="flex flex-col gap-2">
              <span className="text-white font-semibold">
                {userData?.username}
              </span>
            </div>
          </div>
          <Button
            size="md"
            onClick={() => setShowEditAvatarModal(true)}
            disabled={isAvatarLoading}
          >
            {isAvatarLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Updating...
              </>
            ) : (
              "Change avatar"
            )}
          </Button>
        </div>
      </div>
      {showEditAvatarModal && (
        <ModalEditAvatar
          setShowEditAvatarModal={setShowEditAvatarModal}
          setIsAvatarLoading={setIsAvatarLoading}
        />
      )}
    </>
  );
};

export default EditAvatar;
