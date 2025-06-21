import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProblemFive = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#666666] to-[#343871] px-2 sm:px-4 lg:px-6 py-12 lg:py-20 -mt-px">
      <div className="max-w-[1450px] mx-auto">
        {/* Problem One Header */}
        <div className=" lg:mt-16 flex items-center justify-center mb-12 lg:mb-16">
          <div className="flex-1 h-px bg-[#0D82B8] max-w-sm"></div>
          <h2 className="mx-8 text-white text-base lg:text-lg font-normal">
            Problem
          </h2>
          <div className="flex-1 h-px bg-[#0D82B8] max-w-sm"></div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-10 lg:mb-20">
          <h1 className="text-white text-2xl lg:text-3xl font-normal leading-tight max-w-6xl mx-auto mb-10 lg:mb-12">
            Users can't add a credit card to enable automatic payments, forcing
            them into manual invoicing and follow-ups
          </h1>

          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-7xl mx-auto">
            As the issue stampede plumbing is currently facing is their staff
            must physically go to the warehouse to check and count their
            supplies, so we decided to help them build an application which will
            show them the real-time status of the supplies in their warehouse.
            Employees can use this app to check the inventory, and update the
            inventory as needed.
          </p>
        </div>

        <div className="mb-20 mx-auto max-w-7xl">
          <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
            Mobile App Design
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
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

        <div className="mb-20 mx-auto max-w-7xl">
          <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
            Web App Design
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
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
      </div>
    </div>
  );
};

export default ProblemFive;
