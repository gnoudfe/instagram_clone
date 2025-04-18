import React from "react";

const ModalEditAvatar = ({
  setShowEditAvatarModal,
}: {
  setShowEditAvatarModal: (show: boolean) => void;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => setShowEditAvatarModal(false)}
      />
      <div className="w-[400px] rounded-lg relative flex flex-col items-center  justify-center bg-[#262626]">
        <h2 className="text-xl pt-8 pb-8">Change profile photo</h2>
        <div className="w-full flex items-center justify-center p-3 border-b rounded-b-lg border-neutral-700  transition-all duration-300 cursor-pointer hover:bg-neutral-700">
          <span className="text-blue-600">Upload photo</span>
        </div>
        <div className="w-full flex items-center justify-center p-3 border-neutral-700 border-b rounded-t-lg transition-all duration-300 cursor-pointer hover:bg-neutral-700">
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
