import { getServerCookies } from "@/utils/serverCookies";
import { AuthScoialsApi, PostSocialsApi, UserSocialsApi } from "../apiRequest";

export async function getUserInfor() {
  const { cookieHeader } = await getServerCookies();
  const response = await AuthScoialsApi.GetUserInfor({
    cookie: cookieHeader,
    isServer: true,
  });

  return response;
}

export async function GetUserInforById(userId: string) {
  const { cookieHeader } = await getServerCookies();
  const response = await UserSocialsApi.GetUserInforById({
    cookie: cookieHeader,
    isServer: true,
    userId,
  });
  return response;
}

export async function GetUserPosts() {
  const { cookieHeader } = await getServerCookies();
  const response = await PostSocialsApi.GetUserPosts({
    cookie: cookieHeader,
    isServer: true,
  });
  return response;
}

export async function GetOtherUserPosts({ userId }: { userId: string }) {
  const { cookieHeader } = await getServerCookies();
  const response = await PostSocialsApi.GetOtherUserPosts({
    cookie: cookieHeader,
    isServer: true,
    userId,
  });
  return response;
}
