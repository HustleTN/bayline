"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const capabilities = [
  "Receiving",
  "Storage",
  "Pick & Pack",
  "Dispatch",
  "Returns",
];

const navigation = [
  {
    label: "Facility",
    href: "#facility",
  },
  {
    label: "Services",
    href: "#loads",
  },
  {
    label: "How It Works",
    href: "#process",
  },
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const setVideoSpeed = () => {
      video.defaultPlaybackRate = 0.35;
      video.playbackRate = 0.35;
    };

    setVideoSpeed();

    video.addEventListener("loadedmetadata", setVideoSpeed);

    return () => {
      video.removeEventListener("loadedmetadata", setVideoSpeed);
    };
  }, []);

  return (
    <section
      className="
        relative
        flex flex-col
        overflow-hidden
        bg-[#090909]
        text-white
        sm:block
        sm:min-h-[100svh]
      "
    >
      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div
        className="
          relative z-20
          mx-auto
          w-full
          max-w-[1440px]
          px-4
          sm:flex
          sm:min-h-[100svh]
          sm:flex-col
          sm:px-8
          lg:px-12
        "
      >
        {/* ================================================= */}
        {/* NAVIGATION */}
        {/* ================================================= */}

        <header
          className="
            relative
            grid h-[64px]
            grid-cols-[40px_1fr_auto]
            items-center
            sm:h-[72px]
            md:grid-cols-[1fr_auto_1fr]
            lg:h-[82px]
          "
        >
          {/* Mobile menu */}
          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="
              flex h-9 w-9
              items-center justify-center
              justify-self-start
              rounded-[7px]
              border border-white/[0.1]
              text-white/80
              transition-colors
              hover:border-white/20
              hover:text-white
              md:hidden
            "
          >
            {menuOpen ? (
              <X size={18} strokeWidth={1.6} />
            ) : (
              <Menu size={19} strokeWidth={1.6} />
            )}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  text-[12px]
                  text-white/52
                  transition-colors duration-200
                  hover:text-white
                "
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Brand */}
          <a
            href="/"
            aria-label="Bayline home"
            className="
              justify-self-center
              text-[25px]
              leading-none
              tracking-[-0.05em]
              sm:text-[27px]
              lg:text-[28px]
            "
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
            }}
          >
            Bayline
          </a>

          {/* Navbar CTA */}
          <div className="justify-self-end">
            <a
              href="#contact"
              className="
                inline-flex
                h-[38px]
                items-center justify-center
                whitespace-nowrap
                rounded-[7px]
                bg-white
                px-4
                text-[11px]
                font-medium
                text-[#090909]
                transition-all duration-200
                hover:-translate-y-[1px]
                hover:bg-[#ececec]
                sm:h-[40px]
                sm:px-5
                sm:text-[12px]
              "
            >
              Request Space
            </a>
          </div>

          {/* Mobile dropdown */}
          {menuOpen && (
            <nav
              className="
                absolute
                left-0 right-0
                top-[58px]
                z-50
                overflow-hidden
                rounded-[10px]
                border border-white/[0.1]
                bg-[#141414]
                p-2
                shadow-2xl
                md:hidden
              "
            >
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex h-[48px]
                    items-center
                    rounded-[7px]
                    px-4
                    text-[14px]
                    text-white/70
                    transition-colors
                    hover:bg-white/[0.06]
                    hover:text-white
                  "
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="
                  mt-1
                  flex h-[48px]
                  items-center justify-between
                  rounded-[7px]
                  bg-white
                  px-4
                  text-[14px]
                  font-medium
                  text-[#090909]
                "
              >
                Request Space
                <ArrowRight size={15} strokeWidth={1.6} />
              </a>
            </nav>
          )}
        </header>

        {/* ================================================= */}
        {/* MAIN HERO */}
        {/* ================================================= */}

        <div
          className="
            relative z-10
            flex flex-col
            items-center
            pb-7
            pt-8
            text-center
            sm:flex-1
            sm:pb-0
            sm:pt-[9vh]
            lg:pt-[8vh]
          "
        >
          <h1
            className="
              max-w-[390px]
              text-balance
              text-[43px]
              leading-[0.94]
              tracking-[-0.055em]
              sm:max-w-[980px]
              sm:text-[clamp(3.5rem,7vw,7rem)]
              sm:leading-[0.96]
            "
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
            }}
          >
            Warehousing,
            <br />
            without the overhead.
          </h1>

          <p
            className="
              mt-5
              max-w-[370px]
              text-balance
              text-[14px]
              leading-[1.55]
              text-white/52
              sm:mt-7
              sm:max-w-[570px]
              sm:text-[16px]
              sm:leading-[1.6]
            "
          >
            Flexible storage and fulfillment for growing businesses. From
            receiving and inventory management to pick, pack, dispatch, and
            returns — all from one connected facility.
          </p>

          <div
            className="
              mt-6
              grid w-full
              max-w-[390px]
              grid-cols-2
              gap-2
              sm:mt-8
              sm:flex
              sm:w-auto
              sm:max-w-none
              sm:gap-3
            "
          >
            <a
              href="#contact"
              className="
                inline-flex h-[44px]
                items-center justify-center
                whitespace-nowrap
                rounded-[7px]
                bg-white
                px-3
                text-[12px]
                font-medium
                text-[#090909]
                transition-all duration-200
                hover:-translate-y-[1px]
                hover:bg-[#ececec]
                sm:h-[45px]
                sm:px-6
                sm:text-[13px]
              "
            >
              Request Space
            </a>

            <a
              href="#facility"
              className="
                group
                inline-flex h-[44px]
                items-center justify-center
                gap-2
                whitespace-nowrap
                rounded-[7px]
                border border-white/[0.12]
                px-3
                text-[12px]
                font-medium
                text-white/72
                transition-all duration-200
                hover:-translate-y-[1px]
                hover:border-white/[0.24]
                hover:text-white
                sm:h-[45px]
                sm:gap-3
                sm:px-6
                sm:text-[13px]
              "
            >
              Explore Facility
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="
                  shrink-0
                  transition-transform duration-200
                  group-hover:translate-x-[3px]
                "
              />
            </a>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* HERO VIDEO */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-[1]
          h-[38svh]
          min-h-[285px]
          w-full
          shrink-0

          sm:pointer-events-none
          sm:absolute
          sm:inset-x-0
          sm:bottom-0
          sm:h-[60%]
          sm:min-h-0

          lg:h-[62%]
        "
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="
            absolute inset-0
            h-full w-full
            object-cover
            object-bottom
          "
        >
          <source src="/images/heroanimation.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ================================================= */}
      {/* CAPABILITIES */}
      {/* ================================================= */}

      <div
        className="
          relative z-10
          shrink-0
          px-4
          pb-4
          pt-4

          sm:absolute
          sm:inset-x-0
          sm:bottom-0
          sm:px-8
          sm:pb-9
          sm:pt-0

          lg:px-12
        "
      >
        <div
          className="
            mx-auto
            max-w-[900px]
            border-t border-white/[0.09]
            pt-4
            sm:pt-6
          "
        >
          <p
            className="
              mb-3
              text-center
              text-[10px]
              leading-[1.4]
              text-white/35
              sm:mb-5
              sm:text-[11px]
            "
          >
            Everything your inventory needs under one roof.
          </p>

          <div
            className="
              flex flex-wrap
              items-center justify-center
              gap-x-1 gap-y-2
              text-[9px]
              uppercase
              tracking-[0.12em]
              text-white/52

              sm:flex-nowrap
              sm:gap-0
              sm:text-[10px]
              sm:tracking-[0.14em]
            "
          >
            {capabilities.map((capability, index) => (
              <span
                key={capability}
                className={`
                  whitespace-nowrap
                  px-2.5
                  transition-colors duration-200
                  hover:text-white
                  sm:flex-1
                  sm:px-5
                  ${index !== 0 ? "sm:border-l sm:border-white/[0.08]" : ""}
                `}
              >
                {capability}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
