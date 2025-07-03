import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { queryClient } from "../../lib/queryClient";

export const useDeletePost = () => {
  const deletePost = async (postId: string): Promise<void> => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/posts/delete/${postId}`
      );
      console.log("Post deleted: ", response.statusText);
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
