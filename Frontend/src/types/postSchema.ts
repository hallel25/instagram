import { z } from "zod/v4";
import { userSchema } from "./userSchema";

export const postSchema = z.object({
  id: z.uuid(),
  caption: z.string(),
  imageUrl: z.url({
    protocol: /^https?$/,
    hostname: z.regexes.domain,
  }),
  user: userSchema.transform((user) => user.id),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type PostType = z.infer<typeof postSchema>;

export const postInputSchema = postSchema.omit({ id: true });
export type PostInput = z.infer<typeof postInputSchema>;

export const editPostSchema = postSchema.pick({
  id: true,
  caption: true,
  user: true,
});
export type EditPost = z.infer<typeof editPostSchema>;
