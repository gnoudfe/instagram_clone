"use client";
import { usePostModal } from "@/context/ModalPostContext";
import React from "react";

interface ModalAlertProps {
  message: string;
  subMessage: string;
  onClose: () => void;
}

const ModalAlert: React.FC<ModalAlertProps> = ({
  message,
  subMessage,
  onClose,
}) => {
  const { setShowAlertModal } = usePostModal();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
      <div className="fixed inset-0 bg-black bg-opacity-50" />
      <div className="w-[400px] rounded-lg relative flex flex-col items-center  justify-center bg-[#262626]">
        <div className="w-full flex flex-col gap-2 items-center justify-center  p-6">
          <p className="text-white font-semibold text-lg">{message}</p>
          <p className=" text-sm text-neutral-400">{subMessage}</p>
        </div>
        <div
          className="w-full flex items-center justify-center p-3 border-t border-neutral-700 border-b transition-all duration-300 cursor-pointer hover:bg-neutral-700"
          onClick={onClose}
        >
          <span className="text-red-500">Discard</span>
        </div>
        <div
          className="w-full flex items-center justify-center p-3 border-t rounded-b-lg border-neutral-700 border-b  transition-all duration-300 cursor-pointer hover:bg-neutral-700"
          onClick={() => setShowAlertModal(false)}
        >
          <span>Cancel</span>
        </div>
      </div>
    </div>
  );
};

export default ModalAlert;
