//

import PSNotesSubjectCard from "@/src/components/ui/card/MaterialCard";
// import { PSDirectory } from "@/src/utils/PSNode";
import { Directory } from "@/src/utils/node";

interface ITPSDomain {
  domain: Directory;
}

/**
 * 25/04/2025 - Plan of arguments
 * - list of domain
 *   ['database','programming language', readme.md]
 *
 *
 * TODO
 * - Template for directory
 * - Template for file (displaying material)
 *
 * @returns jsx
 */
// export function ContentGridTemplate (props: ITPSDomain) {
export function PSNotePageTemplate(props: ITPSDomain) {
  // const description = props.domain.getName();
  const children = props.domain.getChildrenDirectory();
  const notes = props.domain.getContentList();

  return (
    <div className="">
      {/* <p className="my-4 text-gray-700">{description}</p> */}

      <div className="mt-3 grid grid-cols-2 gap-4 ">
        {children.map((dir, index) => {
          return (
            <PSNotesSubjectCard
              key={index}
              image="/personal-notes/sql-server.png"
              title={dir.getDirectoryName()}
              desc={dir.getDescription()}
              materialLink={dir.getDirNodeURLPath()}
            />
          );
        })}

        {notes.map((material, index) => {
          return (
            <PSNotesSubjectCard
              key={index}
              image="/personal-notes/sql-server.png"
              title={material.getFileName()}
              desc={material.getDescription()}
              materialLink={material.getDirNodeURLPath()}
            />
          );
        })}
      </div>
    </div>
  );
}

export function PSNotesMaterial() {}
