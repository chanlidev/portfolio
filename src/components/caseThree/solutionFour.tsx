import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SolutionFour = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#343871] to-[#07033B] px-2 sm:px-4 lg:px-6 py-12 lg:py-20 -mt-px -mb-px">
      <div className="max-w-[1450px] mx-auto">
        {/* Problem One Header */}
        <div className=" lg:mt-16 flex items-center justify-center mb-12 lg:mb-16">
          <div className="flex-1 h-px bg-[#FF31AC] max-w-sm"></div>
          <h2 className="mx-8 text-white text-base lg:text-lg font-normal">
            Solution
          </h2>
          <div className="flex-1 h-px bg-[#FF31AC] max-w-sm"></div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-10 lg:mb-20">
          <h1 className="text-white text-2xl lg:text-3xl font-normal leading-tight max-w-6xl mx-auto mb-10 lg:mb-12">
            A collapsible inline preview displays key invoice details right in
            the list, with an optional PDF-layout pop-up for full invoice review
          </h1>

          <p className="text-white/60 text-sm md:text-base lg:text-lg font-normal leading-relaxed max-w-7xl mx-auto">
            I compared competitors’ invoice management solutions to understand
            their use of inline previews and contextual action menus. Rather
            than rebuilding the entire table, I added a collapsible detail panel
            in each row and extended the more options menu to display
            status-specific actions inline, while still preserving the pop-up
            preview for viewing invoices in PDF layout. This update cuts the
            workflow <span className="text-[#FF31AC]">from 4 steps to 1</span>{" "}
            single click to both preview and act on an invoice.
          </p>
        </div>

        {/* Final Results Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-0 md:gap-8 lg:gap-24 mb-20 lg:mb-40">
          {/* Left: only the summary text */}
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
              Designed a collapsible inline preview that displays key invoice
              details without navigating away.
            </h3>
          </div>

          {/* Right: Final Version screenshot */}
          <div>
            <div className="aspect-[15/9.5] rounded-lg overflow-hidden flex items-start justify-start">
              <img
                src="/invoiceview.gif"
                alt="After: cashback calculator"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Final Results Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-0 md:gap-8 lg:gap-24 mb-20 lg:mb-40">
          {/* Mobile: text first (order-1), Desktop: text second (order-2) */}
          <div className="order-1 md:order-2 flex flex-col justify-center h-full">
            <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
              Moved “View Invoice” out of the main menu and embedded all action
              controls into the invoice modal, allowing users to perform tasks
              without closing the pop-up and view in PDF layout.
            </h3>
          </div>

          {/* Mobile: image second (order-2), Desktop: image first (order-1) */}
          <div className="order-2 md:order-1">
            <div className="aspect-[15/9.5] rounded-lg overflow-hidden flex items-start justify-start">
              <img
                src="/invoicepdf.gif"
                alt="After: cashback calculator"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Final Results Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-0 md:gap-8 lg:gap-24 mb-20 lg:mb-40">
          {/* Left: only the summary text */}
          <div className="flex flex-col justify-center h-full">
            <h3 className="text-white text-sm md:text-base font-normal mb-6 text-left">
              Introduced contextual action menus that adapt to each invoice’s
              status, enabling users to mark them as paid, refunded, or
              uncollectable.
            </h3>
          </div>

          {/* Right: Final Version screenshot */}
          <div>
            <div className="aspect-[15/9.5] rounded-lg overflow-hidden flex items-start justify-start">
              <img
                src="/final.gif"
                alt="After: cashback calculator"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="flex justify-between mb-4">
              <h3 className="text-white text-sm md:text-base font-normal">
                <span className="text-[#FF715C]">Final version</span>
              </h3>
            </div>
            <div className="aspect-[15.5/12.5] rounded-lg overflow-hidden flex items-center justify-center mb-4">
              <img
                src="/Group 103.gif"
                alt="After: cashback calculator"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center h-full">
            <div className="space-y-10">
              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                <span className="text-[#FF715C]">Feedback:</span>
                <br /> The inline preview eliminates repetitive clicks and lets
                users scan invoice details instantly within the list, driving
                faster decision-making and smoother workflows.
              </p>

              <p className="text-white text-sm md:text-base font-normal leading-relaxed">
                <span className="text-[#FF715C]">Takeaway:</span>
                <br /> By minimizing the steps to view and act on invoices, we
                deliver a more intuitive, efficient, and satisfying user
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-24 lg:mt-40 flex justify-center gap-20">
          <Link to="/automated-payment">
            <Button
              className={cn(
                "h-9 w-32 flex items-center justify-center",
                "border border-[#1B64FF] text-white text-sm font-normal",
                "bg-gradient-to-r from-[#1C0C7A] to-[#200349]",
                "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
                "backdrop-blur-sm transition-all duration-200",
                "hover:border-2 hover:border-[#1B64FF]",
                "hover:bg-gradient-to-r hover:from-[#1C0C7A] hover:to-[#200349]",
                "hover:text-white hover:shadow-lg hover:shadow-[#08BCA1]/20",
              )}
            >
              &lt; Previous
            </Button>
          </Link>

          <Link to="/inventory-system">
            <Button
              className={cn(
                "h-9 w-32 flex items-center justify-center",
                "border border-[#1B64FF] text-white text-sm font-normal",
                "bg-gradient-to-r from-[#1C0C7A] to-[#200349]",
                "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
                "backdrop-blur-sm transition-all duration-200",
                "hover:border-2 hover:border-[#1B64FF]",
                "hover:bg-gradient-to-r hover:from-[#1C0C7A] hover:to-[#200349]",
                "hover:text-white hover:shadow-lg hover:shadow-[#08BCA1]/20",
              )}
            >
              Next &gt;
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolutionFour;
