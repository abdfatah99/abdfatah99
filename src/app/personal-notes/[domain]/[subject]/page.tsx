import fs, { Dirent } from "fs";
import path from "path";
import matter from "gray-matter"; // parses mardown frontmatter
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

import rehypePrism from "rehype-prism";
import rehypePrettyCode from "rehype-pretty-code"
import { Logger } from "@/lib/logging";

const log = new Logger("src/app/personal-notes/[domain]/[subject]/page.tsx")

// interface for page parameter
interface Params {
  domain: string;
  slug: string;
}


export async function generateStaticParams() {
  // generate static paths for dynamic routing
  const categories = fs.readdirSync(
    path.join("src", "personal-notes"),
  );

  const paths = categories.flatMap((domain) => {
    // check if dirent is directory
      // recursively to create the domain and slug
    // check if dirent is a file

    const files = fs.readdirSync(
      path.join("src", "personal-notes"),
    );

    console.log(files)

    return files.map((file) => ({
      domain,
      slug: file.replace(/\.md$/, ""),
    }));
  });

  return paths.map(({ domain, slug }) => ({
    params: { domain, slug },
  }));
}

export default async function PersonalNotesPage({
  params,
}: {
  params: Params;
}) {
  const { domain, slug } = params;

  console.log(domain, slug)

  const markdownPath = path.join(
    "src",
    "personal-notes",
    domain,
    `${slug}.md`,
  );

  log.logFlow("Get param as for the domain and readme.md file", markdownPath)

  // const fileContent = fs.readFileSync(markdownPath, "utf-8");
  // extract markdown frontmatter
  // const { content, data } = matter(fileContent);

  // process markdown content usign remark-rehype pipeline
  // const processedContent = await remark()
  //   .use(remarkParse)
  //   .use(remarkRehype)
    // .use(rehypePrism)
  //   .use(rehypePrettyCode)
  //   .use(rehypeStringify)
  //   .process(content);

  // const htmlContent = processedContent.toString();

  return (
    <div className="prose prose-lg mx-auto my-8">
      {/* <h1 className="font-bold">{data.title}</h1> */}
      {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div> */}
    </div>
  );
}
