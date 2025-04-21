export type UserDataType = {
  _id: string;
  username: string;
  email?: string;
  gender?: "Male" | "Female" | "Other";
  dateOfBirth?: string;
  isVerified?: boolean;
  bio?: string;
  profilePicture: string | null;
  totalPosts?: number;
  totalFriends?: number;
  coverPhoto?: string;
  friends?: string[];
  friendRequests?: string[];
  sentFriendRequests?: string[];
  refreshToken?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export type UserDataResponse = {
  status: string;
  isCurrentUser: boolean;
  user: UserDataType;
  currentUserId: string;
};

export type userSearchDataResponse = {
  status: string;
  users: UserDataType[];
};

export type userListFriendsDataResponse = {
  status: string;
  message: string;
  friends: UserDataType[];
};

export type userNotificationsType = {
  _id: string;
  type:
    | "friend-request"
    | "friend-accepted"
    | "friend-rejected"
    | "post-liked"
    | "commented"
    | "message";
  message: string;
  recipient: string;
  sender: {
    _id: string;
    username: string;
    profilePicture: string;
    friends: string[];
  };
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type userNotificationsDataResponse = {
  status: string;
  notifications: userNotificationsType[];
};

// types/post.ts

export type UserInfo = {
  _id: string;
  username: string;
  profilePicture: string;
};

export type Comment = {
  _id: string;
  user: UserInfo;
  content: string;
  createdAt: string;
  updatedAt: string;
};

export type Postdata = {
  _id: string;
  user: UserInfo;
  content: string;
  images: string[];
  visibility: "Public" | "Friends" | "Private";
  likes: UserInfo[];
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
};

export type PostDataResponse = {
  status: string;
  posts: Postdata[];
};
export type PostDetailDataResponse = {
  status: string;
  isCurrentUser: boolean;
  currentUserId: string;
  post: Postdata;
};

export type PostFeedDataResponse = {
  status: string;
  totals: number;
  currentUserId: string;
  posts: Postdata[];
};
