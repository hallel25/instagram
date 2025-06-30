import * as z from "zod/v4";

export const userSchema = z.object({
  id: z.uuid(),
  username: z.string(),
  email: z.email(),
});

export type UserType = z.infer<typeof userSchema>;
