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
          <div className="flex-1 h-px bg-[#149EDD] max-w-sm"></div>
          <h2 className="mx-8 text-white text-base lg:text-lg font-normal">
            Problem
          </h2>
          <div className="flex-1 h-px bg-[#149EDD] max-w-sm"></div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-10 lg:mb-20">
          <h1 className="text-white text-2xl lg:text-3xl font-normal leading-tight max-w-6xl mx-auto mb-10 lg:mb-12">
            Tradespeople often lose track of tools and materials on job sites
          </h1>

          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-7xl mx-auto">
            At Stampede Plumbing, staff have to go to the warehouse just to
            check what supplies are available. Without a proper system, items go
            missing, inventory lists are outdated, and manual counting wastes
            valuable time. Trade professionals mentioned they often lose track
            of tools because nothing is logged. Office staff also expressed
            frustration with messy spreadsheets and late returns.
          </p>
        </div>

        <div className="mb-20 lg:mb-40">
          {/* Section Header Line */}
          <div className="h-px w-20 bg-[#149EDD] mx-auto mb-4" />

          {/* Section Title */}
          <p className="text-white text-center text-lg lg:text-xl mb-6">
            User Research
          </p>

          {/* Stakeholders & Users - one line */}
          <div className="flex justify-between text-white text-sm md:text-base text-center font-normal max-w-xl mx-auto mb-10">
            <span>Stakeholders: Office Admins</span>
            <span>Primary Users: Trade Professionals</span>
          </div>

          {/* Pain Points Section */}
          <div className="text-white text-center text-base lg:text-lg font-normal mb-6">
            Pain Points
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto px-4 text-center">
            <div className="border border-[#149EDD] rounded-lg p-4 text-white text-sm md:text-base leading-relaxed bg-transparent">
              Uncertainty about part availability without visiting the warehouse
            </div>
            <div className="border border-[#149EDD] rounded-lg p-4 text-white text-sm md:text-base leading-relaxed bg-transparent">
              Inventory updates often forgotten or entered twice
            </div>
            <div className="border border-[#149EDD] rounded-lg p-4 text-white text-sm md:text-base leading-relaxed bg-transparent">
              Tools frequently go missing due to lack of proper logging
            </div>
            <div className="border border-[#149EDD] rounded-lg p-4 text-white text-sm md:text-base leading-relaxed bg-transparent">
              Office staff struggle with manual spreadsheets and late returns
            </div>
            <div className="border border-[#149EDD] rounded-lg p-4 text-white text-sm md:text-base leading-relaxed bg-transparent">
              Manual ordering process when stock level is low
            </div>
          </div>

          <div className="text-white text-center text-base lg:text-lg font-normal mt-10 mb-10">
            Key Insights
          </div>

          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-stretch">
              {/* Mobile Experience */}
              <div className="relative h-full">
                <h3 className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#149EDD] px-2 text-sm md:text-base text-white whitespace-nowrap">
                  Mobile Experience
                </h3>
                <div className="border border-[#149EDD] rounded-lg pt-8 p-4 bg-transparent text-center text-white text-sm md:text-base leading-relaxed space-y-2 h-full flex flex-col justify-start">
                  <p>
                    Users need an interface that is intuitive and fast on mobile
                    so they can check and update inventory from any job site.
                  </p>
                </div>
              </div>

              {/* Sync Across Devices */}
              <div className="relative h-full">
                <h3 className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#149EDD] px-2 text-sm md:text-base text-white whitespace-nowrap">
                  Sync Across Devices
                </h3>
                <div className="border border-[#149EDD] rounded-lg pt-8 p-4 bg-transparent text-center text-white text-sm md:text-base leading-relaxed space-y-2 h-full flex flex-col justify-start">
                  <p>
                    Inventory data must stay consistent and up to date across
                    devices to prevent miscommunication and double entry.
                  </p>
                </div>
              </div>

              {/* Less Manual Work */}
              <div className="relative h-full">
                <h3 className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#149EDD] px-2 text-sm md:text-base text-white whitespace-nowrap">
                  Less Manual Work
                </h3>
                <div className="border border-[#149EDD] rounded-lg pt-8 p-4 bg-transparent text-center text-white text-sm md:text-base leading-relaxed space-y-2 h-full flex flex-col justify-start">
                  <p>
                    The more users have to type or remember, the more likely
                    they’ll forget or input incorrect info—automated processes
                    reduce mistakes.
                  </p>
                </div>
              </div>

              {/* Clear Tracking */}
              <div className="relative h-full">
                <h3 className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#149EDD] px-2 text-sm md:text-base text-white whitespace-nowrap">
                  Clear Tracking
                </h3>
                <div className="border border-[#149EDD] rounded-lg pt-8 p-4 bg-transparent text-center text-white text-sm md:text-base leading-relaxed space-y-2 h-full flex flex-col justify-start">
                  <p>
                    When tools and materials are tracked clearly by who used
                    what and when, it reduces loss and makes teams more
                    accountable for returns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20 lg:mb-40">
          {/* Section Header Line */}
          <div className="h-px w-20 bg-[#149EDD] mx-auto mb-4" />

          {/* Section Title */}
          <p className="text-white  text-center text-lg lg:text-xl mb-6">
            Empathize
          </p>
          <p className="text-white text-center text-sm md:text-base  mb-6">
            Uncovering what users need and where they struggle
          </p>

          <div className="bg-white rounded-lg flex items-center justify-center overflow-hidden max-w-xl mx-auto">
            <img
              src="/images/user.svg"
              alt="Logo"
              className="w-full h-full  object-contain"
            />
          </div>
        </div>

        <div className="mb-12">
          {/* Section Header Line */}
          <div className="h-px w-20 bg-[#149EDD] mx-auto mb-4" />

          {/* Section Title */}
          <p className="text-white text-center text-lg lg:text-xl  mb-6">
            Ideate
          </p>
          <p className="text-center text-white text-sm md:text-base mb-10">
            Based on user needs, priorities, and trade professional feedback, I
            proposed the following features to solve the most critical pain
            points.
          </p>

          {/* Three Column Feature Section */}
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Must Have */}
              <div className="relative">
                <h3 className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#149EDD] px-2 text-sm md:text-base text-white">
                  Must Have
                </h3>
                <div className="border border-[#149EDD] rounded-lg pt-8 p-4 bg-transparent text-center text-white text-sm md:text-base leading-relaxed space-y-2">
                  <p>Real-Time Inventory Management</p>
                  <p>Inventory Search &amp; Filter</p>
                  <p>Mobile &amp; Desktop Access</p>
                  <p>Secure Login System</p>
                </div>
              </div>

              {/* Should Have */}
              <div className="relative">
                <h3 className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#149EDD] px-2 text-sm md:text-base text-white">
                  Should Have
                </h3>
                <div className="border border-[#149EDD] rounded-lg pt-8 p-4 bg-transparent text-center text-white text-sm md:text-base leading-relaxed space-y-2">
                  <p>Check-Out / Check-In Validation</p>
                  <p>Order Request System</p>
                  <p>User Activity Logs</p>
                  <p>Employee &amp; Admin Roles</p>
                </div>
              </div>

              {/* Could Have */}
              <div className="relative">
                <h3 className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#149EDD] px-2 text-sm md:text-base text-white">
                  Could Have
                </h3>
                <div className="border border-[#149EDD] rounded-lg pt-8 p-4 bg-transparent text-center text-white text-sm md:text-base leading-relaxed space-y-2">
                  <p>QR Code Scanning</p>
                  <p>Low Stock Alerts</p>
                  <p>Analytics Dashboard</p>
                  <p>Offline Mode</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemFive;
