export type UserDataType = {
  _id: string;
  username: string;
  email: string;
  gender: "Male" | "Female" | "Other";
  dateOfBirth: string;
  isVerified: boolean;
  bio: string;
  profilePicture: string | null;
  coverPhoto: string;
  friends: string[];
  friendRequests: string[];
  sentFriendRequests: string[];
  refreshToken: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type UserDataResponse = {
  status: string;
  user: UserDataType;
};
