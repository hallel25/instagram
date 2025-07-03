import { useContext } from "react";
import { CurrentUserContext } from "../../hooks/useUser";
import { Alert, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import { useGetUserById } from "../../api/usersApi/useGetUserById";
import { UserProfile } from "../../components/UserProfile/UserProfile";

export const Profile = () => {
  const { userId } = useParams();
  const { currentUser } = useContext(CurrentUserContext);

  const profileId = userId ?? currentUser.id;
  const {
    data: user,
    isLoading: userIsLoading,
    isError: userIsError,
    error: userError,
  } = useGetUserById(profileId);

  if (userIsLoading) return <CircularProgress />;

  if (userIsError) {
    return (
      <Alert severity="error">
        Error loading user data: {userError?.message}
      </Alert>
    );
  }

  return (
    <>
      <UserProfile user={user ?? currentUser} />
    </>
  );
};
