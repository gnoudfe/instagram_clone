export const APP_API_ENDPOINT = {
  ENDPOINT: {
    NEXT_PUBLIC_BASE_URL:
      process.env.NEXT_PUBLIC_BASE_URL ?? ("http://localhost:5000" as string),
    NEXT_PUBLIC_PREFIX_URL: process.env.NEXT_PUBLIC_PREFIX_URL ?? "api",
  },
  AUTH: {
    LOGIN: "/login",
    REGISTER: "/register",
    VERIFY_EMAIL: "/verify-email",
    GET_USER_INFOR: "/user-me",
    LOGOUT: "/logout",
  },
  USER: {
    CHANGE_PROFILE_PICTURE: "/profile-picture",
    UPDATE_BIO: "/bio",
    SEARCH_USER: (keyword: string) => `/search-users?keyword=${keyword}`,
    GET_USER_BY_ID: (userId: string) => `/user/${userId}`,
    SEND_FRIEND_REQUEST: (userId: string) => `/send-friend-request/${userId}`,
    ACCEPT_FRIEND_REQUEST: (userId: string) =>
      `/accept-friend-request/${userId}`,
    REJECT_FRIEND_REQUEST: (userId: string) =>
      `/reject-friend-request/${userId}`,
    GET_LIST_FRIENDS: "/get-friends",
    UNFRIEND: (userId: string) => `/unfriend/${userId}`,
  },

  NOTIFICATIONS: {
    GET_NOTIFICATIONS: "/get-notifications",
    MARK_NOTIFICATIONS_AS_READ: (notificationId: string) =>
      `/mark-notification-read/${notificationId}`,
  },
};
