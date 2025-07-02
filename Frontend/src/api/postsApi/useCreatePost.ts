import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { type PostType } from "../../types";

const createPost = async (
  post: Pick<PostType, "caption" | "userId" | "imageUrl">
) => {
  await axios
    .post("http://localhost:3000/posts/create-post", {
      ...post,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const useCreatePost = (
  post: Pick<PostType, "caption" | "userId" | "imageUrl">
) => {
  return useQuery({
    queryKey: ["posts", post],
    queryFn: createPost(post),
  });
};
