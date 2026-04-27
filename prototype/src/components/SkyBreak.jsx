export default function SkyBreak() {
  return (
    <section
      aria-hidden="true"
      className="relative w-full h-[280px] md:h-[360px] overflow-hidden bg-brand-deep"
    >
      <img
        src={`${import.meta.env.BASE_URL}hdb-banner.jpg`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />
      {/* warm tint overlay so it transitions into the canvas + carries the brand */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,63,84,0) 0%, rgba(15,63,84,0.15) 100%)",
        }}
      />
    </section>
  );
}
