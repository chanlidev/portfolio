import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Solution = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#343871] to-[#07033B] px-2 sm:px-4 lg:px-6 py-12 lg:py-20 -mt-px -mb-px">
      <div className="max-w-7xl mx-auto">
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

          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-7xl mx-auto">
            I thought about embedding the “Add Payment Method” steps into the
            client-creation flow, but to minimize development effort and avoid
            duplicating our existing details page component, I chose to navigate
            straight to the new client’s details page and trigger a pop-up for
            adding a payment method immediately after creation. This refined
            workflow reduces the original process{" "}
            <span className="text-[#FF715C]">from 5 steps to 2</span>,
            streamlining and accelerating the entire setup process.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-0 md:gap-8 lg:gap-24 mb-20 lg:mb-40">
          {/* Left: only the summary text */}
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
              Refined 2-step Workflow: <br />
              Create Client &gt; Add Payment Method
            </h3>
          </div>

          {/* Right: Final Version screenshot */}
          <div>
            <div className=" rounded-lg overflow-hidden flex items-start justify-start">
              <img
                src="/images/solution.gif"
                alt="After: cashback calculator"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-0 md:gap-8 lg:gap-24 mb-20 lg:mb-40">
          {/* Mobile: text first (order-1), Desktop: text second (order-2) */}
          <div className="order-1 md:order-2 flex flex-col justify-center h-full">
            <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
              Once a new payment method is added, it appears in the Payment
              Methods section on the client details page, where users can choose
              a default credit card.
            </h3>
          </div>

          {/* Mobile: image second (order-2), Desktop: image first (order-1) */}
          <div className="order-2 md:order-1">
            <div className=" rounded-lg overflow-hidden flex items-start justify-start">
              <img
                src="/images/after6.gif"
                alt="After: cashback calculator"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Final Results Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-0 md:gap-8 lg:gap-24 mb-20 lg:mb-40">
          {/* Left: only the summary text */}
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
              To complete the experience, I’ve included a Subscription section
              on the same page so users can set up recurring payments for that
              client without leaving the view.
            </h3>
          </div>

          {/* Right: Final Version screenshot */}
          <div>
            <div className=" rounded-lg overflow-hidden flex items-start justify-start">
              <img
                src="/images/after7.gif"
                alt="After: cashback calculator"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="flex justify-between mb-4">
              <h3 className="text-white text-sm md:text-base font-normal">
                <span className="text-[#FF715C]">Final Version</span>
              </h3>
            </div>
            <div className="aspect-[15.5/12.5] rounded-lg overflow-hidden flex items-center justify-center mb-4">
              <img
                src="/images/Group 80.gif"
                alt="After: cashback calculator"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center h-full">
            <div className="space-y-10">
              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                <span className="text-[#FF715C]">Feedback:</span>
                <br /> Landing on the client details page with an immediate “Add
                Payment Method” prompt and a Subscription section on the same
                page cut setup to two steps and eliminated repetitive tasks.
              </p>

              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                <span className="text-[#FF715C]">Takeaway:</span>
                <br /> I learned that consolidating related actions into one
                interface and reusing existing components can dramatically
                streamline complex workflows and improve usability.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24 lg:mt-40 flex justify-center gap-20">
          <Link to="/landing-page">
            <Button
              className={cn(
                "h-9 w-32 flex items-center justify-center",
                "border border-[#1B64FF] text-white text-sm font-normal",
                "bg-[#1C0C7A]",
                "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
                "backdrop-blur-sm transition-all duration-200",
                "hover:border-2 hover:border-[#1B64FF]",
                "hover:bg-[#1C0C7A]",
                "hover:text-white hover:shadow-lg hover:shadow-[#08BCA1]/20",
              )}
            >
              &lt; Previous
            </Button>
          </Link>

          <Link to="/invoice-list">
            <Button
              className={cn(
                "h-9 w-32 flex items-center justify-center",
                "border border-[#1B64FF] text-white text-sm font-normal",
                "bg-[#1C0C7A]",
                "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
                "backdrop-blur-sm transition-all duration-200",
                "hover:border-2 hover:border-[#1B64FF]",
                "hover:bg-[#1C0C7A]",
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

export default Solution;
