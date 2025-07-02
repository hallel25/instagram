import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import type { PostType } from "../../types";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState, type FC, useContext } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CurrentUserContext } from "../../hooks/useUser";
import { mockPosts, mockUsers } from "../../DB/DB";
import { NewPost } from "../../pages/NewPost";
import "./post.css";
import { Profile } from "../../pages/Profile";

interface PostProps {
  post: PostType;
}

export const Post: FC<PostProps> = ({ post }) => {
  const { currentUser } = useContext(CurrentUserContext);
  const [liked, setLiked] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    return <NewPost postId={post.id} />;
  };

  const handleDelete = () => {
    const removedPostIndex = mockPosts.indexOf(post);
    removedPostIndex != -1 && mockPosts.splice(removedPostIndex, 1);

    setAnchorEl(null);
  };

  const changeLike = () => {
    setLiked(!liked);
  };

  const handleOpenProfile = () => {
    console.log("fg");
    return <Profile userId={post.userId} />;
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
                <MenuItem key="edit" onClick={handleEdit}>
                  Edit post
                </MenuItem>
                <MenuItem key="delete" onClick={handleDelete}>
                  Delete post
                </MenuItem>
              </Menu>
            </div>
          )
        }
        onClick={() => handleOpenProfile()}
        title={mockUsers.find((user) => user.id == post.userId)?.username}
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
        </IconButton>
      </CardActions>
      <CardContent>
        <Typography variant="body2" id="caption">
          {post.caption}
        </Typography>
      </CardContent>
    </Card>
  );
};
