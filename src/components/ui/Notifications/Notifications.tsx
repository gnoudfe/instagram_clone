"use client";
import { XIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import SidebarIcon from "../SidebarIcon/SidebarIcon";
import { useClickOutside } from "@/hooks/useClickOutside";
import {
  useGetNotifications,
  useMarkNotificationsMutation,
} from "@/services/queries/useUser";
import Spinner from "@/components/common/Loading/Spinner";
import Link from "next/link";
import { userNotificationsType } from "@/types/users";
import { usePusherNotifications } from "@/hooks/usePusherNotifications";

type NotificationsProps = {
  showNotifications: boolean;
  onClose: () => void;
  setTotalNotificationsUnread: React.Dispatch<
    React.SetStateAction<number | null>
  >;
  userDataId: string;
};

const Notifications = ({
  userDataId,
  showNotifications,
  onClose,
  setTotalNotificationsUnread,
}: NotificationsProps) => {
  const [notifications, setNotifications] = useState<userNotificationsType[]>(
    []
  );
  const notificationsRef = useRef<HTMLDivElement>(null);

  const { data, isLoading } = useGetNotifications();

  const handleNewNotification = (notification: userNotificationsType) => {
    setNotifications((prev) => [notification, ...prev]);
  };

  const markNotificationAsReadMutation = useMarkNotificationsMutation();

  const handleClickNotificationItem = async (notificationId: string) => {
    // UI optimistically updates
    setNotifications((prev) =>
      prev.map((notification) =>
        notification._id === notificationId
          ? { ...notification, isRead: true }
          : notification
      )
    );

    try {
      const response = await markNotificationAsReadMutation.mutateAsync({
        notificationId,
      });
      if (response.status === "success") {
        onClose();
      }
    } catch (error) {
      console.error("Failed to mark notification as read", error);
      // Optional: rollback UI if needed
      setNotifications((prev) =>
        prev.map((notification) =>
          notification._id === notificationId
            ? { ...notification, isRead: false }
            : notification
        )
      );
    }
  };
  usePusherNotifications(userDataId, handleNewNotification);

  useClickOutside(notificationsRef, onClose);

  useEffect(() => {
    if (data?.notifications) {
      setNotifications(data.notifications);
    }
  }, [data]);

  useEffect(() => {
    const unreadCount = notifications.filter((n) => !n.isRead).length;
    setTotalNotificationsUnread(unreadCount > 0 ? unreadCount : null);
  }, [notifications, setTotalNotificationsUnread]);

  return (
    <div
      ref={notificationsRef}
      className={` flex fixed h-full border-r border-gray-600 transition-all duration-300 overflow-hidden  w-[24%] animate-fade-in ${
        showNotifications ? "translate-x-0" : " translate-x-[-100%]"
      } `}
    >
      <SidebarIcon onClose={onClose} />
      <div className="flex-1 flex flex-col gap-8 pt-10 pl-4 pr-4">
        <h2 className="text-2xl ">Notifications</h2>

        <div className="w-full flex flex-col border-t border-t-zinc-600 pt-4 gap-2">
          {isLoading && <Spinner />}
          {notifications.map((notification) => (
            <Link
              href={` /${notification?.sender?._id}`}
              key={notification._id}
              className="w-full flex items-center gap-2 cursor-pointer   hover:bg-stone-700  rounded-md p-2 transition-all duration-300"
              onClick={() => handleClickNotificationItem(notification._id)}
            >
              <div className="flex items-center  w-full justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={
                      notification?.sender?.profilePicture ||
                      "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3467.jpg"
                    }
                    alt="avatar image"
                    className="w-[44px] h-[44px] rounded-full object-cover block cursor-pointer"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-sm font-semibold">
                      {notification?.sender?.username}
                    </h4>
                    <span className="text-xs">{notification?.message}</span>
                  </div>
                </div>
                {!notification?.isRead && (
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div>
        <div
          className="absolute top-5 right-5 cursor-pointer"
          onClick={onClose}
        >
          <XIcon />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
