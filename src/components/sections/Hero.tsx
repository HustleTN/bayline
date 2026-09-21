import Image from "next/image";

const capabilities = [
  "Receiving",
  "Storage",
  "Pick & Pack",
  "Dispatch",
  "Returns",
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#090909] text-white">
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.15) 0.45px, transparent 0.45px)",
          backgroundSize: "4px 4px",
        }}
      />

      {/* Warehouse hero image */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[62%]">
        <Image
          src="/images/warehousehero.avif"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />

        {/* Fade image naturally into black */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #090909 0%, rgba(9,9,9,0.96) 8%, rgba(9,9,9,0.72) 24%, rgba(9,9,9,0.22) 46%, rgba(9,9,9,0) 70%)",
          }}
        />

        {/* Slight darkening at bottom for capability text */}
        <div
          className="absolute inset-x-0 bottom-0 h-[34%]"
          style={{
            background:
              "linear-gradient(to top, rgba(9,9,9,0.68), rgba(9,9,9,0))",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col px-5 sm:px-8 lg:px-12">
        {/* Navigation */}
        <header className="grid h-[84px] grid-cols-[1fr_auto_1fr] items-center">
          {/* Desktop navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            <a
              href="#facility"
              className="text-[13px] text-white/60 transition-colors duration-200 hover:text-white"
            >
              Facility
            </a>

            <a
              href="#services"
              className="text-[13px] text-white/60 transition-colors duration-200 hover:text-white"
            >
              Services
            </a>

            <a
              href="#process"
              className="text-[13px] text-white/60 transition-colors duration-200 hover:text-white"
            >
              How It Works
            </a>
          </nav>

          {/* Logo */}
          <a
            href="/"
            aria-label="Bayline home"
            className="justify-self-center text-[28px] leading-none tracking-[-0.045em]"
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            Bayline
          </a>

          {/* Navbar CTA */}
          <div className="justify-self-end">
            <a
              href="#contact"
              className="
                inline-flex h-[42px] items-center justify-center
                rounded-[9px] bg-white px-5
                text-[13px] font-medium text-[#090909]
                transition-all duration-200
                hover:bg-white/90
              "
            >
              Request Space
            </a>
          </div>
        </header>

        {/* Main content */}
        <div className="relative z-10 flex flex-1 flex-col items-center pt-[9vh] text-center sm:pt-[10vh] lg:pt-[9vh]">
          <h1
            className="
              text-[clamp(5rem,10vw,10rem)]
              leading-[0.82]
              tracking-[-0.055em]
            "
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
            }}
          >
            Bayline
          </h1>

          <p
            className="
              mt-8 max-w-[650px]
              text-balance
              text-[15px] leading-[1.7]
              text-white/55
              sm:text-[16px]
            "
          >
            Flexible warehousing and fulfillment for growing businesses. We
            receive, store, pick, pack, and dispatch your inventory from one
            connected facility.
          </p>

          {/* Hero CTAs */}
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="
                inline-flex h-[44px] items-center justify-center
                rounded-[8px] bg-white px-5
                text-[13px] font-medium text-[#090909]
                transition-all duration-200
                hover:bg-white/90
              "
            >
              Request Space
            </a>

            <a
              href="#facility"
              className="
                group inline-flex h-[44px] items-center gap-3
                rounded-[8px] bg-[#1d1d1d] px-5
                text-[13px] font-medium text-white
                transition-colors duration-200
                hover:bg-[#262626]
              "
            >
              Explore the Facility
              <span
                className="
                  flex size-[19px] items-center justify-center
                  rounded-full bg-white
                  text-[11px] text-[#090909]
                  transition-transform duration-200
                  group-hover:translate-x-[2px]
                "
              >
                →
              </span>
            </a>
          </div>
        </div>

        {/* Capability strip */}
        <div className="relative z-10 pb-8 sm:pb-10">
          <p className="mb-5 text-center text-[12px] text-white/42">
            Everything your inventory needs under one roof.
          </p>

          <div
            className="
              mx-auto flex max-w-[760px] flex-wrap
              items-center justify-center
              gap-x-8 gap-y-3
              text-[12px] text-white/62
              sm:gap-x-11
            "
          >
            {capabilities.map((capability) => (
              <span key={capability}>{capability}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
