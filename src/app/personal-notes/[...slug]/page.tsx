import config from "@/src/utils/config";
import { Logger } from "@/src/lib/logging";
import { PSDirectory, PSMaterial } from "@/src/utils/PSNode";
import fs from "fs";
import path, { normalize, relative } from "path";
import { Dirent } from "fs";
import { Cuprum } from "next/font/google";
import { EntryStatus, getAllSlugPathFrom } from "@/src/utils/entry";
import { PSNotePageTemplate } from "@/src/components/templates/personal-notes/TPSDomain";
import TPSMaterial from "@/src/components/templates/personal-notes/TPSMaterial";
import style from "./page.module.css";


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

  console.log("slug path:", path.join(config.psBase, ...slug));

  const fullFsPath = path.join(config.psBase, ...slug)
  console.log("File sytem path generated: ", fullFsPath)

  // log.logFlow("1. Check entry Status", path.join(config.psBase, ...slug))
  const entryStatus = EntryStatus(path.join(config.psBase, ...slug));
  // example of entryStatus: src\personal-notes\database\readme
  // console.log("entry status: ", entryStatus)

  const importablePath = fullFsPath.replace(/\\/g, "/")

  if (entryStatus == "file") {
    // console.log("check slug path: ", slug)
    // const data = `./${path}.md`
    // console.log("check slug data: ", data)
    const finalImportPath = `${importablePath}.md`
    console.log("final Importable path:", finalImportPath)
    const mdPath = path.join(config.psBase, ...slug)
    // const { default: Post } = await import(
      // `@/personal-notes/${finalImportPath}`
    // );

    // const { default: Post } = await import("../../../../personal-notes/README.md")
    const { default: Post } = await import(`../../../../${importablePath}.md`)

    const material = new PSMaterial(path.join(config.psBase, ...slug));

    return (
      <div className="container">
        <TPSMaterial>
          <Post />
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
