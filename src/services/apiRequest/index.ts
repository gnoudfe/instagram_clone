import { APP_API_ENDPOINT } from "@/constant/endpoints";
import { apiBaseServiceInstance } from "../api";
import { PostFeedDataResponse } from "@/types/users";

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

  public GetUserInforById({
    cookie,
    isServer = false,
    userId,
  }: {
    cookie?: string;
    isServer?: boolean;
    userId: string;
  }): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.USER.GET_USER_BY_ID(userId),
      config: {
        method: "GET",
        headers: cookie ? { Cookie: cookie } : {},
      },
      isServer,
    });
  }

  public GetUserFriends(): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.USER.GET_LIST_FRIENDS,
      config: {
        method: "GET",
      },
    });
  }

  public Unfriend({ userId }: { userId: string }): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.USER.UNFRIEND(userId),
      config: {
        method: "DELETE",
      },
    });
  }

  public sendFriendRequest({ userId }: { userId: string }): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.USER.SEND_FRIEND_REQUEST(userId),
      config: {
        method: "POST",
      },
    });
  }

  public acceptFriendRequest({ userId }: { userId: string }): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.USER.ACCEPT_FRIEND_REQUEST(userId),
      config: {
        method: "POST",
      },
    });
  }

  public rejectFriendRequest({ userId }: { userId: string }): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.USER.REJECT_FRIEND_REQUEST(userId),
      config: {
        method: "POST",
      },
    });
  }

  public searchUsers({ keyword }: { keyword: string }): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.USER.SEARCH_USER(keyword),
      config: {
        method: "GET",
      },
    });
  }

  public getNotifications(): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.NOTIFICATIONS.GET_NOTIFICATIONS,
      config: {
        method: "GET",
      },
    });
  }

  public markNotificationsAsRead({
    notificationId,
  }: {
    notificationId: string;
  }): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.NOTIFICATIONS.MARK_NOTIFICATIONS_AS_READ(
        notificationId
      ),
      config: {
        method: "PATCH",
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

class PostSocialsApiRequest {
  public CreatePost(body: FormData): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.POSTS.CREATE_POST,
      config: {
        method: "POST",
        body,
      },
    });
  }

  public GetUserPosts({
    cookie,
    isServer = false,
  }: {
    cookie?: string | null;
    isServer?: boolean;
  } = {}): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.POSTS.MY_POSTS,
      config: {
        method: "GET",
        headers: cookie ? { Cookie: cookie } : {},
      },
      isServer,
    });
  }
  public GetOtherUserPosts({
    cookie,
    isServer = false,
    userId,
  }: {
    userId: string;
    cookie?: string | null;
    isServer?: boolean;
  }): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.POSTS.GET_OTHER_USER_POSTS(userId),
      config: {
        method: "GET",
        headers: cookie ? { Cookie: cookie } : {},
      },
      isServer,
    });
  }

  public getPostFeed({
    cookie,
    isServer = false,
    limit = 4,
    offset = 0,
  }: {
    cookie?: string | null;
    isServer?: boolean;
    limit?: number | null;
    offset?: number | null;
  }): Promise<PostFeedDataResponse> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.POSTS.GET_POST_FEED(limit, offset),
      config: {
        method: "GET",
        headers: cookie ? { Cookie: cookie } : {},
      },
      isServer,
    });
  }

  public getPostDetail({ postId }: { postId: string }): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.POSTS.GET_POST_DETAIL(postId),
      config: {
        method: "GET",
      },
    });
  }

  public deletePost({ postId }: { postId: string }): Promise<any> {
    return apiBaseServiceInstance.Http({
      path: APP_API_ENDPOINT.POSTS.DELETE_POST(postId),
      config: {
        method: "DELETE",
      },
    });
  }
}

const UserSocialsApi = new UserSocialsApiRequest();

const AuthScoialsApi = new AuthSocialsApiRequest();

const PostSocialsApi = new PostSocialsApiRequest();

export { AuthScoialsApi, UserSocialsApi, PostSocialsApi };
