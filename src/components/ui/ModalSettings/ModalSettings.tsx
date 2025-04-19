"use client";
import { useLogoutMutation } from "@/services/queries/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const ModalSettings = ({ onClose }: { onClose: () => void }) => {
  const logoutMutation = useLogoutMutation();
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await logoutMutation.mutateAsync();
      if (response.status === "success") {
        router.push("/login");
        onClose();
      }
    } catch (error) {
      console.log("error while logging out", error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="w-[400px] rounded-lg relative flex flex-col items-center  justify-center bg-[#262626]">
        <Link
          href={"/accounts"}
          className="w-full flex items-center justify-center p-3  rounded-b-lg border-neutral-700  transition-all duration-300 cursor-pointer hover:bg-neutral-700"
        >
          <span>Settings</span>
        </Link>
        <div
          className="w-full flex items-center justify-center p-3 border-t rounded-b-lg border-neutral-700  transition-all duration-300 cursor-pointer hover:bg-neutral-700"
          onClick={handleLogout}
        >
          <span className="text-red-500">Log out</span>
        </div>
        <div
          className="w-full flex items-center justify-center p-3 border-t rounded-b-lg border-neutral-700  transition-all duration-300 cursor-pointer hover:bg-neutral-700"
          onClick={onClose}
        >
          <span>Cancel</span>
        </div>
      </div>
    </div>
  );
};

export default ModalSettings;
