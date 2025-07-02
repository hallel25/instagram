import { createContext } from "react";
import type { UserType } from "../types";

type userContextType = {
  currentUser: UserType;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserType>>;
};

export const CurrentUserContext = createContext<userContextType>({} as userContextType);
