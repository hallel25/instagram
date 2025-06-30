import { mockPosts } from "../../DB/DB";
import { Navbar } from "../../components/Navbar";
import { Post } from "../../components/Post/Post";
import type { PostType } from "../../types";

export const Home = () => {
  return (
    <>
      <Navbar text="instagram" canExit={false} />
      {mockPosts.map(post => {
        return <Post post={post} />
      })}
    </>
  );
};
