import {
  Alert,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  ClickAwayListener,
  IconButton,
  Menu,
  MenuItem,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import type { PostType } from "../../types";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DoneSharpIcon from "@mui/icons-material/DoneSharp";
import CloseIcon from "@mui/icons-material/Close";
import { useState, type FC, useContext, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CurrentUserContext } from "../../hooks/useUser";
import "./post.css";
import { useDeletePost } from "../../api/postsApi/useDeletePost";
import { useGetUserById } from "../../api/usersApi/useGetUserById";
import { Link } from "react-router-dom";
import { useLikePost } from "../../api/likesApi/useLikePost";
import { usePostsLikes } from "../../api/likesApi/useGetPostsLikes";
import { useUnlikePost } from "../../api/likesApi/useUnlikePost";
import { useEditPost } from "../../api/postsApi/useEditPost";

interface PostProps {
  post: PostType;
}

export const Post: FC<PostProps> = ({ post }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [liked, setLiked] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [editedText, setEditedText] = useState<string>(post.caption);
  const open = Boolean(anchorEl);
  const { mutate: mutateDeletePost } = useDeletePost();
  const { mutate: mutateLikePost } = useLikePost();
  const { mutate: mutateUnlikePost } = useUnlikePost();
  const { mutate: mutateEditPost } = useEditPost();
  const { data: user } = useGetUserById(post.userId);
  const {
    data: likes = [],
    error: likesError,
    isError: likesIsError,
    isLoading: likesIsLoading,
  } = usePostsLikes(post.id);

  useEffect(() => {
    const found =
      likes?.some((like) => like.userId === currentUser.id) ?? false;
    setLiked(found);
  }, [likes, currentUser.id]);

  if (likesIsLoading) return <CircularProgress />;

  if (likesIsError) {
    return (
      <Alert severity="error">
        Error loading likes data: {likesError?.message}
      </Alert>
    );
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(event.target.value);
  };

  const handleBeginEdit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    setEdit(true);
    setAnchorEl(null);
  };

  const handleEditClose = () => {
    console.log("fe");

    setEditedText(post.caption);
    setEdit(false);
  };

  const handleEditSubmit = () => {
    console.log("l");

    mutateEditPost(
      { id: post.id, caption: editedText.trim() },
      {
        onSuccess: () => {
          setEdit(false);
        },
        onError: (error) => {
          console.error("Failed to edit post:", error.message);
        },
      }
    );
  };

  const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    mutateDeletePost(post.id);

    setAnchorEl(null);
  };

  const changeLike = () => {
    if (!liked) {
      mutateLikePost({
        postId: post.id,
        userId: currentUser.id,
      });
    } else {
      mutateUnlikePost({
        postId: post.id,
        userId: currentUser.id,
      });
    }

    setLiked(!liked);
  };

  return (
    <Card style={{ marginBottom: 20 }}>
      <CardHeader
        action={
          post.userId == currentUser.id && (
            <div>
              <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="long-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  list: {
                    "aria-labelledby": "long-button",
                  },
                }}
              >
                <MenuItem key="edit" onClick={handleBeginEdit}>
                  Edit post
                </MenuItem>
                <MenuItem key="delete" onClick={handleDelete}>
                  Delete post
                </MenuItem>
              </Menu>
            </div>
          )
        }
        component={Link}
        style={{ textDecoration: "none" }}
        to={`/profile/${post.userId}`}
        title={user?.username}
        subheader={post.createdAt.toLocaleDateString()}
      />
      <CardMedia component="img" height="194" image={post.imageUrl} />
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
      <CardContent id="caption-container">
        {edit ? (
          <ClickAwayListener onClickAway={handleEditClose}>
            <Stack sx={{ width: "100%" }} flexDirection="row">
              <IconButton onClick={handleEditClose}>
                <CloseIcon color="error" />
              </IconButton>
              <OutlinedInput
                value={editedText}
                onChange={handleEditChange}
                sx={{ width: "100%" }}
              />
              <IconButton onClick={handleEditSubmit}>
                <DoneSharpIcon color="success" />
              </IconButton>
            </Stack>
          </ClickAwayListener>
        ) : (
          <Typography variant="body2" id="caption">
            {post.caption}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
