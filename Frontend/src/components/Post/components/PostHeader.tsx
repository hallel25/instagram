import { CardHeader, IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import type { PostType } from "../../../types";
import { useState } from "react";
import { useDeletePost } from "../../../api/postsApi/useDeletePost";
import { Link } from "react-router-dom";

interface HeaderProps {
  post: PostType;
  handleBeginEdit: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  userId: string;
}

export const PostHeader = ({
  post,
  handleBeginEdit,
  userId: currentUserId,
}: HeaderProps) => {
  const { mutate: mutateDeletePost } = useDeletePost();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    mutateDeletePost(post.id);

    setAnchorEl(null);
  };

  return (
    <CardHeader
      action={
        post.user.id == currentUserId && (
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
      style={{ textDecoration: "none", color: "black" }}
      to={`/profile/${post.user.id}`}
      component={Link}
      title={post.user.username}
      subheader={post.createdAt.toLocaleDateString()}
    />
  );
};
