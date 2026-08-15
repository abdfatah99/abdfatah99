/**
 *
 * TODO:
 * 1. box number using index
 *
 * @returns
 */
function SkillBox({
  index,
  skill,
  skillDescription,
  className,
}: {
  index: number;
  skill: string;
  skillDescription: string[];
  className?: string;
}) {
  return (
    <div
      className={`flex aspect-square flex-col justify-between bg-white p-4 ${className}`}
    >
      {/* <span className="text-outline text-[10px] font-bold">{index} {skill}</span> */}
      <p className="text-lg font-black uppercase tracking-tighter">{skill}</p>
      {/* <p>{skillDescription}</p> */}
      <ul className="text-[10px]">
        {skillDescription.map((skillDetail, index) => {
          return <li key={index}>{skillDetail}</li>;
        })}
      </ul>
    </div>
  );
}

export { SkillBox };
