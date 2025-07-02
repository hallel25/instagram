import { useContext } from "react";
import { Navbar } from "../../components/Navbar";
import { CurrentUserContext } from "../../hooks/useUser";
import { Post } from "../../components/Post/Post";
import { useUsersPosts } from "../../api/postsApi/useGetPostsByUser";
import { Alert, CircularProgress } from "@mui/material";

export const Profile = () => {
  const { currentUser } = useContext(CurrentUserContext);

   const {
     data: posts = [],
     error,
     isError,
     isLoading,
   } = useUsersPosts(currentUser.id);

   if (isLoading) return <CircularProgress />;

   if (isError) {
     return (
       <Alert severity="error">
         Error loading posts data: {error?.message}
       </Alert>
     );
   }

  const postsByOrder = posts
    .filter((post) => post.userId == currentUser.id)
    .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));

  return (
    <>
      <Navbar canExit={false} text="profile name" />
      <h1>{currentUser.username}</h1>
      {postsByOrder.map((post) => {
        return <Post post={post} />;
      })}
    </>
  );
};
