import Image from "next/image";
import {
  Boxes,
  PackageCheck,
  PackageOpen,
  Truck,
  Warehouse,
} from "lucide-react";

const zones = [
  {
    number: "01",
    name: "Receiving",
    title: "Where everything enters.",
    description:
      "Incoming shipments are unloaded, counted, checked, and prepared before moving deeper into the facility.",
    icon: PackageCheck,
  },
  {
    number: "02",
    name: "High-Bay Storage",
    title: "Built upward, not outward.",
    description:
      "Palletized inventory moves into structured racking designed to keep larger quantities organized while preserving floor space.",
    icon: Warehouse,
  },
  {
    number: "03",
    name: "Picking Floor",
    title: "Where inventory becomes an order.",
    description:
      "Fast-moving products are positioned for efficient picking, helping individual and multi-item orders move through the warehouse with fewer steps.",
    icon: Boxes,
  },
  {
    number: "04",
    name: "Packing Stations",
    title: "Ready for the outside world.",
    description:
      "Orders are packed, labeled, checked, and prepared according to their destination and shipment type.",
    icon: PackageOpen,
  },
  {
    number: "05",
    name: "Dispatch Dock",
    title: "The final handoff.",
    description:
      "Completed shipments are grouped by carrier, route, or collection type before leaving the facility.",
    icon: Truck,
  },
];

export default function InsideBayline() {
  return (
    <section
      id="inside"
      className="relative overflow-hidden bg-[#090909] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.12) 0.45px, transparent 0.45px)",
          backgroundSize: "4px 4px",
        }}
      />

      <div className="relative mx-auto max-w-[1320px]">
        {/* ================================================= */}
        {/* INTRO */}
        {/* ================================================= */}

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#9d79d5]" />

              <p className="text-[11px] uppercase tracking-[0.18em] text-white/38">
                Inside Bayline
              </p>
            </div>

            <h2
              className="
                mt-5 max-w-[720px]
                text-[clamp(3.6rem,6.3vw,6.8rem)]
                leading-[0.91]
                tracking-[-0.055em]
              "
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
              }}
            >
              One building.
              <br />
              Five working zones.
            </h2>
          </div>

          <div className="lg:flex lg:justify-end lg:pb-2">
            <p className="max-w-[520px] text-[15px] leading-[1.75] text-white/46 sm:text-[16px]">
              Bayline is organized around the path inventory takes through the
              facility. Each area handles a specific stage, keeping goods moving
              without unnecessary handling or backtracking.
            </p>
          </div>
        </div>

        {/* ================================================= */}
        {/* HERO IMAGE */}
        {/* ================================================= */}

        <div
          className="
            group/facility
            relative mt-16
            h-[460px]
            overflow-hidden
            rounded-[10px]
            border border-white/[0.07]
            bg-[#101010]
            transition-colors duration-500
            hover:border-[#9d79d5]/25
            sm:mt-20
            sm:h-[560px]
            lg:mt-24
            lg:h-[650px]
          "
        >
          <Image
            src="/images/section5.jpg"
            alt="Inside the Bayline warehouse"
            fill
            sizes="100vw"
            className="
              object-cover object-center
              transition-transform
              duration-[1400ms]
              ease-out
              group-hover/facility:scale-[1.02]
            "
          />

          {/* Single overall dark overlay */}
          <div className="absolute inset-0 bg-black/28 transition-colors duration-500 group-hover/facility:bg-black/24" />

          {/* Bottom readability gradient only */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(9,9,9,0.88) 0%, rgba(9,9,9,0.38) 34%, rgba(9,9,9,0.12) 62%, rgba(9,9,9,0.08) 100%)",
            }}
          />

          {/* Zone count */}
          <div className="absolute right-6 top-5 text-right sm:right-8 sm:top-7 lg:right-10">
            <p
              className="
                text-[clamp(5rem,11vw,10rem)]
                leading-none
                tracking-[-0.07em]
                text-white/[0.05]
                transition-all duration-500
                group-hover/facility:-translate-y-1
                group-hover/facility:text-[#9d79d5]/12
              "
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              05
            </p>

            <p className="mt-1 text-[9px] uppercase tracking-[0.17em] text-white/22">
              Working zones
            </p>
          </div>

          {/* Statement */}
          <div className="absolute bottom-0 left-0 p-6 sm:p-8 lg:p-10">
            <div
              className="
                mb-5 h-[2px] w-8
                bg-white/22
                transition-all duration-500
                group-hover/facility:w-16
                group-hover/facility:bg-[#9d79d5]
              "
            />

            <p
              className="
                max-w-[760px]
                text-[clamp(2.8rem,5vw,5.2rem)]
                leading-[0.94]
                tracking-[-0.05em]
                text-white
              "
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                textShadow: "0 1px 10px rgba(0,0,0,0.28)",
              }}
            >
              Every part of the building
              <br />
              has a job to do.
            </p>
          </div>
        </div>

        {/* ================================================= */}
        {/* ZONES */}
        {/* ================================================= */}

        <div className="mt-4">
          <div
            className="
              grid gap-px
              overflow-hidden
              rounded-[10px]
              bg-white/[0.07]
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >
            {zones.map((zone) => {
              const Icon = zone.icon;

              return (
                <article
                  key={zone.number}
                  className="
                    group/zone
                    relative
                    flex min-h-[330px]
                    flex-col
                    bg-[#0d0d0d]
                    p-6
                    transition-transform duration-400
                    hover:-translate-y-[2px]
                    sm:min-h-[350px]
                    lg:min-h-[390px]
                  "
                >
                  {/* Top accent */}
                  <span
                    aria-hidden="true"
                    className="
                      absolute inset-x-0 top-0
                      h-[2px]
                      origin-left
                      scale-x-0
                      bg-[#9d79d5]
                      transition-transform duration-500
                      ease-out
                      group-hover/zone:scale-x-100
                    "
                  />

                  {/* Number + icon */}
                  <div className="flex items-start justify-between">
                    <span
                      className="
                        text-[10px]
                        tracking-[0.18em]
                        text-white/22
                        transition-all duration-300
                        group-hover/zone:-translate-y-[2px]
                        group-hover/zone:text-[#a985da]
                      "
                    >
                      {zone.number}
                    </span>

                    <div
                      className="
                        flex size-10
                        items-center justify-center
                        rounded-full
                        border border-white/[0.08]
                        text-white/30
                        transition-all duration-400
                        group-hover/zone:-translate-y-[2px]
                        group-hover/zone:border-[#9d79d5]/40
                        group-hover/zone:text-[#b495db]
                      "
                    >
                      <Icon size={16} strokeWidth={1.4} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-10">
                    <p
                      className="
                        text-[11px]
                        uppercase
                        tracking-[0.14em]
                        text-white/38
                        transition-colors duration-300
                        group-hover/zone:text-[#a985da]
                      "
                    >
                      {zone.name}
                    </p>

                    <h3
                      className="
                        mt-5
                        text-[28px]
                        leading-[1]
                        tracking-[-0.04em]
                        text-white/88
                        transition-all duration-400
                        group-hover/zone:translate-x-[3px]
                        group-hover/zone:text-white
                      "
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 400,
                      }}
                    >
                      {zone.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        text-[12px]
                        leading-[1.7]
                        text-white/34
                        transition-colors duration-300
                        group-hover/zone:text-white/54
                      "
                    >
                      {zone.description}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="mt-auto pt-8">
                    <div
                      className="
                        h-px w-6
                        bg-white/[0.1]
                        transition-all duration-500
                        group-hover/zone:w-14
                        group-hover/zone:bg-[#9d79d5]
                      "
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* ================================================= */}
        {/* CLOSING */}
        {/* ================================================= */}

        <div
          className="
            group/closing
            mt-24
            border-t border-white/[0.08]
            pt-20
            text-center
            transition-colors duration-500
            hover:border-[#9d79d5]/20
            sm:mt-28 sm:pt-24
            lg:mt-36 lg:pt-32
          "
        >
          <div
            className="
              mx-auto mb-7
              h-[2px] w-8
              bg-white/[0.1]
              transition-all duration-500
              group-hover/closing:w-20
              group-hover/closing:bg-[#9d79d5]
            "
          />

          <p className="text-[10px] uppercase tracking-[0.19em] text-white/24 transition-colors duration-300 group-hover/closing:text-[#a985da]">
            One continuous operation
          </p>

          <p
            className="
              mx-auto mt-7
              max-w-[1000px]
              text-[clamp(3.1rem,5.8vw,6.3rem)]
              leading-[0.94]
              tracking-[-0.05em]
              text-white/90
              transition-transform duration-500
              group-hover/closing:-translate-y-1
            "
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
            }}
          >
            Every zone has one purpose:
            <br className="hidden sm:block" /> keep inventory moving forward.
          </p>
        </div>
      </div>
    </section>
  );
}
