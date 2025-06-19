import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProblemOne = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#666666] to-[#343871] px-2 sm:px-4 lg:px-6 py-12 lg:py-20 -mt-px">
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
            leads and measure interest. Early on, I had only a rough
            understanding of the product (how cashback would be calculated,
            which payment methods and currencies we'd support, which countries
            we'd serve, and what set PekoPay apart). I produced an initial
            high-level draft with that limited information, then refined it over{" "}
            <span className="text-[#08BCA1]">four rounds</span> of iterations
            based on stakeholder feedback, incorporating each new detail until
            the site accurately reflected the full feature set and value
            proposition.
          </p>
        </div>

        {/* Design Evolution Process */}
        <div className="mb-20 ">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Column 1: single tall image */}
            <div className="space-y-0 lg:space-y-6">
              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                Created initial drafts of the waitlist and landing pages without
                full visibility into the nitty-gritty
              </p>
              <div className="aspect-[3/5] rounded-lg flex items-center justify-center overflow-hidden ">
                <img
                  src="/landing1.svg"
                  alt="Logo"
                  className="max-w-full max-h-full object-contain "
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                Switched to light color scheme to convey transparency and
                security
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                    Before
                  </p>
                  <div className="bg-gray-300 aspect-[16/11.5] rounded-lg  flex items-center justify-center overflow-hidden">
                    <img
                      src="/before.png"
                      alt="Logo"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                    After
                  </p>
                  <div className="bg-gray-300 aspect-[16/11.5] rounded-lg flex items-center justify-start overflow-hidden">
                    <img
                      src="/pekodesk.png"
                      alt="Logo"
                      className="max-w-full max-h-full object-contain "
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div className="space-y-6">
              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                Replaced lengthy payment-methods text with pagination for clear
                navigation
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                    Before
                  </p>
                  <div className="bg-gray-300 aspect-[16/11.5] rounded-lg">
                    <img
                      src="/before 2.svg"
                      alt="Logo"
                      className="h-full max-w-full object-contain"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                    After
                  </p>
                  <div className="bg-gray-300 aspect-[16/11.5] rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="/after 2.gif"
                      alt="Logo"
                      className="h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20 ">
          <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
            Simplified the cashback calculator to eliminate confusion between
            monthly and annual rates
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Before Column */}
            <div>
              <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                Before
              </p>
              <div className=" aspect-[16/11.5] rounded-lg overflow-hidden flex items-start justify-start">
                <img
                  src="/before 3.gif"
                  alt="Before: cashback calculator"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
            {/* After Column */}
            <div>
              <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                After
              </p>
              <div className=" aspect-[16/11.5] rounded-lg overflow-hidden flex items-start justify-start">
                <img
                  src="/after 3.gif"
                  alt="After: cashback calculator"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Final Results Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 mb-10">
          {/* Final Version */}

          <div>
            <div className="flex justify-between mb-4">
              <h3 className="text-white text-sm md:text-base font-normal">
                <span className="text-[#08BCA1]">Final version</span>
              </h3>
              <h3 className="text-sm md:text-base font-normal">
                <a
                  href="https://pekopay.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#08BCA1]">View live website</span>
                </a>
              </h3>
            </div>
            <div className="bg-white aspect-[16/11.5] rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/Group 59.gif"
                alt="After: cashback calculator"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center h-full">
            <div className="space-y-10">
              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                <span className="text-[#08BCA1]">Result:</span>
                <br /> Within the first month, the site generated 90+ sign-ups,
                and users were eager to see their potential cashback earnings.
              </p>

              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                <span className="text-[#08BCA1]">Feedback:</span>
                <br /> Users prefer a light-mode theme on payment sites, as it
                conveys transparency and security.
              </p>

              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                <span className="text-[#08BCA1]">Takeaway:</span>
                <br /> A simple, clear UI design eliminated confusion and
                boosted user confidence, proving that clarity is essential for
                engagement in fintech interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemOne;
