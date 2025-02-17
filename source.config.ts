import { rehypeCodeDefaultOptions } from 'fumadocs-core/mdx-plugins';
import { defineCollections, defineConfig, defineDocs, frontmatterSchema } from 'fumadocs-mdx/config';
import { transformerTwoslash } from 'fumadocs-twoslash';
import { z } from 'zod';
// import { transformerTwoslash } from 'fumadocs-twoslash';

export const docs = defineDocs({
  dir: "content/docs",
});

export const blogCollection = defineCollections({
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    date: z.string().date().or(z.date()).optional(),
    tags: z.array(z.string()).optional(),
  }),
  type: "doc"
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: { dark: "dark-plus", light: "dark-plus" },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerTwoslash(),
      ],
    }
  },
});
