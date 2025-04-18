import { APP_API_ENDPOINT } from "@/constant/endpoints";
import { apiBaseServiceInstance } from "../api";

class AuthSocialsApiRequest {
  public Login({
    body,
  }: {
    body: { email: string; password: string };
  }): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.AUTH.LOGIN,
      config: {
        method: "POST",
        body,
      },
    });
  }

  public Register({
    body,
  }: {
    body: {
      username: string;
      email: string;
      password: string;
      dateOfBirth: string;
      gender: string;
    };
  }): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.AUTH.REGISTER,
      config: {
        method: "POST",
        body,
      },
    });
  }

  public GetUserInfor({
    cookie,
    isServer = false,
  }: {
    cookie?: string;
    isServer?: boolean;
  } = {}): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.AUTH.GET_USER_INFOR,
      config: {
        method: "GET",
        headers: cookie ? { Cookie: cookie } : {},
      },
      isServer,
    });
  }
}

const AuthScoialsApi = new AuthSocialsApiRequest();

export { AuthScoialsApi };
