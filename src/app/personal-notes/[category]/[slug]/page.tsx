import fs from "fs";
import path from "path";
import matter from "gray-matter"; // parses mardown frontmatter
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

import rehypePrism from "rehype-prism";
import rehypePrettyCode from "rehype-pretty-code"

// interface for page parameter
interface Params {
  category: string;
  slug: string;
}

export async function generateStaticParams() {
  // generate static paths for dynamic routing
  const categories = fs.readdirSync(
    path.join("src", "personal-notes", "content"),
  );

  const paths = categories.flatMap((category) => {
    const files = fs.readdirSync(
      path.join("src", "personal-notes", "content", category),
    );
    return files.map((file) => ({
      category,
      slug: file.replace(/\.md$/, ""),
    }));
  });

  return paths.map(({ category, slug }) => ({
    params: { category, slug },
  }));
}

export default async function PersonalNotesPage({
  params,
}: {
  params: Params;
}) {
  const { category, slug } = params;
  const markdownPath = path.join(
    "src",
    "personal-notes",
    "content",
    category,
    `${slug}.md`,
  );
  const fileContent = fs.readFileSync(markdownPath, "utf-8");
  // extract markdown frontmatter
  const { content, data } = matter(fileContent);

  // process markdown content usign remark-rehype pipeline
  const processedContent = await remark()
    .use(remarkParse)
    .use(remarkRehype)
    // .use(rehypePrism)
    .use(rehypePrettyCode)
    .use(rehypeStringify)
    .process(content);

  const htmlContent = processedContent.toString();

  return (
    <div className="prose prose-lg mx-auto my-8">
      <h1 className="font-bold">{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
    </div>
  );
}
