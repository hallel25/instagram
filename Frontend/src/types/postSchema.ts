import * as z from "zod/v4";

export const postSchema = z.object({
  id: z.uuid(),
  caption: z.string(),
  imageUrl: z.url({
    protocol: /^https?$/,
    hostname: z.regexes.domain,
  }),
  userId: z.uuid(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type PostType = z.infer<typeof postSchema>;
export const postInputSchema = postSchema.omit({ id: true });
export type PostInput = z.infer<typeof postInputSchema>;
