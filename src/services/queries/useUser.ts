import { useMutation, useQuery } from '@tanstack/react-query';
import { UserSocialsApi } from '../apiRequest';
import {
  userListFriendsDataResponse,
  userNotificationsDataResponse,
  userSearchDataResponse,
} from '@/types/users';

export const useChangeProfilePictureMutation = () => {
  return useMutation({
    mutationFn: (formData: FormData) => UserSocialsApi.ChangeProfilePicture(formData),
  });
};

export const useDeleteProfilePictureMutation = () => {
  return useMutation({
    mutationFn: () => UserSocialsApi.deleteProfilePicture(),
  });
};

export const useSendFriendRequestMutation = () => {
  return useMutation({
    mutationFn: (userId: string) => UserSocialsApi.sendFriendRequest({ userId }),
  });
};

export const useUnfriendMutation = () => {
  return useMutation({
    mutationFn: (userId: string) => UserSocialsApi.Unfriend({ userId }),
  });
};

export const useAcceptFriendRequestMutation = () => {
  return useMutation({
    mutationFn: (userId: string) => UserSocialsApi.acceptFriendRequest({ userId }),
  });
};

export const useRejectFriendRequestMutation = () => {
  return useMutation({
    mutationFn: (userId: string) => UserSocialsApi.rejectFriendRequest({ userId }),
  });
};

export const useSearchUser = ({ keyword }: { keyword: string }) => {
  return useQuery<userSearchDataResponse>({
    queryKey: ['search-user', keyword],
    queryFn: async () => {
      const response = await UserSocialsApi.searchUsers({ keyword });
      return response;
    },
    enabled: keyword.trim() !== '',
  });
};

export const useGetNotifications = () => {
  return useQuery<userNotificationsDataResponse>({
    queryKey: ['get-notifications'],
    queryFn: async () => {
      const response = await UserSocialsApi.getNotifications();
      return response;
    },
  });
};

export const useGetListUserFriends = () => {
  return useQuery<userListFriendsDataResponse>({
    queryKey: ['get-list-user-friends'],
    queryFn: async () => {
      const response = await UserSocialsApi.GetUserFriends();
      return response;
    },
  });
};

export const useMarkNotificationsMutation = () => {
  return useMutation({
    mutationFn: ({ notificationId }: { notificationId: string }) =>
      UserSocialsApi.markNotificationsAsRead({ notificationId }),
  });
};
