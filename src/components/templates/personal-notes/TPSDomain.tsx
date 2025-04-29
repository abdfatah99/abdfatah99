//

interface ITPSDomain {
  domain: string[]
}

/**
 * 25/04/2025 - Plan of arguments
 * - list of domain
 *   ['database','programming language', readme.md]
 *
 *
 * @returns jsx
 */
function PSDomain(props: ITPSDomain) {
  return (
    <div>
      Personal Notes Domain
      list of material:
      <ol className="list-disc">
        {props.domain.map(element => {
          return <li key={element}>{element}</li>
        })}
      </ol>
    </div>
  )
}

export default PSDomain;
