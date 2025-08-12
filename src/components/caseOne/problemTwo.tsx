import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ACCENT = "#08BCA1";

const Glass = ({ children, className = "" }: any) => (
  <div
    className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg ${className}`}
  >
    {children}
  </div>
);

const ProblemTwo = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#1C0555] to-[#07033B] px-2 sm:px-4 lg:px-6 py-12 lg:py-20 -mt-px -mb-px">
      <div className="max-w-[1450px] mx-auto">
        {/* Problem One Header */}
        <div className=" lg:mt-16 flex items-center justify-center mb-12 lg:mb-16">
          <div className="flex-1 h-px bg-[#08BCA1] max-w-sm"></div>
          <h2 className="mx-8 text-white text-base lg:text-lg font-normal">
            Problem Two
          </h2>
          <div className="flex-1 h-px bg-[#08BCA1] max-w-sm"></div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-10 md:mb-20">
          <h1 className="text-white text-2xl lg:text-3xl font-normal leading-tight max-w-6xl mx-auto mb-10 lg:mb-12">
            Users lack a simple way to track earned cashback or monitor
            transactions and payouts
          </h1>

          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-7xl mx-auto">
            While the landing pages captured initial interest, users lacked a
            clear way to track cashback after signing up. I addressed this by
            designing a{" "}
            <span className="text-[#08BCA1]">user-centered dashboard</span>{" "}
            highlighting key metrics like Cashback Earned, Total Customers, Open
            Invoices, and Overdue Invoices, making it easy for users to assess
            earnings and outstanding payments at a glance.
          </p>
        </div>

        {/* Design Evolution Process */}
        <div className="mb-10 lg:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Column 1: */}
            <Glass className="p-2 md:p-4">
              <div className="space-y-6">
                <p className="text-white text-base lg:text-lg font-normal leading-relaxed">
                  Low Fidelity
                </p>
                <div className="bg-white aspect-[16/9.5] rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/low3.svg"
                    alt="Logo"
                    className="h-full max-w-full object-contain "
                  />
                </div>
              </div>
            </Glass>
            {/* Column 2 */}
            <Glass className="p-2 md:p-4">
              <div className="space-y-6">
                <p className="text-white text-base lg:text-lg font-normal leading-relaxed">
                  High Fidelity
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="bg-white aspect-[16/9.5] rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/Group 115.png"
                        alt="Logo"
                        className="h-auto w-auto object-contain "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Glass>
          </div>
        </div>

        <div className="mb-10 lg:mb-20">
          <Glass className="p-2 md:p-4">
            <h3 className="text-white text-base lg:text-lg font-normal mb-6 text-left">
              Redesigned the timeframe selector to improve usability
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
              {[
                ["Before", "/images/Group 117.png"],
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
          </Glass>
        </div>

        <div className="mb-10 lg:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 lg:gap-12">
            {/* Left Side: Image + Title */}
            <Glass className="p-2 md:p-4 md:col-span-1">
              <h3 className="text-white text-base lg:text-lg font-normal mb-6 text-left">
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
            </Glass>

            {/* Right Side: Image + Title */}
            <Glass className="p-2 md:p-4 md:col-span-1">
              <h3 className="text-white text-base lg:text-lg font-normal mb-6 text-center">
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
            </Glass>
          </div>
        </div>

        {/* Final + notes */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 lg:gap-10">
          <Glass className="p-2 md:p-4 md:col-span-1">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white">
                <span style={{ color: ACCENT }}>Final Version</span>
              </h3>
              <a
                href="https://pekopay.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white underline underline-offset-4"
                style={{ textDecorationColor: ACCENT }}
              >
                View Live Website
              </a>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/Group 43.gif"
                alt="Final screens"
                className="w-full object-contain"
              />
            </div>
          </Glass>

          <Glass className="p-2 md:p-4 md:col-span-1">
            <div className="space-y-8 max-w-prose">
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                <span className="text-white" style={{ color: ACCENT }}>
                  Feedback:
                </span>{" "}
                The light background and strong hierarchy improved trust and
                scanability, helping users navigate data with confidence.
              </p>
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                <span className="text-white" style={{ color: ACCENT }}>
                  Takeaway:
                </span>{" "}
                Focusing on simplicity and aligning layout to real user needs
                improved clarity, reduced friction, and made insights feel
                immediate.
              </p>
            </div>
          </Glass>
        </div>
        {/* Nav buttons */}
        <div className="mt-16 lg:mt-24 flex justify-center gap-6">
          <button
            disabled
            className="h-10 px-5 rounded-xl text-sm text-white/60 border border-white/10 bg-white/5 backdrop-blur-lg cursor-not-allowed"
          >
            &lt; Previous
          </button>

          <Link
            to="/automated-payment"
            className="h-10 px-5 rounded-xl text-sm font-medium text-[#061a14] grid place-items-center"
            style={{
              background: ACCENT,
              boxShadow: "0 8px 30px rgba(8,188,161,0.35)",
            }}
          >
            Next &gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProblemTwo;
