import * as React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
  type SelectChangeEvent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../hooks/useUser";
import { mockUsers } from "../../DB/DB";

interface NavbarProps {
  text: string;
  canExit: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ text, canExit }) => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = React.useContext(CurrentUserContext);

  const handleUserChange = (e: SelectChangeEvent) => {
    setCurrentUser(e.target.value);
  };

  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: "white",
          height: 50,
          display: "flex",
          alignItems: "center",
        }}
        elevation={3}
        square
      >
        {canExit && (
          <button
            onClick={() => navigate(-1)}
            style={{
              background: "white",
              border: 0,
              alignItems: "center",
              height: "100%",
              display: "flex",
            }}
          >
            <CloseIcon />
          </button>
        )}
        <Typography
          variant="h4"
          sx={{
            color: "black",
            fontFamily: "Send Flowers",
            textAlign: "center",
            flexGrow: 1,
          }}
        >
          {text}
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 120 }} size="small">
          <InputLabel>{currentUser.username}</InputLabel>
          <Select
            label={currentUser.username}
            value={currentUser}
            onChange={handleUserChange}
          >
            {mockUsers.map((user) => {
              return <MenuItem value={user.id}>{user.username}</MenuItem>
            })}
          </Select>
        </FormControl>
      </Paper>
      <Box sx={{ height: 50 }} />
    </>
  );
};
