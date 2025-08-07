import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import {
  defineCollections,
  defineConfig,
  defineDocs,
  frontmatterSchema,
  metaSchema,
} from "fumadocs-mdx/config";
import { transformerTwoslash } from "fumadocs-twoslash";
import { createFileSystemTypesCache } from "fumadocs-twoslash/cache-fs";
import { z } from "zod";

// You can customise Zod schemas for frontmatter and `meta.json` here
// see https://fumadocs.vercel.app/docs/mdx/collections#define-docs
export const docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: frontmatterSchema.extend({
      tag: z.enum(["new", "updated"]).optional()
    }),
  },
  meta: {
    schema: metaSchema,
  },
});

export const blogCollection = defineCollections({
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    date: z.coerce.date().or(z.date()).optional(),
    tags: z.array(z.string()).optional(),
  }),
  type: "doc"
});


export default defineConfig({
  mdxOptions: {

    rehypeCodeOptions: {
      lazy: true,

      themes: {
        light: "light-plus",
        dark: "dark-plus"
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers??[]),
        transformerTwoslash({
          typesCache: createFileSystemTypesCache(),
        })
      ]
    }
    // MDX options
  },
});
