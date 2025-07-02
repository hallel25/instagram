import { z } from "zod/v4";

export const likeSchema = z.object({
  id: z.uuid(),
  userId: z.uuid(),
  postId: z.uuid(),
  createdAt: z.date(),
});

export type LikeType = z.infer<typeof likeSchema>;
