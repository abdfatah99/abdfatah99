import {
  AppMainFrame,
  AppMainFrameContent,
  AppMainFrameDescription,
  AppMainFrameTitle,
} from "../../components/components/AppMainContentFrame";
import BlogList from "./components/BlogList";

// [2] hook -> get data from directory
//     return json data - or OOP data (like node)

function BlogHomePage() {
  return (
    <AppMainFrame>
      <AppMainFrameTitle>Blog</AppMainFrameTitle>
      <AppMainFrameDescription>
        Curated of thought, architectural and engineering principle.
      </AppMainFrameDescription>
      <AppMainFrameContent>
        {/* [1] blog list - pour data from hook [2] */}
        <BlogList></BlogList>
      </AppMainFrameContent>
    </AppMainFrame>
  );
}

export default BlogHomePage;
