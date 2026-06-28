import TPSHomePage from "@/src/app/personal-notes/components/TPSHome";
import config from "@/src/utils/config";
import { Logger } from "@/src/lib/logging";
import { PSDirectory } from "@/src/utils/PSNode";
import PersonalNotes from "../../features/personal-notes/personal-notes-template";
import PSNoteFrontLibrary from "../../features/personal-notes/personal-notes-template2";
import PersonalNotesPage from "@/src/features/personal-notes/personal-notes-page";

const log = new Logger("src/app/personal-notes/page.tsx");

function PSPage() {
  // const personalNotes = new PSDirectory(config.psBase);

  // return <TPSHomePage domainMaterial={personalNotes} />;
  // return <PSNoteFrontLibrary />;
  return <PersonalNotesPage />
}
export default PSPage;
