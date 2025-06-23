import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SolutionFive = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#343871] to-[#07033B] px-2 sm:px-4 lg:px-6 py-12 lg:py-20 -mt-px -mb-px">
      <div className="max-w-7xl mx-auto">
        {/* Problem One Header */}
        <div className=" lg:mt-16 flex items-center justify-center mb-12 lg:mb-16">
          <div className="flex-1 h-px bg-[#0D82B8] max-w-sm"></div>
          <h2 className="mx-8 text-white text-base lg:text-lg font-normal">
            Solution
          </h2>
          <div className="flex-1 h-px bg-[#0D82B8] max-w-sm"></div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-10 lg:mb-20">
          <h1 className="text-white text-2xl lg:text-3xl font-normal leading-tight max-w-6xl mx-auto mb-10 lg:mb-12">
            Ultimate trade material manager: a real-time app for tracking and
            managing tools and materials
          </h1>

          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-7xl mx-auto">
            To address the inefficiencies at Stampede Plumbing, I designed an
            intuitive{" "}
            <span className="text-[#0D82B8]">mobile and web application</span>{" "}
            that gives employees instant visibility into warehouse inventory.
            Instead of physically walking to the warehouse or relying on
            error-prone spreadsheets, staff can now view, log, and update supply
            levels directly through the app. This ensures tools and materials
            are accurately tracked, reduces losses, and saves time across job
            sites and office operations.
          </p>
        </div>

        <div className="h-px w-20 bg-[#0D82B8] mx-auto mb-4" />

        {/* Section Title */}
        <p className="text-white text-center text-base lg:text-lg md:text-lg mb-10">
          Mobile App Design
        </p>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-0 md:gap-8 lg:gap-24 mb-20">
          {/* Left: only the summary text */}
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
              Check Out Material
              <br />
              Select material to check out &gt; Choose check out quantity &
              duration &gt; Confirm
            </h3>
          </div>

          {/* Right: Final Version screenshot */}
          <div>
            <div className=" rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/1st.gif"
                alt="After: cashback calculator"
                className="w-[200px] md:w-[250px] lg:w-[300px] h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-0 md:gap-8 lg:gap-24 mb-20">
          {/* Mobile: text first (order-1), Desktop: text second (order-2) */}
          <div className="order-1 md:order-2 flex flex-col justify-center h-full">
            <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
              Return Material
              <br />
              Go to profile &gt; Choose material to check in &gt; Confirm
            </h3>
          </div>

          {/* Mobile: image second (order-2), Desktop: image first (order-1) */}
          <div className="order-2 md:order-1">
            <div className=" rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/2nd.gif"
                alt="After: cashback calculator"
                className="w-[200px]  md:w-[250px] lg:w-[300px] h-auto  object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Final Results Section */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-0 md:gap-8 lg:gap-24 mb-20 lg:mb-40 ">
          {/* Left: only the summary text */}
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
              Order Material
              <br />
              Select material to order &gt; Choose order quantity &gt; Send
              request
            </h3>
          </div>

          {/* Right: Final Version screenshot */}
          <div>
            <div className=" rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/3rd new.gif"
                alt="After: cashback calculator"
                className="w-[200px]  md:w-[250px] lg:w-[300px] h-auto  object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mb-20 lg:mb-40 mx-auto max-w-7xl">
          <div className="h-px w-20 bg-[#0D82B8] mx-auto mb-4" />

          {/* Section Title */}
          <p className="text-white text-center text-base lg:text-lg  mb-10">
            Web App Design
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {[
              ["Log in", "/Log in desk.svg"],

              ["Inventory", "/Inventory.svg"],
              ["Inventory", "/Inventory-1.svg"],

              ["Check out", "/Check out.svg"],
              ["Check in", "/Check in.svg"],
              ["Orders", "/Orders.svg"],
            ].map(([label, src]) => (
              <div key={label}>
                <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                  {label}
                </p>
                <div className=" rounded-lg overflow-hidden flex items-start justify-start max-w-[700px] mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="flex justify-between mb-4">
              <h3 className="text-white text-sm md:text-base font-normal">
                <span className="text-[#0D82B8]">Final version</span>
              </h3>
            </div>
            <div className="aspect-[15.5/12.5] rounded-lg overflow-hidden flex items-start justify-start mb-4">
              <img
                src="/Shot (10).svg"
                alt="After: cashback calculator"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center h-full">
            <div className="space-y-10">
              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                <span className="text-[#0D82B8]">Feedback:</span>
                <br /> Staff found it helpful to check tool and material
                availability without going to the warehouse. It also reduced
                confusion and made it easier to track what was used and
                returned.
              </p>

              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                <span className="text-[#0D82B8]">Takeaway:</span>
                <br /> Designing TradeTrack taught me the value of an all-in-one
                solution. By combining inventory checking, updating, and
                tracking into one app, I helped users stay focused on their work
                instead of juggling tools and spreadsheets.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24 lg:mt-40 flex justify-center gap-20">
          <Link to="/invoice-list">
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
              &lt; Previous
            </Button>
          </Link>

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
            Next &gt;
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SolutionFive;
