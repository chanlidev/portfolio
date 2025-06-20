import React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Users, Clock, Target, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import ProblemONe from "@/components/caseOne/problemOne";
import ProblemTwo from "@/components/caseOne/problemTwo";
import ContactSection from "@/components/ContactSection";

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Top Section: matches Index layout exactly */}
      <div className="w-full relative overflow-hidden pb-16 lg:pb-[780px] -mb-px ">
        {/* Purple→Blue background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #24003C 0%, #090F78 100%)",
          }}
        />

        {/* Header remains unchanged */}
        <div className="relative z-10">
          <Header />
        </div>

        {/* Top images container: relative on small, absolute on large */}
        <div className="relative mt-12 lg:absolute lg:top-30 left-0 right-0 px-4 lg:px-8 z-10">
          {/* Inner container switches from block to flex-col on small */}
          <div className="relative w-full max-w-[1287px] mx-auto flex flex-col lg:block h-auto lg:h-[630px]">
            {/* Left white card: block on small, absolute on large */}

            {/* Computer Image inside left card */}
            <motion.img
              src="/Group 43.gif"
              alt="Computer showing dashboard"
              className="w-full lg:absolute  lg:w-[780px] lg:h-auto object-contain"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />

            {/* Right gray card: full width on small, absolute overlap on large */}
            <motion.div
              className="w-full lg:absolute lg:right-0 lg:top-[199px] bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden mt-16 lg:mt-0 lg:w-[624px] lg:h-[421px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img
                src="/pekophone.png"
                alt="Mobile app screenshot"
                className="w-full h-auto lg:w-[591px] lg:h-[391px] object-cover rounded"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Section: gradient from #090F78 to #666666 */}
      <div className="w-full relative overflow-hidden -mt-px">
        {/* Gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #090F78 0%, #666666 100%)",
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
                Payment Platform with Easy Invoicing, Merchant Cashback and Low
                Rates
              </h1>

              {/* At-A-Glance */}
              <h2 className="text-white text-sm sm:text-base lg:text-lg mb-6">
                At-A-Glance
              </h2>

              {/* Description */}
              <p className="text-white text-sm sm:text-base lg:text-lg leading-normal mb-16">
                Pekopay is a Vancouver-based fintech startup that recruited me
                as their first and only UX/UI Designer. I led the creation of
                their initial landing website to drive lead generation, followed
                by a user-focused dashboard. With Pekopay, businesses benefit
                from seamless payment processing and earn cashback on every
                transaction.
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
                  UX/UI Designer, <br />
                  Frontend Developer
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
                  June – August 2024{`\n`}Calgary, AB
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
                  90+ new sign-ups in the first month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <ProblemONe />
        <ProblemTwo />
        <ContactSection />
      </div>
    </>
  );
};

export default LandingPage;
