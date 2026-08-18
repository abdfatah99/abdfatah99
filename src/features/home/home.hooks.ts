import { metadata } from "./../../app/layout";
import config from "@/src/utils/config";
import { Directory, Material } from "@/src/utils/node";
import { ISkillItem } from "./components/TechnicalSkill.types";
import { MDFileMetadata } from "@/src/utils/node.types";
import { title } from "process";

export const programmingLanguages: ISkillItem[] = [
  {
    name: "Python",
    badges: [
      "Proficient",
      { name: "notes", link: "personal-notes/programming-language/python" },
    ],
  },
  {
    name: "TypeScript",
    badges: [
      "Proficient",
      { name: "notes", link: "personal-notes/programming-language/typescript" },
      // { name: "projects", link: "/projects?lang=ts" },
      { name: "projects", link: "#" },
    ],
  },
  {
    name: "Go",
    badges: [
      "Proficient",
      { name: "notes", link: "personal-notes/programming-language/go" },
    ],
  },
];

export const softwareEngineering: ISkillItem[] = [
  {
    name: "System Design",
    badges: [
      "Learning",
      { name: "notes", link: "personal-notes/system-design" },
    ],
  },
  {
    name: "Database",
    // badges: ["Proficient", { name: "projects", link: "/projects?tag=db" }],
    badges: ["Proficient", { name: "notes", link: "personal-notes/database" }],
  },
];

/**
 *
 * @param limit number of post you want to display
 * @returns
 */
export async function GetBlogPosts(limit?: number) {
  const blogDirectory = new Directory(config.blogBase);
  const blogPosts: Material[] = blogDirectory.getContentList({ limit: limit });

  // change each instance to become JSON format for displaying in UI
  const posts: MDFileMetadata[] = blogPosts.map(
    (blogPost: Material): MDFileMetadata => {
      const metadata = blogPost.getMetadata();
      return {
        title: blogPost.getTitle(),
        description: blogPost.getDescription(),
        date: metadata.date,
        author: metadata.author,
        url: blogPost.getDirNodeURLPath(),
      };
    },
  );

  return posts;
}
