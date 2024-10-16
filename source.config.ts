import { defineDocs, defineConfig } from "fumadocs-mdx/config";

export const { docs, meta } = defineDocs();

export default defineConfig({
    mdxOptions: {
        rehypeCodeOptions: {
            inline: "tailing-curly-colon",
            themes: {
                light: "dark-plus",
                dark: "dark-plus",
            },
        }
    }
});
