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

const AutoPayment: React.FC = () => {
  return (
    <>
      {/* Top Section: matches Index layout exactly */}
      <div className="w-full relative overflow-hidden pb-16 lg:pb-32 -mb-px">
        {/* Purple→Blue background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #24003C 0%, #64392F 100%)",
          }}
        />

        {/* Header remains unchanged */}
        <div className="relative z-10">
          <Header />
        </div>

        {/* Top images container: relative on small, absolute on large */}
        <div className="relative mt-24 px-4 lg:px-8 z-10 flex justify-center">
          <motion.div
            className=" w-full max-w-[1000px] bg-gray-300 p-4 rounded-lg flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              src="/payment.gif"
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
            background: "linear-gradient(180deg, #64392F 0%, #666666 100%)",
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
                No More Chasing Late Payments: Two-Step Recurring Payment Setup
              </h1>

              {/* At-A-Glance */}
              <h2 className="text-white text-sm sm:text-base lg:text-lg mb-6">
                At-A-Glance
              </h2>

              {/* Description */}
              <p className="text-white text-sm sm:text-base lg:text-lg leading-normal mb-16">
                By adding a recurring-payment feature, merchants get paid
                automatically and on time. As Pekopay’s sole UX/UI Designer, I
                redesigned the payer's detail page and implemented “Add Payment
                Method” feature, refined original four-step flow into a
                streamlined two-step process. This redesign cut user clicks in
                half and accelerated the entire setup.
              </p>
            </div>

            {/* Image Card */}
            <div className="bg-gray-300 rounded-lg p-0 lg:p-2 w-full xl:w-[650px] h-[300px] lg:h-[400px] flex items-center justify-center overflow-hidden flex-shrink-0">
              <img
                src="/Group 55.gif"
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
                  UX/UI Designer, Frontend Developer
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
                  1 CTO{`\n`}1 Designer{`\n`}2 Developers
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
                  January – March 2025{`\n`}Calgary, AB
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
                  Setup process reduced from 4 steps to 2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <ProblemThree />
        <ProblemTwo />
        <ContactSection />
      </div>
    </>
  );
};

export default AutoPayment;
