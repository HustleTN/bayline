export default function Footer() {
  return (
    <footer className="bg-[#090909] px-5 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1320px] border-x border-white/[0.07] bg-[#0c0c0c] px-6 pb-8 pt-14 sm:px-10 sm:pb-10 sm:pt-16 lg:px-16 lg:pb-12 lg:pt-20">
        {/* Main footer */}
        <div
          className="
            grid gap-14
            border-b border-white/[0.08]
            pb-14
            sm:pb-16
            lg:grid-cols-[1.35fr_0.65fr]
            lg:items-start
          "
        >
          {/* Brand */}
          <div>
            <a
              href="#"
              className="
                inline-block
                text-[clamp(3.8rem,7vw,7rem)]
                leading-[0.82]
                tracking-[-0.06em]
              "
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
              }}
            >
              Bayline
            </a>

            <p className="mt-7 max-w-[420px] text-[13px] leading-[1.75] text-white/38 sm:text-[14px]">
              Warehousing and fulfillment built around movement.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] text-white/20">
                Navigate
              </p>

              <div className="mt-5 flex flex-col gap-3.5">
                <a
                  href="#facility"
                  className="text-[12px] text-white/50 transition-colors duration-200 hover:text-white"
                >
                  Facility
                </a>

                <a
                  href="#process"
                  className="text-[12px] text-white/50 transition-colors duration-200 hover:text-white"
                >
                  How It Works
                </a>

                <a
                  href="#loads"
                  className="text-[12px] text-white/50 transition-colors duration-200 hover:text-white"
                >
                  Storage
                </a>
              </div>
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] text-white/20">
                Explore
              </p>

              <div className="mt-5 flex flex-col gap-3.5">
                <a
                  href="#inside"
                  className="text-[12px] text-white/50 transition-colors duration-200 hover:text-white"
                >
                  Inside Bayline
                </a>

                <a
                  href="#why-outsource"
                  className="text-[12px] text-white/50 transition-colors duration-200 hover:text-white"
                >
                  Why Bayline
                </a>

                <a
                  href="#faq"
                  className="text-[12px] text-white/50 transition-colors duration-200 hover:text-white"
                >
                  FAQ
                </a>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="text-[9px] uppercase tracking-[0.18em] text-white/20">
                Contact
              </p>

              <div className="mt-5 flex flex-col gap-3.5">
                <a
                  href="mailto:hello@bayline.com"
                  className="text-[12px] text-white/50 transition-colors duration-200 hover:text-white"
                >
                  Request Space
                </a>

                <a
                  href="mailto:hello@bayline.com"
                  className="text-[12px] text-white/50 transition-colors duration-200 hover:text-white"
                >
                  hello@bayline.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div
          className="
            flex flex-col gap-5 pt-7
            text-[10px] text-white/22
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>© 2026 Bayline Logistics</p>

          <div className="flex items-center gap-6">
            <span>Warehousing</span>
            <span>Fulfillment</span>
            <span>Distribution</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
