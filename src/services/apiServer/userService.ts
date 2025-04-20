import { getServerCookies } from "@/utils/serverCookies";
import { AuthScoialsApi, UserSocialsApi } from "../apiRequest";

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
