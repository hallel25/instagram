import * as React from "react";
import Box from "@mui/material/Box";
import {
  AppBar,
  BottomNavigationAction,
  Paper,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  text: string;
  canExit: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ text, canExit }) => {
  const navigate = useNavigate();

  return (
    <Paper
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "white",
        height: 50,
        display: "flex",
        alignItems: "center"
      }}
      elevation={3}
      square
    >
      {canExit && (
        <button onClick={() => navigate(-1)} style={{background: 'white', border: 0}}>
          <CloseIcon />
        </button>
      )}
      <Typography
        variant="h3"
        sx={{
          color: "black",
          fontFamily: "Lavishly Yours",
          textAlign: "center",
        }}
      >
        {text}
      </Typography>
    </Paper>
  );
};
