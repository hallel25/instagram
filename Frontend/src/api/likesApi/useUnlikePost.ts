import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { type LikeType } from "../../types";
import { queryClient } from "../../lib/queryClient";

type UnlikePostDTO = Pick<LikeType, "postId" | "userId">;

export const useUnlikePost = () => {
  const deleteLike = async (like: UnlikePostDTO): Promise<void> => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/likes/unlike-post`,
        {
          data: like,
        }
      );
      console.log("Like deleted: ", response.statusText);
    } catch (error) {
      console.error("Failed to delete like:", error);
    }
  };

  return useMutation({
    mutationFn: deleteLike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["likes"] });
    },
  });
};
