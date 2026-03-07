import { psContentNavContext } from "@/src/contexts/personal-notes/personal-notes-context";
import { Button } from "@/src/components/ui/button";
import CardDisplayOne from "@/src/components/molecule/card/ExperienceCard";
import ContentNavigation from "@/src/components/molecule/notes-content-navigation";
import Navbar from "@/src/components/organism/Navbar";
import React, { useContext } from "react";
import PSNotesMaterialCard from "@/src/components/molecule/card/PersonalNotesSubjectCard";
import { Dirent } from "fs";
import { PSDirectory } from "@/src/utils/PSNode";
import { Logger } from "@/src/lib/logging";

const log = new Logger(
  "src/component/templates/personal-notes/TPSHomePage.tsx",
);

// here where you have to update the personal notes context

interface ITPSHomePage {
  domainMaterial: PSDirectory;
}

// TemplatePersonalNotesHomePage
function TPSHomePage({ domainMaterial }: ITPSHomePage) {
  // const navigationValue = useContext(psContentNavContext);

  // if (!navigationValue) {
  //   throw new Error("psContentNavContext is not provided");
  // }

  // const { nav, setNav } = navigationValue;

  // const updateNav = (newNavItem: string) => {
  //   setNav((prevNav) => [...prevNav, ` > ${newNavItem}`]);
  // };

  // const reduceNav = () => {
  //   setNav((prevNav) => prevNav.slice(0, -1));
  // };

  // const domain = props.domain.map((domain_item) => {
  //   return <li key={domain_item.name}>{domain_item.name}</li>;
  // });

  // log.logFlow("get data from page.tsx into page template", props.domain)

  const listOfDomainMaterial = domainMaterial.getChildrenDirectory();
  // log.logFlow("check home list of material: ", listOfDomainMaterial);

  return (
    <>
      {/* Content Navigation
      <ContentNavigation nav={nav}></ContentNavigation>
      <Button onClick={() => updateNav()}>update nav</Button>
      <Button onClick={() => reduceNav()}>reduce nav</Button> 
      */}

      <div className="container">
        <p className="my-2 text-xs text-slate-500">Fatah Personal Notes</p>

        <div className="mt-3 grid grid-cols-2 gap-4">
          {listOfDomainMaterial.map((dir: PSDirectory, index: number) => {
            return (
              <PSNotesMaterialCard
                key={index}
                image="/personal-notes/sql-server.png"
                title={dir.getName()}
                desc={dir.getDescription()}
                materialLink={dir.getURLPath()}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TPSHomePage;
