import { getServerCookies } from "@/utils/serverCookies";
import { AuthScoialsApi } from "../apiRequest";

export async function getUserInfor() {
  const { cookieHeader } = await getServerCookies();
  const response = await AuthScoialsApi.GetUserInfor({
    cookie: cookieHeader,
    isServer: true,
  });
  return response;
}
