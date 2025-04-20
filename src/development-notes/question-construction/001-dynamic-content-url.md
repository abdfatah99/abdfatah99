<!-- this file used to construct a question to chatgpt -->

# Question

This is my Next.js project structure

```bash
.
├── README.md
├── components.json
├── mdx-components.tsx
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.js
├── project-stage.md
├── public
│   ├── Footer
│   │   ├── Gmail.svg
│   │   ├── Linkedin.svg
│   │   └── Twitter.svg
│   ├── icons
│   │   ├── 001-html-logo.png
│   │   ├── 002-css-logo.png
│   │   ├── 003-typescript-logo.png
│   │   ├── 004-react-logo.png
│   │   ├── 005-nextjs-logo.png
│   │   ├── 006-nestjs-logo.svg
│   │   ├── 007-mongodb-logo.png
│   │   ├── 008-postgress-logo.png
│   │   ├── 009-rest-api-logo.png
│   │   ├── 010-python-logo.png
│   │   ├── 011-docker-logo.png
│   │   ├── 012-go-logo.png
│   │   └── 013-tailwind-css.png
│   ├── navbar
│   │   ├── Abdul Fatah.svg
│   │   └── profile-foto.png
│   ├── personal-notes
│   │   ├── mysql.png
│   │   ├── postgresql.png
│   │   └── sql-server.png
│   ├── projects
│   │   ├── Museum Betawi.png
│   │   ├── PKM.png
│   │   └── Perabot Land.png
│   └── test-image
│       └── test-image.jpg
├── src
│   ├── app
│   │   ├── blog
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── personal-notes
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── components
│   │   ├── molecule
│   │   │   ├── card
│   │   │   │   ├── 1_cardTypeOne.tsx
│   │   │   │   └── ExperienceCard.tsx
│   │   │   ├── notes-content-navigation.tsx
│   │   │   └── search-input.tsx
│   │   ├── organism
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   ├── templates
│   │   │   ├── home
│   │   │   │   ├── Home.tsx
│   │   │   │   ├── experience.tsx
│   │   │   │   ├── project.tsx
│   │   │   │   └── welcomeText.tsx
│   │   │   ├── note-dashboard.tsx
│   │   │   └── personal-notes
│   │   │       └── PersonalNotes.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       └── sheet.tsx
│   ├── contexts
│   │   └── personal-notes
│   │       └── personal-notes-context.ts
│   ├── lib
│   │   ├── ExperienceList.json
│   │   ├── ProjectList.json
│   │   ├── constants.tsx
│   │   └── utils.ts
│   ├── list all file and directory.js
│   ├── personal-notes
│   │   ├── Readme.md
│   │   ├── content
│   │   │   ├── TypeScript
│   │   │   │   └── 001-TypeScript.md
│   │   │   └── python
│   │   │       └── 001-python.md
│   │   └── database
│   │       ├── content
│   │       │   └── 001-intro-to-postgre.mdx
│   │       └── page.tsx
│   ├── project-notes
│   │   ├── 000-rule-of-project.md
│   │   ├── 001-understanding-context.md
│   │   ├── 002-mdx-tailwind.md
│   │   ├── 003-listing-all-content-from-file.md
│   │   └── question-construction.md
│   └── styles
│       └── global.css
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock
```

explanation:

- `src` directory is contain all project code
- `app` directory is used to contain all **Pages** (routing)
- `personal-notes` directory is contain all of my personal notes content, for
  example, I have notes about `TypeScript`, I place all content about TypeScript
  under `personal-notes/content/TypeScript`.

I want to make the personal-notes page url dynamicly follow the structure of
`personal-notes` that contain all content.

for example i want to read `001-TypeScript.md`, then i'll go to the url of
`/personal-notes/TypeScript/001-TypeScript`. This url will resulting the content
of markdownfile then convert it into html.

# Answer

## 1. Install Required Package

```bash
npm install remark remark-parse remark-rehype rehype-stringify
```

## 2. Update dynamic route to use `remark-rehype`

```tsx
// src/app/personal-notes/[category]/[slug]/page.tsx

import fs from "fs";
import path from "path";
import matter from "gray-matter"; // Parses markdown frontmatter
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

export async function generateStaticParams() {
  // Generate static paths for dynamic routing
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

export default async function PersonalNotePage({ params }) {
  const { category, slug } = params;
  const markdownPath = path.join(
    "src",
    "personal-notes",
    "content",
    category,
    `${slug}.md`,
  );
  const fileContent = fs.readFileSync(markdownPath, "utf8");
  const { content, data } = matter(fileContent);

  // Process the Markdown content using remark-rehype pipeline
  const processedContent = await remark()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(content);

  const htmlContent = processedContent.toString();

  return (
    <div>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
```

## Explanation

1. Remark Setup:

   - `remark()` is used to create a processing pipeline.
   - `remarkParse` parses the Markdown content into an Abstract Syntax Tree (AST).
   - `remarkRehype` converts the Markdown AST into an HTML AST.
   - `rehypeStringify` converts the HTML AST into an HTML string.

2. Markdown Processing:

   - The `process(content)` function takes the Markdown content, runs it through the processing pipeline, and converts it into an HTML string.

3. HTML Output:
   - The resulting HTML content is rendered inside a `div` using `dangerouslySetInnerHTML`.

## 3. Customizing the Pipeline (Optional)

One of the key benefits of using remark-rehype is the ability to customize the pipeline by adding plugins. For example, you can add syntax highlighting, footnotes, or other Markdown extensions.

Here's how you could add syntax highlighting using rehype-prism:

```bash
npm install rehype-prism
```

Then, include it in your pipeline:

```tsx
import rehypePrism from "rehype-prism";

// Inside the processing pipeline
const processedContent = await remark()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypePrism) // Add syntax highlighting
  .use(rehypeStringify)
  .process(content);
```
