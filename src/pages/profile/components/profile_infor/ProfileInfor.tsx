"use client";
import Button from "@/components/common/Button";
import ModalSettings from "@/components/ui/ModalSettings/ModalSettings";
import {
  useAcceptFriendRequestMutation,
  useRejectFriendRequestMutation,
  useSendFriendRequestMutation,
} from "@/services/queries/useUser";
import { UserDataType } from "@/types/users";
import React, { useState } from "react";
import ReceiveFriendRequest from "./ReceiveFriendRequest";
import SendFriendRequest from "./SendFriendRequest";
import CurrentUserSettings from "./CurrentUserSettings";
import { useRouter } from "next/navigation";
import FriendOptions from "./FriendOptions";
import ModalFriends from "@/components/ui/ModalFriends/ModalFriends";
interface ProfileInforProps {
  userData: UserDataType;
  isCurrentUser: boolean;
  currentUserId: string;
}

const ProfileInfor = ({
  userData,
  isCurrentUser,
  currentUserId,
}: ProfileInforProps) => {
  const [isShowModalSettings, setIsShowModalSettings] = useState(false);
  const [isShowModalFriends, setIsShowModalFriends] = useState(false);
  const [isSendingRequest, setIsSendingRequest] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const sendFriendRequestMutation = useSendFriendRequestMutation();

  const acceptFriendRequestMutation = useAcceptFriendRequestMutation();

  const rejectFriendRequestMutation = useRejectFriendRequestMutation();

  const handleShowModalFriends = () => {
    if(!isCurrentUser) return
    setIsShowModalFriends(true);
  };

  const handleShowModalSettings = () => {
    setIsShowModalSettings(true);
  };
  // check xem đã gửi lời mời kết bạn tới người dùng này chưa
  const isSentFriendRequest = userData?.friendRequests?.includes(currentUserId);

  // check xem người dùng này có gửi lời mời kết bạn tới mình không
  const isReceiveFriendRequest =
    userData?.sentFriendRequests?.includes(currentUserId);

  // check xem người dùng này có đang là bạn bè của mình không
  const isFriend = userData?.friends?.includes(currentUserId);

  const handleCloseModalSettings = () => {
    setIsShowModalSettings(false);
  };
  
  const handleCloseModalFriends = () => {
    setIsShowModalFriends(false);
  };

  const handleSendFriendRequest = async () => {
    try {
      setIsSendingRequest(true);
      const response = await sendFriendRequestMutation.mutateAsync(
        userData?._id
      );
      if (response.status === "success") {
        router.refresh();
      }
      console.log(response);
    } catch (error) {
      console.log("Error sending friend request:", error);
    } finally {
      setIsSendingRequest(false);
    }
  };

  const handleAcceptFriendRequest = async () => {
    try {
      setIsLoading(true);
      const response = await acceptFriendRequestMutation.mutateAsync(
        userData?._id
      );
      if (response.status === "success") {
        router.refresh();
      }
      console.log(response);
    } catch (error) {
      console.log("Error sending friend request:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRejectFriendRequest = async () => {
    try {
      setIsLoading(true);
      const response = await rejectFriendRequestMutation.mutateAsync(
        userData?._id
      );
      if (response.status === "success") {
        router.refresh();
      }
      console.log(response);

    } catch (error) {
      console.log("Error sending friend request:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex gap-[60px] w-full max-w-[935px]  pt-[30px]  items-center">
        <img
          src={
            userData?.profilePicture ||
            "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg"
          }
          alt=""
          className="w-[150px] h-[150px] object-cover rounded-full"
        />

        <div className="flex flex-col gap-6 pt-[10px]">
          <div className="flex items-center gap-6">
            <span className="text-2xl font-normal">{userData?.username}</span>
            {isCurrentUser ? (
              <CurrentUserSettings
                handleShowModalSettings={handleShowModalSettings}
              />
            ) : isSentFriendRequest ? (
              <SendFriendRequest />
            ) : isReceiveFriendRequest ? (
              <ReceiveFriendRequest
                handleAcceptFriendRequest={handleAcceptFriendRequest}
                handleRejectFriendRequest={handleRejectFriendRequest}
                isLoading={isLoading}
              />
            ) : isFriend ? (
              <FriendOptions />
            ) : (
              <Button
                size="sm"
                variant="primary"
                onClick={handleSendFriendRequest}
                disabled={isSendingRequest}
              >
                {isSendingRequest ? "Sending..." : "Add Friend"}
              </Button>
            )}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-base font-normal text-[#A8A8A8]">
              <span className="text-white font-semibold">
                {userData?.totalPosts}
              </span>{" "}
              posts
            </span>
            <span className="text-base font-normal text-[#A8A8A8] cursor-pointer hover:opacity-80 transition-all duration-300" onClick={handleShowModalFriends} >
              <span className="text-white font-semibold">
                {userData?.totalFriends}
              </span>{" "}
              followers
            </span>
          </div>

          <span className="text-sm  text-white">{userData?.bio}</span>
        </div>
      </div>
      {isShowModalSettings && (
        <ModalSettings onClose={handleCloseModalSettings} />
      )}
      {isShowModalFriends && (
        <ModalFriends onClose={handleCloseModalFriends} />
      )}
    </>
  );
};

export default ProfileInfor;
