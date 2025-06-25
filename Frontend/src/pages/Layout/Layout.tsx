import Paper from "@mui/material/Paper";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import type { JSX } from "react";

export const Layout = (props: JSX.ElementChildrenAttribute) => {
  return (
    <>
      {props.children}

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <BottomNavigationAction href="/" icon={<HomeIcon />} />
          <BottomNavigationAction
            href="new-post"
            icon={<AddPhotoAlternateIcon />}
          />
          <BottomNavigationAction href="profile" icon={<AccountCircleIcon />} />
        </BottomNavigation>
      </Paper>
    </>
  );
};
