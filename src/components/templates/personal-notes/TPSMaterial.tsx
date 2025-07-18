/**
 *
 * Goals: Display markdown content
 *
 * Params
 * - metadata
 * - content
 * @returns
 */

// import ReadmePersonalNotes, { metadata } from "../../../../personal-notes/README.md";
import ReadmePersonalNotesSRC from "@src/app/README.md";
import ReadmePersonalNotesPS from "@ps/README.md";
// import metadata from "../../../../personal-notes/README.md";

function TPSMaterial({ children }: { children?: React.ReactNode }) {
  return (
    <div
      className={`prose 
                    prose-headings:mt-8 
                    prose-headings:font-semibold 
                  prose-headings:text-black 
                    prose-h1:text-5xl 
                    prose-h2:text-4xl 
                    prose-h3:text-3xl 
                    prose-h4:text-2xl 
                    prose-h5:text-xl 
                    prose-h6:text-lg 
                  dark:prose-headings:text-white
                    prose-p:text-justify`}
    >
      {children}
      {/* <p>{ metadata }</p> */}
      {/* <ReadmePersonalNotesSRC /> */}
      {/* <ReadmePersonalNotesPS /> */}
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
    </div>
  );
}

export default TPSMaterial;
