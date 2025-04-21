"use client";
import Spinner from "@/components/common/Loading/Spinner";
import { useDeletePostMutation } from "@/services/queries/usePost";
import React, { useState } from "react";

const ModalOptionsPosts = ({
  setShowOptionsModal,
  postId,
  onDeletePost,
}: {
  setShowOptionsModal: (show: boolean) => void;
  postId: string;
  onDeletePost: (postId: string) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const deleteMutate = useDeletePostMutation();

  const handleDeletePost = async () => {
    try {
      setIsLoading(true);
      const response = await deleteMutate.mutateAsync(postId);
      if (response.status === "success") {
        onDeletePost(postId); // Cập nhật danh sách ở PostLayout
        setShowOptionsModal(false);
      }
    } catch (error) {
      console.log("error while deleting post", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => setShowOptionsModal(false)}
      />
      <div className="w-[400px] rounded-lg relative flex flex-col items-center justify-center bg-[#262626]">
        <div
          onClick={handleDeletePost}
          className="w-full flex items-center justify-center p-3 border-neutral-700 border-b rounded-t-lg transition-all duration-300 cursor-pointer hover:bg-neutral-700"
        >
          <span className="text-red-500">
            {isLoading ? <Spinner /> : "Delete"}
          </span>
        </div>
        <div className="w-full flex items-center justify-center p-3 border-t rounded-b-lg border-neutral-700 transition-all duration-300 cursor-pointer hover:bg-neutral-700">
          <span>Edit</span>
        </div>
        <div className="w-full flex items-center justify-center p-3 border-t rounded-b-lg border-neutral-700 transition-all duration-300 cursor-pointer hover:bg-neutral-700">
          <span>Copy link</span>
        </div>
        <div
          className="w-full flex items-center justify-center p-3 border-t rounded-b-lg border-neutral-700 transition-all duration-300 cursor-pointer hover:bg-neutral-700"
          onClick={() => setShowOptionsModal(false)}
        >
          <span>Cancel</span>
        </div>
      </div>
    </div>
  );
};

export default ModalOptionsPosts;
