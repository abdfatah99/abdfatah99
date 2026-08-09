import config from "@src/utils/config";
import { Logger } from "@src/lib/logging";
import PersonalNotesSubjectPage from "@/src/features/personal-notes/[notes-subject]/personal-notes-subject.page";

const log = new Logger("src/app/personal-notes/[domain]/page.tsx");

export const dynamicParams = false;

// export function generateStaticParams() {
//   /**
//    * Generate static URL parameter for each material
//    *
//    * Example structure:
//    * personal-notes/
//       ├── js/
//       │   └── basics/
//       │       └── intro.md
//       ├── python/
//       │   └── loops.md
//       └── index.md
//    *
//      Example list of directory structure
//      [
//         ['js', 'basics', 'intro'],
//         ['python', 'loops'],
//         ['index']
//      ]

//      output URL slug
//      [
//        { slug: ['js', 'basics', 'intro'] },
//        { slug: ['python', 'loops'] },
//        { slug: ['index'] }
//      ]

//      Mapped URL
//      - /personal-notes/js/basics/intro
//      - /personal-notes/python/loops
//      - /personal-notes/index
//    */
//   const paths = getAllSlugPathFrom("/personal-notes");
//   // console.log("Static path: \n", paths)
//   return paths.map((slugArray) => ({ slug: slugArray }));
// }

interface PageProps {
  params: Promise<{ subject?: string[] }>;
}

export default async function Page({ params }: PageProps) {
  const slug: string[] = (await params).subject ?? [];

  /**
   * Client will request content via url
   * The URL structure reflect the structure of content (directory) hierarchy
   */
  return <PersonalNotesSubjectPage urlRequest={slug} />;
}
