import { z } from "zod";

export const likeSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  postId: z.string().uuid(),
  createdAt: z.string().datetime(),
});

export type Like = z.infer<typeof likeSchema>;