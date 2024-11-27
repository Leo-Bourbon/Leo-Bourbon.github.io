// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      languageTag: z.enum(["en", "fr"]),
      thumbnail_alt: z.string(),
      thumbnail: image(),
      images: z.optional(z.array(image())),
      short_description: z.string(),
      badges: z.array(
        z.object({
          label: z.string(),
          type: z.enum(["primary", "secondary", "accent", "ghost"]),
        }),
      ),
      featured: z.optional(z.boolean()).default(false)
    }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  projects: projectsCollection,
};
