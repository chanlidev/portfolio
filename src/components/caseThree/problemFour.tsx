import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ACCENT = "#08BCA1";

const Glass = ({ children, className = "" }: any) => (
  <motion.div
    whileHover={{ scale: 1.08, y: -6 }}
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

const ProblemFour = () => {
  return (
    <div className="w-full px-2 sm:px-4 lg:px-6 py-12">
      <div className="max-w-[1450px] mx-auto">
        <div className=" lg:mt-16 flex items-center justify-center mb-12 lg:mb-16">
          <div className="flex-1 h-px bg-[#08BCA1] max-w-sm"></div>
          <h2 className="mx-8 text-white text-base lg:text-lg font-normal">
            Design Process
          </h2>
          <div className="flex-1 h-px bg-[#08BCA1] max-w-sm"></div>
        </div>
        <div className="text-left mb-10 lg:mb-20">
          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-5xl mx-auto">
            For the recurring payments project, I immersed myself in a design
            process that required a holistic understanding of the existing payer
            experience.
            <br />
            <br />
            To seamlessly integrate the new “Add Payment Method” flow, I
            conducted comprehensive research, mapping the original five-step
            process and identifying pain points. Beyond the screens, I explored
            the operational dynamics of merchant payment habits, late-payment
            patterns, and business priorities around cash flow.
            <br />
            <br />
            This research informed key design decisions, ensuring the new
            two-step flow aligned with merchant needs and reduced friction in
            setup. By running an iterative design process, I was able to
            continuously test, refine, and deliver while staying focused on our
            original goals and insights uncovered throughout the journey.
          </p>
          <img
            src="/images/first 1.png"
            alt="Process overview"
            className="mt-10 mb-32 lg:mb-60 w-full max-w-2xl mx-auto rounded-lg"
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
            Lack of instant invoice previews requires users to open a pop-up for
            every detail, doubling clicks and interrupting their workflow
          </h1>

          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-7xl mx-auto">
            To inspect or act on an invoice, users had to open the more options
            menu, choose “View Invoice,” then close the pop-up and reopen the
            menu for any further action. I redesigned the invoice list to
            include a quick preview and an inline action menu that adapts to
            each invoice’s status, making it easier for users to view details
            and take the right actions.
          </p>
        </div>

        {/* Design Evolution Process */}
        <div className="mb-10 lg:mb-20 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Column 1: */}
            <Glass className="p-2 md:p-4">
              <div className="space-y-6">
                <p className="text-white text-sm md:text-base lg:text-lg font-normal leading-relaxed">
                  Original Design
                </p>
                <div className="bg-white rounded-lg flex items-center justify-center overflow-hidden">
                  <img
                    src="/images/Group 84.svg"
                    alt="Logo"
                    className="h-full max-w-full object-contain "
                  />
                </div>
              </div>
            </Glass>

            {/* Column 2 */}
            <Glass className="p-2 md:p-4">
              <div className="space-y-6">
                <p className="text-white text-sm md:text-base lg:text-lg font-normal leading-relaxed">
                  Condensed action buttons into a menu to accommodate more
                  options
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="bg-white  rounded-lg flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/Group 85.svg"
                        alt="Logo"
                        className="h-auto w-auto object-contain "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Glass>
          </div>
        </div>

        <div className="mb-20 lg:mb-32">
          <Glass className="p-2 md:p-4">
            <h3 className="text-white text-sm md:text-base lg:text-lg font-normal mb-6 text-left">
              Added filters and tax rates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 lg:gap-12">
              {["/images/Group 86.svg", "/images/Group 90.svg"].map(
                (src, index) => (
                  <div key={src} className="md:col-span-1">
                    <div
                      className={`rounded-lg overflow-hidden flex items-start justify-start ${
                        index === 1
                          ? "max-w-[300px] mx-auto md:max-w-none md:mx-0"
                          : ""
                      }`}
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>
                  </div>
                ),
              )}
            </div>
          </Glass>
        </div>

        <div className="mb-20 lg:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 lg:gap-12">
            {/* Left Side: Text only, vertically centered and left-aligned */}
            <div className="flex items-center">
              <h3 className="text-white text-sm md:text-base lg:text-lg font-normal text-left">
                Users needed to open the more options menu and select “View
                Invoice” to access details, which then appeared in a pop-up.
                <br />
                <br />
                If they wanted to perform additional actions, they had to close
                the pop-up and reopen the menu each time, adding extra clicks.
              </h3>
            </div>

            {/* Right Side: Single image */}
            <Glass className="p-2 md:p-4">
              <div className="rounded-lg overflow-hidden flex items-start justify-start">
                <img
                  src="/images/Group 92.svg"
                  alt="Updated invoice interaction"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </Glass>
          </div>
        </div>

        <div className="text-white text-sm md:text-base lg:text-lg text-center mb-10">
          <p>
            Original Workflow (4 steps)
            <br />
            <br /> Open Menu &gt; View Details &gt; Close Window &gt; Reopen
            Menu For Actions
            <br />
            <br />
            How can this process be streamlined to eliminate unnecessary clicks?
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemFour;
