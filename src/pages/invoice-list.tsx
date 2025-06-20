import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Users, Clock, Target, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import ProblemONe from "@/components/caseOne/problemOne";
import ProblemTwo from "@/components/caseOne/problemTwo";
import ProblemThree from "@/components/caseTwo/problem";
import ContactSection from "@/components/ContactSection";
import Solution from "@/components/caseTwo/solution";
import ProblemFour from "@/components/caseThree/problemFour";
import SolutionFour from "@/components/caseThree/solutionFour";

const InvoiceList: React.FC = () => {
  return (
    <>
      {/* Top Section: matches Index layout exactly */}
      <div className="w-full relative overflow-hidden pb-16 lg:pb-32 -mb-px">
        {/* Purple→Blue background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #24003C 0%, #4A044C 100%)",
          }}
        />

        {/* Header remains unchanged */}
        <div className="relative z-10">
          <Header />
        </div>

        {/* Top images container: relative on small, absolute on large */}
        <div className="relative mt-24 px-4 lg:px-8 z-10 flex justify-center">
          <motion.div
            className=" w-full max-w-[1000px] bg-gray-300 p-2 md:p-4 lg:p-4 rounded-lg flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/invoice.gif"
              alt="Mobile app screenshot"
              className="w-full h-auto  object-cover rounded"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Section: gradient from #090F78 to #666666 */}
      <div className="w-full relative overflow-hidden ">
        {/* Gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #4A044C 0%, #666666 100%)",
          }}
        />

        {/* Content container */}
        <div className="relative z-10 max-w-[1450px] mx-auto px-4 lg:px-16 py-16 lg:py-24">
          <div className="flex flex-col xl:flex-row items-center gap-y-0 xl:gap-y-0 xl:gap-x-16">
            {/* Details Card (transparent) */}
            <div className="rounded-lg flex-1 xl:max-w-2xl">
              {/* Logo placeholder */}
              <div className="mb-8">
                <img
                  src="/PekoPay 1.svg"
                  alt="Logo"
                  className="w-[120px] h-auto object-cover rounded"
                />
              </div>

              {/* Title */}
              <h1 className="text-white text-2xl lg:text-3xl mb-12 leading-normal">
                Smarter Invoicing with Contextual Actions & Instant Previews
              </h1>

              {/* At-A-Glance */}
              <h2 className="text-white text-sm sm:text-base lg:text-lg mb-6">
                At-A-Glance
              </h2>

              {/* Description */}
              <p className="text-white text-sm sm:text-base lg:text-lg leading-normal mb-16">
                I redesigned the invoice list page to support a smoother payment
                workflow. Based on the status of each invoice, users can take
                relevant actions such as editing, finalizing, sending, deleting,
                or marking invoices as paid, refunded, or uncollectable. A
                collapsible preview allows users to scan key details without
                leaving the page, making invoice management faster and more
                efficient.
              </p>
            </div>

            {/* Image Card */}
            <div className="bg-gray-300 rounded-lg p-0 lg:p-2 w-full xl:w-[650px] h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden flex-shrink-0">
              <img
                src="/Group 79.gif"
                alt="PekoPay application screenshots"
                className="h-full max-w-full object-contain"
              />
            </div>
          </div>

          {/* Full-width Info Grid (centered, with vertical bars) */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* My Role */}
            <div className="flex items-start space-x-4">
              <Briefcase className="w-6 h-6 text-white/60 flex-shrink-0" />
              <div>
                <h3 className="text-sm sm:text-base lg:text-lg text-white/60 mb-2">
                  My Role
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-white/60">
                  UX/UI Designer
                </p>
              </div>
            </div>
            {/* Team */}
            <div className="flex items-start space-x-4">
              <Users className="w-6 h-6 text-white/60 flex-shrink-0" />
              <div>
                <h3 className="text-sm sm:text-base lg:text-lg text-white/60 mb-2">
                  Team
                </h3>
                <p className="text-sm lg:text-base font-inter text-white/60 whitespace-pre-line">
                  1 CTO{`\n`}1 Designer{`\n`}1 Developer
                </p>
              </div>
            </div>
            {/* Timeline */}
            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-white/60 flex-shrink-0" />
              <div>
                <h3 className="text-sm sm:text-base lg:text-lg text-white/60 mb-2">
                  Timeline
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-white/60 whitespace-pre-line">
                  January 2025{`\n`}Calgary, AB
                </p>
              </div>
            </div>
            {/* Impact */}
            <div className="flex items-start space-x-4">
              <Target className="w-6 h-6 text-white/60 flex-shrink-0" />
              <div>
                <h3 className="text-sm sm:text-base lg:text-lg text-white/60 mb-2">
                  Impact
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-white/60">
                  Improved efficiency in managing invoices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <ProblemFour />
        <SolutionFour />
        <ContactSection />
      </div>
    </>
  );
};

export default InvoiceList;
