import * as z from "zod/v4";

export const userSchema = z.object({
  id: z.uuid(),
  username: z.string(),
  email: z.email(),
});

export type User = z.infer<typeof userSchema>;
