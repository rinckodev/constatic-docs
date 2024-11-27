import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { defineDocs, defineConfig, defineCollections, frontmatterSchema } from "fumadocs-mdx/config";
import { z } from "zod";

export const { docs, meta } = defineDocs({
  dir: "content/docs",
});

export const blogCollection = defineCollections({
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    date: z.string().date().or(z.date()).optional(),
    tags: z.array(z.string()).optional()
  }),
  type: "doc"
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      inline: "tailing-curly-colon",
      themes: {
        light: "light-plus",
        dark: "dark-plus"
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers??[])
      ]
    }
  },
})
