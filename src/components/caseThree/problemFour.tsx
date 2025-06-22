import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProblemFour = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#666666] to-[#343871] px-2 sm:px-4 lg:px-6 py-12  -mt-px -mb-px">
      <div className="max-w-7xl mx-auto">
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
            To inspect or act on an invoice, users had to open the more options
            menu, choose “View Invoice,” then close the pop-up and reopen the
            menu for any further action. I redesigned the invoice list to
            include a quick preview and an inline action menu that adapts to
            each invoice’s status, making it easier for users to view details
            and take the right actions.
          </p>
        </div>

        {/* Design Evolution Process */}
        <div className="mb-10 lg:mb-20 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Column 1: */}
            <div className="space-y-6">
              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                Original Design
              </p>
              <div className="bg-white rounded-lg flex items-center justify-center overflow-hidden">
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
                Condensed Actions into a Menu
              </p>
              <div className="space-y-4">
                <div>
                  <div className="bg-white  rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="/Group 85.svg"
                      alt="Logo"
                      className="h-auto w-auto object-contain "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10 md:mb-20 mx-auto max-w-7xl">
          <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
            Added Filters and Tax Rates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 lg:gap-12">
            {["/Group 86.svg", "/Group 90.svg"].map((src, index) => (
              <div key={src} className="md:col-span-1">
                <div
                  className={`rounded-lg overflow-hidden flex items-start justify-start ${
                    index === 1
                      ? "max-w-[300px] mx-auto md:max-w-none md:mx-0"
                      : ""
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-10 md:mb-20 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
            {/* Left Side: Text only, vertically centered and left-aligned */}
            <div className="flex items-center">
              <h3 className="text-white text-sm md:text-base font-normal text-left">
                Users needed to open the more options menu and select “View
                Invoice” to access details, which then appeared in a pop-up.
                <br />
                <br />
                If they wanted to perform additional actions, they had to close
                the pop-up and reopen the menu each time, adding extra clicks.
              </h3>
            </div>

            {/* Right Side: Single image */}
            <div className="rounded-lg overflow-hidden flex items-start justify-start">
              <img
                src="/Group 92.svg"
                alt="Updated invoice interaction"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mb-10">
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
