import Image from "next/image";
import {
  ArrowDownRight,
  PackageCheck,
  PackageOpen,
  Truck,
  Warehouse,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Receive",
    subtitle: "Inventory enters the facility.",
    description:
      "Incoming goods are unloaded, checked against shipment details, and prepared for storage.",
    icon: PackageCheck,
  },
  {
    number: "02",
    title: "Store",
    subtitle: "Everything goes where it belongs.",
    description:
      "Products are assigned to the right storage area based on size, volume, and how frequently they move.",
    icon: Warehouse,
  },
  {
    number: "03",
    title: "Pick & Pack",
    subtitle: "Orders are prepared accurately.",
    description:
      "Items are picked from inventory, packed, labeled, and prepared for individual or bulk fulfillment.",
    icon: PackageOpen,
  },
  {
    number: "04",
    title: "Dispatch",
    subtitle: "Ready to move out.",
    description:
      "Finished orders are organized by carrier or shipment type and moved to the outbound dock for collection.",
    icon: Truck,
  },
];

export default function FromDockToDispatch() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#090909] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.12) 0.45px, transparent 0.45px)",
          backgroundSize: "4px 4px",
        }}
      />

      <div className="relative mx-auto max-w-[1320px]">
        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/38">
              From Dock to Dispatch
            </p>

            <h2
              className="mt-5 max-w-[650px] text-[clamp(3.5rem,6vw,6.4rem)] leading-[0.92] tracking-[-0.05em]"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
              }}
            >
              Every item follows
              <br />a clear path.
            </h2>
          </div>

          <div className="lg:pb-2">
            <p className="max-w-[560px] text-[15px] leading-[1.75] text-white/48 sm:text-[16px]">
              From the moment inventory arrives at the dock to the moment it
              leaves for delivery, Bayline keeps every stage organized,
              traceable, and ready for what comes next.
            </p>
          </div>
        </div>

        {/* Main visual */}
        <div className="relative mt-16 overflow-hidden rounded-[10px] border border-white/[0.07] bg-[#111111] sm:mt-20 lg:mt-24">
          <div className="relative h-[440px] sm:h-[520px] lg:h-[620px]">
            <Image
              src="/images/section3.jpg"
              alt="Inventory moving through the Bayline warehouse"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/15" />

            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(9,9,9,0.08) 0%, rgba(9,9,9,0.08) 45%, rgba(9,9,9,0.92) 100%)",
              }}
            />

            {/* Top visual label */}
            <div className="absolute left-6 top-6 sm:left-8 sm:top-8"></div>

            {/* Bottom route */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
              <div className="flex items-end justify-between gap-8">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">
                    Inbound
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    <span
                      className="text-[30px] tracking-[-0.035em] sm:text-[38px]"
                      style={{
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      Dock
                    </span>

                    <ArrowDownRight
                      size={21}
                      strokeWidth={1.4}
                      className="text-white/35"
                    />
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/35">
                    Outbound
                  </p>

                  <p
                    className="mt-3 text-[30px] tracking-[-0.035em] sm:text-[38px]"
                    style={{
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    Dispatch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process steps */}
        <div className="mt-4 overflow-hidden rounded-[10px] border border-white/[0.07]">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="
                  group grid gap-6 border-b border-white/[0.07]
                  bg-[#0d0d0d] p-6
                  transition-colors duration-300
                  last:border-b-0
                  hover:bg-[#111111]
                  sm:p-8
                  lg:grid-cols-[80px_1fr_1.25fr_52px]
                  lg:items-center
                  lg:gap-8
                "
              >
                {/* Number */}
                <div className="flex items-center justify-between lg:block">
                  <span className="text-[11px] tracking-[0.16em] text-white/25">
                    {step.number}
                  </span>

                  <div className="flex size-9 items-center justify-center rounded-full border border-white/[0.08] lg:hidden">
                    <Icon
                      size={16}
                      strokeWidth={1.5}
                      className="text-white/55"
                    />
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3
                    className="text-[30px] leading-none tracking-[-0.035em] sm:text-[34px]"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                    }}
                  >
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[13px] text-white/42">
                    {step.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="max-w-[470px] text-[13px] leading-[1.7] text-white/40 sm:text-[14px]">
                  {step.description}
                </p>

                {/* Icon */}
                <div
                  className="
                    hidden size-11 items-center justify-center
                    rounded-full border border-white/[0.08]
                    transition-all duration-300
                    group-hover:border-white/[0.16]
                    group-hover:bg-white/[0.04]
                    lg:flex
                  "
                >
                  <Icon
                    size={18}
                    strokeWidth={1.4}
                    className="text-white/45 transition-colors duration-300 group-hover:text-white/75"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing line */}
        <div className="mt-10 flex items-center justify-center gap-3 text-center">
          <span className="h-px w-10 bg-white/[0.12]" />

          <p className="text-[12px] text-white/35">
            One continuous flow, from inbound inventory to outbound orders.
          </p>

          <span className="h-px w-10 bg-white/[0.12]" />
        </div>
      </div>
    </section>
  );
}
