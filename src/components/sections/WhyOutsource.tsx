import { ArrowRight, Check, Plus } from "lucide-react";

const selfManaged = [
  {
    number: "01",
    title: "Lease",
    description: "Long-term space commitment.",
  },
  {
    number: "02",
    title: "Racking & Equipment",
    description: "Shelving, forklifts, packing stations, and maintenance.",
  },
  {
    number: "03",
    title: "Warehouse Team",
    description: "Hiring, training, scheduling, and supervision.",
  },
  {
    number: "04",
    title: "Systems",
    description: "Inventory software, processes, and operational setup.",
  },
  {
    number: "05",
    title: "Capacity Planning",
    description: "Paying for enough space before you actually need it.",
  },
];

const baylineBenefits = [
  {
    number: "01",
    title: "Ready Infrastructure",
    description: "A facility that is already operating.",
  },
  {
    number: "02",
    title: "Flexible Capacity",
    description: "Use the space your inventory needs as demand changes.",
  },
  {
    number: "03",
    title: "Operational Team",
    description:
      "Receiving, storage, fulfillment, and dispatch already handled.",
  },
  {
    number: "04",
    title: "One Workflow",
    description: "Inventory moves through one connected operation.",
  },
  {
    number: "05",
    title: "Less Fixed Overhead",
    description:
      "Infrastructure becomes a service instead of another business to run.",
  },
];

export default function WhyOutsource() {
  return (
    <section
      id="why-outsource"
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

        <div
          className="
            grid gap-10
            border-b border-white/[0.08]
            pb-16
            lg:grid-cols-[0.95fr_1.05fr]
            lg:items-end
            lg:pb-20
          "
        >
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-[#9d79d5]" />

              <p className="text-[11px] uppercase tracking-[0.18em] text-white/38">
                Why Outsource the Warehouse
              </p>
            </div>

            <h2
              className="
                mt-5 max-w-[760px]
                text-[clamp(3.7rem,6.6vw,7rem)]
                leading-[0.9]
                tracking-[-0.055em]
              "
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
              }}
            >
              Keep the inventory.
              <br />
              Lose the infrastructure.
            </h2>
          </div>

          <div className="lg:flex lg:justify-end lg:pb-2">
            <p className="max-w-[525px] text-[15px] leading-[1.75] text-white/46 sm:text-[16px]">
              Running your own warehouse means taking on far more than storage.
              Space, equipment, people, systems, maintenance, and unused
              capacity all become part of the business.
            </p>
          </div>
        </div>

        {/* ================================================= */}
        {/* COMPARISON */}
        {/* ================================================= */}

        <div className="relative mt-16 lg:mt-24">
          <div className="grid gap-4 lg:grid-cols-[1fr_92px_1fr]">
            {/* ================================================= */}
            {/* RUN IT YOURSELF */}
            {/* ================================================= */}

            <div
              className="
                overflow-hidden
                rounded-[10px]
                border border-white/[0.08]
                bg-[#0d0d0d]
              "
            >
              {/* Header */}
              <div className="border-b border-white/[0.08] p-6 sm:p-8 lg:p-10">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/28">
                      Run it yourself
                    </p>

                    <h3
                      className="
                        mt-4
                        text-[clamp(2.6rem,4vw,4rem)]
                        leading-[0.95]
                        tracking-[-0.045em]
                      "
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 400,
                      }}
                    >
                      Build the operation.
                    </h3>
                  </div>

                  <div
                    className="
                      flex size-10 shrink-0
                      items-center justify-center
                      rounded-full
                      border border-white/[0.08]
                      text-white/28
                    "
                  >
                    <Plus size={15} strokeWidth={1.4} />
                  </div>
                </div>

                <p className="mt-5 max-w-[430px] text-[13px] leading-[1.7] text-white/35">
                  Every layer becomes another responsibility your business has
                  to own.
                </p>
              </div>

              {/* Rows */}
              <div>
                {selfManaged.map((item) => (
                  <div
                    key={item.number}
                    className="
                      group/self
                      grid grid-cols-[46px_1fr]
                      gap-4
                      border-b border-white/[0.07]
                      p-6
                      transition-colors duration-300
                      last:border-b-0
                      hover:bg-white/[0.018]
                      sm:grid-cols-[56px_1fr]
                      sm:p-8
                    "
                  >
                    <span
                      className="
                        pt-[2px]
                        text-[10px]
                        tracking-[0.16em]
                        text-white/20
                        transition-colors duration-300
                        group-hover/self:text-white/40
                      "
                    >
                      {item.number}
                    </span>

                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <h4
                          className="
                            text-[15px]
                            font-medium
                            tracking-[-0.02em]
                            text-white/72
                            transition-colors duration-300
                            group-hover/self:text-white
                          "
                        >
                          {item.title}
                        </h4>

                        <Plus
                          size={12}
                          strokeWidth={1.3}
                          className="
                            mt-[3px] shrink-0
                            text-white/16
                            transition-colors duration-300
                            group-hover/self:text-white/35
                          "
                        />
                      </div>

                      <p
                        className="
                          mt-2
                          max-w-[390px]
                          text-[12px]
                          leading-[1.65]
                          text-white/30
                          transition-colors duration-300
                          group-hover/self:text-white/46
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Result */}
              <div className="border-t border-white/[0.08] p-6 sm:p-8">
                <div className="flex items-end justify-between gap-8">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-white/20">
                      Result
                    </p>

                    <p className="mt-3 max-w-[340px] text-[13px] leading-[1.6] text-white/46">
                      Another operation to build, staff, maintain, and scale.
                    </p>
                  </div>

                  <span
                    className="
                      text-[48px]
                      leading-none
                      tracking-[-0.05em]
                      text-white/[0.07]
                    "
                    style={{
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    5×
                  </span>
                </div>
              </div>
            </div>

            {/* ================================================= */}
            {/* VS */}
            {/* ================================================= */}

            <div className="relative hidden items-center justify-center lg:flex">
              <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/[0.07]" />

              <div
                className="
                  relative z-10
                  flex size-[58px]
                  items-center justify-center
                  rounded-full
                  border border-white/[0.1]
                  bg-[#090909]
                  text-[10px]
                  uppercase
                  tracking-[0.14em]
                  text-white/32
                "
              >
                VS
              </div>
            </div>

            {/* Mobile VS */}
            <div className="flex items-center gap-4 py-4 lg:hidden">
              <span className="h-px flex-1 bg-white/[0.08]" />

              <span className="text-[9px] uppercase tracking-[0.17em] text-white/24">
                VS
              </span>

              <span className="h-px flex-1 bg-white/[0.08]" />
            </div>

            {/* ================================================= */}
            {/* BAYLINE */}
            {/* ================================================= */}

            <div
              className="
                overflow-hidden
                rounded-[10px]
                border border-white/[0.1]
                bg-[#0d0d0d]
              "
            >
              {/* Header */}
              <div className="border-b border-white/[0.08] p-6 sm:p-8 lg:p-10">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#a985da]">
                      With Bayline
                    </p>

                    <h3
                      className="
                        mt-4
                        text-[clamp(3.6rem,5.2vw,5.8rem)]
                        leading-[0.82]
                        tracking-[-0.055em]
                      "
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 400,
                      }}
                    >
                      Bayline
                    </h3>
                  </div>

                  <div
                    className="
                      flex size-10 shrink-0
                      items-center justify-center
                      rounded-full
                      border border-[#9d79d5]/35
                      text-[#b495db]
                    "
                  >
                    <Check size={15} strokeWidth={1.5} />
                  </div>
                </div>

                <p className="mt-7 max-w-[430px] text-[13px] leading-[1.7] text-white/42">
                  One operating partner replaces the infrastructure you would
                  otherwise have to build yourself.
                </p>
              </div>

              {/* Benefits */}
              <div>
                {baylineBenefits.map((item) => (
                  <div
                    key={item.title}
                    className="
                      group/bayline
                      grid grid-cols-[46px_1fr]
                      gap-4
                      border-b border-white/[0.07]
                      p-6
                      transition-colors duration-300
                      last:border-b-0
                      hover:bg-white/[0.018]
                      sm:grid-cols-[56px_1fr]
                      sm:p-8
                    "
                  >
                    <span
                      className="
                        pt-[2px]
                        text-[10px]
                        tracking-[0.16em]
                        text-[#9d79d5]/55
                        transition-colors duration-300
                        group-hover/bayline:text-[#b495db]
                      "
                    >
                      {item.number}
                    </span>

                    <div>
                      <div className="flex items-start gap-3">
                        <Check
                          size={12}
                          strokeWidth={1.6}
                          className="
                            mt-[3px] shrink-0
                            text-[#9d79d5]/60
                            transition-colors duration-300
                            group-hover/bayline:text-[#b495db]
                          "
                        />

                        <h4
                          className="
                            text-[15px]
                            font-medium
                            tracking-[-0.02em]
                            text-white/78
                            transition-all duration-300
                            group-hover/bayline:translate-x-[2px]
                            group-hover/bayline:text-white
                          "
                        >
                          {item.title}
                        </h4>
                      </div>

                      <p
                        className="
                          mt-2 pl-[24px]
                          max-w-[400px]
                          text-[12px]
                          leading-[1.65]
                          text-white/34
                          transition-colors duration-300
                          group-hover/bayline:text-white/50
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Result */}
              <div className="border-t border-white/[0.08] p-6 sm:p-8">
                <div className="flex items-end justify-between gap-8">
                  <div>
                    <div className="mb-4 h-[2px] w-8 bg-[#9d79d5]" />

                    <p className="text-[9px] uppercase tracking-[0.18em] text-[#a985da]/70">
                      Result
                    </p>

                    <p className="mt-3 max-w-[340px] text-[13px] leading-[1.6] text-white/54">
                      Infrastructure becomes a service instead of another
                      business to run.
                    </p>
                  </div>

                  <Check
                    size={18}
                    strokeWidth={1.4}
                    className="shrink-0 text-[#9d79d5]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* BIG STATEMENT */}
        {/* ================================================= */}

        <div className="py-24 sm:py-32 lg:py-44">
          <div className="mx-auto max-w-[1080px] text-center">
            <div className="mx-auto h-[2px] w-8 bg-[#9d79d5]" />

            <p className="mt-7 text-[10px] uppercase tracking-[0.2em] text-white/22">
              The simpler model
            </p>

            <p
              className="
                mt-8
                text-[clamp(3.5rem,6.7vw,7.5rem)]
                leading-[0.9]
                tracking-[-0.06em]
                text-white/92
              "
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
              }}
            >
              You shouldn&apos;t need
              <br />
              to build a warehouse
              <br />
              just to grow into one.
            </p>

            <div className="mx-auto mt-12 h-[72px] w-px bg-white/[0.1]" />
          </div>
        </div>

        {/* ================================================= */}
        {/* CLOSING */}
        {/* ================================================= */}

        <div
          className="
            border-y border-white/[0.08]
            py-16
            sm:py-20
            lg:py-24
          "
        >
          <div
            className="
              grid gap-12
              lg:grid-cols-[1fr_auto_1fr]
              lg:items-center
            "
          >
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/24">
                Your side
              </p>

              <p
                className="
                  mt-4
                  text-[clamp(2.8rem,4.6vw,5rem)]
                  leading-[0.94]
                  tracking-[-0.05em]
                "
                style={{
                  fontFamily: "var(--font-display)",
                }}
              >
                You grow
                <br />
                the business.
              </p>
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <span className="h-px w-16 bg-white/[0.09]" />

              <div
                className="
                  flex size-11
                  items-center justify-center
                  rounded-full
                  border border-white/[0.1]
                  text-white/42
                "
              >
                <ArrowRight size={16} strokeWidth={1.3} />
              </div>

              <span className="h-px w-16 bg-white/[0.09]" />
            </div>

            <div className="lg:text-right">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[#a985da]/60">
                Bayline
              </p>

              <p
                className="
                  mt-4
                  text-[clamp(2.8rem,4.6vw,5rem)]
                  leading-[0.94]
                  tracking-[-0.05em]
                "
                style={{
                  fontFamily: "var(--font-display)",
                }}
              >
                We scale the space
                <br />
                around it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
