import {
  SubjectCard,
  SubjectCardDate,
  SubjectCardDescription,
  SubjectCardLink,
  SubjectCardTitle,
} from "@/src/components/components/SubjectCard";
import {
  AppMainFrame,
  AppMainFrameContent,
  AppMainFrameDescription,
  AppMainFrameTitle,
} from "../../components/components/AppMainContentFrame";
import { getBlog } from "./blog-page.hook";
import BlogList from "./components/BlogList";
import { Logger } from "@/src/lib/logging";
import { MDFileMetadata } from "@/src/utils/node.types";

const log = new Logger("src/features/blog/blog-page/tsx");

function BlogPage() {
 const blogList: MDFileMetadata[] = getBlog();

  return (
    <AppMainFrame>
      <AppMainFrameTitle>Blog</AppMainFrameTitle>
      <AppMainFrameDescription>
        Curated of thought, architectural and engineering principle.
      </AppMainFrameDescription>
      <AppMainFrameContent>
        {blogList.map((blogList, index) => {
          return (
            <SubjectCard key={index}>
              <SubjectCardDate>{blogList.date ?? ""}</SubjectCardDate>
              <SubjectCardTitle>{blogList.title}</SubjectCardTitle>
              <SubjectCardDescription>{blogList.desc}</SubjectCardDescription>
              <SubjectCardLink href={blogList.url ?? ""}>
                READ MORE
              </SubjectCardLink>
            </SubjectCard>
          );
        })}
      </AppMainFrameContent>
    </AppMainFrame>
  );
}

export default BlogPage;

// [2] hook -> get data from directory
//     return json data - or OOP data (like node)

// interface BlogPageProps {
//   urlRequest: string[];
// }

// function BlogPage({ urlRequest }: BlogPageProps) {
//   const requestPath = path.join(config.blogBase, ...urlRequest);
//   const importablePathForMDXModule = requestPath.replace(/\\/g, "/");

//   console.log

//   const entryStatus = EntryStatus(requestPath);

//   const blogList = getBlog(urlRequest);

//   if (entryStatus == "not_found") {
//     console.log("Entry Status: ", entryStatus);
//     notFound();
//   }

//   if (entryStatus == "file") {
//     console.log("Entry Status (file): ", entryStatus);
//     return <div>render markdown file</div>;
//   }

//   if (entryStatus == "directory") {
//     const blogDirectory = new Directory(
//       path.join(config.blogBase, ...urlRequest),
//     );

//     log.logFlow("check request url", blogDirectory);

//     return (
//       <AppMainFrame>
//         <AppMainFrameTitle>Blog</AppMainFrameTitle>
//         <AppMainFrameDescription>
//           Curated of thought, architectural and engineering principle.
//         </AppMainFrameDescription>
//         <AppMainFrameContent>
//           {/* [1] blog list - pour data from hook [2] */}
//           <BlogList></BlogList>
//         </AppMainFrameContent>
//       </AppMainFrame>
//     );
//   }
// }
