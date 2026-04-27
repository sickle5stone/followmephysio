import PeakMark from "./PeakMark";

const credentials = [
  { value: "8+ years", label: "Hospital wards" },
  { value: "Geriatric & post-surgical", label: "Specialty focus" },
  { value: "Home-first", label: "Approach" },
  { value: "Singapore wide", label: "Coverage" },
];

export default function AboutDodo() {
  return (
    <section id="about" className="relative bg-canvas-warm py-24 md:py-32 px-7 sm:px-12 overflow-hidden">
      <div className="relative max-w-screen-xl mx-auto grid md:grid-cols-12 gap-12 md:gap-16 items-start">
        {/* Left: image + section label */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-6">
            <PeakMark className="w-6 h-2.5 text-brand" strokeWidth={1.8} />
            <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-ink-tertiary">
              About Dr. Dora
            </span>
          </div>

          <figure className="relative">
            <div className="relative overflow-hidden rounded-md shadow-card aspect-[4/5] bg-canvas">
              <img
                src="/patient-home.jpg"
                alt="A senior patient practising arm-raise rehab in their Singapore HDB living room"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.18em] text-ink-tertiary font-medium">
              In a real Singapore HDB. Not a clinic.
            </figcaption>
          </figure>
        </div>

        {/* Right: headline, quote, body, credentials */}
        <div className="md:col-span-7">
          <h2 className="font-display font-medium text-[36px] md:text-[44px] tracking-tightest leading-[1.06] text-ink-primary text-balance mb-8">
            A physio who treats the room,
            <br className="hidden sm:block" /> not just the patient.
          </h2>

          <figure className="border-l-[3px] border-brand pl-6 mb-9">
            <blockquote className="font-display italic text-[20px] md:text-[24px] leading-[1.4] text-ink-primary text-balance">
              "Your home isn't a clinic. It's a sanctuary of memories. My work is to
              keep those memories being made."
            </blockquote>
            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.22em] text-ink-tertiary font-semibold">
              — Dr. Dora
            </figcaption>
          </figure>

          <div className="space-y-5 text-[16px] leading-relaxed text-ink-secondary max-w-2xl">
            <p>
              I'm Dora — a physiotherapist who believes true healing happens where
              we feel most at home. After years in hospital wards, I realised
              clinical excellence is only half the journey. The other half is the
              environment you return to.
            </p>
            <p>
              My approach is personal and domestic. We don't just "exercise"; we
              practice the movements that matter to you — reaching for the favourite
              tea tin, walking down to the market, getting up from your own bed.
              Strength, built back into the fabric of your day.
            </p>
          </div>

          <dl className="mt-10 pt-8 border-t border-hairline grid grid-cols-2 gap-y-6 gap-x-8">
            {credentials.map((c) => (
              <div key={c.label}>
                <dt className="text-[10px] uppercase tracking-[0.2em] text-ink-tertiary font-semibold">
                  {c.label}
                </dt>
                <dd className="mt-2 font-display text-[20px] tracking-tight text-ink-primary leading-snug">
                  {c.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
