import { PSNotePageTemplate } from "@/src/app/personal-notes/components/TPSDomain";
import TPSMaterial from "@/src/app/personal-notes/components/TPSMaterial";
import config from "@/src/utils/config";
import { EntryStatus, GetMDModule } from "@/src/utils/entry";
import { Directory } from "@/src/utils/read-directory-content";
import { notFound } from "next/navigation";
import path from "path";
import {
  PSMainFrame,
  PSMainFrameBadge,
  PSMainFrameContent,
  PSMainFrameDescription,
  PSMainFrameTitle,
} from "../../../components/components/AppMainContentFrame";

interface RenderFileProps {
  MDModulePath: string;
}

interface RenderDirectoryProps {
  slug: string[];
}

interface PersonalNotesSubjectPageProps {
  slug: string[];
}

// file component
async function RenderFile({ MDModulePath }: RenderFileProps) {
  // const { default: Post } = await import(`../../../../${MDModulePath}.md`);

  const Post = await GetMDModule(MDModulePath);

  return (
    <div>
      <div className="container">
        <TPSMaterial>
          <Post />
          {/* <ReadmePersonalNotes /> */}
        </TPSMaterial>
      </div>
    </div>
  );
}

// directory component
// async function RenderDirectory({ slug }: RenderDirectoryProps) {
//   const psDirectory = new Directory(path.join(config.psBase, ...slug));
//   return (
//     <div className={`container`}>
//       <PSNotePageTemplate domain={psDirectory}></PSNotePageTemplate>
//     </div>
//   );
// }

export default async function PersonalNotesSubjectPage({
  slug,
}: PersonalNotesSubjectPageProps) {
  const requestPath = path.join(config.psBase, ...slug);
  const importablePathForMDXModule = requestPath.replace(/\\/g, "/");

  const entryStatus = EntryStatus(requestPath);

  /**
   * Testing: How to hit this page
   */
  if (entryStatus == "not_found") {
    console.log("Entry Status: ", entryStatus);
    notFound();
  }

  if (entryStatus == "file") {
    return <RenderFile MDModulePath={importablePathForMDXModule}></RenderFile>;
  }

  if (entryStatus == "directory") {
    const psDirectory = new Directory(path.join(config.psBase, ...slug));
    return (
      <PSMainFrame>
        <PSMainFrameBadge>{psDirectory.getName()}</PSMainFrameBadge>
        <PSMainFrameTitle>{psDirectory.getName()}</PSMainFrameTitle>
        <PSMainFrameDescription>
          {psDirectory.getDescription()}
        </PSMainFrameDescription>
        <PSMainFrameContent>
          {/* <RenderDirectory slug={slug} /> */}

          <PSNotePageTemplate domain={psDirectory}></PSNotePageTemplate>
        </PSMainFrameContent>
      </PSMainFrame>
    );
  }
}
