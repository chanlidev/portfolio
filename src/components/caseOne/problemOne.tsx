import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProblemOne = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#666666] to-[#343871] px-2 sm:px-4 lg:px-6 py-12 lg:py-20  -mt-px -mb-px ">
      <div className="max-w-[1450px] mx-auto">
        {/* Problem One Header */}
        <div className=" lg:mt-16 flex items-center justify-center mb-12 lg:mb-16">
          <div className="flex-1 h-px bg-[#08BCA1] max-w-sm"></div>
          <h2 className="mx-8 text-white text-base lg:text-lg font-normal">
            Problem One
          </h2>
          <div className="flex-1 h-px bg-[#08BCA1] max-w-sm"></div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-10 lg:mb-20">
          <h1 className="text-white text-2xl lg:text-3xl font-normal leading-tight max-w-6xl mx-auto mb-10 lg:mb-12">
            While the promise of{" "}
            <span className="text-[#08BCA1]">unlimited cashback</span> is
            undeniably compelling, it's unclear how many businesses will
            actually switch from their existing payment systems to PekoPay
          </h1>

          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-7xl mx-auto">
            To validate market demand, I was tasked with designing the{" "}
            <span className="text-[#08BCA1]">landing pages</span> to capture
            leads and measure interest. At first, I had only a rough idea of the
            product, including how cashback would work, which currencies and
            countries we’d support, and what made PekoPay unique. I created a
            high-level draft based on limited info and refined it through{" "}
            <span className="text-[#08BCA1]">four rounds</span> of stakeholder
            feedback, updating the content as new product details emerged until
            the site clearly communicated our value proposition.
          </p>
        </div>

        {/* Design Evolution Process */}
        <div className="mb-20 lg:mb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Left: Intro + Image */}
            <div>
              <h3 className="text-white text-sm md:text-base font-normal mb-6 text-center ml-0 md:-ml-20">
                Initial draft of the waitlist and landing pages
              </h3>
              <div className="flex flex-col items-center justify-center rounded-lg overflow-hidden">
                <img
                  src="/images/landing1.svg"
                  alt="Initial draft"
                  className="w-[300px] md:w-[400px] object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Right: Before / After Comparison */}
            <div>
              <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
                Moved the countdown timer to the top to increase engagement
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                {[
                  ["Before", "/images/Waitlist Page.svg"],
                  ["After", "/images/Waitlist Page 1.svg"],
                ].map(([label, src]) => (
                  <div key={label}>
                    <p className="text-white/60 text-sm md:text-base font-normal mb-2 text-start">
                      {label}
                    </p>
                    <div className="rounded-lg overflow-hidden flex items-start justify-start">
                      <img
                        src={src}
                        alt={label}
                        className="w-[214px] object-contain rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20 lg:mb-40 mx-auto max-w-7xl">
          <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
            Switched to light color scheme to convey transparency
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              ["Before", "/images/before.png"],

              ["After", "/images/pekodesk.png"],
            ].map(([label, src]) => (
              <div key={label}>
                <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                  {label}
                </p>
                <div className="aspect-[16/10] rounded-lg overflow-hidden flex items-start justify-start max-w-[700px] mx-auto">
                  <img
                    src={src}
                    alt={label}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20 lg:mb-40 mx-auto max-w-7xl">
          <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
            Replaced lengthy text with pagination to improve clarity
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              ["Before", "/images/Group 104.svg"],

              ["After", "/images/after 2.gif"],
            ].map(([label, src]) => (
              <div key={label}>
                <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                  {label}
                </p>
                <div className="rounded-lg overflow-hidden flex items-start justify-start max-w-[700px] mx-auto">
                  <img
                    src={src}
                    alt={label}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-20 md:mb-40 lg:mb-40 mx-auto max-w-7xl">
          <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
            Simplified the cashback calculator to eliminate confusion between
            monthly and annual rates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              ["Before", "/images/before 3.gif"],

              ["After", "/images/after 3.gif"],
            ].map(([label, src]) => (
              <div key={label}>
                <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                  {label}
                </p>
                <div className="aspect-[16/10] rounded-lg overflow-hidden flex items-start justify-start max-w-[700px] mx-auto">
                  <img
                    src={src}
                    alt={label}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Results Section */}
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
          {/* Left side: Final Version */}
          <div>
            <div className="flex justify-between mb-4">
              <h3 className="text-white text-sm md:text-base font-normal">
                <span className="text-[#08BCA1]">Final Version</span>
              </h3>
              <h3 className="text-sm md:text-base font-normal">
                <a
                  href="https://pekopay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#08BCA1]">View Live Website</span>
                </a>
              </h3>
            </div>
            <div className="aspect-[15.5/12.5] rounded-lg overflow-hidden flex items-start justify-start">
              <img
                src="/images/Group 59.gif"
                alt="After: cashback calculator"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Right side: Smaller phone image */}
          <div className="flex flex-col justify-center h-full items-center md:items-center">
            <div
              className="bg-[#121E2A] p-3 aspect-[6.5/13.5] rounded-lg overflow-hidden flex items-center justify-center 
             w-[200px]  lg:w-[256px]"
            >
              <img
                src="/images/phone.gif"
                alt="After: cashback calculator"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemOne;
