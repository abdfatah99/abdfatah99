// components/BlogUpdates.tsx

import Link from "next/link";

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tag: string;
};

const mockPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building a Design System from Scratch",
    excerpt:
      "How I approached token architecture and component API design for a mid-size team.",
    date: "Mar 05, 2026",
    readTime: "6 min",
    tag: "Design",
  },
  {
    id: "2",
    title: "Why I Stopped Using useEffect for Data Fetching",
    excerpt:
      "React Query, SWR, and the mental model shift that changed how I build.",
    date: "Feb 28, 2026",
    readTime: "4 min",
    tag: "React",
  },
  {
    id: "3",
    title: "Thoughts on AI-Assisted Writing",
    excerpt:
      "A month of using LLMs as a writing partner — what worked and what felt hollow.",
    date: "Feb 20, 2026",
    readTime: "8 min",
    tag: "Essays",
  },
  {
    id: "4",
    title: "Deploying Edge Functions on Vercel",
    excerpt:
      "A practical guide to moving latency-sensitive logic closer to users.",
    date: "Feb 12, 2026",
    readTime: "5 min",
    tag: "DevOps",
  },
  {
    id: "5",
    title: "The Case for Boring Technology",
    excerpt: "Postgres, NGINX, and plain SQL — still winning in 2026.",
    date: "Jan 30, 2026",
    readTime: "7 min",
    tag: "Opinion",
  },
];

export default function BlogUpdates() {
  return (
    <section
      className="flex w-full flex-col bg-red-100"
      style={{ height: "40vh", minHeight: "260px" }}
    >
      {/* Header */}
      <div className="flex shrink-0 items-baseline justify-between px-6 pb-3 pt-6 dark:border-neutral-800">
        <div className="flex items-center gap-2.5">
          <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
          <h2
            className="text-sm font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400"
            style={{ fontFamily: "'Geist Mono', 'JetBrains Mono', monospace" }}
          >
            Latest Blog Posts
          </h2>
        </div>
        <Link
          href="/blog"
          className="text-xs text-neutral-400 transition-colors duration-200 hover:text-amber-500 dark:text-neutral-500 dark:hover:text-amber-400"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          all blogs →
        </Link>
      </div>

      {/* Scrollable list */}
      <ul className="flex-1 divide-y divide-neutral-100 overflow-y-auto scroll-smooth dark:divide-neutral-800/60">
        {mockPosts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/blog/${post.id}`}
              className="group flex items-start gap-4 px-6 py-3.5 transition-colors duration-150 hover:bg-amber-50/60 dark:hover:bg-amber-950/20"
            >
              {/* Tag pill */}
              {/* Content */}
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-neutral-800 transition-colors duration-150 group-hover:text-amber-700 dark:text-neutral-100 dark:group-hover:text-amber-400">
                  {post.title}
                </p>
                <p className="mt-0.5 truncate text-xs leading-relaxed text-neutral-400 dark:text-neutral-500">
                  {post.excerpt}
                </p>
                <span
                  className="mt-0.5 shrink-0 rounded bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-500 transition-colors duration-150 group-hover:bg-amber-100 group-hover:text-amber-700 dark:bg-neutral-800 dark:text-neutral-400 dark:group-hover:bg-amber-900/40 dark:group-hover:text-amber-400"
                  style={{ fontFamily: "monospace" }}
                >
                  {post.tag}
                </span>
              </div>

              {/* Meta */}
              <div
                className="shrink-0 text-right"
                style={{ fontFamily: "monospace" }}
              >
                <p className="text-[11px] text-neutral-400 dark:text-neutral-500">
                  {post.date}
                </p>
                <p className="mt-0.5 text-[11px] text-neutral-300 dark:text-neutral-600">
                  {post.readTime}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
