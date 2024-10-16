import { createMDX } from "fumadocs-mdx/next";
import { rehypeCode } from "fumadocs-core/mdx-plugins";

const withMDX = createMDX();

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  rehypePlugins: [rehypeCode],
};

export default withMDX(config);
