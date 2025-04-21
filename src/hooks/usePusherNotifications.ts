import { userNotificationsType } from "@/types/users";
import Pusher from "pusher-js";
import { useEffect } from "react";

export const usePusherNotifications = (
  userId: string,
  handleAddNotifications: (data: userNotificationsType) => void
) => {
  useEffect(() => {
    if (!userId) return;

    // Khởi tạo Pusher
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY as string, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER as string,
    });

    // Đăng ký kênh user
    const channel = pusher.subscribe(`user-${userId}`);

    channel.bind("notification", (data: userNotificationsType) => {
      console.log('receive', data)
      handleAddNotifications(data);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [userId, handleAddNotifications]);
};
