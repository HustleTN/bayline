import Image from "next/image";

const loads = [
  {
    number: "01",
    label: "E-commerce",
    title: "Fast-moving inventory.",
    description:
      "Built for products that move one order at a time. Bayline handles unit-level picking, packing, labeling, and daily outbound fulfillment.",
    handling: "Unit pick",
    storage: "Shelving + bins",
    movement: "Daily dispatch",
    imageSrc: "/images/section4.jpg",
    imageAlt: "E-commerce fulfillment picking area",
    imagePosition: "object-[52%_58%]",
  },
  {
    number: "02",
    label: "Palletized Goods",
    title: "Built to stay organized at scale.",
    description:
      "Full pallets, mixed pallets, and replenishment stock are stored in clearly assigned locations and kept ready for movement when needed.",
    handling: "Pallet",
    storage: "High-bay racking",
    movement: "Inbound + outbound",
    imageSrc: "/images/section4.1.jpg",
    imageAlt: "High-bay pallet storage inside Bayline",
    imagePosition: "object-[65%_52%]",
  },
  {
    number: "03",
    label: "Wholesale & Retail",
    title: "From cases to stores.",
    description:
      "For businesses moving inventory in cartons, cases, or larger quantities, Bayline supports organized storage and bulk order preparation.",
    handling: "Case + carton",
    storage: "Racking",
    movement: "B2B distribution",
    imageSrc: "/images/section4.2.jpg",
    imageAlt: "Wholesale and retail order staging area",
    imagePosition: "object-[35%_55%]",
  },
  {
    number: "04",
    label: "Bulk Storage",
    title: "Space for what doesn’t fit the shelf.",
    description:
      "Larger quantities and less frequently moved inventory can be stored in dedicated floor areas without forcing everything into the same warehouse system.",
    handling: "Bulk",
    storage: "Open floor",
    movement: "Scheduled release",
    imageSrc: "/images/section4.3.jpg",
    imageAlt: "Bulk inventory stored on the warehouse floor",
    imagePosition: "object-[72%_62%]",
  },
];

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="group/meta min-w-0">
      <div
        className="
          mb-3 h-px w-5
          bg-white/[0.1]
          transition-all duration-300
          group-hover/meta:w-9
          group-hover/meta:bg-[#9d79d5]
        "
      />

      <p
        className="
          text-[9px] uppercase
          tracking-[0.18em]
          text-white/28
          transition-colors duration-300
          group-hover/meta:text-[#a985da]
        "
      >
        {label}
      </p>

      <p
        className="
          mt-2 text-[12px]
          text-white/66
          transition-colors duration-300
          group-hover/meta:text-white
        "
      >
        {value}
      </p>
    </div>
  );
}

export default function BuiltForDifferentLoads() {
  const featuredLoad = loads[0];
  const remainingLoads = loads.slice(1);

  return (
    <section
      id="loads"
      className="relative overflow-hidden bg-[#090909] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
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

        <div
          className="
            grid gap-10
            border-b border-white/[0.08]
            pb-14
            sm:pb-16
            lg:grid-cols-[0.9fr_1.1fr]
            lg:items-end
            lg:pb-20
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#9d79d5]" />

              <p className="text-[11px] uppercase tracking-[0.18em] text-white/38">
                Built for Different Loads
              </p>
            </div>

            <h2
              className="
                mt-5 max-w-[760px]
                text-[clamp(3.5rem,6.4vw,6.8rem)]
                leading-[0.91]
                tracking-[-0.055em]
              "
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
              }}
            >
              Different inventory.
              <br />
              Different ways
              <br />
              to move it.
            </h2>
          </div>

          <div className="lg:flex lg:justify-end lg:pb-2">
            <p className="max-w-[520px] text-[15px] leading-[1.75] text-white/46 sm:text-[16px]">
              Not every product belongs on the same shelf or moves at the same
              pace. Bayline adapts storage and handling around how your
              inventory actually arrives, sits, and leaves.
            </p>
          </div>
        </div>

        {/* ================================================= */}
        {/* 01 FEATURED LOAD */}
        {/* ================================================= */}

        <article className="group/featured pt-16 sm:pt-20 lg:pt-24">
          {/* Identifier */}
          <div className="mb-6 flex items-center gap-5">
            <span
              className="
                text-[10px]
                tracking-[0.18em]
                text-white/26
                transition-colors duration-300
                group-hover/featured:text-[#9d79d5]
              "
            >
              {featuredLoad.number}
            </span>

            <span
              className="
                text-[11px] uppercase
                tracking-[0.16em]
                text-white/42
                transition-colors duration-300
                group-hover/featured:text-[#b495db]
              "
            >
              {featuredLoad.label}
            </span>
          </div>

          {/* Featured visual */}
          <div
            className="
              relative min-h-[580px]
              overflow-hidden
              rounded-[8px]
              border border-white/[0.07]
              bg-[#101010]
              transition-colors duration-500
              group-hover/featured:border-[#9d79d5]/30
              sm:min-h-[680px]
              lg:min-h-[760px]
            "
          >
            <Image
              src={featuredLoad.imageSrc}
              alt={featuredLoad.imageAlt}
              fill
              sizes="100vw"
              className={`
                object-cover
                ${featuredLoad.imagePosition}
                transition-transform
                duration-[1200ms]
                ease-out
                group-hover/featured:scale-[1.025]
              `}
            />

            {/* One simple contrast layer */}
            <div
              className="
                absolute inset-0
                bg-black/38
                transition-colors duration-500
                group-hover/featured:bg-black/32
              "
            />

            {/* Editorial number */}
            <div
              aria-hidden="true"
              className="
                absolute right-5 top-1
                text-[clamp(7rem,16vw,15rem)]
                leading-none
                tracking-[-0.08em]
                text-white/[0.05]
                transition-all duration-500
                group-hover/featured:-translate-y-2
                group-hover/featured:text-[#9d79d5]/15
                sm:right-8
              "
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              {featuredLoad.number}
            </div>

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-9 lg:p-12">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <div
                    className="
                      mb-6 h-[2px] w-8
                      bg-white/25
                      transition-all duration-500
                      group-hover/featured:w-16
                      group-hover/featured:bg-[#9d79d5]
                    "
                  />

                  <h3
                    className="
                      max-w-[650px]
                      text-[clamp(3rem,5vw,5.4rem)]
                      leading-[0.93]
                      tracking-[-0.05em]
                      text-white
                      transition-transform duration-500
                      group-hover/featured:translate-x-1
                    "
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      textShadow: "0 1px 10px rgba(0,0,0,0.25)",
                    }}
                  >
                    {featuredLoad.title}
                  </h3>

                  <p
                    className="
                      mt-6 max-w-[520px]
                      text-[14px]
                      leading-[1.7]
                      text-white/58
                      transition-colors duration-300
                      group-hover/featured:text-white/72
                      sm:text-[15px]
                    "
                  >
                    {featuredLoad.description}
                  </p>
                </div>

                <div
                  className="
                    grid grid-cols-3 gap-5
                    border-t border-white/[0.12]
                    pt-6
                    transition-colors duration-300
                    group-hover/featured:border-white/[0.2]
                    lg:border-l
                    lg:border-t-0
                    lg:pl-10
                    lg:pt-0
                  "
                >
                  <MetaItem label="Handling" value={featuredLoad.handling} />

                  <MetaItem label="Storage" value={featuredLoad.storage} />

                  <MetaItem label="Movement" value={featuredLoad.movement} />
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* ================================================= */}
        {/* 02 / 03 / 04 */}
        {/* ================================================= */}

        <div className="mt-24 sm:mt-28 lg:mt-36">
          {remainingLoads.map((load, index) => {
            const imageFirst = index % 2 === 1;

            return (
              <article
                key={load.number}
                className="
                  group/load
                  border-t border-white/[0.08]
                  py-16
                  transition-colors duration-500
                  hover:border-[#9d79d5]/25
                  sm:py-20
                  lg:py-28
                "
              >
                {/* Identifier */}
                <div className="mb-8 flex items-center gap-5">
                  <span
                    className="
                      text-[10px]
                      tracking-[0.18em]
                      text-white/26
                      transition-colors duration-300
                      group-hover/load:text-[#9d79d5]
                    "
                  >
                    {load.number}
                  </span>

                  <span
                    className="
                      text-[11px] uppercase
                      tracking-[0.16em]
                      text-white/42
                      transition-colors duration-300
                      group-hover/load:text-[#b495db]
                    "
                  >
                    {load.label}
                  </span>
                </div>

                <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-14">
                  {/* Image */}
                  <div
                    className={`
                      relative min-h-[380px]
                      overflow-hidden
                      rounded-[8px]
                      border border-white/[0.07]
                      bg-[#101010]
                      transition-colors duration-500
                      group-hover/load:border-[#9d79d5]/25
                      sm:min-h-[470px]
                      lg:min-h-[560px]
                      ${imageFirst ? "lg:order-1" : "lg:order-2"}
                    `}
                  >
                    <Image
                      src={load.imageSrc}
                      alt={load.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className={`
                        object-cover
                        ${load.imagePosition}
                        transition-transform
                        duration-[1100ms]
                        ease-out
                        group-hover/load:scale-[1.035]
                      `}
                    />

                    {/* Single dark layer */}
                    <div
                      className="
                        absolute inset-0
                        bg-black/16
                        transition-colors duration-500
                        group-hover/load:bg-black/10
                      "
                    />

                    {/* Editorial number */}
                    <div
                      aria-hidden="true"
                      className="
                        absolute bottom-5 right-6
                        text-[72px]
                        leading-none
                        tracking-[-0.06em]
                        text-white/[0.08]
                        transition-all duration-500
                        group-hover/load:-translate-y-2
                        group-hover/load:text-[#9d79d5]/20
                        sm:text-[96px]
                      "
                      style={{
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      {load.number}
                    </div>

                    {/* Simple accent */}
                    <div className="absolute bottom-6 left-6">
                      <span
                        className="
                          block h-[2px] w-6
                          bg-white/25
                          transition-all duration-500
                          group-hover/load:w-12
                          group-hover/load:bg-[#9d79d5]
                        "
                      />
                    </div>
                  </div>

                  {/* Copy */}
                  <div
                    className={`
                      flex flex-col justify-between
                      py-1
                      ${imageFirst ? "lg:order-2" : "lg:order-1"}
                    `}
                  >
                    <div>
                      <div
                        className="
                          mb-7 h-[2px] w-8
                          bg-white/[0.1]
                          transition-all duration-500
                          group-hover/load:w-16
                          group-hover/load:bg-[#9d79d5]
                        "
                      />

                      <h3
                        className="
                          max-w-[560px]
                          text-[clamp(3rem,4.8vw,5.5rem)]
                          leading-[0.94]
                          tracking-[-0.05em]
                          transition-transform duration-500
                          group-hover/load:translate-x-1
                        "
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 400,
                        }}
                      >
                        {load.title}
                      </h3>

                      <p
                        className="
                          mt-7 max-w-[500px]
                          text-[14px]
                          leading-[1.75]
                          text-white/46
                          transition-colors duration-300
                          group-hover/load:text-white/62
                          sm:text-[15px]
                        "
                      >
                        {load.description}
                      </p>
                    </div>

                    {/* Metadata */}
                    <div
                      className="
                        mt-14
                        border-t border-white/[0.08]
                        pt-7
                        transition-colors duration-300
                        group-hover/load:border-white/[0.14]
                        lg:mt-20
                      "
                    >
                      <div className="grid grid-cols-3 gap-5">
                        <MetaItem label="Handling" value={load.handling} />

                        <MetaItem label="Storage" value={load.storage} />

                        <MetaItem label="Movement" value={load.movement} />
                      </div>

                      <div className="mt-8 flex items-center gap-3">
                        <span
                          className="
                            text-[11px]
                            text-white/28
                            transition-colors duration-300
                            group-hover/load:text-white/46
                          "
                        >
                          Bayline operational profile
                        </span>

                        <span
                          className="
                            h-px flex-1
                            bg-white/[0.08]
                            transition-colors duration-300
                            group-hover/load:bg-[#9d79d5]/35
                          "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* ================================================= */}
        {/* CLOSING */}
        {/* ================================================= */}

        <div
          className="
            group/closing
            border-t border-white/[0.08]
            pt-20 text-center
            transition-colors duration-500
            hover:border-[#9d79d5]/20
            sm:pt-24
            lg:pt-32
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

          <p
            className="
              mx-auto max-w-[880px]
              text-[11px] uppercase
              tracking-[0.18em]
              text-white/26
              transition-colors duration-300
              group-hover/closing:text-[#a985da]
            "
          >
            One warehouse, different operating needs
          </p>

          <p
            className="
              mx-auto mt-7
              max-w-[1000px]
              text-[clamp(3.3rem,6vw,6.5rem)]
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
            The warehouse changes around
            <br className="hidden sm:block" /> the inventory, not the other way
            around.
          </p>
        </div>
      </div>
    </section>
  );
}
