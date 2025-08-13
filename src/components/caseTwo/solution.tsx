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

const Solution = () => {
  return (
    <div className="w-full px-2 sm:px-4 lg:px-6 py-12 lg:py-20">
      <div className="max-w-[1450px] mx-auto">
        {/* Problem One Header */}
        <div className=" lg:mt-16 flex items-center justify-center mb-12 lg:mb-16">
          <div className="flex-1 h-px bg-[#08BCA1] max-w-sm"></div>
          <h2 className="mx-8 text-white text-base lg:text-lg font-normal">
            Solution
          </h2>
          <div className="flex-1 h-px bg-[#08BCA1] max-w-sm"></div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-10 md:mb-20">
          <h1 className="text-white text-2xl lg:text-3xl font-normal leading-tight max-w-6xl mx-auto mb-10 lg:mb-12">
            Immediately after creating a client, land directly on their details
            page and display a pop-up to add payment method
          </h1>

          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-7xl mx-auto">
            I thought about embedding the “Add Payment Method” steps into the
            client-creation flow, but to minimize development effort and avoid
            duplicating our existing details page component, I chose to navigate
            straight to the new client’s details page and trigger a pop-up for
            adding a payment method immediately after creation. This refined
            workflow reduces the original process{" "}
            <span className="text-[#08BCA1]">from 5 steps to 2</span>,
            streamlining and accelerating the entire setup process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-0 md:gap-8 lg:gap-24 mb-20 lg:mb-32">
          {/* Left: only the summary text */}
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-white text-sm md:text-base lg:text-lg font-normal mb-6 text-left">
              Refined 2-step Workflow: <br />
              Create Client &gt; Add Payment Method
            </h3>
          </div>

          {/* Right: Final Version screenshot */}
          <Glass className="p-2 md:p-4">
            <div className=" rounded-lg overflow-hidden flex items-start justify-start">
              <img
                src="/images/solution.gif"
                alt="After: cashback calculator"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </Glass>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-0 md:gap-8 lg:gap-24 mb-20 lg:mb-32">
          {/* Mobile: text first (order-1), Desktop: text second (order-2) */}
          <div className="order-1 md:order-2 flex flex-col justify-center h-full">
            <h3 className="text-white text-sm md:text-base lg:text-lg font-normal mb-6 text-left">
              Once a new payment method is added, it appears in the Payment
              Methods section on the client details page, where users can choose
              a default credit card.
            </h3>
          </div>

          {/* Mobile: image second (order-2), Desktop: image first (order-1) */}
          <div className="order-2 md:order-1">
            <Glass className="p-2 md:p-4">
              <div className=" rounded-lg overflow-hidden flex items-start justify-start">
                <img
                  src="/images/after6.gif"
                  alt="After: cashback calculator"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </Glass>
          </div>
        </div>

        {/* Final Results Section */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-0 md:gap-8 lg:gap-24 mb-20 lg:mb-32">
          {/* Left: only the summary text */}
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-white text-sm md:text-base lg:text-lg font-normal mb-6 text-left">
              To complete the experience, I’ve included a Subscription section
              on the same page so users can set up recurring payments for that
              client without leaving the view.
            </h3>
          </div>

          {/* Right: Final Version screenshot */}
          <Glass className="p-2 md:p-4">
            <div className=" rounded-lg overflow-hidden flex items-start justify-start">
              <img
                src="/images/after7.gif"
                alt="After: cashback calculator"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </Glass>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 lg:gap-10">
          {/* Left (glass card with image) */}
          <Glass className="p-2 md:p-4 md:col-span-1">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white text-sm md:text-base">
                <span style={{ color: ACCENT }}>Final Version</span>
              </h3>
              <a
                href="https://pekopay.com/dashboard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 text-sm md:text-base hover:text-white underline underline-offset-4"
                style={{ textDecorationColor: ACCENT }}
              >
                View Live Website
              </a>
            </div>

            <div className="rounded-xl overflow-hidden">
              <img
                src="/images/Group 80.gif"
                alt="Final screens"
                className="w-full object-contain"
              />
            </div>
          </Glass>

          {/* Right (glass card with feedback/takeaway) */}
          <Glass className="p-2 md:p-4 md:col-span-1">
            <div className="space-y-8 max-w-prose">
              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                <span
                  className="text-white text-sm md:text-base"
                  style={{ color: ACCENT }}
                >
                  Feedback:
                </span>{" "}
                <br /> Landing on the client details page with an immediate “Add
                Payment Method” prompt and a Subscription section on the same
                page cut setup to two steps and eliminated repetitive tasks.
              </p>

              <p className="text-white/80 text-sm md:text-base leading-relaxed">
                <span
                  className="text-white text-sm md:text-base"
                  style={{ color: ACCENT }}
                >
                  Takeaway:
                </span>{" "}
                <br /> Consolidating related actions into one interface and
                reusing existing components dramatically streamlines complex
                workflows and improves usability.
              </p>
            </div>
          </Glass>
        </div>

        {/* Nav buttons (match style) */}
        <div className="mt-16 lg:mt-24 flex justify-center gap-6">
          <Link
            to="/landing-page"
            className="h-10 px-5 w-28 rounded-xl text-sm grid place-items-center text-white/90 border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition"
          >
            &lt; Previous
          </Link>

          <Link
            to="/inventory-system"
            className="h-10 px-5 w-28 rounded-xl text-sm font-medium text-[#061a14] grid place-items-center"
            style={{
              background: ACCENT,
              boxShadow: "0 8px 30px rgba(8,188,161,0.35)",
            }}
          >
            Next &gt;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Solution;
