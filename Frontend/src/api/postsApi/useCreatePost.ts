import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { type PostType } from "../../types";
import { queryClient } from "../../lib/queryClient";

type CreatePostInput = Pick<PostType, "caption" | "userId" | "imageUrl">;

export const useCreatePost = () => {
  const createPost = async (post: CreatePostInput): Promise<void> => {
    try {
      const response = await axios.post(
        "http://localhost:3000/posts/create-post",
        post
      );
      console.log("Post created:", response.data);
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
