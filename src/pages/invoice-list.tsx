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
            background: "linear-gradient(180deg, #07033B 0%, #4A044C 100%)",
          }}
        />

        {/* Header remains unchanged */}
        <div className="relative z-10">
          <Header />
        </div>

        {/* Top images container: relative on small, absolute on large */}
        <div className="relative mt-24 px-4 lg:px-8 z-10 flex justify-center">
          <motion.div
            className=" w-full max-w-[1000px] mx-auto bg-gray-300 p-2 md:p-4 lg:p-4 rounded-lg flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-16">
              <img
                src="/images/image 8.png"
                alt="Screenshot 8"
                className="w-full h-auto object-contain rounded"
              />
              <img
                src="/images/image 9.png"
                alt="Screenshot 9"
                className="w-full h-auto object-contain rounded"
              />
            </div>
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-16 py-16">
          <div className="flex flex-col md:flex-row items-center gap-y-0 md:gap-y-0 md:gap-x-16">
            <div className="grid grid-cols-2 gap-4 md:gap-16">
              <img
                src="/images/image 8.png"
                alt="Screenshot 8"
                className="w-full h-auto object-contain rounded"
              />
              <img
                src="/images/image 9.png"
                alt="Screenshot 9"
                className="w-full h-auto object-contain rounded"
              />
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
