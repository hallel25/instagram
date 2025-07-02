import { Box, Button, TextField } from "@mui/material";
import { Navbar } from "../../components/Navbar";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod/v4";
import { CurrentUserContext } from "../../hooks/useUser";
import { useCreatePost } from "../../api/postsApi/useCreatePost";

export const NewPost = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUserContext);
  const [URL, setURL] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [URLError, setURLError] = useState<boolean>(false);

  const handleURLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setURL(e.target.value);

    if (e.target.validity.valid) {
      setURLError(false);
    } else {
      setURLError(true);
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const submit = () => {
    const httpUrl = z.string().regex(/^(src\/\assets\/\photos\/)\w+/);

    const result = httpUrl.safeParse(URL);

    if (result.success) {
      navigate(-1);

      useCreatePost({
        caption: description,
        imageUrl: URL,
        userId: currentUser.id,
      });
    } else {
      setURLError(true);
      alert("invalid url");
    }
  };

  return (
    <>
      <Navbar canExit={true} text="Create New Post" />
      <Box sx={{ height: 25 }} />
      <TextField
        fullWidth
        required
        variant="standard"
        label="Photo url"
        value={URL}
        onChange={handleURLChange}
        error={URLError}
        helperText="Create a new post with the specified URL"
      />
      <Box sx={{ height: 12 }} />
      <TextField
        id="standard-basic"
        label="Description"
        variant="standard"
        fullWidth
        value={description}
        onChange={handleDescriptionChange}
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={URL == ""}
        style={{ marginTop: 20 }}
        onClick={submit}
      >
        CREATE
      </Button>
    </>
  );
};
