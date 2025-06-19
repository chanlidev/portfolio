import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProblemThree = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#666666] to-[#343871] px-2 sm:px-4 lg:px-6 py-12 lg:py-20 -mt-px">
      <div className="max-w-[1450px] mx-auto">
        {/* Problem One Header */}
        <div className=" lg:mt-16 flex items-center justify-center mb-12 lg:mb-16">
          <div className="flex-1 h-px bg-[#FF715C] max-w-sm"></div>
          <h2 className="mx-8 text-white text-base lg:text-lg font-normal">
            Problem
          </h2>
          <div className="flex-1 h-px bg-[#FF715C] max-w-sm"></div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-10 lg:mb-20">
          <h1 className="text-white text-2xl lg:text-3xl font-normal leading-tight max-w-6xl mx-auto mb-10 lg:mb-12">
            Users have no way to add a credit card to enable automatic payments
          </h1>

          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-7xl mx-auto">
            Initially, I considered adding the “Add Payment Method” step during
            invoice creation. After mapping out the workflow, I realized it
            would be more efficient to attach payment methods directly to each
            payer. That way, when creating an invoice you simply select the
            payer without needing to re-enter or choose a payment method each
            time. Therefore, I implemented the feature on the payer’s detail
            page.
          </p>
        </div>

        <div className="mb-20 ">
          <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
            Implemented new feature to payer's detail page
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Before Column */}
            <div>
              <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                Before
              </p>
              <div className="bg-black p-3 aspect-[15/9.5] rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/before4.gif"
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
              <div className="bg-black p-3 aspect-[15/9.5]  rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/after4.gif"
                  alt="After: cashback calculator"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20 ">
          <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
            Users now have the options to add payment method or send add payment
            method link to request the info
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Before Column */}
            <div>
              <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                Option - Add Payment Method
              </p>
              <div className="bg-black p-3 aspect-[15/9.5] rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/before4.gif"
                  alt="Before: cashback calculator"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
            {/* After Column */}
            <div>
              <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                Option - Send Add Payment Method Link
              </p>
              <div className="bg-black p-3 aspect-[15/9.5]  rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/after4.gif"
                  alt="After: cashback calculator"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-7xl mx-auto">
          <p>
            Now the work flow for adding payment method is 1. Create A Client 2.
            Go to client list 3. Click on view client 4. Click on dorp down menu
            on the dails page 5. Click on add payment method It's a little
            lenthy and can it be more optimized?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemThree;
