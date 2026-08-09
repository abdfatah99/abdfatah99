import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
// import myUnifiedPluginHandlingYamlMatter from './src/lib/my-unified-plugin-handling-yaml-matter'

/** @type {import('rehype-pretty-code').Options} */ // used for include option

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    // source: https://github.com/remarkjs/remark-frontmatter?tab=readme-ov-file#example-frontmatter-as-metadata
    // remarkPlugins: [remarkFrontmatter, myUnifiedPluginHandlingYamlMatter],

    remarkPlugins: [remarkFrontmatter, remarkGfm],
    rehypePlugins: [[rehypePrettyCode, { theme: "one-dark-pro" }], rehypeSlug],

    // rehypePlugins: [rehypeSlug],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx", "md"],
  // Optionally, add any other Next.js config below
};

export default withMDX(nextConfig);
