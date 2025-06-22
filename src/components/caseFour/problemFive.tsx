import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProblemFive = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#666666] to-[#343871] px-2 sm:px-4 lg:px-6 py-12 lg:py-20 -mt-px">
      <div className="max-w-7xl mx-auto">
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
            Tradespeople like plumbers and electricians often lose track of
            tools and materials on job sites
          </h1>

          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-7xl mx-auto">
            At Stampede Plumbing, staff have to visit the warehouse just to
            check what supplies are available. Without a proper system, items go
            missing, inventory lists are outdated, and a lot of time is wasted
            manually counting and tracking everything. I spoke with trade
            professionals who said they frequently lose track of tools because
            nothing is scanned or logged. Office staff expressed frustration
            with manual spreadsheets and late returns. Users wanted a
            lightweight solution they didn’t need to be trained on.
          </p>
        </div>

        <div className="mb-10 lg:mb-20">
          {/* Section Header Line */}
          <div className="h-px w-20 bg-[#0D82B8] mx-auto mb-4" />

          {/* Section Title */}
          <p className="text-white text-center text-base md:text-lg mb-6">
            User Research
          </p>

          {/* Stakeholders & Users - one line */}
          <div className="flex justify-between text-white md:text-base lg:text-lg font-normal max-w-xl mx-auto mb-10">
            <span>Stakeholders: Office Admins</span>
            <span>Primary Users: Field Technicians</span>
          </div>

          {/* Pain Points Section */}
          <div className="text-white text-center text-base md:text-lg font-normal mb-6">
            Pain Points
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
            <div className="border border-[#0D82B8] rounded-lg p-4 text-white text-sm md:text-base leading-relaxed bg-transparent">
              Uncertainty about part availability without visiting the warehouse
            </div>
            <div className="border border-[#0D82B8] rounded-lg p-4 text-white text-sm md:text-base leading-relaxed bg-transparent">
              Inventory updates often forgotten or entered twice
            </div>
            <div className="border border-[#0D82B8] rounded-lg p-4 text-white text-sm md:text-base leading-relaxed bg-transparent">
              Tools frequently go missing due to lack of proper logging
            </div>
            <div className="border border-[#0D82B8] rounded-lg p-4 text-white text-sm md:text-base leading-relaxed bg-transparent">
              Office staff struggle with manual spreadsheets and late returns
            </div>
          </div>

          <div className="text-white text-center text-base md:text-lg font-normal mt-10 mb-6">
            Key Insights
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4">
            <div className="border border-[#0D82B8] rounded-lg p-4 text-white text-sm md:text-base leading-relaxed bg-transparent">
              Mobile experience must be frictionless Users need an interface
              that is intuitive and fast on mobile so they can check inventory
              or log items directly from the job site without frustration.
            </div>
            <div className="border border-[#0D82B8] rounded-lg p-4 text-white text-sm md:text-base leading-relaxed bg-transparent">
              Cross-device syncing is critical Inventory data must stay
              consistent and up to date across phones, tablets, and office
              computers to prevent miscommunication and double entry.
            </div>
            <div className="border border-[#0D82B8] rounded-lg p-4 text-white text-sm md:text-base leading-relaxed bg-transparent">
              Minimize manual input to avoid errors The more users have to type
              or remember, the more likely it is they’ll forget or input
              incorrect info—automated or tap-based logging reduces mistakes.
            </div>
            <div className="border border-[#0D82B8] rounded-lg p-4 text-white text-sm md:text-base leading-relaxed bg-transparent">
              When tools and materials are tracked clearly by who used what and
              when, it reduces loss and makes teams more accountable for
              returns.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemFive;
