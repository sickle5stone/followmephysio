import PeakMark from "./PeakMark";

const notes = [
  {
    title: "On grab rails",
    body: "The wrong rail in the right place is worse than no rail. Hand position matters more than chrome finish.",
  },
  {
    title: "On stairs after a stroke",
    body: "Up with the strong leg. Down with the weak. A rule older than physiotherapy and still the most useful one I teach.",
  },
  {
    title: "On dignity",
    body: "Independence isn't doing everything alone. It's choosing what you do alone, and what you let someone help with.",
  },
];

export default function FromTheNotes() {
  return (
    <section id="notes" className="py-28 md:py-32 px-7 sm:px-12 bg-canvas">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <PeakMark className="w-6 h-2.5 text-brand" strokeWidth={1.8} />
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-ink-tertiary">
                From the notes
              </span>
            </div>
            <h2 className="font-display font-medium text-[36px] md:text-[44px] tracking-tightest leading-[1.05] text-ink-primary text-balance">
              Field notes from the homes I'm let into.
            </h2>
          </div>
          <a
            href="https://www.instagram.com/followmephysio"
            className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-brand hover:text-brand-dark transition-colors group whitespace-nowrap"
          >
            Read on Instagram
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        <ul className="grid md:grid-cols-3 gap-6 md:gap-8">
          {notes.map((note) => (
            <li
              key={note.title}
              className="bg-canvas-card rounded-md p-7 border-l-[3px] border-brand shadow-card"
            >
              <h3 className="font-display italic text-[19px] text-ink-primary mb-3 leading-snug">
                {note.title}
              </h3>
              <p className="text-[14px] text-ink-secondary leading-relaxed">{note.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
