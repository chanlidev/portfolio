import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Solution = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#24003C] to-[#07033B] px-2 sm:px-4 lg:px-6 py-12 lg:py-20 -mt-px -mb-px">
      <div className="max-w-[1450px] mx-auto">
        {/* Problem One Header */}
        <div className=" lg:mt-16 flex items-center justify-center mb-12 lg:mb-16">
          <div className="flex-1 h-px bg-[#FF715C] max-w-sm"></div>
          <h2 className="mx-8 text-white text-base lg:text-lg font-normal">
            Solution
          </h2>
          <div className="flex-1 h-px bg-[#FF715C] max-w-sm"></div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-10 lg:mb-20">
          <h1 className="text-white text-2xl lg:text-3xl font-normal leading-tight max-w-6xl mx-auto mb-10 lg:mb-12">
            Immediately after creating a client, land directly on their details
            page and display a pop-up to add payment method
          </h1>

          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-6xl mx-auto">
            This revised workflow reduces the process{" "}
            <span className="text-[#FF715C]">from 5 steps to 2</span>: Create
            Client &gt; Add Payment Method, streamlining and accelerating the
            entire setup process.
          </p>
        </div>

        <div className="mb-20 lg:mb-40">
          <div className="grid grid-cols-1 max-w-4xl gap-8 lg:gap-12 mx-auto">
            {/* Before Column */}
            <div className="text-center">
              <div className="aspect-[15/9.5] rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/solution.gif"
                  alt="Before: cashback calculator"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Final Results Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 lg:gap-24 mb-20 lg:mb-40">
          {/* Left: only the summary text */}
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
              Once a new payment method is added, it will show at the Payment
              method section and users can set which credit card as default
              payment
            </h3>
          </div>

          {/* Right: Final Version screenshot */}
          <div>
            <div className="aspect-[15/9.5] rounded-lg overflow-hidden flex items-start justify-start">
              <img
                src="/after6.gif"
                alt="After: cashback calculator"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Final Results Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 lg:gap-24">
          {/* Left: only the summary text */}
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
              Once a new payment method is added, it will show at the Payment
              method section and users can set which credit card as default
              payment
            </h3>
          </div>

          {/* Right: Final Version screenshot */}
          <div>
            <div className="aspect-[15/9.5] rounded-lg overflow-hidden flex items-start justify-start">
              <img
                src="/after7.gif"
                alt="After: cashback calculator"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
