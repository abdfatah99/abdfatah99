"use client";
import { useState } from "react";

const courses = [
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
  },
  {
    id: 4,
    provider: "Coursera",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/200px-Coursera-Logo_600x600.svg.png",
    title: "Navigating Generative AI: A CEO Playbook",
    level: null,
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
  },
  // Hidden initially (shown after "Show 8 more")
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
  },
];

const INITIAL_COUNT = 6;

function Badge({ label }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        background: "#e8f4f9",
        color: "#0a6fa8",
        fontSize: 11,
        fontWeight: 600,
        padding: "3px 8px",
        borderRadius: 20,
        marginBottom: 8,
      }}
    >
      <span style={{ fontSize: 12 }}>✦</span> {label}
    </span>
  );
}

function CourseCard({ course, animate }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        borderRadius: 12,
        border: "1px solid #e5e7eb",
        padding: "14px 16px",
        gap: 6,
        animation: animate ? "fadeSlideIn 0.35s ease both" : "none",
        cursor: "pointer",
        transition: "box-shadow 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 18px rgba(0,0,0,0.09)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {course.badge && <Badge label={course.badge} />}

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <img
          src={course.logo}
          alt={course.provider}
          style={{
            width: 22,
            height: 22,
            objectFit: "contain",
            borderRadius: 3,
          }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <span style={{ fontSize: 12, color: "#6b7280", fontWeight: 500 }}>
          {course.provider}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 10,
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: 15,
              color: "#111827",
              lineHeight: 1.35,
              ...(course.highlight
                ? {
                    border: "1.5px solid #2563eb",
                    borderRadius: 6,
                    padding: "4px 6px",
                    display: "inline-block",
                  }
                : {}),
            }}
          >
            {course.title}
          </div>
          {(course.level || course.type) && (
            <div style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>
              {[course.level, course.type].filter(Boolean).join(" · ")}
            </div>
          )}
        </div>
        <img
          src={course.image}
          alt=""
          style={{
            width: 72,
            height: 52,
            objectFit: "cover",
            borderRadius: 8,
            flexShrink: 0,
          }}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>
    </div>
  );
}

export default function CareerSkills() {
  const [expanded, setExpanded] = useState(false);

  const visibleCourses = expanded ? courses : courses.slice(0, INITIAL_COUNT);
  const hiddenCount = courses.length - INITIAL_COUNT;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          background: "#f9fafb",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          padding: "24px 16px",
        }}
      >
        <div style={{ width: "100%", maxWidth: 480 }}>
          <div
            style={{
              background: "#fff",
              borderRadius: 16,
              border: "1px solid #e5e7eb",
              padding: 20,
              boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#111827",
                margin: "0 0 18px 0",
              }}
            >
              Career skills that work
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {visibleCourses.map((course, i) => (
                <CourseCard
                  key={course.id}
                  course={course}
                  animate={expanded && i >= INITIAL_COUNT}
                />
              ))}
            </div>

            {!expanded && (
              <button
                onClick={() => setExpanded(true)}
                style={{
                  marginTop: 14,
                  width: "100%",
                  padding: "11px",
                  borderRadius: 8,
                  border: "1.5px solid #d1d5db",
                  background: "#fff",
                  color: "#374151",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "background 0.15s, border-color 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f3f4f6";
                  e.currentTarget.style.borderColor = "#9ca3af";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.borderColor = "#d1d5db";
                }}
              >
                Show {hiddenCount} more
              </button>
            )}

            {expanded && (
              <button
                onClick={() => setExpanded(false)}
                style={{
                  marginTop: 14,
                  width: "100%",
                  padding: "11px",
                  borderRadius: 8,
                  border: "1.5px solid #d1d5db",
                  background: "#fff",
                  color: "#374151",
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f3f4f6";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fff";
                }}
              >
                Show less
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
