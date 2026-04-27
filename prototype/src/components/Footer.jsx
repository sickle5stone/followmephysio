import PeakMark from "./PeakMark";

export default function Footer() {
  return (
    <footer className="relative bg-ink-primary text-canvas overflow-hidden">
      <PeakMark
        className="absolute -bottom-6 right-[-6%] w-[55%] h-[120px] text-canvas/[0.05]"
        strokeWidth={0.6}
        preserveAspectRatio="none"
      />
      <div className="relative max-w-screen-2xl mx-auto px-7 sm:px-12 py-20">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-6">
            <div className="flex items-center gap-2.5 mb-5">
              <PeakMark className="w-7 h-3 text-brand-light" strokeWidth={1.8} />
              <span className="font-display text-[22px] font-medium tracking-tightest">
                follow me
              </span>
            </div>
            <p className="font-display italic text-[18px] text-canvas/70 max-w-md leading-snug">
              With thanks to the rooms I have been let into.
            </p>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-8 md:justify-end md:text-right">
            <nav className="flex flex-col gap-2.5 text-[13px] text-canvas/70">
              <a href="#" className="hover:text-canvas transition-colors">跟我走 · walk with me</a>
              <a href="#about" className="hover:text-canvas transition-colors">About Dr. Dora</a>
              <a href="#care" className="hover:text-canvas transition-colors">Areas of care</a>
            </nav>
            <nav className="flex flex-col gap-2.5 text-[13px] text-canvas/70">
              <a href="https://www.instagram.com/" className="hover:text-canvas transition-colors">Instagram</a>
              <a href="mailto:hello@example.com" className="hover:text-canvas transition-colors">Email</a>
              <a href="#cta" className="text-canvas font-medium underline decoration-brand-light underline-offset-4">WhatsApp</a>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-canvas/10 flex flex-col sm:flex-row justify-between gap-3 text-[10px] uppercase tracking-[0.22em] text-canvas/45">
          <p>© Follow Me Physiotherapy</p>
          <p>Singapore · MOH-registered</p>
        </div>
      </div>
    </footer>
  );
}
