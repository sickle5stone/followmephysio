import PeakMark from "./PeakMark";

export default function CTA() {
  return (
    <section id="cta" className="relative bg-brand overflow-hidden">
      {/* large ghosted peak motif as texture, very low opacity */}
      <PeakMark
        className="absolute -top-12 right-[-4%] w-[60%] h-[180px] text-white/[0.06]"
        strokeWidth={0.6}
        preserveAspectRatio="none"
      />
      <PeakMark
        className="absolute bottom-[-30px] left-[-2%] w-[55%] h-[140px] text-white/[0.05]"
        strokeWidth={0.6}
        preserveAspectRatio="none"
      />

      <div className="relative max-w-3xl mx-auto px-7 sm:px-12 py-28 md:py-36 text-center">
        <div className="flex justify-center mb-7">
          <PeakMark className="w-9 h-3.5 text-white/70" strokeWidth={1.6} />
        </div>

        <p className="font-display italic text-white/70 text-[15px] tracking-wide mb-5">
          一步一步 · one step at a time
        </p>

        <h2 className="font-display text-[40px] sm:text-[52px] md:text-[60px] leading-[1.05] tracking-tightest text-white text-balance">
          The first step
          <br />
          is one message.
        </h2>

        <p className="mt-7 max-w-lg mx-auto text-[16px] leading-relaxed text-white/80">
          Tell me about your parent. I'll reply personally — usually within a few hours —
          and we'll figure out together what kind of help would actually be useful.
        </p>

        <div className="mt-11 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/6500000000"
            className="inline-flex items-center gap-2.5 bg-white text-brand-deep px-7 py-4 rounded-md text-[13px] font-semibold tracking-wide
                       hover:bg-canvas transition-colors duration-200 shadow-lift"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M20.52 3.48A11.88 11.88 0 0 0 12 0C5.37 0 0 5.37 0 12a11.93 11.93 0 0 0 1.64 6.06L0 24l6.16-1.61A12 12 0 0 0 12 24c6.63 0 12-5.37 12-12a11.88 11.88 0 0 0-3.48-8.52ZM12 22a9.94 9.94 0 0 1-5.06-1.39l-.36-.21-3.66.96.98-3.57-.24-.37A9.97 9.97 0 1 1 22 12a9.94 9.94 0 0 1-10 10Zm5.47-7.46c-.3-.15-1.78-.88-2.06-.98s-.48-.15-.68.15-.78.98-.96 1.18-.35.22-.65.07a8.18 8.18 0 0 1-2.4-1.48 9.05 9.05 0 0 1-1.66-2.07c-.17-.3 0-.46.13-.61s.3-.35.45-.52a2.04 2.04 0 0 0 .3-.5.55.55 0 0 0 0-.52c-.07-.15-.68-1.63-.93-2.23s-.49-.51-.68-.52H7.7a1.06 1.06 0 0 0-.77.36 3.22 3.22 0 0 0-1 2.4 5.6 5.6 0 0 0 1.17 2.97 12.86 12.86 0 0 0 4.93 4.36c.69.3 1.23.48 1.65.61a4 4 0 0 0 1.83.12 3 3 0 0 0 1.97-1.39 2.42 2.42 0 0 0 .17-1.39c-.07-.13-.27-.2-.57-.35Z" />
            </svg>
            WhatsApp Dr. Dora
          </a>
          <a href="tel:+6500000000" className="text-white/80 hover:text-white text-[13px] font-medium underline-offset-4 hover:underline transition-colors">
            or call &nbsp;+65 0000 0000
          </a>
        </div>

        <p className="mt-10 text-[11px] uppercase tracking-[0.22em] text-white/55">
          No bots · No call centre · Just Dora
        </p>
      </div>
    </section>
  );
}
