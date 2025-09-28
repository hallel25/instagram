import axios from "axios";
import type { EditPost } from "../../types";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../lib/queryClient";

export const useEditPost = () => {
  const editPost = async (editedPost: EditPost) => {
    try {
      const response = await axios.patch(
        "http://localhost:3000/posts/edit-post",
        editedPost
      );
      console.log("Post edited:", response.data);
    } catch (error) {
      console.error("Failed to edit post:", error);
    }
  };

  return useMutation({
    mutationFn: editPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
