import { z } from "zod/v4";
import { userSchema } from "./userSchema";

export const likeSchema = z.object({
  id: z.uuid(),
  userId: z.uuid(),
  postId: z.uuid(),
  createdAt: z.coerce.date(),
});

export const likeForPostSchema = likeSchema
  .pick({ id: true })
  .extend({ user: userSchema.pick({ id: true }) });

export type LikeForPost = z.infer<typeof likeForPostSchema>;
export type LikeType = z.infer<typeof likeSchema>;
