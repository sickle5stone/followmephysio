import PeakMark from "./PeakMark";

const principles = [
  {
    n: "01",
    title: "Recovery happens where life happens",
    body: "Most rehab plans assume a clinic. Yours doesn't. We work in the rooms you actually live in — kitchen, bathroom, the spot beside the bed where balance gives way.",
  },
  {
    n: "02",
    title: "Build strength back into the day",
    body: "Sets and reps are tools, not the goal. The goal is reaching the favourite tea tin, walking down to the market, getting up from your own armchair without a hand.",
  },
  {
    n: "03",
    title: "Slow is faster than slow-and-restart",
    body: "Consistent gentle progress holds. Big sessions followed by setbacks don't. We keep the rhythm so the gains stay.",
  },
];

export default function TheWork() {
  return (
    <section
      id="work"
      className="relative overflow-hidden py-28 md:py-32 px-7 sm:px-12 bg-[#1B6A8F]"
    >
      <PeakMark
        className="absolute -top-8 right-[-12%] w-[60%] h-[150px] text-white/10 pointer-events-none"
        strokeWidth={0.6}
        preserveAspectRatio="none"
      />

      <div className="relative max-w-screen-xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <PeakMark className="w-6 h-2.5 text-white" strokeWidth={1.8} />
            <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#EAF6FB]">
              The approach
            </span>
          </div>
          <h2 className="font-display font-medium text-[36px] md:text-[48px] tracking-tightest leading-[1.05] text-white text-balance">
            What home physiotherapy actually looks like.
          </h2>
          <p className="mt-5 max-w-2xl text-[16px] md:text-[18px] leading-relaxed text-[#D9EEF7]">
            Clinical rehab, translated into the everyday movements that make
            home feel safe again.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {principles.map((p) => (
            <article
              key={p.n}
              className="bg-[#EEF6FB] rounded-lg shadow-[0_18px_45px_rgba(7,36,48,0.18)] p-7 md:p-8 border border-white/30"
            >
              <div className="mb-7 inline-flex h-11 w-11 items-center justify-center rounded-md bg-white text-brand-deep font-display text-[20px] tracking-tight shadow-card">
                {p.n}
              </div>
              <h3 className="font-display text-[24px] tracking-tight text-ink-primary leading-snug mb-3">
                {p.title}
              </h3>
              <p className="text-[16px] text-ink-secondary leading-relaxed">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
