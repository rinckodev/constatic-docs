import { rehypeCode } from 'fumadocs-core/mdx-plugins';
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  rehypePlugins: [rehypeCode],
};

export default withMDX(config);
