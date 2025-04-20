import { useMutation, useQuery } from "@tanstack/react-query";
import { UserSocialsApi } from "../apiRequest";
import { userSearchDataResponse } from "@/types/users";

export const useChangeProfilePictureMutation = () => {
  return useMutation({
    mutationFn: (formData: FormData) =>
      UserSocialsApi.ChangeProfilePicture(formData),
  });
};

export const useDeleteProfilePictureMutation = () => {
  return useMutation({
    mutationFn: () => UserSocialsApi.deleteProfilePicture(),
  });
};

export const useSendFriendRequestMutation = () => {
  return useMutation({
    mutationFn: (userId: string) =>
      UserSocialsApi.sendFriendRequest({ userId }),
  });
};

export const useSearchUser = ({ keyword }: { keyword: string }) => {
  return useQuery<userSearchDataResponse>({
    queryKey: ["search-user", keyword],
    queryFn: async () => {
      const response = await UserSocialsApi.searchUsers({ keyword });
      return response;
    },
    enabled: keyword.trim() !== "",
  });
};

export const useGetNotifications = () => {
  return useQuery({
    queryKey: ["get-notifications"],
    queryFn: async () => {
      const response = await UserSocialsApi.getNotifications();
      return response;
    },
  });
};
