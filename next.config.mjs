import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter"
// import myUnifiedPluginHandlingYamlMatter from './src/lib/my-unified-plugin-handling-yaml-matter'

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: "one-dark-pro",
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    // source: https://github.com/remarkjs/remark-frontmatter?tab=readme-ov-file#example-frontmatter-as-metadata
    // remarkPlugins: [remarkFrontmatter, myUnifiedPluginHandlingYamlMatter],

    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],

    // rehypePlugins: [rehypeSlug],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

export default withMDX(nextConfig);
