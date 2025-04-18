import { useMutation, useQuery } from "@tanstack/react-query";
import { AuthScoialsApi } from "../apiRequest";
import { useGlobalStore } from "@/stores/authState";
import { UserDataResponse } from "@/types/users";

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (body: {
      username: string;
      email: string;
      password: string;
      dateOfBirth: string;
      gender: string;
    }) => AuthScoialsApi.Register({ body }),
  });
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (body: { email: string; password: string }) =>
      AuthScoialsApi.Login({ body }),
  });
};

export const useUserInfor = () => {
  const { setIsLoggedIn } = useGlobalStore();

  return useQuery<UserDataResponse>({
    queryKey: ["get-user-infor"],
    queryFn: async () => {
      const response = await AuthScoialsApi.GetUserInfor();
      if (response.status === "success") {
        setIsLoggedIn(true);
      }
      return response;
    },
  });
};
