"use client";

import React from "react";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import AutoCarousel from "@/components/caseThree/auto";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const GraphicDesign: React.FC = () => {
  return (
    <>
      {/* -------- SECTION 1 -------- */}
      <div className="w-full relative overflow-hidden -mb-px">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #07033B 20%, #1C0C7A 100%)",
          }}
        />
        <div className="relative z-10">
          <Header />
        </div>

        <div className="relative mt-24 px-4 lg:px-8 z-10 flex justify-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full max-w-[1200px] mx-auto"
          >
            <div className="bg-gray-300 p-2 md:p-4 lg:p-4 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
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
          </motion.div>
        </div>
      </div>

      {/* -------- SECTION 2 -------- */}
      <div className="w-full relative overflow-hidden -mb-px">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #1C0C7A 0%, #666666 100%)",
          }}
        />

        <div className="relative z-10 max-w-[1450px] mx-auto px-4 lg:px-16 py-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="md:mb-20"
          >
            <div className="bg-gray-300 p-2 md:p-4 lg:p-4 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 items-center">
                <img
                  src="/images/image 10.png"
                  alt="Screenshot 10"
                  className="w-full h-auto object-contain rounded"
                />
                <img
                  src="/images/image 12.png"
                  alt="Screenshot 12"
                  className="w-full h-auto object-contain rounded"
                />
                <img
                  src="/images/image 11.png"
                  alt="Screenshot 11"
                  className="w-full h-auto object-contain rounded"
                />
              </div>
            </div>
            {/* Description ABOVE gray box */}
            <p className="mt-6 text-left text-white text-sm md:text-base">
              Crafted posters and postcards for Eastern Washington University’s
              Student Gallery to promote exhibitions and events.
            </p>
          </motion.div>
        </div>
      </div>

      {/* -------- SECTION 3 -------- */}
      <div className="w-full relative overflow-hidden -mb-px">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #666666 0%, #666666 100%)",
          }}
        />

        <div className="relative z-10 max-w-[1450px] mx-auto px-4 lg:px-16 py-16 md:mb-20">
          <div className="rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
              <div className="rounded-lg overflow-hidden flex items-start justify-start max-w-[300px] mx-auto md:max-w-none md:mx-0">
                <img
                  src="/images/13.png"
                  alt="Screenshot 13"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>

              {/* Right (carousel) */}

              <div className="rounded-lg overflow-hidden flex items-start justify-start">
                <AutoCarousel
                  images={["/images/11.png", "/images/12.png"]}
                  interval={2500}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>

          <p className="mt-6 text-left text-white text-sm md:text-base">
            Redesigned the logo and promotional poster for Omnia Dental Clinic
            in Edmonton, AB.
          </p>
        </div>
      </div>

      {/* -------- SECTION 4 -------- */}
      <div className="w-full relative overflow-hidden -mb-px">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #666666 0%, #07033B 100%)",
          }}
        />

        <div className="relative z-10 max-w-[1450px] mx-auto px-4 lg:px-16 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            <div className="relative aspect-[3/4]">
              <img
                src="/images/14.png"
                alt="Screenshot 14"
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>

            <div className="relative aspect-[3/4]">
              <AutoCarousel
                images={[
                  "/images/2.png",
                  "/images/3.png",
                  "/images/4.png",
                  "/images/5.png",
                  "/images/6.png",
                ]}
                interval={2500}
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
          <p className="mt-6 text-left text-white text-sm md:text-base">
            Created a new product catalog for PT Langit Biru showcasing
            best-selling products.
          </p>
        </div>
        <div className="mt-8 lg:mt-16 mb-10 lg:mb-20 flex justify-center gap-20">
          <Link to="/inventory-system">
            <Button
              className={cn(
                "h-9 w-32 flex items-center justify-center",
                "border border-[#1B64FF] text-white text-sm font-normal",
                "bg-[#1C0C7A]",
                "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
                "backdrop-blur-sm transition-all duration-200",
                "hover:border-2 hover:border-[#1B64FF]",
                "hover:bg-[#1C0C7A]",
                "hover:text-white hover:shadow-lg hover:shadow-[#08BCA1]/20",
              )}
            >
              &lt; Previous
            </Button>
          </Link>

          <Button
            disabled
            className={cn(
              "h-9 w-32 flex items-center justify-center",
              "border border-[#1B64FF] text-white text-sm font-normal",
              "bg-[#1C0C7A]",
              "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
              "backdrop-blur-sm transition-all duration-200",
              "opacity-50 cursor-not-allowed",
            )}
          >
            Next &gt;
          </Button>
        </div>
      </div>

      {/* -------- CONTACT -------- */}
      <div className="w-full">
        <ContactSection />
      </div>
    </>
  );
};

export default GraphicDesign;
