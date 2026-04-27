import PeakMark from "./PeakMark";

export default function Hero() {
  return (
    <header className="relative pt-[68px] bg-canvas overflow-hidden">
      {/* large ghosted peak motif as background texture */}
      <PeakMark
        className="absolute -top-2 right-[-8%] w-[55%] h-[120px] text-brand/[0.05] pointer-events-none"
        strokeWidth={0.6}
        preserveAspectRatio="none"
      />

      <div className="relative max-w-screen-xl mx-auto px-7 sm:px-10 md:px-12 py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-14 lg:gap-16 items-center">
          {/* Text side */}
          <div className="lg:col-span-7 max-w-2xl">
            <div className="flex items-center gap-3 mb-7">
              <PeakMark className="w-7 h-3 text-brand" strokeWidth={1.8} />
              <span className="font-display italic text-ink-secondary text-[15px] tracking-wide">
                跟我走 · gēn wǒ zǒu
              </span>
            </div>

            <h1 className="font-display font-medium text-[40px] sm:text-[52px] md:text-[60px] lg:text-[68px] leading-[1.04] tracking-tightest text-ink-primary text-balance">
              More good years
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              with the people you{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="relative z-10">love.</span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 bottom-[0.05em] h-[0.18em] bg-brand/85 z-0 rounded-sm"
                />
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-[16px] md:text-[17px] leading-relaxed text-ink-secondary">
              Home physiotherapy in Singapore for stroke recovery, post-surgery
              rehab, balance, and the small daily movements that hold a life together.
              Hi — I'm <span className="text-ink-primary font-medium">Dr. Dora</span>.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="#cta"
                className="inline-flex items-center gap-2.5 bg-ink-primary text-canvas px-6 py-3.5 rounded-md text-[13px] font-semibold tracking-wide
                           hover:bg-brand transition-colors duration-200 shadow-card"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                  <path d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.37 0 0 5.37 0 12a11.93 11.93 0 0 0 1.64 6.06L0 24l6.16-1.61A12 12 0 0 0 12 24c6.63 0 12-5.37 12-12a11.88 11.88 0 0 0-3.48-8.52ZM12 22a9.94 9.94 0 0 1-5.06-1.39l-.36-.21-3.66.96.98-3.57-.24-.37A9.97 9.97 0 1 1 22 12a9.94 9.94 0 0 1-10 10Zm5.47-7.46c-.3-.15-1.78-.88-2.06-.98s-.48-.15-.68.15-.78.98-.96 1.18-.35.22-.65.07a8.18 8.18 0 0 1-2.4-1.48 9.05 9.05 0 0 1-1.66-2.07c-.17-.3 0-.46.13-.61s.3-.35.45-.52a2.04 2.04 0 0 0 .3-.5.55.55 0 0 0 0-.52c-.07-.15-.68-1.63-.93-2.23s-.49-.51-.68-.52H7.7a1.06 1.06 0 0 0-.77.36 3.22 3.22 0 0 0-1 2.4 5.6 5.6 0 0 0 1.17 2.97 12.86 12.86 0 0 0 4.93 4.36c.69.3 1.23.48 1.65.61a4 4 0 0 0 1.83.12 3 3 0 0 0 1.97-1.39 2.42 2.42 0 0 0 .17-1.39c-.07-.13-.27-.2-.57-.35Z" />
                </svg>
                WhatsApp Dr. Dora
              </a>
              <a
                href="#about"
                className="text-[13px] font-medium text-ink-secondary hover:text-brand transition-colors group inline-flex items-center gap-1.5"
              >
                Read her story
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>

          {/* Image side */}
          <div className="lg:col-span-5">
            <figure className="relative">
              <div className="relative overflow-hidden rounded-md shadow-lift bg-brand-deep aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]">
                <img
                  src="/dora-studio.jpg"
                  alt="Dr. Dora at her Singapore studio — sunlit window, mid-stretch on the mat"
                  className="absolute inset-0 w-full h-full object-cover object-[center_45%]"
                  loading="eager"
                />
              </div>
              {/* Caption card overlapping bottom-left */}
              <figcaption className="absolute -bottom-4 -left-4 sm:-left-6 max-w-[220px] bg-canvas px-4 py-3 rounded-md shadow-card border border-hairline">
                <div className="flex items-center gap-2 mb-1">
                  <span className="block w-1.5 h-1.5 rounded-full bg-brand" />
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-ink-tertiary">
                    Singapore · Home + Clinic
                  </span>
                </div>
                <p className="text-[12px] leading-snug text-ink-secondary">
                  No call centre. No bots. Just Dora.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* trust strip — moved below the grid so it spans the full width */}
        <dl className="mt-20 md:mt-24 pt-8 border-t border-hairline grid grid-cols-3 gap-x-6 max-w-3xl">
          <div>
            <dt className="text-[10px] uppercase tracking-[0.2em] text-ink-tertiary font-semibold">
              Hospital trained
            </dt>
            <dd className="mt-2 font-display text-[22px] tracking-tight text-ink-primary leading-none">
              8+ years
            </dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.2em] text-ink-tertiary font-semibold">
              Specialty
            </dt>
            <dd className="mt-2 font-display text-[20px] tracking-tight text-ink-primary leading-none">
              Geriatric rehab
            </dd>
          </div>
          <div>
            <dt className="text-[10px] uppercase tracking-[0.2em] text-ink-tertiary font-semibold">
              Coverage
            </dt>
            <dd className="mt-2 font-display text-[20px] tracking-tight text-ink-primary leading-none">
              Singapore wide
            </dd>
          </div>
        </dl>
      </div>
    </header>
  );
}
