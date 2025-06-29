import { Button, TextField } from "@mui/material";
import { Navbar } from "../../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod/v4";

export const NewPost = () => {
  const navigate = useNavigate();
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
    const httpUrl = z.url({
      protocol: /^https?$/,
      hostname: z.regexes.domain,
    });

    const result = httpUrl.safeParse(URL);

    if (!result.success) {
      setURLError(true);
    } else {
      
      navigate(-1);
    }
  };

  return (
    <>
      <Navbar canExit={true} text="Create New Post" />
      <h1>New Post</h1>
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
