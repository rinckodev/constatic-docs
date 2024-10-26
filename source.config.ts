import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import { transformerTwoslash } from "fumadocs-twoslash";

export const { docs, meta } = defineDocs({
  dir: "content/docs",
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
        inline: "tailing-curly-colon",
        themes: {
            light: "dark-plus",
            dark: "dark-plus",
        },
        transformers: [
            ...(rehypeCodeDefaultOptions.transformers??[]),
            transformerTwoslash(),
        ],
    }
}
});
