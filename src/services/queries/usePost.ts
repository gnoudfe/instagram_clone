import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/react-query';
import { PostSocialsApi } from '../apiRequest';
import { PostDataResponse, PostDetailDataResponse } from '@/types/users';

export const useCreatePostMutation = () => {
  return useMutation({
    mutationFn: (body: FormData) => PostSocialsApi.CreatePost(body),
  });
};

export const useGetMyPostsQuery = () => {
  return useQuery({
    queryKey: ['my-posts'],
    queryFn: async () => {
      const response = await PostSocialsApi.GetUserPosts();
      return response;
    },
  });
};

export const useGetPostsFeed = ({ limit }: { limit: number | null }) => {
  return useInfiniteQuery({
    queryKey: ['get-posts-feed', limit],
    queryFn: async ({ pageParam = 0 }) => {
      const offset = pageParam;

      const response = await PostSocialsApi.getPostFeed({ limit, offset });

      if (response.status === 'success') {
        return response;
      }
      throw new Error('Error fetching latest video');
    },
    getNextPageParam: (lastPage, allPages) => {
      const loadedVideoCount = allPages.reduce((total, page) => {
        return total + page.posts.length;
      }, 0);

      // Nếu số lượng video đã tải nhỏ hơn tổng số video, trả về offset mới
      if (loadedVideoCount < lastPage.totals) {
        return loadedVideoCount;
      }

      // Nếu đã tải hết, trả về undefined để dừng infinite query
      return undefined;
    },
    initialPageParam: 0,
  });
};

export const useGetOtherUserPostsQuery = ({ userId }: { userId: string }) => {
  return useQuery<PostDataResponse>({
    queryKey: ['get-other-user-posts', userId],
    queryFn: async () => {
      const response = await PostSocialsApi.GetOtherUserPosts({ userId });
      return response;
    },
  });
};

export const useGetPostDetail = ({ postId }: { postId: string }) => {
  return useQuery<PostDetailDataResponse>({
    queryKey: ['get-posts-detail', postId],
    queryFn: async () => {
      const response = await PostSocialsApi.getPostDetail({ postId });
      return response;
    },
  });
};
export const useDeletePostMutation = () => {
  return useMutation({
    mutationFn: (postId: string) => PostSocialsApi.deletePost({ postId }),
  });
};
