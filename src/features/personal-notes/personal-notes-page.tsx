import CardTemplate from "@/src/components/CardTemplate";
// import SkillCard, { TopicCard, TopicCardDescription, TopicCardIcon, TopicCardTitle } from "./components/TopicCard";
import { Braces, Code, Database, Terminal, Workflow } from "lucide-react";
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

export default function PersonalNotesPage() {
  return (
    <div className="container">
      <div className="py-16">
        <p className="bg-light-grey text-heavy-grey w-fit rounded-xl px-3 py-1 text-[10px] font-bold uppercase tracking-[1px]">
          cureated knowledge base
        </p>
        <p className="leading-18 flex flex-row gap-1 text-3xl font-bold capitalize">
          <span className="text-[#1A1B22]">engineering</span>
          <span className="text-[#78767B]">journal</span>
        </p>
        <p className="font-heavy-grey text-sm font-light leading-6">
          A structured repository of technical mappings, mental models, and
          implemetnation patterns across language, software engineering and
          paradigm
        </p>
      </div>
      {/*
        Programming Language and System Design

        mobile vertical flow
        tablet and desktop - horizontal flow 
        
      */}
      <section className="flex flex-col gap-8">
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
            <TopicCardItemBadgeLink href={"#"}>Python</TopicCardItemBadgeLink>
            <TopicCardItemBadgeLink href={"#"}>C</TopicCardItemBadgeLink>
            <TopicCardItemBadgeLink href={"#"}>C++</TopicCardItemBadgeLink>
            <TopicCardItemBadgeLink href={"#"}>More</TopicCardItemBadgeLink>
          </TopicCardContent>
        </TopicCard>

        <TopicCard variant={"dark"}>
          <TopicCardHeader>
            <TopicCardIcon>
              <Terminal />
            </TopicCardIcon>
            <TopicCardTitle>Software Engineering</TopicCardTitle>
          </TopicCardHeader>
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
        1. This section should display random/all remaining material from
           software engineering
           - if random, pick random material to define as front representative
             add button to see all software engineering material
           - for "all material", it's not possible because it's to much to display at 
             front
           - certain material, you have to choose particular material to display
             in the front.

           thought, I think certain material is the most possible, because it 
           related with the icon that we should choose along with the material 
           name. we can't arbitrary pick icon for the card
        
        */}
        <div className="grid auto-cols-[276px] grid-flow-col gap-4 overflow-x-scroll ">
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
        </div>
      </section>
    </div>
  );
}
