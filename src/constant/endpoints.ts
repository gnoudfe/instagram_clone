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
  },
};
