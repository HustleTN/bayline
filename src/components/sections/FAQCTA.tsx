"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    number: "01",
    question: "What types of inventory can Bayline store?",
    answer:
      "Bayline is designed for general commercial inventory including boxed goods, palletized stock, retail products, e-commerce inventory, and bulk quantities. Storage requirements are reviewed before onboarding to make sure the facility is suitable.",
  },
  {
    number: "02",
    question: "Do I need a minimum amount of inventory?",
    answer:
      "Storage can scale around the size of your operation. The right setup depends on how much inventory you hold, how frequently it moves, and the type of fulfillment support you need.",
  },
  {
    number: "03",
    question: "Can Bayline fulfill individual customer orders?",
    answer:
      "Yes. Inventory can be picked, packed, labeled, and prepared for individual e-commerce orders as well as larger wholesale or B2B shipments.",
  },
  {
    number: "04",
    question: "What happens when new stock arrives?",
    answer:
      "Incoming shipments are received at the dock, checked against shipment details, entered into the warehouse flow, and moved into the appropriate storage area.",
  },
  {
    number: "05",
    question: "Can you handle returns?",
    answer:
      "Yes. Returned goods can be received, inspected, and routed for restocking or separated when further action is required.",
  },
  {
    number: "06",
    question: "Can warehouse space grow with my business?",
    answer:
      "That is one of the main reasons to outsource. Storage and fulfillment requirements can change as inventory grows, without requiring you to operate a larger facility yourself.",
  },
];

export default function FAQCTA() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  return (
    <>
      {/* ================================================= */}
      {/* FAQ */}
      {/* ================================================= */}

      <section
        id="faq"
        className="relative bg-[#090909] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40"
      >
        <div className="mx-auto max-w-[1320px]">
          {/* Header */}
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-[#9d79d5]" />

                <p className="text-[11px] uppercase tracking-[0.18em] text-white/38">
                  Common Questions
                </p>
              </div>

              <h2
                className="
                  mt-5
                  text-[clamp(3.7rem,6.5vw,7rem)]
                  leading-[0.9]
                  tracking-[-0.055em]
                "
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                }}
              >
                Before inventory
                <br />
                moves in.
              </h2>
            </div>

            <div className="lg:flex lg:justify-end lg:pb-2">
              <p className="max-w-[500px] text-[15px] leading-[1.75] text-white/44 sm:text-[16px]">
                The practical details that usually matter before choosing a
                warehouse partner.
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16 border-t border-white/[0.09] sm:mt-20 lg:mt-24">
            {faqs.map((faq, index) => {
              const isOpen = openItem === index;

              return (
                <div key={faq.number} className="border-b border-white/[0.09]">
                  <button
                    type="button"
                    onClick={() => setOpenItem(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="
                      group grid w-full
                      grid-cols-[42px_1fr_auto]
                      items-center gap-4
                      py-7 text-left
                      sm:grid-cols-[70px_1fr_auto]
                      sm:gap-8
                      sm:py-9
                      lg:grid-cols-[100px_1fr_auto]
                      lg:py-10
                    "
                  >
                    {/* Number */}
                    <span
                      className={`
                        text-[10px]
                        tracking-[0.18em]
                        transition-colors duration-300
                        ${
                          isOpen
                            ? "text-[#a985da]"
                            : "text-white/22 group-hover:text-white/40"
                        }
                      `}
                    >
                      {faq.number}
                    </span>

                    {/* Question */}
                    <span
                      className={`
                        text-[clamp(1.35rem,2.2vw,2rem)]
                        leading-[1.15]
                        tracking-[-0.03em]
                        transition-all duration-300
                        ${
                          isOpen
                            ? "translate-x-[3px] text-white"
                            : "text-white/66 group-hover:translate-x-[3px] group-hover:text-white"
                        }
                      `}
                    >
                      {faq.question}
                    </span>

                    {/* Toggle */}
                    <div
                      className={`
                        flex size-10 shrink-0
                        items-center justify-center
                        rounded-full
                        border
                        transition-colors duration-300
                        ${
                          isOpen
                            ? "border-[#9d79d5]/40 text-[#b495db]"
                            : "border-white/[0.09] text-white/30 group-hover:border-white/[0.2] group-hover:text-white/70"
                        }
                      `}
                    >
                      <ChevronDown
                        size={15}
                        strokeWidth={1.4}
                        className={`
                          transition-transform duration-300
                          ${isOpen ? "rotate-180" : ""}
                        `}
                      />
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`
                      grid
                      transition-[grid-template-rows,opacity]
                      duration-400
                      ease-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div
                        className="
                          grid
                          grid-cols-[42px_1fr]
                          gap-4
                          pb-8
                          sm:grid-cols-[70px_1fr]
                          sm:gap-8
                          sm:pb-10
                          lg:grid-cols-[100px_1fr]
                        "
                      >
                        <div />

                        <div>
                          <div className="mb-5 h-px w-8 bg-[#9d79d5]" />

                          <p className="max-w-[760px] text-[14px] leading-[1.8] text-white/44 sm:text-[15px]">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* FINAL CTA */}
      {/* ================================================= */}

      <section
        id="contact"
        className="bg-[#090909] px-5 pt-8 text-white sm:px-8 lg:px-12"
      >
        <div
          className="
            group/cta
            relative mx-auto
            min-h-[720px]
            max-w-[1320px]
            overflow-hidden
            rounded-[10px]
            border border-white/[0.08]
            bg-[#0d0d0d]
            sm:min-h-[780px]
            lg:min-h-[840px]
          "
        >
          {/* Image */}
          <Image
            src="/images/warehousehero.avif"
            alt="Bayline warehouse"
            fill
            sizes="100vw"
            className="
              object-cover object-bottom
              transition-transform
              duration-[1600ms]
              ease-out
              group-hover/cta:scale-[1.02]
            "
          />

          {/* ONE flat overlay only */}
          <div
            className="
              absolute inset-0
              bg-black/60
              transition-colors duration-500
              group-hover/cta:bg-black/56
            "
          />

          {/* Content */}
          <div
            className="
              relative z-10
              flex min-h-[720px]
              flex-col
              justify-between
              px-6 py-8
              sm:min-h-[780px]
              sm:px-10 sm:py-10
              lg:min-h-[840px]
              lg:px-14 lg:py-12
            "
          >
            {/* Top */}
            <div className="flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/42">
                Bayline Logistics
              </p>

              <p className="hidden text-[10px] uppercase tracking-[0.18em] text-white/24 sm:block">
                Warehousing · Fulfillment
              </p>
            </div>

            {/* Main content */}
            <div className="max-w-[1000px]">
              <div
                className="
                  mb-7 h-[2px] w-8
                  bg-white/30
                  transition-all duration-500
                  group-hover/cta:w-16
                  group-hover/cta:bg-[#9d79d5]
                "
              />

              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                Need space for what comes next?
              </p>

              <h2
                className="
                  mt-6
                  max-w-[1000px]
                  text-[clamp(4rem,8vw,8.5rem)]
                  leading-[0.86]
                  tracking-[-0.065em]
                "
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 400,
                  textShadow: "0 2px 12px rgba(0,0,0,0.25)",
                }}
              >
                Your inventory
                <br />
                has somewhere to go.
              </h2>

              <div
                className="
                  mt-9
                  grid gap-8
                  lg:grid-cols-[1fr_auto]
                  lg:items-end
                "
              >
                <p className="max-w-[570px] text-[14px] leading-[1.75] text-white/56 sm:text-[16px]">
                  Tell us what you store, how much of it moves, and where it
                  needs to go. We&apos;ll help you find the right setup inside
                  Bayline.
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:hello@bayline.com"
                    className="
                      inline-flex h-[46px]
                      items-center justify-center
                      rounded-[8px]
                      bg-white px-6
                      text-[13px]
                      font-medium
                      text-[#090909]
                      transition-all duration-200
                      hover:bg-[#ededed]
                    "
                  >
                    Request Space
                  </a>

                  <a
                    href="#facility"
                    className="
                      group inline-flex h-[46px]
                      items-center gap-3
                      rounded-[8px]
                      border border-white/[0.16]
                      px-6
                      text-[13px]
                      font-medium
                      text-white/78
                      transition-all duration-200
                      hover:border-white/30
                      hover:text-white
                    "
                  >
                    Explore the Facility
                    <ArrowRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div
              className="
                flex flex-col gap-5
                border-t border-white/[0.12]
                pt-6
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              <div
                className="
                  flex flex-wrap
                  gap-x-8 gap-y-3
                  text-[9px]
                  uppercase
                  tracking-[0.16em]
                  text-white/38
                "
              >
                <span>Receiving</span>
                <span>Storage</span>
                <span>Fulfillment</span>
                <span>Dispatch</span>
              </div>

              <span className="text-[10px] text-white/24">
                From dock to delivery.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
