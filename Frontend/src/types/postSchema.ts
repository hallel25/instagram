import { z } from "zod/v4";

export const postSchema = z.object({
  id: z.uuid(),
  caption: z.string(),
  imageUrl: z.string().regex(/^(src\/\assets\/\photos\/)\w+/),
  userId: z.uuid(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type PostType = z.infer<typeof postSchema>;
export const postInputSchema = postSchema.omit({ id: true });
export type PostInput = z.infer<typeof postInputSchema>;
