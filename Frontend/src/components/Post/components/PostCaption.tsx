import {
  CardContent,
  IconButton,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DoneSharpIcon from "@mui/icons-material/DoneSharp";
import type { PostType } from "../../../types";
import { useState } from "react";
import { useEditPost } from "../../../api/postsApi/useEditPost";

interface PostCaptionProps {
  post: PostType;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  userId: string;
}

export const PostCaption = ({
  post,
  isEditing,
  setIsEditing,
  userId: currentUserId,
}: PostCaptionProps) => {
  const { mutate: mutateEditPost } = useEditPost();
  const [editedText, setEditedText] = useState<string>(post.caption);

  const handleEditChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedText(event.target.value);
  };

  const handleEditClose = () => {
    setEditedText(post.caption);
    setIsEditing(false);
  };

  const handleEditSubmit = () => {
    mutateEditPost(
      { id: post.id, caption: editedText.trim(), userId: currentUserId },
      {
        onSuccess: () => {
          setIsEditing(false);
        },
        onError: (error) => {
          console.error("Failed to edit post:", error.message);
        },
      }
    );
  };

  return (
    <CardContent id="caption-container">
      {isEditing ? (
        <Stack sx={{ width: "100%" }} flexDirection="row">
          <IconButton onClick={handleEditClose}>
            <CloseIcon color="error" />
          </IconButton>
          {/* <ClickAwayListener onClickAway={handleEditClose}> */}
          <OutlinedInput
            value={editedText}
            onChange={handleEditChange}
            sx={{ width: "100%" }}
          />
          {/* </ClickAwayListener> */}
          <IconButton onClick={handleEditSubmit}>
            <DoneSharpIcon color="success" />
          </IconButton>
        </Stack>
      ) : (
        <Typography variant="body2" id="caption">
          {post.caption}
        </Typography>
      )}
    </CardContent>
  );
};
