import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProblemFour = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#666666] to-[#343871] px-2 sm:px-4 lg:px-6 py-12  -mt-px -mb-px">
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
            Lack of instant invoice previews requires users to open a pop-up for
            every detail, doubling clicks and interrupting their workflow
          </h1>

          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-7xl mx-auto">
            To inspect or act on an invoice, users had to open the three-dot
            menu, choose “View Invoice,” then close the pop-up and reopen the
            menu for any further action. I redesigned the invoice list to
            include an inline preview and a more intuitive, status-aware action
            menu that shows only the relevant options for each invoice.
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
                Users needed to open the three-dot menu and select “View
                Invoice” to access details, which then appeared in a pop-up.
                <br />
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
          <div className="max-w-7xl mx-auto text-white text-sm md:text-base text-center mb-10">
            <p>
              Original Workflow (4 steps)
              <br />
              <br /> Open Menu &gt; View Details &gt; Close Window &gt; Reopen
              Menu For Actions
              <br />
              <br />
              How can this process be streamlined to eliminate unnecessary
              clicks?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemFour;
