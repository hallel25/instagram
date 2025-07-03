import Paper from "@mui/material/Paper";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { type JSX } from "react";
import { Link } from "react-router-dom";

export const Layout = (props: JSX.ElementChildrenAttribute) => {
  return (
    <>
      {props.children}

      <Box sx={{ height: 40 }} />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BottomNavigationAction component={Link} to="/" icon={<HomeIcon />} />
          <BottomNavigationAction
            component={Link}
            to="/new-post"
            icon={<AddPhotoAlternateIcon />}
          />
          <BottomNavigationAction
            component={Link}
            to={`/profile/`}
            icon={<AccountCircleIcon />}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};
