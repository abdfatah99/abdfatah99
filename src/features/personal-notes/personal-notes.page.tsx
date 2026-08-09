import {
  ArrowRight,
  Braces,
  Code,
  Database,
  Terminal,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import {
  TopicCard,
  TopicCardContent,
  TopicCardDescription,
  TopicCardHeader,
  TopicCardIcon,
  TopicCardItemBadgeLink,
  TopicCardTitle,
} from "./components/TopicCard";
import {
  AppMainFrame,
  AppMainFrameBadge,
  AppMainFrameContent,
  AppMainFrameDescription,
  AppMainFrameTitle,
} from "../../components/components/AppMainContentFrame";

export default function PersonalNotesPage() {
  // padding top -> 64 px
  return (
    <AppMainFrame>
      <AppMainFrameBadge>curated knowledge base</AppMainFrameBadge>
      <AppMainFrameTitle>engineering journal</AppMainFrameTitle>
      <AppMainFrameDescription>
        A structured repository of technical mappings, mental models, and
        implemetnation patterns across language, software engineering and
        paradigm
      </AppMainFrameDescription>
      {/*
      Programming Language and System Design

      mobile vertical flow
      tablet and desktop - horizontal flow

    */}

      <AppMainFrameContent>
        <TopicCard variant={"default"}>
          <TopicCardHeader>
            <TopicCardIcon>
              <Code />
            </TopicCardIcon>
            <TopicCardTitle>Programming Languages</TopicCardTitle>
          </TopicCardHeader>
          <TopicCardDescription>
            Exploring the syntax, concurrency models, and runtime performance or
            modern multi-paradigm programming language
          </TopicCardDescription>
          <TopicCardContent>
            <TopicCardItemBadgeLink
              href={"/personal-notes/programming-language/python"}
            >
              Python
            </TopicCardItemBadgeLink>
            <TopicCardItemBadgeLink
              href={"/personal-notes/programming-language/go"}
            >
              Go
            </TopicCardItemBadgeLink>
            <TopicCardItemBadgeLink
              href={"/personal-notes/programming-language/typescript"}
            >
              TypeScript
            </TopicCardItemBadgeLink>
            <TopicCardItemBadgeLink href={"#"}>More</TopicCardItemBadgeLink>
          </TopicCardContent>
        </TopicCard>

        <TopicCard variant={"dark"}>
          <Link href={"#"}>
            <TopicCardHeader>
              <TopicCardIcon>
                <Terminal />
              </TopicCardIcon>
              <TopicCardTitle>Software Engineering</TopicCardTitle>
            </TopicCardHeader>
          </Link>
          <TopicCardDescription>
            System architectures, scalability patterns, and the discipline of
            crafting maintainable technical foundations.
          </TopicCardDescription>
          <TopicCardContent>
            <TopicCardItemBadgeLink href={"#"}>
              Microservice
            </TopicCardItemBadgeLink>
            <TopicCardItemBadgeLink href={"#"}>
              System Design
            </TopicCardItemBadgeLink>
            <TopicCardItemBadgeLink href={"#"}>
              Clean Code
            </TopicCardItemBadgeLink>
            <TopicCardItemBadgeLink href={"#"}>More</TopicCardItemBadgeLink>
          </TopicCardContent>
        </TopicCard>

        {/*

      TODO:
      The material listed in the front of application is curated by architecture
      design of how the front-end app access the data behind.
      The static material (display in the app statically) is selected because
      the file is located in the FE project while the rest of the material is
      located in the object storage (outside FE, need to fetch data to BE).
      This also could be solve the problem of defining icon for representing the
      material, because it static, it should be easy to choose the icon and stick
      with it.

      */}
        <div className="grid auto-cols-[276px] grid-flow-col gap-4 overflow-x-scroll ">
          <Link href={"#"}>
            <TopicCard className="border-t-4 border-black">
              <TopicCardHeader className="flex flex-col">
                <TopicCardIcon>
                  <Braces />
                </TopicCardIcon>
                <TopicCardTitle>Algorithm</TopicCardTitle>
              </TopicCardHeader>
              <TopicCardDescription>
                Complexity Analysis, Sorting, Primitives and Advanced Graph
                Traversals
              </TopicCardDescription>
            </TopicCard>
          </Link>

          <Link href={"personal-notes/database"}>
            <TopicCard className="border-t-4 border-black">
              <TopicCardHeader className="flex flex-col">
                <TopicCardIcon>
                  <Database />
                </TopicCardIcon>
                <TopicCardTitle>Database</TopicCardTitle>
              </TopicCardHeader>
              <TopicCardDescription>
                ACID Principles, Indexing Strategies, and Distributed consensus
                mechanism.
              </TopicCardDescription>
            </TopicCard>
          </Link>

          <Link href={"#"}>
            <TopicCard className="border-t-4 border-black">
              <TopicCardHeader className="flex flex-col">
                <TopicCardIcon>
                  <Workflow />
                </TopicCardIcon>
                <TopicCardTitle>DevOps</TopicCardTitle>
              </TopicCardHeader>
              <TopicCardDescription>
                Container orchestration, CI/CD, pipelines, and infrastructure as
                code
              </TopicCardDescription>
            </TopicCard>
          </Link>
        </div>

        <Link
          href={"personal-notes/list-of-subject"}
          className="flex flex-row items-center gap-2"
        >
          <p className="text-sm font-bold uppercase tracking-widest">
            view full archive
          </p>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </AppMainFrameContent>
      {/* <section className="flex flex-col gap-8 py-16"></section> */}
    </AppMainFrame>
  );
}
