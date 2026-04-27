import PeakMark from "./PeakMark";

const links = [
  { label: "Approach", href: "#work" },
  { label: "About Dr. Dora", href: "#about" },
  { label: "Areas of Care", href: "#care" },
  { label: "Notes", href: "#notes" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 h-[68px] bg-canvas/85 backdrop-blur-md border-b border-hairline">
      <div className="h-full max-w-screen-2xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <PeakMark className="w-7 h-3 text-brand transition-transform group-hover:-translate-y-px" strokeWidth={1.8} />
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-[19px] font-medium tracking-tightest text-ink-primary leading-none">
              follow me
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.22em] font-medium text-ink-tertiary">
              physiotherapy
            </span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative text-[13px] font-medium text-ink-secondary hover:text-ink-primary transition-colors duration-200 py-1
                         after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px after:bg-brand after:scale-x-0 after:origin-left
                         after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {label}
            </a>
          ))}
        </div>

        <a
          href="#cta"
          className="hidden sm:inline-flex items-center gap-2 text-[13px] font-medium text-ink-primary hover:text-brand transition-colors"
        >
          <span>WhatsApp Dr. Dora</span>
          <span aria-hidden="true" className="text-brand">→</span>
        </a>
      </div>
    </nav>
  );
}
