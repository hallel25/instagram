import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { userSchema, type UserType } from "../../types";

export const useGetUserById = (userId: string) => {
  const fetchUser = async (userId: string): Promise<UserType> => {
    const { data } = await axios.get(`http://localhost:3000/users/${userId}`);
    const validationResult = userSchema.safeParse(data);

    if (!validationResult.success) {
      console.error("API Response validation failed:", validationResult.error);
      throw new Error("Invalid data format received from API");
    }

    return validationResult.data;
  };

  return useQuery<UserType, Error>({
    queryKey: ["users", userId],
    queryFn: () => fetchUser(userId),
  });
};
