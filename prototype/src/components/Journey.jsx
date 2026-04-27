const steps = [
  {
    title: "Say hello",
    body: "A WhatsApp message describing what's been happening. No pressure — just enough so I can prepare.",
  },
  {
    title: "A first home visit",
    body: "I come to you. We assess mobility, look at the home, and build a plan that fits the actual layout of your life.",
  },
  {
    title: "A weekly rhythm",
    body: "Consistent sessions focused on functional independence. Progress that holds, not progress on paper.",
  },
];

export default function Journey() {
  return (
    <section className="py-32 px-7 sm:px-12 bg-canvas-warm">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-ink-tertiary">
            How it works
          </span>
          <h2 className="mt-4 font-display text-[40px] md:text-[48px] tracking-tightest leading-[1.05] text-ink-primary text-balance">
            Three steps. No clinic waiting room.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
          {steps.map((step, i) => (
            <div key={step.title} className="relative pt-24">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-0 font-display text-[88px] leading-none text-gold tracking-tightest select-none"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-[26px] tracking-tight text-ink-primary mb-4">
                {step.title}
              </h3>
              <p className="text-[15px] text-ink-secondary leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
