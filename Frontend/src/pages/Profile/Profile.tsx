import { useContext } from "react";
import { Navbar } from "../../components/Navbar"
import { CurrentUserContext } from "../../hooks/useUser";
import { mockPosts } from "../../DB/DB";
import { Post } from "../../components/Post/Post";

export const Profile = () => {
  // const { currentUser } = useContext(CurrentUserContext);
  const currentUserPosts = mockPosts.filter((post) => post.userId == 'user1')


  return (
    <>
      <Navbar canExit={false} text="profile name" />
      <h1>Profile</h1>
      {currentUserPosts.map((post) => {
        return <Post post={post} />;
      })}
    </>
  );
};