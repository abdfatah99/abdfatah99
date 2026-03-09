import Home from "@/src/components/templates/home/Home";
import PersonalNotes from "./personal-notes/personal-notes-template";
import BlogUpdates from "./blog/blog-templates";
import PSNoteFrontLibrary from "./personal-notes/personal-notes-template2";

export default function LandingPage() {
  return (
    <div className="container flex flex-col gap-7 bg-yellow-200">
      {/* recent blog update */}
      <div className="w-full border-b border-neutral-50 ">
        <BlogUpdates />
      </div>

      {/* personal-notes update */}
      <div className="w-full">
        {/* <PersonalNotes /> */}
        <PSNoteFrontLibrary />
      </div>
    </div>
  );
}
