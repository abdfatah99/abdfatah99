// components/PersonalNotes.tsx

type Note = {
  id: string;
  title: string;
  preview: string;
  date: string;
  emoji: string;
};

const mockNotes: Note[] = [
  { id: "1", title: "On attention and deep work", preview: "Trying a 90-min block structure. No standups before 11am. First week felt chaotic but week two...", date: "Mar 06", emoji: "🧘" },
  { id: "2", title: "Reading notes — The Pragmatic Programmer", preview: "Concept: 'tracer bullets' for early integration. Different from prototyping because the code stays.", date: "Mar 03", emoji: "📖" },
  { id: "3", title: "Ideas for side project", preview: "A local-first markdown app. No sync, no accounts. Just files. Could use Tauri + CodeMirror 6.", date: "Feb 27", emoji: "💡" },
  { id: "4", title: "Weekly retro — week 8", preview: "Shipped the auth refactor. Missed the metrics dashboard. Felt scattered Wed–Thu, energy low.", date: "Feb 23", emoji: "📋" },
  { id: "5", title: "Coffee brew log", preview: "V60, 15g at 1:16.5. Bloom 45s. Pour in 3 pulses. Slightly under-extracted, try finer next time.", date: "Feb 18", emoji: "☕" },
];

export default function PersonalNotes() {
  return (
    <section
      className="w-full flex flex-col"
      style={{ height: "40vh", minHeight: "260px" }}
    >
      {/* Header */}
      <div className="flex items-baseline justify-between px-6 py-3 border-b border-neutral-200 dark:border-neutral-800 shrink-0">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-sky-400 inline-block" />
          <h2
            className="text-sm font-semibold tracking-widest uppercase text-neutral-500 dark:text-neutral-400"
            style={{ fontFamily: "'Geist Mono', 'JetBrains Mono', monospace" }}
          >
            Recent Notes
          </h2>
        </div>
        <a
          href="/notes"
          className="text-xs text-neutral-400 hover:text-sky-500 transition-colors duration-200 dark:text-neutral-500 dark:hover:text-sky-400"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          all notes →
        </a>
      </div>

      {/* Scrollable list */}
      <ul className="flex-1 overflow-y-auto divide-y divide-neutral-100 dark:divide-neutral-800/60 scroll-smooth">
        {mockNotes.map((note) => (
          <li key={note.id}>
            <a
              href={`/notes/${note.id}`}
              className="flex items-start gap-4 px-6 py-3.5 group hover:bg-sky-50/60 dark:hover:bg-sky-950/20 transition-colors duration-150"
            >
              {/* Emoji */}
              <span className="mt-0.5 text-base shrink-0 select-none leading-none">
                {note.emoji}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100 truncate group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors duration-150">
                  {note.title}
                </p>
                <p className="text-xs text-neutral-400 dark:text-neutral-500 truncate mt-0.5 leading-relaxed">
                  {note.preview}
                </p>
              </div>

              {/* Date */}
              <span
                className="shrink-0 text-[11px] text-neutral-300 dark:text-neutral-600 mt-0.5"
                style={{ fontFamily: "monospace" }}
              >
                {note.date}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}