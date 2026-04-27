import PeakMark from "./PeakMark";

const areas = [
  { title: "Stroke recovery", note: "Re-learning the small motions — sitting, standing, reaching." },
  { title: "Post-surgical rehab", note: "Knee, hip, spine. Returning to life, not just to range." },
  { title: "Fall prevention", note: "Balance, confidence, and a home that doesn't fight you." },
  { title: "Vestibular & balance", note: "For when the room feels like it's moving and you aren't." },
  { title: "Post-cancer mobility", note: "Gentle reconditioning around treatment timelines." },
  { title: "Arthritis management", note: "Less pain in the morning. More in the afternoon." },
  { title: "Parkinson's & neuro", note: "Movement work tuned to changing days." },
  { title: "Home safety review", note: "Where a grab-rail belongs. And where it doesn't." },
];

export default function AreasOfCare() {
  return (
    <section id="care" className="py-32 px-7 sm:px-12 bg-canvas">
      <div className="max-w-screen-2xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <PeakMark className="w-6 h-2.5 text-brand" strokeWidth={1.8} />
            <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-ink-tertiary">
              Areas of care
            </span>
          </div>
          <h2 className="font-display text-[40px] md:text-[48px] tracking-tightest leading-[1.05] text-ink-primary text-balance">
            What we work on, together.
          </h2>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 border-t border-hairline">
          {areas.map((area) => (
            <li key={area.title} className="group flex items-baseline gap-4 py-6 border-b border-hairline">
              <PeakMark className="w-5 h-2 text-brand mt-2 flex-none transition-transform group-hover:-translate-y-0.5" strokeWidth={1.8} />
              <div className="flex-1">
                <h3 className="font-display text-[22px] tracking-tight text-ink-primary leading-snug">
                  {area.title}
                </h3>
                <p className="mt-1 text-[14px] text-ink-secondary leading-relaxed">{area.note}</p>
              </div>
              <span aria-hidden="true" className="text-ink-muted group-hover:text-brand transition-colors">→</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
