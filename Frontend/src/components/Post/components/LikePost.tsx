import {
  Alert,
  CardActions,
  CircularProgress,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useLikePost } from "../../../api/likesApi/useLikePost";
import { useUnlikePost } from "../../../api/likesApi/useUnlikePost";
import { usePostsLikes } from "../../../api/likesApi/useGetPostsLikes";

interface LikePostProps {
  postId: string;
  userId: string;
}

export const LikePost = ({ postId, userId }: LikePostProps) => {
  const { mutate: mutateLikePost } = useLikePost();
  const { mutate: mutateUnlikePost } = useUnlikePost();

  const {
    data: likes = [],
    error: likesError,
    isError: likesIsError,
    isLoading: likesIsLoading,
  } = usePostsLikes(postId);

  const liked = likes.some((like) => like.userId === userId) ?? false;

  if (likesIsLoading) return <CircularProgress />;

  if (likesIsError) {
    return (
      <Alert severity="error">
        Error loading likes data: {likesError?.message}
      </Alert>
    );
  }

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
