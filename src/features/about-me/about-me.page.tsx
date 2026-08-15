import { AppMainFrame } from "@/src/components/components/AppMainContentFrame";
import { ListOfSkill } from "./about-me.hook";
import { SkillBox } from "./components/SkillBox";
import CalloutMD from "./components/Callout";

/**
 * TODO
 * 1. if amount of element is odd, it will resulting an empty space that expose
 *    the background of the grid
 * 2. create a logic to always create the element is even, and leave it empty
 * @returns
 */
function AboutMePage() {
  const listOfSkill = ListOfSkill;
  const isOdd = listOfSkill.length % 2 !== 0;
  return (
    <AppMainFrame className="flex flex-col gap-6">
      <section className="flex flex-col items-center space-y-6 text-center">
        <div className="space-y-1">
          <h1 className="text-on-surface text-4xl font-extrabold uppercase tracking-tighter">
            Software Engineer
          </h1>
        </div>
      </section>
      <CalloutMD
        header="Biography"
        paragraph="Eager to learn new things, active, and delighted to meet new
                     people and opportunities"
      />

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
            Skill
          </h2>
          <div className="bg-outline-variant ml-4 h-px grow"></div>
        </div>

        <div className="bg-outline grid grid-cols-2 gap-px bg-gray-600">
          {listOfSkill.map((skill, index) => {
            return (
              <SkillBox
                className="size-full"
                key={index}
                index={index}
                skill={skill.skill}
                skillDescription={skill.skillDescription}
              />
            );
          })}

          {isOdd && <div className="size-full bg-white" />}
        </div>
      </section>

      <section className="pb-12">
        <div className="flex flex-col items-center space-y-4 border border-zinc-900 p-6 text-center">
          <h3 className="text-2xl font-black uppercase tracking-tighter">
            Open for Opportunities
          </h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            Let&apos;s build something precise and permanent. I&apos;m currently
            looking for new projects and connections.
          </p>
          <button className="bg-primary w-full  border border-zinc-900 py-4 text-xs font-bold uppercase tracking-widest text-white">
            Get in touch
          </button>
        </div>
      </section>
    </AppMainFrame>
  );
}

export default AboutMePage;
