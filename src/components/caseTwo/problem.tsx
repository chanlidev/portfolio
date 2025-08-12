import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Glass = ({ children, className = "" }: any) => (
  <div
    className={`rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg ${className}`}
  >
    {children}
  </div>
);

const ProblemThree = () => {
  return (
    <div className="w-full  px-2 sm:px-4 lg:px-6 py-12 lg:py-20">
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
            Users can't add a credit card to enable automatic payments, forcing
            them into manual invoicing and follow-ups
          </h1>

          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-7xl mx-auto">
            Initially, I considered adding the{" "}
            <span className="text-[#08BCA1]">Add Payment Method</span> step
            during invoice creation. After mapping out the workflow, I realized
            it would be more efficient to attach payment methods directly to
            each payer. That way, when creating an invoice you simply select the
            payer without needing to re-enter or choose a payment method each
            time. Therefore, I implemented the feature on the payer’s detail
            page.
          </p>
        </div>

        <Glass className="p-2 md:p-4 mb-10 lg:mb-20">
          <h3 className="text-white text-base lg:text-lg font-normal mb-6 text-left">
            Added an “Add Payment Method” feature on the payer’s detail page
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Before Column */}
            <div>
              <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                Before
              </p>
              <div className=" rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/images/Group 94.svg"
                  alt="Before: cashback calculator"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
            {/* After Column */}
            <div>
              <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                After
              </p>
              <div className=" rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/images/Group 95.svg"
                  alt="After: cashback calculator"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </Glass>

        <div className="mb-20 lg:mb-32">
          <Glass className="p-2 md:p-4">
            <h3 className="text-white text-base lg:text-lg font-normal mb-6 text-left">
              Users now have the options to enter credit card details directly
              or send a link to request payment info
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Before Column */}
              <div>
                <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                  Add Payment Method
                </p>
                <div className=" rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/Group 119.gif"
                    alt="Before: cashback calculator"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
              {/* After Column */}
              <div>
                <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                  Send Add Payment Method Link
                </p>
                <div className=" rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/Group 118.gif"
                    alt="After: cashback calculator"
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </Glass>
        </div>

        <div className=" text-white text-base lg:text-lg text-center">
          <p>
            Original Workflow (5 steps)
            <br />
            <br /> Create a Client &gt; Go to Client List &gt; Click “View
            Client” &gt; Open the dropdown menu on the details page &gt; Click
            “Add Payment Method”
            <br />
            <br />
            It’s still too lengthy. Can it be further streamlined?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemThree;
