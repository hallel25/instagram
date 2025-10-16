import { z } from "zod/v4";
import { likeForPostSchema } from "./likesSchema";
import { userSchema } from "./userSchema";

export const postSchema = z.object({
  id: z.uuid(),
  caption: z.string(),
  imageUrl: z.url({
    protocol: /^https?$/,
    hostname: z.regexes.domain,
  }),
  user: userSchema.pick({ id: true, username: true }),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  likes: z.array(likeForPostSchema).optional().default([]),
});

export type PostType = z.infer<typeof postSchema>;

export const postInputSchema = postSchema.omit({ id: true });
export type PostInput = z.infer<typeof postInputSchema>;

export const editPostSchema = postSchema
  .pick({
    id: true,
    caption: true,
  })
  .extend({
    userId: z.uuid(),
  });
export type EditPost = z.infer<typeof editPostSchema>;
