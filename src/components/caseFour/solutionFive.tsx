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
            A collapsible preview shows key invoice details in the list, with a
            pop-up option for full PDF-style viewing
          </h1>

          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-7xl mx-auto">
            we decided to help them build an application which will show them
            the real-time status of the supplies in their warehouse. Employees
            can use this app to check the inventory, and update the inventory as
            needed.
          </p>
        </div>

        <div className="mb-10 lg:mb-20 mx-auto max-w-7xl">
          <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
            Mobile App Design
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              ["Log in", "/Log in.svg"],
              ["Navigation", "/Navigation.svg"],
              ["Inventory", "/Inventory.svg"],
              ["Inventory", "/Inventory-1.svg"],
              ["Check out", "/Check out.svg"],
              ["Check in", "/Check in.svg"],

              ["Orders", "/Orders.svg"],
              ["Profile", "/Profile.svg"],
            ].map(([label, src]) => (
              <div key={label}>
                <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                  {label}
                </p>
                <div className="aspect-[6/13] rounded-lg overflow-hidden flex items-start justify-start max-w-[300px] mx-auto">
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

        <div className="mb-10 lg:mb-20 mx-auto max-w-7xl">
          <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
            Web App Design
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {[
              ["Log in", "/Log in desk.svg"],

              ["Inventory", "/Inventory desk.svg"],
              ["Inventory", "/Inventory-1 desk.svg"],

              ["Check out", "/Check out desk.svg"],
              ["Check in", "/Check in desk.svg"],
              ["Orders", "/Orders desk.svg"],
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="flex justify-between mb-4">
              <h3 className="text-white text-sm md:text-base font-normal">
                <span className="text-[#FF715C]">Final version</span>
              </h3>
            </div>
            <div className="aspect-[15.5/12.5] rounded-lg overflow-hidden flex items-center justify-center mb-4">
              <img
                src="/Group 103.gif"
                alt="After: cashback calculator"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center h-full">
            <div className="space-y-10">
              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                <span className="text-[#FF715C]">Feedback:</span>
                <br /> The inline preview eliminates repetitive clicks and lets
                users scan invoice details instantly within the list, driving
                faster decision-making and smoother workflows.
              </p>

              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                <span className="text-[#FF715C]">Takeaway:</span>
                <br /> By minimizing the steps to view and act on invoices, we
                delivered a more intuitive, efficient, and satisfying user
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24 lg:mt-40 flex justify-center gap-20">
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
              &lt; Previous
            </Button>
          </Link>

          <Link to="/inventory-system">
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

export default SolutionFive;
