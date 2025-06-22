import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FeaturedWork = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.section
      className="w-full bg-gradient-to-b from-[#430985] to-[#07033B] px-2 sm:px-4 lg:px-6 py-12 lg:py-20 -mt-px -mb-px"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="max-w-[1450px] mx-auto">
        {/* Section Header */}
        <div className=" lg:mt-16 flex items-center justify-center mb-12 lg:mb-16">
          <div className="flex-1 h-px bg-[#08BCA1] max-w-sm"></div>
          <h2 className="mx-8 text-white text-base lg:text-lg font-normal">
            Featured Work
          </h2>
          <div className="flex-1 h-px bg-[#08BCA1] max-w-sm"></div>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
        >
          {/* Project 1 - PekoPay Landing */}
          <motion.div
            className="group relative overflow-hidden border border-[#1B64FF] rounded-lg backdrop-blur-sm"
            variants={cardVariants}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(48.7% 100% at 50% 100%, #24003C 0%, #090F78 100%)",
              }}
            />
            <div className="relative p-6 lg:p-8 h-full flex flex-col">
              {/* Project Image/Preview */}
              <div className="flex-1 mb-6 rounded-lg py-4 px-0 min-h-[200px] lg:min-h-[280px] flex items-center justify-between">
                <img
                  src="/peko.svg"
                  alt="Landing Preview"
                  className="w-4/5 h-auto object-contain rounded hover:rotate-12"
                />
                <img
                  src="/loginphone.svg"
                  alt="Login Preview"
                  className="w-1/5 h-auto object-contain rounded hover:-rotate-12"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <a
                    href="https://pekopay.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span className="text-[#08BCA1] text-sm lg:text-base">
                      PekoPay
                    </span>
                    <svg
                      className="w-4 h-4 text-[#08BCA1]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 6.25H5.83333C5.50181 6.25 5.18387 6.3817 4.94945 6.61612C4.71503 6.85054 4.58333 7.16848 4.58333 7.5V14.1667C4.58333 14.4982 4.71503 14.8161 4.94945 15.0505C5.18387 15.285 5.50181 15.4167 5.83333 15.4167H12.5C12.8315 15.4167 13.1495 15.285 13.3839 15.0505C13.6183 14.8161 13.75 14.4982 13.75 14.1667V10M10.4167 9.58333L15.72 4.28M12.0833 3.75H16.25V7.91667"
                      />
                    </svg>
                  </a>
                </div>

                <h3 className="text-white text-2xl lg:text-3xl leading-tight">
                  Designing the Entire Frontend from Landing Page to Dashboard
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2 text-[#A3ACB1] text-sm">
                    <span className="px-3 py-1 border border-[#A3ACB1]/30 rounded-md bg-[#A3ACB1]/10">
                      From 0 to 1
                    </span>
                    <span className="px-3 py-1 border border-[#A3ACB1]/30 rounded-md bg-[#A3ACB1]/10">
                      Fintech
                    </span>
                    <span className="px-3 py-1 border border-[#A3ACB1]/30 rounded-md bg-[#A3ACB1]/10">
                      Payment
                    </span>
                    <span className="px-3 py-1 border border-[#A3ACB1]/30 rounded-md bg-[#A3ACB1]/10">
                      Responsive Web
                    </span>
                  </div>
                  <Link to="/landing-page-design">
                    <Button
                      className={cn(
                        "w-24 h-10 border border-[#08BCA1] text-white text-sm font-normal flex-shrink-0",
                        "bg-gradient-to-r from-[#0A23AF] to-[#147FA4]",
                        "hover:from-[#0A23AF]/90 hover:to-[#147FA4]/90",
                        "hover:shadow-lg hover:shadow-[#08BCA1]/20",
                        "hover:border-2",
                        "transition-all duration-200",
                        "backdrop-blur-sm",
                      )}
                    >
                      View
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 2 - PekoPay Dashboard */}
          <motion.div
            className="group relative overflow-hidden border border-[#FF715C] rounded-lg backdrop-blur-sm"
            variants={cardVariants}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, #64392F 10.83%, #3E1C31 89.17%)",
              }}
            />
            <div className="relative p-6 lg:p-8 h-full flex flex-col">
              <div className="flex-1 mb-6 bg-[#CAD4DB] rounded-lg p-1 min-h-[200px] lg:min-h-[280px] flex items-center justify-center">
                <div className="w-full h-full bg-white rounded overflow-hidden flex items-center justify-center">
                  <img
                    src="/payment.gif"
                    alt="Payment"
                    className="w-full h-full object-overflow"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <a
                    href="https://pekopay.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span className="text-[#08BCA1] text-sm lg:text-base">
                      PekoPay
                    </span>
                    <svg
                      className="w-4 h-4 text-[#08BCA1]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 6.25H5.83333C5.50181 6.25 5.18387 6.3817 4.94945 6.61612C4.71503 6.85054 4.58333 7.16848 4.58333 7.5V14.1667C4.58333 14.4982 4.71503 14.8161 4.94945 15.0505C5.18387 15.285 5.50181 15.4167 5.83333 15.4167H12.5C12.8315 15.4167 13.1495 15.285 13.3839 15.0505C13.6183 14.8161 13.75 14.4982 13.75 14.1667V10M10.4167 9.58333L15.72 4.28M12.0833 3.75H16.25V7.91667"
                      />
                    </svg>
                  </a>
                </div>

                <h3 className="text-white text-2xl lg:text-3xl leading-tight">
                  Simplifying the Automated Payment Setup Workflow
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2 text-[#A3ACB1] text-sm">
                    <span className="px-3 py-1 border border-[#A3ACB1]/30 rounded-md bg-[#A3ACB1]/10">
                      From 5 Steps to 2
                    </span>
                    <span className="px-3 py-1 border border-[#A3ACB1]/30 rounded-md bg-[#A3ACB1]/10">
                      UX/UI Design
                    </span>
                    <span className="px-3 py-1 border border-[#A3ACB1]/30 rounded-md bg-[#A3ACB1]/10">
                      Responsive Web
                    </span>
                  </div>
                  <Link to="/automated-payment">
                    <Button
                      className={cn(
                        "w-24 h-10 border border-[#FF715C] text-white text-sm font-normal flex-shrink-0",
                        "bg-gradient-to-r from-[#FF34A4] to-[#FF9937]",
                        "hover:from-[#FF34A4]/90 hover:to-[#FF9937]/90",
                        "hover:shadow-lg hover:shadow-[#08BCA1]/20",
                        "hover:border-2",
                        "transition-all duration-200",
                        "backdrop-blur-sm",
                      )}
                    >
                      View
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 3 - Coming Soon */}
          <motion.div
            className="group relative overflow-hidden border border-[#FF31AC] rounded-lg backdrop-blur-sm"
            variants={cardVariants}
          >
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, #4A044C 0%, #20083A 76%)",
              }}
            />
            <div className="relative p-6 lg:p-8 h-full flex flex-col">
              <div className="flex-1 mb-6 bg-[#CAD4DB] rounded-lg p-1 min-h-[200px] lg:min-h-[280px] flex items-center justify-center">
                <div className="w-full h-full bg-white rounded overflow-hidden flex items-center justify-center">
                  <img
                    src="/invoice.gif"
                    alt="Payment"
                    className="w-full h-full object-overflow"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <a
                    href="https://pekopay.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span className="text-[#08BCA1] text-sm lg:text-base">
                      PekoPay
                    </span>
                    <svg
                      className="w-4 h-4 text-[#08BCA1]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 6.25H5.83333C5.50181 6.25 5.18387 6.3817 4.94945 6.61612C4.71503 6.85054 4.58333 7.16848 4.58333 7.5V14.1667C4.58333 14.4982 4.71503 14.8161 4.94945 15.0505C5.18387 15.285 5.50181 15.4167 5.83333 15.4167H12.5C12.8315 15.4167 13.1495 15.285 13.3839 15.0505C13.6183 14.8161 13.75 14.4982 13.75 14.1667V10M10.4167 9.58333L15.72 4.28M12.0833 3.75H16.25V7.91667"
                      />
                    </svg>
                  </a>
                </div>

                <h3 className="text-white text-2xl lg:text-3xl leading-tight">
                  Crafting the Invoice List with Inline Action Controls
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2 text-[#A3ACB1] text-sm">
                    <span className="px-3 py-1 border border-[#A3ACB1]/30 rounded-md bg-[#A3ACB1]/10">
                      From 4 Steps to 1
                    </span>
                    <span className="px-3 py-1 border border-[#A3ACB1]/30 rounded-md bg-[#A3ACB1]/10">
                      UX/UI Design
                    </span>
                    <span className="px-3 py-1 border border-[#A3ACB1]/30 rounded-md bg-[#A3ACB1]/10">
                      Responsive Web
                    </span>
                  </div>
                  <Link to="/invoice-list">
                    <Button
                      className={cn(
                        "w-24 h-10 border border-[#FF715C] text-white text-sm font-normal flex-shrink-0",
                        "bg-gradient-to-r from-[#FF34A4] to-[#FF9937]",
                        "hover:from-[#FF34A4]/90 hover:to-[#FF9937]/90",
                        "hover:shadow-lg hover:shadow-[#08BCA1]/20",
                        "hover:border-2",
                        "transition-all duration-200",
                        "backdrop-blur-sm",
                      )}
                    >
                      View
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 4 - Coming Soon */}
          <motion.div
            className="group relative overflow-hidden border border-[#0D82B8] rounded-lg backdrop-blur-sm"
            variants={cardVariants}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(284deg, #004B78 0%, #020C38 98.11%)",
              }}
            />
            <div className="relative p-6 lg:p-8 h-full flex flex-col">
              {/* Project Image/Preview */}
              <div className="flex-1 mb-6 rounded-lg py-4 px-0 min-h-[200px] lg:min-h-[280px] flex justify-center items-center space-x-2">
                <img
                  src="/ttphone.svg"
                  alt="Login Preview"
                  className="w-1/5 h-auto object-contain rounded -rotate-12 hover:rotate-12"
                />
                <img
                  src="/TTdesk.svg"
                  alt="Landing Preview"
                  className="w-4/5 h-auto object-contain rounded rotate-12 hover:-rotate-12"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#08BCA1] text-sm lg:text-base">
                    TradeTrack
                  </span>
                </div>

                <h3 className="text-white text-2xl lg:text-3xl leading-tight">
                  Building an Inventory System for the Trades Industry
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2 text-[#A3ACB1] text-sm">
                    <span className="px-3 py-1 border border-[#A3ACB1]/30 rounded-md bg-[#A3ACB1]/10">
                      Inventory Management
                    </span>
                    <span className="px-3 py-1 border border-[#A3ACB1]/30 rounded-md bg-[#A3ACB1]/10">
                      Mobile App
                    </span>
                    <span className="px-3 py-1 border border-[#A3ACB1]/30 rounded-md bg-[#A3ACB1]/10">
                      Web App
                    </span>
                  </div>
                  <Link to="/inventory-system">
                    <Button
                      className={cn(
                        "w-24 h-10 border border-[#08BCA1] text-white text-sm font-normal flex-shrink-0",
                        "bg-gradient-to-r from-[#0A23AF] to-[#147FA4]",
                        "hover:from-[#0A23AF]/90 hover:to-[#147FA4]/90",
                        "hover:shadow-lg hover:shadow-[#08BCA1]/20",
                        "hover:border-2",
                        "transition-all duration-200",
                        "backdrop-blur-sm",
                      )}
                    >
                      View
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedWork;
