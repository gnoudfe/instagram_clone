import { useMutation, useQuery } from "@tanstack/react-query";
import { PostSocialsApi } from "../apiRequest";
import { PostDataResponse, PostDetailDataResponse } from "@/types/users";

export const useCreatePostMutation = () => {
  return useMutation({
    mutationFn: (body: FormData) => PostSocialsApi.CreatePost(body),
  });
};

export const useGetMyPostsQuery = () => {
  return useQuery({
    queryKey: ["my-posts"],
    queryFn: async () => {
      const response = await PostSocialsApi.GetUserPosts();
      return response;
    },
  });
};

export const useGetOtherUserPostsQuery = ({ userId }: { userId: string }) => {
  return useQuery<PostDataResponse>({
    queryKey: ["get-other-user-posts", userId],
    queryFn: async () => {
      const response = await PostSocialsApi.GetOtherUserPosts({ userId });
      return response;
    },
  });
};

export const useGetPostDetail = ({ postId }: { postId: string }) => {
  return useQuery<PostDetailDataResponse>({
    queryKey: ["get-posts-detail", postId],
    queryFn: async () => {
      const response = await PostSocialsApi.getPostDetail({ postId });
      return response;
    },
  });
};
