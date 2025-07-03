import { type FC } from "react";
import { Navbar } from "../../components/Navbar";
import { Post } from "../../components/Post/Post";
import { useUsersPosts } from "../../api/postsApi/useGetPostsByUser";
import { Alert, CircularProgress } from "@mui/material";
import type { UserType } from "../../types";

interface userProfileProps {
  user: UserType;
}

export const UserProfile: FC<userProfileProps> = ({ user }) => {
  const profileUsername: string = user.username;
  const profileUserId: string = user.id;

  const {
    data: posts = [],
    error: postsError,
    isError: postsIsError,
    isLoading: postsIsLoading,
  } = useUsersPosts(profileUserId);

  if (postsIsLoading) return <CircularProgress />;

  if (postsIsError) {
    return (
      <Alert severity="error">
        Error loading posts data: {postsError?.message}
      </Alert>
    );
  }
  
  const postsByOrder = posts
    .filter((post) => post.userId == profileUserId)
    .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));

  return (
    <>
      <Navbar canExit={false} text="profile name" />
      <h1>{profileUsername}</h1>
      {postsByOrder.map((post) => {
        return <Post post={post} key={post.id}/>;
      })}
    </>
  );
};
