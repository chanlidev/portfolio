import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProblemFour = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#666666] to-[#343871] px-2 sm:px-4 lg:px-6 py-12 lg:py-20 -mt-px -mb-px">
      <div className="max-w-[1450px] mx-auto">
        {/* Problem One Header */}
        <div className=" lg:mt-16 flex items-center justify-center mb-12 lg:mb-16">
          <div className="flex-1 h-px bg-[#FF31AC] max-w-sm"></div>
          <h2 className="mx-8 text-white text-base lg:text-lg font-normal">
            Problem
          </h2>
          <div className="flex-1 h-px bg-[#FF31AC] max-w-sm"></div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-10 lg:mb-20">
          <h1 className="text-white text-2xl lg:text-3xl font-normal leading-tight max-w-6xl mx-auto mb-10 lg:mb-12">
            Users lack a simple way to track their earned cashback, making it
            difficult to monitor{" "}
            <span className="text-[#08BCA1]">transactions</span> and{" "}
            <span className="text-[#08BCA1]">payouts</span>
          </h1>

          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-7xl mx-auto">
            While the landing pages captured interest, users had no easy way to
            track their cashback after signing up. To address this, I designed a{" "}
            <span className="text-[#08BCA1]">dashboard</span> focused on clarity
            and ease of use. Key data points included Cashback Earned, Total
            Customers, Open Invoices, and Overdue Invoices. These metrics
            enabled users to quickly assess their earnings and outstanding
            payments.
          </p>
        </div>

        {/* Design Evolution Process */}
        <div className="mb-20 ">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: */}
            <div className="space-y-6">
              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                Original Design
              </p>
              <div className="bg-white aspect-[16/9.5] rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/Group 84.svg"
                  alt="Logo"
                  className="h-full max-w-full object-contain "
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                Condensed actions into menu
              </p>
              <div className="space-y-4">
                <div>
                  <div className="bg-white aspect-[16/9.5] rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="/Group 85.svg"
                      alt="Logo"
                      className="h-auto w-auto object-contain "
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-6">
              <p className="text-white text-sm md:text-base font-normal leading-relaxed ">
                Added Filters and Tax Rates
              </p>
              <div className="space-y-4">
                <div>
                  <div className="bg-white aspect-[16/9.5] rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="/Group 86.svg"
                      alt="Logo"
                      className="h-full max-w-full object-contain "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-0">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Text Column (smaller width) */}
            <div className="col-span-1">
              <h3 className="text-white text-sm md:text-base font-normal text-left">
                Previously, users needed to open the three-dot menu and select
                “View Invoice” to access details, which then appeared in a
                pop-up. <br />
                <br />
                If they wanted to perform additional actions, they had to close
                the pop-up and reopen the menu each time, adding extra clicks.
              </h3>
            </div>

            {/* After Column (more width) */}
            <div className="col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Mobile UI (Before) */}
                <div
                  className="col-span-1 aspect-[16/16] rounded-lg overflow-hidden 
          flex items-center justify-center
          max-w-[300px] mx-auto md:max-w-none md:mx-0"
                >
                  <img
                    src="/Group 90.svg"
                    alt="Mobile UI"
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Desktop UI (After) */}
                <div className="col-span-2 aspect-[16/11.5] rounded-lg overflow-hidden flex items-start justify-start">
                  <img
                    src="/Group 92.svg"
                    alt="Desktop UI"
                    className="h-full w-full object-contain object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemFour;
