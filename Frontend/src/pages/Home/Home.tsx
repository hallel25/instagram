import { mockPosts } from "../../DB/DB";
import { Navbar } from "../../components/Navbar";
import { Post } from "../../components/Post/Post";

export const Home = () => {
  const postsByOrder = mockPosts.sort((a, b) =>
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
