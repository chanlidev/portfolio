"use client";

import React from "react";
import Header from "@/components/Header";
import ContactSection from "@/components/ContactSection";
import AutoCarousel from "@/components/caseThree/auto";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GRADIENT = "linear-gradient(180deg, #07033B 40%, #430985 100%)";
const ACCENT = "#08BCA1";

// one place to control section spacing
const SECTION_Y = "py-16 lg:py-24";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const GraphicDesign: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Base background */}
      <div
        className="absolute inset-0 -z-30"
        style={{ background: GRADIENT }}
      />

      {/* Radial vignette */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 20%, rgba(8,188,161,0.18) 0%, rgba(8,188,161,0.08) 40%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* -------- SECTION 1 (Hero block) -------- */}
      <div
        className={`w-full relative overflow-hidden -mt-px -mb-px pb-16 lg:pb-24`}
      >
        {/* Header */}
        <div className="relative z-10">
          <Header />
        </div>

        <div className="relative mt-24 px-4 lg:px-8 z-10 flex justify-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full max-w-[1100px] mx-auto"
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
      <section className={`w-full relative overflow-hidden ${SECTION_Y}`}>
        <div className="relative z-10 max-w-[1450px] mx-auto px-4 lg:px-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
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

            <p className="mt-6 text-left text-white text-sm md:text-base">
              Crafted posters and postcards for Eastern Washington University’s
              Student Gallery to promote exhibitions and events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* -------- SECTION 3 -------- */}
      <section className={`w-full relative overflow-hidden ${SECTION_Y}`}>
        <div className="relative z-10 max-w-[1450px] mx-auto px-4 lg:px-16">
          <div className="rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
              <div className="rounded-lg overflow-hidden flex items-start justify-start max-w-[300px] mx-auto md:max-w-none md:mx-0">
                <img
                  src="/images/13.png"
                  alt="Screenshot 13"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>

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
      </section>

      {/* -------- SECTION 4 -------- */}
      <section className={`w-full relative overflow-hidden -mb-px`}>
        {/* distinct inner gradient for this block is fine */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #16074D 0%, #07033B 100%)",
          }}
        />

        <div
          className={`relative z-10 max-w-[1450px] mx-auto px-4 lg:px-16 ${SECTION_Y}`}
        >
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

          {/* nav inside the same vertical rhythm; small internal top gap is fine */}
          <div className="mt-16 lg:mt-24 flex justify-center gap-6">
            <Link to="/inventory-system">
              <Button
                className="h-10 w-28 rounded-xl text-sm font-medium text-[#061a14]"
                style={{
                  background: ACCENT,
                  boxShadow: "0 8px 30px rgba(8,188,161,0.35)",
                }}
              >
                &lt; Previous
              </Button>
            </Link>

            <button
              disabled
              className="h-10 px-5 w-28 rounded-xl text-sm text-white/60 border border-white/10 bg-white/5 backdrop-blur-lg cursor-not-allowed"
            >
              Next &gt;
            </button>
          </div>
        </div>
      </section>

      {/* -------- CONTACT -------- */}
      <div className="w-full">
        <ContactSection />
      </div>
    </div>
  );
};

export default GraphicDesign;
