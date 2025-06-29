import * as React from "react";
import {
  Box,
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
              background: "white", border: 0, alignItems: "center", height: "100%", display: "flex"
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
        {canExit && <div style={{ width: 35 }} />}
      </Paper>
      <Box sx={{ height: 40 }} />
    </>
  );
};