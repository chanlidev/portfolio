import React, { useState } from "react";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import { Plus, Minus } from "lucide-react";

interface Section {
  title: string;
  content: string;
}

const sections: Section[] = [
  {
    title: "My Background",
    content: `I hold an MBA from Eastern Washington University and have spent over five years in e-commerce as a data analyst and account manager. This experience gives me a strong understanding of how good design supports business goals. Growing up, I was always interested in design and art. While studying at EWU, I worked at the student gallery, creating posters and postcards and helping to host events with local artists. At the time, I didn’t consider design a serious career path. That changed in early 2023 when I began my journey at SAIT, which quickly sparked my passion for UX design. Since then, I’ve pivoted into this field and realized how much I love it. My goal is to keep growing as a designer and take on projects that make a real impact.`,
  },
  {
    title: "Design Philosophy",
    content: `With experience in both business and tech, I center my designs on real user needs, minimize cognitive load, and craft simple, intuitive interfaces. I believe every element on the screen should serve a clear purpose, guiding users smoothly toward their goals without distraction. Every feature must address a genuine pain point. By aligning user objectives with business goals, I create solutions that not only feel effortless but also deliver tangible value.`,
  },
  {
    title: "Things I Love",
    content: `I love to travel and experience different cultures, which often inspire my design thinking. When I’m not designing, you’ll probably find me binge-watching TV shows or soaking up the sun at the beach. I’m always up for a swim!`,
  },
];

const AutoPayment: React.FC = () => {
  // Track open state for each section; allows multiple open at once
  const [openSections, setOpenSections] = useState<boolean[]>(
    sections.map(() => false),
  );

  const toggle = (index: number) => {
    setOpenSections((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <>
      {/* Top Section */}
      <div className="w-full relative overflow-hidden pb-16 lg:pb-24 -mb-px">
        {/* Solid background color */}
        <div className="absolute inset-0 bg-[#07033B]" />

        {/* Header */}
        <div className="relative z-10">
          <Header />
        </div>

        {/* Static Intro */}
        <div className="relative mt-24 px-4 lg:px-8 z-10 max-w-3xl mx-auto text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white text-xl sm:text-2xl lg:text-3xl font-normal  mb-4">
              Hi, I’m Chan 😊
            </h1>
            <p className="text-white text-base lg:text-lg font-normal leading-relaxed">
              I’m a SAIT alum with a diploma in Software Development and a
              passion for crafting seamless, joyful user experiences. I designed
              and coded this portfolio myself using Vite, React, and TypeScript.
              <br />
              Currently, I work as a UX/UI Designer at PekoPay, where I blend
              thoughtful design with business insight to simplify payment
              workflows.
            </p>
          </motion.div>
        </div>

        {/* Accordion */}
        <div className="relative mt-12 px-4 lg:px-8 z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {sections.map((section, idx) => (
              <div
                key={section.title}
                className="border-b border-gray-800 py-4"
              >
                <button
                  className="w-full flex justify-between items-center text-white text-xl font-normal"
                  onClick={() => toggle(idx)}
                >
                  <span>{section.title}</span>
                  {openSections[idx] ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                {openSections[idx] && (
                  <p className="mt-6 mb-10 text-white text-base leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <ContactSection />
    </>
  );
};

export default AutoPayment;
