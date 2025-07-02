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
  CircularProgress,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../hooks/useUser";
import "./navbar.css";
import { useUsers } from "../../api/usersApi/useGetAllUsers";

interface NavbarProps {
  text: string;
  canExit: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ text, canExit }) => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = React.useContext(CurrentUserContext);
  const { data: users = [], error, isError, isLoading } = useUsers();

  if (isLoading) return <CircularProgress />;

  if (isError) {
    return (
      <Alert severity="error">Error loading users data: {error?.message}</Alert>
    );
  }

  const handleUserChange = (e: SelectChangeEvent) => {
    const user = users.find((user) => user.id == e.target.value); 
    user && setCurrentUser(user);
  };

  return (
    <>
      <Paper
        id="navbar"
        sx={{
          position: "fixed",
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
          <Select onChange={handleUserChange}>
            {users.map((user) => {
              return <MenuItem value={user.id}>{user.username}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Paper>
      <Box sx={{ height: 50 }} />
    </>
  );
};
