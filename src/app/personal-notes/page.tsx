import fs from "fs";
// "use client";
// wrong statement:
// here where the context-of-navigation-material exist, because this component
// is the parent of personal-notes-pages;
// - here is the location of Context.provider
// then the children of this page can access the context of the page

// true statement:
// The most up parent of the personal-notes is the `layout`, then you should
// place the Context.provider under in the `layout.tsx`.

import TPSHomePage from "@/components/templates/personal-notes/TPSHomePage";
import path from "path";
import constant from "@/lib/constants";
import { Logger } from "@/lib/logging";
import { Dirent } from "fs";
import { PSDirectory } from "@/lib/personal-notes-directory";
// import { psContentNavContext } from "@/contexts/personal-notes/personal-notes-context";
// import { useContext } from "react";

const log = new Logger("src/app/personal-notes/page.tsx");

function PersonalNotesPage() {
  // const navigationValue = useContext(psContentNavContext);
  // if (!navigationValue) {
  //   throw new Error("psContentNavContext is not provided");
  // }

  // const { nav, setNav } = navigationValue;

  // const navigationAdder = (newNavItem: string) => {
  //   setNav((prevNav) => [...prevNav, ` > ${newNavItem}`]);
  // };

  // const navigationReducer = () => {
  //   setNav((prevNav) => prevNav.slice(0, -1));
  // };

  /**
   * Dev Notes
   *
   * 18/04/2025
   * 1. Get data from content directory
   *    - Structure of the data is based on the directory Structure
   *    - Personal-notes category only display the category under `personal-notes`
   *      directory (not recursive)
   */

  /**
   * The function should know if the listed is directory or file
   * 1. if directory, it should new link and open new page
   * 2. if it's file, it should directly display a content if it, example the
   *    directory contain markdown, then it show the file and if user click it,
   *    it will display the content.
   */
  // const psDomain: Dirent[] = fs.readdirSync(path.join(constant.psDomain), {
  //   withFileTypes: true,
  // });

  // console.log(constant.psDomain)

  // const personalNotes = new PSDirectory("src/personal-notes")
    const personalNotes = new PSDirectory(constant.psHomePath);
  // log.logFlow("Inspect Class Element", personalNotes)

  // console.log("=====================")

  // log.logFlow("Check directory Content: ", personalNotes.Directory)
  // log.logFlow("List of directory", personalNotes.getChildrenDirectory())

  // 1. get url from this route
  // 2. pass the url to the lib > personal-notes-directory.ts
  // 3. get return value

  // log.logFlow(
  //   "Get all content of personal-notes directory (as domain list):",
  //   psDomain,
  // );

  return <TPSHomePage domainMaterial={personalNotes} />;
}
export default PersonalNotesPage;
