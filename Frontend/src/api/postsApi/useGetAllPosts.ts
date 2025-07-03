import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { z } from "zod/v4";
import { postSchema, type PostType } from "../../types";

const PostsArraySchema = z.array(postSchema);

export const usePosts = () => {
  const fetchPosts = async (): Promise<PostType[]> => {
    const { data } = await axios.get("http://localhost:3000/posts");
    const validationResult = PostsArraySchema.safeParse(data);

    if (!validationResult.success) {
      console.error("API Response validation failed:", validationResult.error);
      throw new Error("Invalid data format received from API");
    }

    return validationResult.data;
  };
  
  return useQuery<PostType[], Error>({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
};
