import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { z } from "zod/v4";
import { postSchema, type PostType } from "../../types";

const PostsArraySchema = z.array(postSchema);

export type PostFromApi = PostType;

export const useUsersPosts = (userId: string) => {
  const fetchUserPosts = async (userId: string): Promise<PostFromApi[]> => {
    const { data } = await axios.get(`http://localhost:3000/posts/${userId}`);
    const validationResult = PostsArraySchema.safeParse(data);

    if (!validationResult.success) {
      console.error("API Response validation failed:", validationResult.error);
      throw new Error("Invalid data format received from API");
    }

    return validationResult.data;
  };

  return useQuery<PostFromApi[], Error>({
    queryKey: ["posts", userId],
    queryFn: ({ queryKey }) => fetchUserPosts(String(queryKey[1])),
    enabled: !!userId,
  });
};
