import { Card, CardMedia } from "@mui/material";
import type { PostType } from "../../types";
import { useState, useContext } from "react";
import { CurrentUserContext } from "../../hooks/useUser";
import "./post.css";
import { PostHeader } from "./components/PostHeader";
import { PostCaption } from "./components/PostCaption";
import { LikePost } from "./components/LikePost";

interface PostProps {
  post: PostType;
}

export const Post = ({ post }: PostProps) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [edit, setEdit] = useState<boolean>(false);

  const handleBeginEdit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setEdit(true);
  };

  return (
    <Card style={{ marginBottom: 20 }}>
      <PostHeader
        handleBeginEdit={handleBeginEdit}
        post={post}
        userId={currentUser.id}
      />
      <CardMedia component="img" height="194" image={post.imageUrl} />
      <LikePost postId={post.id} userId={currentUser.id} />
      <PostCaption
        post={post}
        isEditing={edit}
        setIsEditing={setEdit}
        userId={currentUser.id}
      />
    </Card>
  );
};
