import TPSMaterial from "@/src/components/components/MarkdownProse";
import config from "@/src/utils/config";
import { EntryStatus, GetMDModule } from "@/src/utils/entry";
import { Directory, Material } from "@/src/utils/node";
import { notFound } from "next/navigation";
import path from "path";
import {
  AppMainFrame,
  AppMainFrameBadge,
  AppMainFrameContent,
  AppMainFrameContentGrid,
  AppMainFrameDescription,
  AppMainFrameTitle,
} from "@src/components/components/AppMainContentFrame";
import MaterialCard from "@/src/components/ui/card/MaterialCard3";
import { Database } from "lucide-react";

import { Logger } from "@/src/lib/logging";

const log = new Logger(
  "src/features/personal-notes/[notes-subject]/personal-notes-subject-page.tsx",
);

interface RenderFileProps {
  MDModulePath: string;
}

interface PersonalNotesSubjectPageProps {
  urlRequest: string[];
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

export default async function PersonalNotesSubjectPage({
  urlRequest,
}: PersonalNotesSubjectPageProps) {
  const requestPath = path.join(config.personalNotesBase, ...urlRequest);
  const importablePathForMDXModule = requestPath.replace(/\\/g, "/");

  const entryStatus = EntryStatus(requestPath);

  // log.logFlow("check entry status value", entryStatus)

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
    const psDirectory = new Directory(
      path.join(config.personalNotesBase, ...urlRequest),
    );

    const children = psDirectory.getChildrenDirectory();
    const notes = psDirectory.getContentList();

    return (
      <AppMainFrame>
        <AppMainFrameBadge>{psDirectory.getDirectoryName()}</AppMainFrameBadge>
        <AppMainFrameTitle>{psDirectory.getDirectoryName()}</AppMainFrameTitle>
        <AppMainFrameDescription>
          {psDirectory.getDescription()}
        </AppMainFrameDescription>
        <AppMainFrameContent>
          {/* <RenderDirectory slug={slug} /> */}

          {/* <PSNotePageTemplate domain={psDirectory}></PSNotePageTemplate> */}
          <AppMainFrameContentGrid>
            {children.map((dir, index) => {
              return (
                <MaterialCard
                  key={index}
                  image="/personal-notes/sql-server.png"
                  icon={<Database />}
                  title={dir.getDirectoryName()}
                  desc={dir.getDescription()}
                  materialLink={dir.getDirNodeURLPath()}
                />
              );
            })}

            {notes
              .filter(
                (readmefile) => !readmefile.getFileName().endsWith("readme"),
              )
              .map((material, index) => {
                return (
                  <MaterialCard
                    key={index}
                    image="/personal-notes/sql-server.png"
                    title={material.getTitle()}
                    desc={material.getDescription()}
                    materialLink={material.getDirNodeURLPath()}
                  />
                );
              })}
          </AppMainFrameContentGrid>
        </AppMainFrameContent>
      </AppMainFrame>
    );
  }
}
