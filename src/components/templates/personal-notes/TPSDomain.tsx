//

import PSNotesMaterialCard from "@/components/molecule/card/PersonalNotesMaterialCard";
import { PSDirectory } from "@/lib/personal-notes-directory";

interface ITPSDomain {
  domain: PSDirectory;
}

/**
 * 25/04/2025 - Plan of arguments
 * - list of domain
 *   ['database','programming language', readme.md]
 *
 *
 * @returns jsx
 */
function TPSDomain(props: ITPSDomain) {
  return (
    <div>
      {/* Personal Notes Domain */}
      {/* list of material: */}
      {/* <ol className="list-disc">
        {props.domain.map(element => {
          return <li key={element}>{element}</li>
        })}
      </ol> */}

      { props.domain.getDescription()}

      <div className="mt-3 grid grid-cols-2 gap-4 ">
      { props.domain.getChildrenDirectory().map((dir, index) => {
        return (
          <PSNotesMaterialCard 
            key={index}
            image="/personal-notes/sql-server.png"
            title={dir.getName()}
            desc={dir.getDescription()}
            materialLink={dir.getLink()}
          />
        )
      })}
 
      </div>

   </div>
  )
}

export default TPSDomain;
