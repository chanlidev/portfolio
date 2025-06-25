import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProblemTwo = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#343871] to-[#07033B] px-2 sm:px-4 lg:px-6 py-12 lg:py-20 -mt-px -mb-px">
      <div className="max-w-7xl mx-auto">
        {/* Problem One Header */}
        <div className=" lg:mt-16 flex items-center justify-center mb-12 lg:mb-16">
          <div className="flex-1 h-px bg-[#08BCA1] max-w-sm"></div>
          <h2 className="mx-8 text-white text-base lg:text-lg font-normal">
            Problem Two
          </h2>
          <div className="flex-1 h-px bg-[#08BCA1] max-w-sm"></div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-10 lg:mb-20">
          <h1 className="text-white text-2xl lg:text-3xl font-normal leading-tight max-w-6xl mx-auto mb-10 lg:mb-12">
            Users lack a simple way to track earned cashback or monitor
            transactions and payouts
          </h1>

          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-7xl mx-auto">
            While the landing pages captured initial interest, users lacked a
            clear way to track cashback after signing up. I addressed this by
            designing a{" "}
            <span className="text-[#08BCA1]">user-friendly dashboard</span>{" "}
            highlighting key metrics like Cashback Earned, Total Customers, Open
            Invoices, and Overdue Invoices, making it easy for users to assess
            earnings and outstanding payments at a glance.
          </p>
        </div>

        {/* Design Evolution Process */}
        <div className="mb-20 lg:mb-40 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Column 1: */}
            <div className="space-y-6">
              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                Low Fidelity
              </p>
              <div className="bg-white aspect-[16/9.5] rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src="/images/low1.svg"
                  alt="Logo"
                  className="h-full max-w-full object-contain "
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                High Fidelity
              </p>
              <div className="space-y-4">
                <div>
                  <div className="bg-white aspect-[16/9.5] rounded-lg flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/Dashboard (8).svg"
                      alt="Logo"
                      className="h-auto w-auto object-contain "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20 lg:mb-40 mx-auto max-w-7xl">
          <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
            Redesigned the timeframe selector
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
            {[
              ["Before", "/images/Group 71.svg"],
              ["After", "/images/after5.gif"],
            ].map(([label, src], index) => (
              <div key={label} className="md:col-span-1">
                <p className="text-white/60 text-sm md:text-base font-normal mb-2 text-left">
                  {label}
                </p>
                <div
                  className={`rounded-lg overflow-hidden flex items-start justify-start ${
                    index === 0
                      ? "max-w-[300px] mx-auto md:max-w-none md:mx-0"
                      : ""
                  }`}
                >
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
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 lg:gap-12">
            {/* Left Side: Image + Title */}
            <div className="md:col-span-1">
              <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
                Integrated the transaction list to share the same timeframe
                selector for consistent use
              </h3>
              <div className="rounded-lg overflow-hidden flex items-start justify-start mx-auto">
                <img
                  src="/images/dashboard1.gif"
                  alt="Dashboard"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Right Side: Image + Title */}
            <div className="md:col-span-1">
              <h3 className="text-white text-sm md:text-base font-normal mb-6 text-center">
                Enhanced the responsive layout for mobile
              </h3>
              <div
                className="col-span-1 aspect-[10.5/13] rounded-lg overflow-hidden 
               flex items-center justify-center
               max-w-[300px] mx-auto md:max-w-none md:mx-0"
              >
                <img
                  src="/images/Group 68.gif"
                  alt="Mobile"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Final Results Section */}
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Final Version */}

          <div>
            <div className="flex justify-between mb-4">
              <h3 className="text-white text-sm md:text-base font-normal">
                <span className="text-[#08BCA1]">Final Version</span>
              </h3>
              <h3 className="text-sm md:text-base font-normal">
                <a
                  href="https://pekopay.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-[#08BCA1]">View Live Website</span>
                </a>
              </h3>
            </div>
            <div className=" aspect-[15.5/12.5] rounded-lg overflow-hidden flex items-start justify-start">
              <img
                src="/images/Group 43.gif"
                alt="After: cashback calculator"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center h-full">
            <div className="space-y-10">
              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                <span className="text-[#08BCA1]">Feedback:</span>
                <br /> The light background and strong visual hierarchy made the
                interface feel more trustworthy and professional, helping users
                navigate their data with confidence.
              </p>

              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                <span className="text-[#08BCA1]">Takeaway:</span>
                <br />
                By focusing on simplicity and aligning the layout with real user
                needs, I was able to improve clarity, reduce friction, and
                create a more intuitive experience for viewing financial data.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-24 lg:mt-40 flex justify-center gap-20">
          <Button
            disabled
            className={cn(
              "h-9 w-32 flex items-center justify-center",
              "border border-[#1B64FF] text-white text-sm font-normal",
              "bg-gradient-to-r from-[#1C0C7A] to-[#200349]",
              "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
              "backdrop-blur-sm transition-all duration-200",
              "opacity-50 cursor-not-allowed",
            )}
          >
            &lt; Previous
          </Button>

          <Link to="/automated-payment">
            <Button
              className={cn(
                "h-9 w-32 flex items-center justify-center",
                "border border-[#1B64FF] text-white text-sm font-normal",
                "bg-gradient-to-r from-[#1C0C7A] to-[#200349]",
                "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
                "backdrop-blur-sm transition-all duration-200",
                "hover:border-2 hover:border-[#1B64FF]",
                "hover:bg-gradient-to-r hover:from-[#1C0C7A] hover:to-[#200349]",
                "hover:text-white hover:shadow-lg hover:shadow-[#08BCA1]/20",
              )}
            >
              Next &gt;
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProblemTwo;
