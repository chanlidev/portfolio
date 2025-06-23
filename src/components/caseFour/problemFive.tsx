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

        <div className="mb-10 lg:mb-20">
          {/* Section Header Line */}
          <div className="h-px w-20 bg-[#0D82B8] mx-auto mb-4" />

          {/* Section Title */}
          <p className="text-white text-center text-base lg:text-lg mb-6">
            User Research
          </p>

          {/* Stakeholders & Users - one line */}
          <div className="flex justify-between text-white text-sm md:text-base  font-normal max-w-xl mx-auto mb-10">
            <span>Stakeholders: Office Admins</span>
            <span>Primary Users: Trade Professionals</span>
          </div>

          {/* Pain Points Section */}
          <div className="text-white text-center text-base lg:text-lg font-normal mb-6">
            Pain Points
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto px-4 text-center">
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
            <div className="border border-[#0D82B8] rounded-lg p-4 text-white text-sm md:text-base leading-relaxed bg-transparent">
              Manual ordering process when stock is low
            </div>
          </div>

          <div className="text-white text-center text-base lg:text-lg font-normal mt-10 mb-6">
            Key Insights
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4 text-center">
            <div className="border border-[#0D82B8] rounded-lg p-4 text-white text-sm md:text-base leading-relaxed bg-transparent">
              <h3 className="text-base lg:text-lg text-white text-center mb-4">
                Mobile Experience
              </h3>
              <p>
                Users need an interface that is intuitive and fast on mobile so
                they can check and update inventory from any job site.
              </p>
            </div>
            <div className="border border-[#0D82B8] rounded-lg p-4 text-white text-sm md:text-base leading-relaxed bg-transparent">
              <h3 className="text-base lg:text-lg text-white text-center mb-4">
                Sync Across Devices
              </h3>
              <p>
                Inventory data must stay consistent and up to date across
                devices to prevent miscommunication and double entry.
              </p>
            </div>
            <div className="border border-[#0D82B8] rounded-lg p-4 text-white text-sm md:text-base leading-relaxed bg-transparent">
              <h3 className="text-base lg:text-lg text-white text-center mb-4">
                Less Manual Work
              </h3>
              <p>
                The more users have to type or remember, the more likely it is
                they’ll forget or input incorrect info, automated process
                reduces mistakes.
              </p>
            </div>
            <div className="border border-[#0D82B8] rounded-lg p-4 text-white text-sm md:text-base leading-relaxed bg-transparent">
              <h3 className="text-base lg:text-lg text-white text-center mb-4">
                Clear Tracking
              </h3>
              <p>
                When tools and materials are tracked clearly by who used what
                and when, it reduces loss and makes teams more accountable for
                returns.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-10 lg:mb-20">
          {/* Section Header Line */}
          <div className="h-px w-20 bg-[#0D82B8] mx-auto mb-4" />

          {/* Section Title */}
          <p className="text-white text-center text-base lg:text-lg mb-6">
            Empathize
          </p>
          <p className="text-white text-center text-sm md:text-base mb-6">
            Uncovering what users need and where they struggle
          </p>

          <div className="bg-white rounded-lg flex items-center justify-center overflow-hidden max-w-xl mx-auto">
            <img
              src="/user.svg"
              alt="Logo"
              className="w-full h-full  object-contain"
            />
          </div>
        </div>
        <div className="mb-10">
          {/* Section Header Line */}
          <div className="h-px w-20 bg-[#0D82B8] mx-auto mb-4" />

          {/* Section Title */}
          <p className="text-white text-center text-sm md:text-base lg:text-lg md:text-lg mb-6">
            Ideate
          </p>
          <p className="text-center text-white text-sm md:text-base mb-6">
            Based on user needs, priorities, and trade professional feedback, I
            proposed the following features to solve the most critical pain
            points.
          </p>

          {/* Three Column Feature Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
            {/* Must Have */}
            <div className="border border-[#0D82B8] rounded-lg p-4 bg-transparent text-center text-white text-sm md:text-base leading-relaxed space-y-2">
              <h3 className="text-base lg:text-lg text-white text-center mb-4">
                Must Have
              </h3>
              <p>Real-Time Inventory Management</p>
              <p>Inventory Search & Filter</p>
              <p>Mobile & Desktop Access</p>
              <p>Employee & Admin Roles</p>
              <p>Secure Login System</p>
            </div>

            {/* Should Have */}
            <div className="border border-[#0D82B8] rounded-lg p-4 bg-transparent text-white text-center text-sm md:text-base leading-relaxed space-y-2">
              <h3 className="text-base lg:text-lgtext-white text-center mb-4">
                Should Have
              </h3>
              <p>Check-Out / Check-In Validation</p>
              <p>Order Request System</p>
              <p>User Activity Logs</p>
            </div>

            {/* Could Have */}
            <div className="border border-[#0D82B8] rounded-lg p-4 bg-transparent text-white text-center text-sm md:text-base leading-relaxed space-y-2">
              <h3 className="text-base lg:text-lg text-white text-center mb-4">
                Could Have
              </h3>
              <p>QR Code Scanning</p>
              <p>Low Stock Alerts</p>
              <p>Analytics Dashboard</p>
              <p>Offline Mode</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemFive;
