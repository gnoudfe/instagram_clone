import { useMutation } from "@tanstack/react-query";
import { UserSocialsApi } from "../apiRequest";

export const useChangeProfilePictureMutation = () => {
    return useMutation({
      mutationFn: (formData: FormData) =>
        UserSocialsApi.ChangeProfilePicture(formData),
    });
  };