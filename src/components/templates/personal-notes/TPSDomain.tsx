//

import PSNotesSubjectCard from "@/src/components/molecule/card/PersonalNotesSubjectCard";
import { PSDirectory } from "@/src/utils/PSNode";

interface ITPSDomain {
  domain: PSDirectory;
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
export function PSNotePageTemplate(props: ITPSDomain) {
  const description = props.domain.getName();
  const children = props.domain.getChildrenDirectory();
  const notes = props.domain.getNotesList();

  return (
    <div>
      <p className="my-4 text-gray-700">{description}</p>

      <div className="mt-3 grid grid-cols-2 gap-4 ">
        {children.map((dir, index) => {
          return (
            <PSNotesSubjectCard
              key={index}
              image="/personal-notes/sql-server.png"
              title={dir.getName()}
              desc={dir.getDescription()}
              materialLink={dir.getURLPath()}
            />
          );
        })}

        {notes.map((material, index) => {
          return (
            <PSNotesSubjectCard
              key={index}
              image="/personal-notes/sql-server.png"
              title={material.getName()}
              desc={material.getDescription()}
              materialLink={material.getURLPath()}
            />
          );
        })}
      </div>
    </div>
  );
}

export function PSNotesMaterial() {}
