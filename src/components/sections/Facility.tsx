import Image from "next/image";

const capabilities = [
  {
    number: "01",
    title: "Receiving",
    description:
      "Inbound goods are unloaded, checked, and prepared for storage.",
  },
  {
    number: "02",
    title: "Flexible Storage",
    description:
      "Pallet racking, shelving, and bulk storage for different inventory types.",
  },
  {
    number: "03",
    title: "Fulfillment Floor",
    description:
      "Dedicated areas for picking, packing, labeling, and order preparation.",
  },
  {
    number: "04",
    title: "Dispatch",
    description:
      "Outgoing orders organized for parcel, pallet, and freight collection.",
  },
];

export default function Facility() {
  return (
    <section
      id="facility"
      className="relative overflow-hidden bg-[#090909] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.12) 0.45px, transparent 0.45px)",
          backgroundSize: "4px 4px",
        }}
      />

      <div className="relative mx-auto max-w-[1320px]">
        {/* ================================================= */}
        {/* HEADING */}
        {/* ================================================= */}

        <div className="mx-auto max-w-[720px] text-center">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/38">
            The Facility
          </p>

          <h2
            className="
              mt-5
              text-[clamp(3.4rem,6vw,6rem)]
              leading-[0.95]
              tracking-[-0.045em]
            "
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 400,
            }}
          >
            Built for inventory
            <br />
            that moves.
          </h2>

          <p className="mx-auto mt-7 max-w-[620px] text-[15px] leading-[1.75] text-white/48 sm:text-[16px]">
            Bayline brings receiving, storage, fulfillment, and dispatch into
            one organized facility, giving growing businesses the infrastructure
            to move inventory without operating a warehouse of their own.
          </p>
        </div>

        {/* ================================================= */}
        {/* MAIN BLOCK */}
        {/* ================================================= */}

        <div className="mt-16 grid gap-4 lg:mt-24 lg:grid-cols-[1.35fr_0.65fr]">
          {/* ================================================= */}
          {/* FACILITY IMAGE */}
          {/* ================================================= */}

          <div
            className="
              group relative
              min-h-[520px]
              overflow-hidden
              rounded-[10px]
              border border-white/[0.07]
              bg-[#111111]
              lg:min-h-[640px]
            "
          >
            <Image
              src="/images/section2.jpg"
              alt="Bayline warehouse facility"
              fill
              sizes="(max-width: 1024px) 100vw, 68vw"
              className="
                object-cover
                object-center
                transition-transform
                duration-[1200ms]
                ease-out
                group-hover:scale-[1.02]
              "
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/10" />

            {/* Bottom readability */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(9,9,9,0.03) 20%, rgba(9,9,9,0.1) 55%, rgba(9,9,9,0.9) 100%)",
              }}
            />

            {/* Facility label */}
            <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  border border-white/[0.1]
                  bg-black/40
                  px-3 py-2
                  backdrop-blur-md
                "
              ></div>
            </div>

            {/* Image copy */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
              <p className="mb-3 text-[11px] uppercase tracking-[0.16em] text-white/38">
                Operations
              </p>

              <h3
                className="
                  max-w-[470px]
                  text-[32px]
                  leading-[1.04]
                  tracking-[-0.035em]
                  sm:text-[40px]
                "
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                }}
              >
                One facility.
                <br />
                Every stage covered.
              </h3>
            </div>
          </div>

          {/* ================================================= */}
          {/* CAPABILITY PANEL */}
          {/* ================================================= */}

          <div
            className="
              overflow-hidden
              rounded-[10px]
              border border-white/[0.07]
              bg-[#0f0f0f]
            "
          >
            {/* Panel introduction */}
            <div className="border-b border-white/[0.07] p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="size-[5px] rounded-full bg-[#9d79d5]" />

                <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">
                  Inside Bayline
                </p>
              </div>

              <p className="mt-5 max-w-[410px] text-[15px] leading-[1.7] text-white/56">
                From the loading dock to the final outbound shipment, each part
                of the facility is designed around a clear flow of inventory.
              </p>
            </div>

            {/* Capability rows */}
            <div>
              {capabilities.map((capability) => (
                <div
                  key={capability.number}
                  className="
                    group
                    relative
                    border-b border-white/[0.07]
                    bg-transparent
                    transition-colors duration-300
                    last:border-b-0
                    hover:bg-[#17131b]
                  "
                >
                  {/* Purple active edge */}
                  <span
                    aria-hidden="true"
                    className="
                      absolute inset-y-0 left-0
                      w-[2px]
                      origin-center
                      scale-y-0
                      bg-[#9d79d5]
                      transition-transform
                      duration-300
                      ease-out
                      group-hover:scale-y-100
                    "
                  />

                  <div
                    className="
                      grid grid-cols-[46px_1fr]
                      gap-4
                      p-6
                      transition-transform duration-300
                      ease-out
                      group-hover:translate-x-[3px]
                      sm:grid-cols-[56px_1fr]
                      sm:p-8
                    "
                  >
                    {/* Number */}
                    <span
                      className="
                        pt-[2px]
                        text-[10px]
                        tracking-[0.16em]
                        text-white/22
                        transition-colors
                        duration-300
                        group-hover:text-[#a985da]
                      "
                    >
                      {capability.number}
                    </span>

                    {/* Content */}
                    <div>
                      <h4
                        className="
                          text-[16px]
                          font-medium
                          tracking-[-0.02em]
                          text-white/82
                          transition-colors
                          duration-300
                          group-hover:text-[#b495db]
                        "
                      >
                        {capability.title}
                      </h4>

                      <p
                        className="
                          mt-3
                          max-w-[360px]
                          text-[13px]
                          leading-[1.65]
                          text-white/38
                          transition-colors
                          duration-300
                          group-hover:text-white/58
                        "
                      >
                        {capability.description}
                      </p>

                      {/* Flat accent line */}
                      <div className="mt-5 h-px w-full bg-white/[0.05]">
                        <div
                          className="
                            h-full
                            w-full
                            origin-left
                            scale-x-0
                            bg-[#9d79d5]
                            transition-transform
                            duration-500
                            ease-out
                            group-hover:scale-x-100
                          "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Panel footer */}
            <div className="border-t border-white/[0.07] px-6 py-5 sm:px-8">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[9px] uppercase tracking-[0.17em] text-white/20">
                  One connected operation
                </p>

                <div className="flex items-center gap-1.5">
                  <span className="size-[3px] rounded-full bg-white/18" />
                  <span className="size-[3px] rounded-full bg-white/18" />
                  <span className="size-[3px] rounded-full bg-[#9d79d5]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
