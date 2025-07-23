"use client";

import React from "react";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import AutoCarousel from "@/components/caseThree/auto";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const InvoiceList: React.FC = () => {
  return (
    <>
      {/* -------- SECTION 1 -------- */}
      <div className="w-full relative overflow-hidden -mb-px">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #07033B 0%, #4A044C 100%)",
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
            className="w-full max-w-[1000px] mx-auto"
          >
            <div className="bg-gray-300 p-2 md:p-4 lg:p-4 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-16">
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
            background: "linear-gradient(180deg, #4A044C 0%, #666666 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-16 py-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="md:mb-10"
          >
            <div className="bg-gray-300 p-2 md:p-4 lg:p-4 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-16 items-center">
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
              Hero visuals showcasing initial concepts and layout explorations
              for the project.
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-16 py-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="md:mb-10"
          >
            <div className="rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-16">
                <div className="sm:col-span-1">
                  <img
                    src="/images/13.png"
                    alt="Screenshot 13"
                    className="w-full h-auto object-contain rounded"
                  />
                </div>
                <div className="sm:col-span-2">
                  <AutoCarousel
                    images={["/images/11.png", "/images/12.png"]}
                    interval={2500}
                    className="w-full h-auto object-contain rounded"
                  />
                </div>
              </div>
            </div>
            <p className="mt-6 text-left text-white text-sm md:text-base">
              Hero visuals showcasing initial concepts and layout explorations
              for the project.
            </p>
          </motion.div>
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-16 py-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="md:mb-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-16">
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
                    "/images/1.png",
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
              Hero visuals showcasing initial concepts and layout explorations
              for the project.
            </p>
          </motion.div>
        </div>
      </div>

      {/* -------- CONTACT -------- */}
      <div className="w-full">
        <ContactSection />
      </div>
    </>
  );
};

export default InvoiceList;
