import { z } from "zod";

export const postSchema = z.object({
  id: z.string().uuid(),
  caption: z.string(),
  imageUrl: z.string().url(),
  userId: z.string().uuid(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Post = z.infer<typeof postSchema>;