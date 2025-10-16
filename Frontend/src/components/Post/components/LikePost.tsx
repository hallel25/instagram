import { CardActions, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useLikePost } from "../../../api/likesApi/useLikePost";
import { useUnlikePost } from "../../../api/likesApi/useUnlikePost";
import type { LikeForPost } from "../../../types";

interface LikePostProps {
  postId: string;
  userId: string;
  likes: LikeForPost[];
}

export const LikePost = ({ postId, userId, likes }: LikePostProps) => {
  const { mutate: mutateLikePost } = useLikePost();
  const { mutate: mutateUnlikePost } = useUnlikePost();

  const liked = likes.some((like) => like.user.id === userId) ?? false;
  const changeLike = () => {
    if (!liked) {
      mutateLikePost({
        postId: postId,
        userId: userId,
      });
    } else {
      mutateUnlikePost({
        postId: postId,
        userId: userId,
      });
    }
  };

  return (
    <CardActions disableSpacing>
      <IconButton onClick={changeLike} aria-label="add to favorites">
        {liked ? (
          <FavoriteIcon sx={{ color: "#e50b0b" }} />
        ) : (
          <FavoriteBorderIcon />
        )}
        {likes.length}
      </IconButton>
    </CardActions>
  );
};
