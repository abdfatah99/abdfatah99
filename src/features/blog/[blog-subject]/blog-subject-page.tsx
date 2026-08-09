import {
  AppMainFrame,
  AppMainFrameContent,
  AppMainFrameContentGrid,
  AppMainFrameTitle,
} from "@/src/components/components/AppMainContentFrame";
import BlogList from "../components/BlogList";
import { getBlog } from "../blog-page.hook";
import path from "path";
import config from "@/src/utils/config";
import { EntryStatus, GetMDModule } from "@/src/utils/entry";
import { notFound } from "next/navigation";
import MarkdownOutputStyle from "../../../components/components/MarkdownProse";

interface RenderFileProps {
  MDModulePath: string;
}

// file component
async function RenderFile({ MDModulePath }: RenderFileProps) {
  // const { default: Post } = await import(`../../../../${MDModulePath}.md`);

  const Post = await GetMDModule(MDModulePath);

  return (
    <div>
      <div className="container">
        <MarkdownOutputStyle>
          <Post />
          {/* <ReadmePersonalNotes /> */}
        </MarkdownOutputStyle>
      </div>
    </div>
  );
}

export default function BlogSubjectPage({
  urlRequest,
}: {
  urlRequest: string[];
}) {
  const requestPath = path.join(config.blogBase, ...urlRequest);
  const importablePathforMDXModule = requestPath.replace(/\\/g, "/");

  const entryStatus = EntryStatus(requestPath);

  if (entryStatus == "not_found") {
    console.log("Entry Status: ", entryStatus);
    notFound();
  }

  if (entryStatus == "file") {
    return <RenderFile MDModulePath={importablePathforMDXModule}></RenderFile>;
  }
}
