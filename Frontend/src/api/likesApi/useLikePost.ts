import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { type LikeType } from "../../types";
import { queryClient } from "../../lib/queryClient";

type LikePostDTO = Pick<LikeType, "postId" | "userId">;

export const useLikePost = () => {
  const likePost = async (like: LikePostDTO): Promise<void> => {
    try {
      const response = await axios.post(
        "http://localhost:3000/likes/like-post",
        like
      );
      console.log("Like created:", response.data);
    } catch (error) {
      console.error("Failed to Like post:", error);
    }
  };

  return useMutation({
    mutationFn: likePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["likes"] });
    },
  });
};
