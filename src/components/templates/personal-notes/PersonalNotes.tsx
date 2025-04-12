import { psContentNavContext } from "@/contexts/personal-notes/personal-notes-context";
import { Button } from "@/components/ui/button";
import CardDisplayOne from "@/components/molecule/card/ExperienceCard";
import ContentNavigation from "@/components/molecule/notes-content-navigation";
import Navbar from "@/components/organism/Navbar";
import React, { useContext } from "react";
import PSNotesMaterialCard from "@/components/molecule/card/PersonalNotesMaterialCard";

// here where you have to update the personal notes context

function PersonalNotes({ children }: any) {
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

  return (
    <>
      {/* Content Navigation
      <ContentNavigation nav={nav}></ContentNavigation>
      <Button onClick={() => updateNav()}>update nav</Button>
      <Button onClick={() => reduceNav()}>reduce nav</Button> 
      */}

      <div className="container">
        <p className="my-2 text-xs text-slate-500">Fatah Personal Notes</p>

        <p className="text-2xl font-semibold">Database</p>

        <div className="mt-3">
          <PSNotesMaterialCard
            image="/personal-notes/sql-server.png"
            title="SQL Server"
            desc="Enterprise Database Solution by Microsoft"
            goto="/personal-notes/database"
            link="/personal-notes/database"
            onClick={() => console.log("test")}
          />
        </div>
      </div>
    </>
  );
}

export default PersonalNotes;
