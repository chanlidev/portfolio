import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ACCENT = "#08BCA1";

const Glass = ({ children, className = "" }: any) => (
  <motion.div
    whileHover={{ scale: 1.12, y: -6 }}
    whileTap={{ scale: 0.995 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
    className={[
      "relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg",
      "transform-gpu will-change-transform",
      "hover:border-[rgba(8,188,161,0.6)] hover:shadow-[0_22px_70px_rgba(8,188,161,0.35)]",
      "hover:z-10", // rises above neighbors when scaled
      className,
    ].join(" ")}
  >
    {children}
  </motion.div>
);

const ProblemOne = () => {
  return (
    <div className="w-full px-2 sm:px-4 lg:px-6 py-12 lg:py-20  -mt-px -mb-px ">
      <div className="max-w-[1450px] mx-auto">
        <div className=" lg:mt-16 flex items-center justify-center mb-12 lg:mb-16">
          <div className="flex-1 h-px bg-[#08BCA1] max-w-sm"></div>
          <h2 className="mx-8 text-white text-base lg:text-lg font-normal">
            Design Process
          </h2>
          <div className="flex-1 h-px bg-[#08BCA1] max-w-sm"></div>
        </div>
        <div className="text-left mb-10 lg:mb-20">
          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-6xl mx-auto">
            This project highlighted my skills in digital product design and UX
            research. I partnered closely with the founding team, immersing
            myself in the world of small business finance to understand the
            unique motivations and challenges of our users.
            <br />
            <br />
            My approach incorporated research methodologies, including
            competitor analysis, stakeholder workshops, and usability testing
            with business owners. By uncovering pain points in existing payment
            solutions, I designed a user-centric experience that emphasized
            simplicity, transparency, and the key differentiator —{" "}
            <span className="text-[#08BCA1]">unlimited cashback</span>.
            <br />
            <br />
            Building on these insights, I developed a cohesive visual language
            and <span className="text-[#08BCA1]">design system</span> to ensure
            consistency across the landing page and dashboard. The result was an
            intuitive, modern interface that not only conveyed PekoPay’s value
            proposition clearly but also made it effortless for businesses to
            track transactions and rewards.
            <br />
            <br />
            The design process was a collaborative and iterative journey,
            balancing creative storytelling with the functional demands of
            financial tools, and it reflected my commitment to creating a
            product experience that exceeded user expectations while supporting
            PekoPay’s business goals.
          </p>
          <img
            src="/images/Group 122.png"
            alt="Process overview"
            className="mt-10 mb-32 lg:mb-60 w-full max-w-4xl mx-auto rounded-lg"
            loading="lazy"
          />
        </div>

        {/* Problem One Header */}
        <div className=" lg:mt-16 flex items-center justify-center mb-12 lg:mb-16">
          <div className="flex-1 h-px bg-[#08BCA1] max-w-sm"></div>
          <h2 className="mx-8 text-white text-base lg:text-lg font-normal">
            Problem One
          </h2>
          <div className="flex-1 h-px bg-[#08BCA1] max-w-sm"></div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-10 md:mb-20">
          <h1 className="text-white text-2xl lg:text-3xl font-normal leading-tight max-w-6xl mx-auto mb-10 lg:mb-12">
            While the promise of{" "}
            <span className="text-[#08BCA1]">unlimited cashback</span> is
            undeniably compelling, it's unclear how many businesses will
            actually switch from their existing payment systems to PekoPay
          </h1>

          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-7xl mx-auto">
            To validate market demand, I was tasked with designing the{" "}
            <span className="text-[#08BCA1]">landing pages</span> to capture
            leads and measure interest. At first, I had only a rough idea of the
            product, including how cashback would work, which currencies and
            countries we’d support, and what made PekoPay unique. I created a
            high-level draft based on limited info and refined it through{" "}
            <span className="text-[#08BCA1]">four rounds</span> of stakeholder
            feedback, updating the content as new product details emerged until
            the site clearly communicated our value proposition.
          </p>
        </div>

        {/* Design Evolution Process */}
        <div className="mb-10 lg:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Intro + Image */}
            <Glass className="p-2 md:p-4">
              <h3 className="text-white text-sm md:text-base lg:text-lg font-normal mb-6 text-center md:text-left ">
                Initial draft of the waitlist and landing pages
              </h3>
              <div className="flex flex-col items-center justify-center md:items-start rounded-lg overflow-hidden">
                <img
                  src="/images/landing1.svg"
                  alt="Initial draft"
                  className="w-[300px] md:w-[600px] object-contain rounded-lg"
                />
              </div>
            </Glass>

            {/* Right: Before / After Comparison */}
            <Glass className="p-2 md:p-4">
              <h3 className="text-white text-sm md:text-base lg:text-lg font-normal mb-6 text-left">
                Moved the countdown timer to the top to increase engagement
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                {[
                  ["Before", "/images/Waitlist Page.svg"],
                  ["After", "/images/Waitlist Page 1.svg"],
                ].map(([label, src]) => (
                  <div key={label}>
                    <p className="text-white/60 text-sm md:text-base font-normal mb-2 text-start">
                      {label}
                    </p>
                    <div className="rounded-lg overflow-hidden flex items-start justify-start">
                      <img
                        src={src}
                        alt={label}
                        className="w-[214px] md:w-[328px] object-contain rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Glass>
          </div>
        </div>

        <div className="mb-10 lg:mb-20">
          <Glass className="p-2 md:p-4">
            <h3 className="text-white text-sm md:text-base lg:text-lg font-normal mb-6 text-left">
              Switched to light color scheme to convey transparency
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {[
                ["Before", "/images/before.png"],

                ["After", "/images/pekodesk.png"],
              ].map(([label, src]) => (
                <div key={label}>
                  <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                    {label}
                  </p>
                  <div className="aspect-[16/11] rounded-lg overflow-hidden flex items-start justify-start ">
                    <img
                      src={src}
                      alt={label}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Glass>
        </div>

        <div className="mb-10 lg:mb-20">
          <Glass className="p-2 md:p-4">
            <h3 className="text-white text-sm md:text-base lg:text-lg font-normal mb-6 text-left">
              Replaced lengthy text with pagination to improve clarity
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {[
                ["Before", "/images/Group 104.svg"],

                ["After", "/images/after 2.gif"],
              ].map(([label, src]) => (
                <div key={label}>
                  <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                    {label}
                  </p>
                  <div className="rounded-lg overflow-hidden flex items-start justify-start">
                    <img
                      src={src}
                      alt={label}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Glass>
        </div>
        <div className="mb-10 lg:mb-20">
          <Glass className="p-2 md:p-4">
            <h3 className="text-white text-sm md:text-base lg:text-lg font-normal mb-6 text-left">
              Simplified the cashback calculator to eliminate confusion between
              monthly and annual rates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {[
                ["Before", "/images/before 3.gif"],

                ["After", "/images/after 3.gif"],
              ].map(([label, src]) => (
                <div key={label}>
                  <p className="text-white/60 text-sm md:text-base font-normal mb-2">
                    {label}
                  </p>
                  <div className=" rounded-lg overflow-hidden flex items-start justify-start">
                    <img
                      src={src}
                      alt={label}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                </div>
              ))}
            </div>
          </Glass>
        </div>

        {/* Final Results Section */}

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 lg:gap-12 mb-10">
          {/* Left Side: Image + Title */}
          <Glass className="p-2 md:p-4 md:col-span-1">
            <h3 className="text-white text-sm md:text-base lg:text-lg font-normal mb-6 text-left">
              Final Landing Page Design
            </h3>
            <div className="rounded-lg overflow-hidden flex items-start justify-start max-w-[900px]">
              <img
                src="/images/Group 59.gif"
                alt="After: cashback calculator"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </Glass>

          {/* Right Side: Image + Title */}
          <Glass className="p-2 md:p-4 md:col-span-1 ">
            <div
              className="col-span-1 bg-[#121E2A] p-2.5 mt-0 md:mt-10 aspect-[6.5/13.5] rounded-3xl overflow-hidden border border-white/10 bg-white/5
      flex items-center justify-center
      max-w-[200px] md:max-w-[200px] lg:max-w-[300px] mx-auto"
            >
              <img
                src="/images/phone.gif"
                alt="After: cashback calculator"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </Glass>
        </div>
      </div>
    </div>
  );
};

export default ProblemOne;
