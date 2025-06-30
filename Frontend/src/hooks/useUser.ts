import { createContext } from "react";
import type { UserType } from "../types";

export const CurrentUserContext = createContext<UserType | null>(null);
