"use client";

import { useState } from "react";
import Image from "next/image";

const courses: ICourses[] = [
  {
    id: 1,
    provider: "University of Michigan",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/University_of_Michigan_logo.svg/200px-University_of_Michigan_logo.svg.png",
    title: "Python for Everybody",
    level: "Beginner",
    type: "Specialization",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=120&h=80&fit=crop",
    badge: null,
    highlight: false,
  },
  {
    id: 2,
    provider: "Vanderbilt University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vanderbilt_Commodores_logo.svg/200px-Vanderbilt_Commodores_logo.svg.png",
    title: "Prompt Engineering",
    level: "Beginner",
    type: "Specialization",
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=120&h=80&fit=crop",
    badge: null,
    highlight: false,
  },
  {
    id: 3,
    provider: "IBM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    title: "IBM Data Science",
    level: "Beginner",
    type: "Professional Certificate",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&h=80&fit=crop",
    badge: "AI skills",
    highlight: false,
  },
  {
    id: 4,
    provider: "Coursera",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/200px-Coursera-Logo_600x600.svg.png",
    title: "Navigating Generative AI: A CEO Playbook",
    level: "",
    type: "Course",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=120&h=80&fit=crop",
    badge: null,
    highlight: true,
  },
  {
    id: 5,
    provider: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png",
    title: "Google Project Management",
    level: "Beginner",
    type: "Professional Certificate",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=120&h=80&fit=crop",
    badge: "AI skills",
    highlight: false,
  },
  {
    id: 6,
    provider: "University of Colorado Boulder",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/CU_Buffaloes_logo.svg/200px-CU_Buffaloes_logo.svg.png",
    title: "The Structured Query Language (SQL)",
    level: "Beginner",
    type: "Course",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=120&h=80&fit=crop",
    badge: null,
    highlight: false,
  },
  {
    id: 7,
    provider: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png",
    title: "Meta Front-End Developer",
    level: "Beginner",
    type: "Professional Certificate",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=120&h=80&fit=crop",
    badge: null,
    highlight: false,
  },
  {
    id: 8,
    provider: "DeepLearning.AI",
    logo: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-university-assets.s3.amazonaws.com/06/dd4a380f344b2886c4b7efad2e7bdd/SquareLogo.png?w=40",
    title: "Machine Learning Specialization",
    level: "Intermediate",
    type: "Specialization",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=80&fit=crop",
    badge: "AI skills",
    highlight: false,
  },
  {
    id: 9,
    provider: "Johns Hopkins University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Johns_Hopkins_University_logo.svg/200px-Johns_Hopkins_University_logo.svg.png",
    title: "Data Science Specialization",
    level: "Intermediate",
    type: "Specialization",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=80&fit=crop",
    badge: null,
    highlight: false,
  },
  {
    id: 10,
    provider: "Duke University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Duke_Blue_Devils_logo.svg/200px-Duke_Blue_Devils_logo.svg.png",
    title: "Entrepreneurship Specialization",
    level: "Beginner",
    type: "Specialization",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=120&h=80&fit=crop",
    badge: null,
    highlight: false,
  },
  {
    id: 11,
    provider: "Amazon Web Services",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/200px-Amazon_Web_Services_Logo.svg.png",
    title: "AWS Cloud Solutions Architect",
    level: "Intermediate",
    type: "Professional Certificate",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=120&h=80&fit=crop",
    badge: "AI skills",
    highlight: false,
  },
  {
    id: 12,
    provider: "Stanford University",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/200px-Stanford_Cardinal_logo.svg.png",
    title: "Statistical Learning",
    level: "Advanced",
    type: "Course",
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=120&h=80&fit=crop",
    badge: null,
    highlight: false,
  },
  {
    id: 13,
    provider: "University of Toronto",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/University_of_Toronto_coat_of_arms.svg/200px-University_of_Toronto_coat_of_arms.svg.png",
    title: "Self-Driving Cars Specialization",
    level: "Advanced",
    type: "Specialization",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=120&h=80&fit=crop",
    badge: "AI skills",
    highlight: false,
  },
  {
    id: 14,
    provider: "HEC Paris",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/HEC_Paris.svg/200px-HEC_Paris.svg.png",
    title: "Organizational Leadership Specialization",
    level: "Beginner",
    type: "Specialization",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=120&h=80&fit=crop",
    badge: null,
    highlight: false,
  },
];

interface ICourses {
  id: number;
  provider: string;
  logo: string;
  title: string;
  level: string;
  type: string;
  image: string;
  badge: string | boolean | null;
  highlight: boolean;
}

const INITIAL_COUNT = 3;

function Badge({ label }: { label: string | boolean }) {
  return (
    <span className="inline-flex w-fit items-center gap-1 rounded-full bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-700">
      <span className="text-xs text-sky-400">✦</span>
      {label}
    </span>
  );
}

function CourseCard({ course, isNew }: { course: ICourses; isNew: boolean }) {
  return (
    <div
      className={[
        "flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-4",
        "cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md",
        isNew ? "animate-[fadeUp_0.35s_ease_both]" : "",
      ].join(" ")}
    >
      {course.badge && <Badge label={course.badge} />}

      {/* Provider */}
      <div className="flex items-center gap-2">
        {/* <Image
          src={course.logo}
          alt={course.provider}
          className="w-5 h-5 object-contain rounded"
          width={1000}
          onError={(e) => { e.target.style.display = "none"; }}
        /> */}
        <span className="truncate text-xs font-medium text-gray-400">
          {course.provider}
        </span>
      </div>

      {/* Title + thumbnail */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p
            className={[
              "text-sm font-bold leading-snug text-gray-900",
              course.highlight
                ? "inline-block rounded-md border-2 border-blue-600 px-2 py-1"
                : "",
            ].join(" ")}
          >
            {course.title}
          </p>
          {(course.level || course.type) && (
            <p className="mt-1 text-xs text-gray-400">
              {[course.level, course.type].filter(Boolean).join(" · ")}
            </p>
          )}
        </div>
        {/* <Image
          src={course.image}
          alt=""
          className="w-[72px] h-[52px] object-cover rounded-lg flex-shrink-0"
          onError={(e) => { e.target.style.display = "none"; }}
        /> */}
      </div>
    </div>
  );
}

export default function PSNoteFrontLibrary() {
  const [expanded, setExpanded] = useState(false);
  const visibleCourses: ICourses[] = expanded
    ? courses
    : courses.slice(0, INITIAL_COUNT);
  const hiddenCount = courses.length - INITIAL_COUNT;

  return (
    <>
      <div className="flex min-h-screen justify-center px-4 py-3">
        <div className="w-full max-w-sm">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-900">
              Material Skill
            </h2>

            <div className="flex flex-col gap-2.5">
              {visibleCourses.map((course, i) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  isNew={expanded && i >= INITIAL_COUNT}
                />
              ))}
            </div>

            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-4 w-full rounded-lg border border-gray-300 bg-white py-2.5 text-sm font-semibold text-gray-700 transition-all duration-150 hover:border-gray-400 hover:bg-gray-50 active:bg-gray-100"
            >
              {expanded ? "Show less" : `Show ${hiddenCount} more`}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
