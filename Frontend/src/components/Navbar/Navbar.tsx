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
import "./navbar.css";

interface NavbarProps {
  text: string;
  canExit: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ text, canExit }) => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = React.useContext(CurrentUserContext);

  const handleUserChange = (e: SelectChangeEvent) => {
    setCurrentUser(mockUsers.find((user) => user.id == e.target.value));
    console.log(currentUser)
  };

  return (
    <>
      <Paper
      id="navbar"
        sx={{
          position: "fixed",
          display: "flex",
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
        id="page-name"
          variant="h4"
          sx={{
            textAlign: "center",
          }}
        >
          {text}
        </Typography>
        <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 120 }} size="small">
          <InputLabel>{currentUser.username}</InputLabel>
          <Select
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
