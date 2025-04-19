"use client";
import {
  useChangeProfilePictureMutation,
  useDeleteProfilePictureMutation,
} from "@/services/queries/useUser";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ModalEditAvatar = ({
  setShowEditAvatarModal,
  setIsAvatarLoading,
}: {
  setShowEditAvatarModal: (show: boolean) => void;
  setIsAvatarLoading: (isLoading: boolean) => void;
}) => {
  const changeProfilePictureMutation = useChangeProfilePictureMutation();
  const deleteProfilePictureMutation = useDeleteProfilePictureMutation();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleProfilePictureChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsLoading(true);
      setIsAvatarLoading(true);
      setErrorMessage(null);
      const formData = new FormData();
      formData.append("profilePicture", file);

      try {
        const response = await changeProfilePictureMutation.mutateAsync(
          formData
        );
        if (response.status === "false") {
          setErrorMessage(
            response.message || "Errors when uploading profile picture"
          );
          return;
        }
        // Refresh the page to update server-side data
        router.refresh();
        setShowEditAvatarModal(false);
      } catch (error: any) {
        console.log("error while changing profile picture", error);
      } finally {
        setIsLoading(false);
        setIsAvatarLoading(false);
      }
    }
  };

  const handleDeleteProfilePicture = async () => {
    setIsLoading(true);
    setIsAvatarLoading(true);
    setErrorMessage(null);
    try {
      await deleteProfilePictureMutation.mutateAsync();
      router.refresh();
      setShowEditAvatarModal(false);
    } catch (error) {
      console.log("error while deleting profile picture", error);
    } finally {
      setIsLoading(false);
      setIsAvatarLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => setShowEditAvatarModal(false)}
      />
      <div className="w-[400px] rounded-lg relative flex flex-col items-center justify-center bg-[#262626]">
        <h2 className="text-xl pt-8 pb-4">Change profile photo</h2>
        {errorMessage && (
          <div className="mb-4 px-4 py-2 bg-red-500 bg-opacity-20 text-red-500 rounded-md w-[90%] text-center">
            {errorMessage}
          </div>
        )}
        <label
          htmlFor="profile-picture"
          className={`w-full flex items-center justify-center p-3 border-b rounded-b-lg border-neutral-700 transition-all duration-300 ${
            isLoading
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer hover:bg-neutral-700"
          }`}
        >
          <span className="text-blue-600">
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 inline-block text-blue-600"
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
                Uploading...
              </>
            ) : (
              "Upload photo"
            )}
          </span>
          <input
            type="file"
            name="profile-picture"
            id="profile-picture"
            className="hidden"
            onChange={handleProfilePictureChange}
            disabled={isLoading}
          />
        </label>
        <div
          onClick={handleDeleteProfilePicture}
          className="w-full flex items-center justify-center p-3 border-neutral-700 border-b rounded-t-lg transition-all duration-300 cursor-pointer hover:bg-neutral-700"
        >
          <span className="text-red-500">Remove current photo</span>
        </div>

        <div
          className="w-full flex items-center justify-center p-3 border-t rounded-b-lg border-neutral-700  transition-all duration-300 cursor-pointer hover:bg-neutral-700"
          onClick={() => setShowEditAvatarModal(false)}
        >
          <span>Cancel</span>
        </div>
      </div>
    </div>
  );
};

export default ModalEditAvatar;
