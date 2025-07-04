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
      <div className="w-full relative overflow-hidden pb-16 lg:pb-[800px] -mt-px -mb-px ">
        {/* Purple→Blue background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #07033B 20%, #1C0C7A 100%)",
          }}
        />

        {/* Header remains unchanged */}
        <div className="relative z-10">
          <Header />
        </div>

        <div className="relative mt-12 md:mt-24 lg:absolute left-0 right-0 px-4 lg:px-8 z-10">
          <div className="relative w-full  max-w-[1200px] mx-auto flex flex-col items-center  lg:block h-auto ">
            {/* Computer Image inside left card */}
            <motion.img
              src="/images/Group 43.gif"
              alt="Computer showing dashboard"
              className="
        w-full
        max-w-[500px]       /* xs screens cap raised */
        sm:max-w-[600px]    /* small screens cap raised */
        lg:absolute lg:w-[724px] lg:max-w-none
        object-contain
      "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />

            {/* Right gray card: full width on small, absolute overlap on large */}
            <motion.div
              className="
        w-full
        max-w-[500px]       /* xs screens cap raised */
        sm:max-w-[600px]    /* small screens cap raised */
        lg:absolute lg:right-0 lg:top-[160px] lg:w-[624px] lg:h-[421px] lg:max-w-none
        bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden
        mt-12 lg:mt-0
      "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img
                src="/images/pekophone.png"
                alt="Mobile app screenshot"
                className="
          w-full h-auto
          max-w-[500px]      /* xs screens cap raised */
          sm:max-w-[600px]   /* small screens cap raised */
          lg:w-[591px] lg:h-[391px] lg:max-w-none
          object-cover rounded
        "
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Section: gradient from #090F78 to #666666 */}
      <div className="w-full relative overflow-hidden -mb-px">
        {/* Gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #1C0C7A 0%, #666666 100%)",
          }}
        />

        {/* Content container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-16 py-16 ">
          <div className="flex flex-col md:flex-row items-center gap-y-0 md:gap-y-0 md:gap-x-16">
            {/* Details Card (transparent) */}
            <div className="rounded-lg md:w-1/2">
              {/* Logo placeholder */}
              <div className="mb-8">
                <img
                  src="/images/PekoPay 1.svg"
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
                PekoPay is a Vancouver-based fintech startup that recruited me
                as their first and only UX/UI Designer. I led the creation of
                their initial landing website to attract new customers, followed
                by a user-focused dashboard. With PekoPay, businesses benefit
                from seamless payment processing and earn cashback on every
                transaction.
              </p>
            </div>

            {/* Image Card */}
            <div className="bg-gray-300 rounded-lg p-4 md:w-1/2  flex items-center justify-center overflow-hidden">
              <img
                src="/images/Group 55.gif"
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
                <p className="text-sm sm:text-base lg:text-lg text-white/60 whitespace-pre-line">
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
