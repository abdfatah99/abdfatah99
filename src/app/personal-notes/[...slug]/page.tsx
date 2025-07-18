import config from "@src/utils/config";
import { Logger } from "@src/lib/logging";
import { PSDirectory, PSMaterial } from "@src/utils/PSNode";
import path from "path";
import { EntryStatus, getAllSlugPathFrom } from "@src/utils/entry";
import { PSNotePageTemplate } from "@src/components/templates/personal-notes/TPSDomain";
import TPSMaterial from "@src/components/templates/personal-notes/TPSMaterial";
// import style from "./page.module.css";

const log = new Logger("src/app/personal-notes/[domain]/page.tsx");

export const dynamicParams = false;

export function generateStaticParams() {
  /**
   * Generate static URL parameter for each material
   * 
   * Example structure:
   * personal-notes/
      ├── js/
      │   └── basics/
      │       └── intro.md
      ├── python/
      │   └── loops.md
      └── index.md
   * 
     Example list of directory structure 
     [
        ['js', 'basics', 'intro'],
        ['python', 'loops'],
        ['index']
     ]

     output URL slug
     [
       { slug: ['js', 'basics', 'intro'] },
       { slug: ['python', 'loops'] },
       { slug: ['index'] }
     ]

     Mapped URL
     - /personal-notes/js/basics/intro
     - /personal-notes/python/loops
     - /personal-notes/index
   */
  const paths = getAllSlugPathFrom("/personal-notes");
  // console.log("Static path: \n", paths)
  return paths.map((slugArray) => ({ slug: slugArray }));
}

interface IPageProps {
  params: Promise<{ slug?: string[] }>;
}

export default async function Page({ params }: IPageProps) {
  const slug: string[] = (await params).slug ?? [];

  const fullFsPath = path.join(config.psBase, ...slug);

  const entryStatus = EntryStatus(path.join(config.psBase, ...slug));
  // example of entryStatus: src\personal-notes\database\readme

  const importablePath = fullFsPath.replace(/\\/g, "/");

  if (entryStatus == "file") {
    const { default: Post } = await import(`../../../../${importablePath}.md`);
    // const { default: Post } = await import(`@/personal-notes/${importablePath}.md`)

    const material = new PSMaterial(path.join(config.psBase, ...slug));

    return (
      <div className="container">
        <TPSMaterial>
          <Post />
          {/* <ReadmePersonalNotes /> */}
        </TPSMaterial>
      </div>
    );
  }

  const psDirectory = new PSDirectory(path.join(config.psBase, ...slug));

  return (
    <div className={`container`}>
      <PSNotePageTemplate domain={psDirectory} />
    </div>
  );
}
