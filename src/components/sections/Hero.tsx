"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const capabilities = [
  "Receiving",
  "Storage",
  "Pick & Pack",
  "Dispatch",
  "Returns",
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <section className="relative min-h-[100svh] overflow-hidden bg-[#090909] text-white">
      {/* ================================================= */}
      {/* HERO VIDEO */}
      {/* ================================================= */}

      <div
        className="
          pointer-events-none
          absolute inset-x-0 bottom-0
          z-[1]
          h-[58%]
          sm:h-[60%]
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
            object-cover object-bottom
          "
        >
          <source src="/images/heroanimation.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <div
        className="
          relative z-10
          mx-auto flex min-h-[100svh]
          max-w-[1440px]
          flex-col
          px-5
          sm:px-8
          lg:px-12
        "
      >
        {/* ================================================= */}
        {/* NAVIGATION */}
        {/* ================================================= */}

        <header
          className="
            grid h-[82px]
            grid-cols-[1fr_auto_1fr]
            items-center
          "
        >
          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#facility"
              className="
                text-[12px]
                text-white/52
                transition-colors duration-200
                hover:text-white
              "
            >
              Facility
            </a>

            <a
              href="#loads"
              className="
                text-[12px]
                text-white/52
                transition-colors duration-200
                hover:text-white
              "
            >
              Services
            </a>

            <a
              href="#process"
              className="
                text-[12px]
                text-white/52
                transition-colors duration-200
                hover:text-white
              "
            >
              How It Works
            </a>
          </nav>

          {/* Brand */}
          <a
            href="/"
            aria-label="Bayline home"
            className="
              justify-self-center
              text-[28px]
              leading-none
              tracking-[-0.05em]
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
                inline-flex h-[40px]
                items-center justify-center
                rounded-[7px]
                bg-white
                px-5
                text-[12px]
                font-medium
                text-[#090909]
                transition-all duration-200
                hover:-translate-y-[1px]
                hover:bg-[#ececec]
              "
            >
              Request Space
            </a>
          </div>
        </header>

        {/* ================================================= */}
        {/* MAIN HERO */}
        {/* ================================================= */}

        <div
          className="
            relative z-10
            flex flex-1
            flex-col
            items-center
            pt-[9vh]
            text-center
            sm:pt-[10vh]
            lg:pt-[8vh]
          "
        >
          <h1
            className="
              max-w-[980px]
              text-balance
              text-[clamp(3.5rem,7vw,7rem)]
              leading-[0.96]
              tracking-[-0.055em]
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
              mt-7
              max-w-[570px]
              text-balance
              text-[15px]
              leading-[1.6]
              text-white/52
              sm:text-[16px]
            "
          >
            Flexible storage and fulfillment for growing businesses. From
            receiving and inventory management to pick, pack, dispatch, and
            returns — all from one connected facility.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="
                inline-flex h-[45px]
                items-center justify-center
                rounded-[7px]
                bg-white
                px-6
                text-[13px]
                font-medium
                text-[#090909]
                transition-all duration-200
                hover:-translate-y-[1px]
                hover:bg-[#ececec]
              "
            >
              Request Space
            </a>

            <a
              href="#facility"
              className="
                group inline-flex h-[45px]
                items-center gap-3
                rounded-[7px]
                border border-white/[0.12]
                px-6
                text-[13px]
                font-medium
                text-white/72
                transition-all duration-200
                hover:-translate-y-[1px]
                hover:border-white/[0.24]
                hover:text-white
              "
            >
              Explore the Facility
              <ArrowRight
                size={14}
                strokeWidth={1.5}
                className="
                  transition-transform duration-200
                  group-hover:translate-x-[3px]
                "
              />
            </a>
          </div>
        </div>

        {/* ================================================= */}
        {/* CAPABILITIES */}
        {/* ================================================= */}

        <div className="relative z-10 pb-7 sm:pb-9">
          <div className="mx-auto max-w-[900px] border-t border-white/[0.09] pt-6">
            <p className="mb-5 text-center text-[11px] text-white/35">
              Everything your inventory needs under one roof.
            </p>

            <div
              className="
                flex flex-wrap
                items-center justify-center
                gap-y-3
                text-[10px]
                uppercase
                tracking-[0.14em]
                text-white/52
                sm:flex-nowrap
              "
            >
              {capabilities.map((capability, index) => (
                <span
                  key={capability}
                  className={`
                    px-4
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
      </div>
    </section>
  );
}
