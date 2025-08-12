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

const SolutionFive = () => {
  return (
    <div className="w-full px-2 sm:px-4 lg:px-6 py-12 lg:py-20 -mt-px -mb-px">
      <div className="max-w-[1450px] mx-auto">
        {/* Problem One Header */}
        <div className=" lg:mt-16 flex items-center justify-center mb-12 lg:mb-16">
          <div className="flex-1 h-px bg-[#08BCA1] max-w-sm"></div>
          <h2 className="mx-8 text-white text-base lg:text-lg font-normal">
            Solution
          </h2>
          <div className="flex-1 h-px bg-[#08BCA1] max-w-sm"></div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-20 lg:mb-32">
          <h1 className="text-white text-2xl lg:text-3xl font-normal leading-tight max-w-6xl mx-auto mb-10 lg:mb-12">
            Ultimate trade material manager: a real-time app for tracking and
            managing tools and materials
          </h1>

          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-7xl mx-auto">
            To address the inefficiencies at Stampede Plumbing, I designed an
            intuitive{" "}
            <span className="text-[#08BCA1]">mobile and web application</span>{" "}
            that gives employees instant visibility into warehouse inventory.
            Instead of physically walking to the warehouse or relying on
            error-prone spreadsheets, staff can now view, log, and update supply
            levels directly through the app. This ensures tools and materials
            are accurately tracked, reduces losses, and saves time across job
            sites and office operations.
          </p>
        </div>

        <div className="h-px w-20 bg-[#08BCA1] mx-auto mb-4" />

        {/* Section Title */}
        <p className="text-white text-center text-lg lg:text-xl  mb-6 md:mb-10">
          Mobile App Design
        </p>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-0 md:gap-8 lg:gap-24 mb-20 lg:mb-32 ">
          {/* Left: only the summary text */}
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-white text-sm md:text-base lg:text-lg font-normal mb-6 text-left">
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
                src="/images/1st.gif"
                alt="After: cashback calculator"
                className="w-[250px] md:w-[300px] lg:w-[350px] h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-0 md:gap-8 lg:gap-24 mb-20 lg:mb-32 ">
          {/* Mobile: text first (order-1), Desktop: text second (order-2) */}
          <div className="order-1 md:order-2 flex flex-col justify-center h-full">
            <h3 className="text-white text-sm md:text-base lg:text-lg font-normal mb-6 text-left">
              Return Material
              <br />
              Go to profile &gt; Choose material to check in &gt; Confirm
            </h3>
          </div>

          {/* Mobile: image second (order-2), Desktop: image first (order-1) */}
          <div className="order-2 md:order-1">
            <div className=" rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src="/images/2nd.gif"
                alt="After: cashback calculator"
                className="w-[250px]  md:w-[300px] lg:w-[350px] h-auto  object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Final Results Section */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-0 md:gap-8 lg:gap-24 mb-20 lg:mb-32 ">
          {/* Left: only the summary text */}
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-white text-sm md:text-base lg:text-lg font-normal mb-6 text-left">
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
                src="/images/3rd new.gif"
                alt="After: cashback calculator"
                className="w-[250px]  md:w-[300px] lg:w-[350px] h-auto  object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mb-20 lg:mb-32">
          <div className="h-px w-20 bg-[#08BCA1] mx-auto mb-4" />

          {/* Section Title */}
          <p className="text-white text-center text-lg lg:text-xl mb-6 md:mb-10">
            Web App Design
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {[
              ["Log in", "/images/Log in desk.svg"],

              ["Inventory", "/images/Inventory.svg"],
              ["Inventory", "/images/Inventory-1.svg"],

              ["Check out", "/images/Check out.svg"],
              ["Check in", "/images/Check in.svg"],
              ["Orders", "/images/Orders.svg"],
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12">
          <div>
            <div className="flex justify-between mb-4">
              <h3 className="text-white text-sm md:text-base lg:text-lg font-normal">
                <span className="text-[#08BCA1]">Final Version</span>
              </h3>
            </div>
            <div className="aspect-[15.5/12.5] rounded-lg overflow-hidden flex items-start justify-start mb-4">
              <img
                src="/images/Shot (1).png"
                alt="After: cashback calculator"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center h-full">
            <div className="space-y-10">
              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                <span className="text-[#08BCA1] text-sm md:text-base lg:text-lg">
                  Feedback:
                </span>
                <br /> Staff found it helpful to check tool and material
                availability without going to the warehouse. It also reduced
                confusion and made it easier to track what was used and
                returned.
              </p>

              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                <span className="text-[#08BCA1] text-sm md:text-base lg:text-lg">
                  Takeaway:
                </span>
                <br /> Designing TradeTrack taught me the value of an all-in-one
                solution. By combining inventory checking, updating, and
                tracking into one app, I helped users stay focused on their work
                instead of juggling tools and spreadsheets.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24 flex justify-center gap-6">
          <Link
            to="/automated-payment"
            className="h-10 px-5 w-28 rounded-xl text-sm grid place-items-center text-white/90 border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition"
          >
            &lt; Previous
          </Link>

          <Link
            to="/graphic-design"
            className="h-10 px-5 w-28 rounded-xl text-sm font-medium text-[#061a14] grid place-items-center"
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

export default SolutionFive;
