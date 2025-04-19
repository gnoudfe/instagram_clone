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

  public Logout(): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.AUTH.LOGOUT,
      config: {
        method: "POST",
      },
    });
  }
}

class UserSocialsApiRequest {
  public ChangeProfilePicture(formData: FormData): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.USER.CHANGE_PROFILE_PICTURE,
      config: {
        method: "PUT",
        body: formData,
      },
    });
  }

  public deleteProfilePicture(): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.USER.CHANGE_PROFILE_PICTURE,
      config: {
        method: "DELETE",
      },
    });
  }

  public UpdateBio(bio: string): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.USER.UPDATE_BIO,
      config: {
        method: "PUT",
        body: { bio },
      },
    });
  }
}

const UserSocialsApi = new UserSocialsApiRequest();

const AuthScoialsApi = new AuthSocialsApiRequest();

export { AuthScoialsApi, UserSocialsApi };
