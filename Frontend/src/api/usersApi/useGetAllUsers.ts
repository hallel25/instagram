import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { z } from "zod/v4";
import { userSchema, type UserType } from "../../types";

const UsersArraySchema = z.array(userSchema);

export type UserFromApi = UserType;

const fetchUsers = async (): Promise<UserFromApi[]> => {
  const { data } = await axios.get("http://localhost:3000/users");
  const validationResult = UsersArraySchema.safeParse(data);

  if (!validationResult.success) {
    console.error("API Response validation failed:", validationResult.error);
    throw new Error("Invalid data format received from API");
  }

  return validationResult.data;
};

export const useUsers = () => {
  return useQuery<UserFromApi[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};
