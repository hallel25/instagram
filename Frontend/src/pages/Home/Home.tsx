import { Alert, CircularProgress } from "@mui/material";
import { usePosts } from "../../api/postsApi/useGetAllPosts";
import { Navbar } from "../../components/Navbar";
import { Post } from "../../components/Post/Post";

export const Home = () => {
  const { data: posts = [], error, isError, isLoading } = usePosts();

  if (isLoading) return <CircularProgress />;

  if (isError) {
    return (
      <Alert severity="error">Error loading posts data: {error?.message}</Alert>
    );
  }

  const postsByOrder = posts.sort((a, b) =>
    a.createdAt > b.createdAt ? -1 : 1
  );

  return (
    <>
      <Navbar text="instagram" canExit={false} />
      {postsByOrder.map((post) => {
        return <Post post={post} />;
      })}
    </>
  );
};
