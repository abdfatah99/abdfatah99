import BlogCard from "@/src/components/BlogCard";

import { GetBlogPosts } from "./home.hooks";
import TechnicalSkill from "./components/TechnicalSkill";
import { CodeXml, Settings } from "lucide-react";
import { ISkillItem } from "./components/TechnicalSkill.types";

export default async function Home() {
  // get only 3 blog post to display in the landing page
  const blogPosts = await GetBlogPosts(3);

  const programmingLanguages: ISkillItem[] = [
    {
      name: "Python",
      badges: ["Proficient", { name: "notes", link: "/notes/python" }],
    },
    {
      name: "TypeScript",
      badges: [
        "Proficient",
        { name: "notes", link: "/notes/typescript" },
        { name: "projects", link: "/projects?lang=ts" },
      ],
    },
    {
      name: "Go",
      badges: ["Proficient", { name: "notes", link: "/notes/go" }],
    },
  ];

  const softwareEngineering: ISkillItem[] = [
    {
      name: "System Design",
      badges: ["Learning", { name: "notes", link: "/notes/system-design" }],
    },
    {
      name: "Database",
      badges: ["Proficient", { name: "projects", link: "/projects?tag=db" }],
    },
  ];

  return (
    <div className="container flex flex-col gap-7">
      <div className="mt-8 flex flex-row justify-between">
        <p className="text-heavy-grey text-xs font-medium">LATEST BLOG POSTS</p>
        <p className="text-[10px] font-bold">
          {new Date().toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
          })}
        </p>
      </div>

      {blogPosts.map((post, index) => {
        const variant = index == 0 ? "dark" : "default";
        return <BlogCard key={post.getName()} data={post} variant={variant} />;
      })}

      {/* personal-notes update */}
      <div className="flex w-full flex-col gap-6">
        <p className="text-heavy-grey bg-white text-[12px] font-medium uppercase tracking-widest">
          technical skill
        </p>
        <TechnicalSkill
          title="Programming Language"
          icon={<CodeXml />}
          data={programmingLanguages}
        />
        <TechnicalSkill
          title="Software Engineering"
          icon={<Settings />}
          data={softwareEngineering}
        />
      </div>
    </div>
  );
}
