import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { userSchema, type UserType } from "../../types";

export type UserFromApi = UserType;

const fetchUser = async ({
  queryKey,
}: {
  queryKey: [string, string];
}): Promise<UserFromApi> => {
  const [_key, userId] = queryKey;
  const { data } = await axios.get(`http://localhost:3000/users/${userId}`);
  const validationResult = userSchema.safeParse(data);

  if (!validationResult.success) {
    console.error("API Response validation failed:", validationResult.error);
    throw new Error("Invalid data format received from API");
  }

  return validationResult.data;
};

export const useGetUserById = (userId: string) => {
  return useQuery<UserFromApi, Error>({
    queryKey: ["users", userId],
    queryFn: fetchUser,
  });
};
