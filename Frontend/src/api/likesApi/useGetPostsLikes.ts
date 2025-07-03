import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { z } from "zod/v4";
import { likeSchema, type LikeType } from "../../types";

const LikesArraySchema = z.array(likeSchema);

export const usePostsLikes = (postId: string) => {
  const fetchPostsLike = async (postId: string): Promise<LikeType[]> => {
    const { data } = await axios.get(`http://localhost:3000/likes/${postId}`);

    const validationResult = LikesArraySchema.safeParse(data);

    if (!validationResult.success) {
      console.error("API Response validation failed:", validationResult.error);
      throw new Error("Invalid data format received from API");
    }

    return data;
  };

  return useQuery<LikeType[], Error>({
    queryKey: ["likes", postId],
    queryFn: ({ queryKey }) => fetchPostsLike(String(queryKey[1])),
  });
};
