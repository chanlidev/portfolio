import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const FeaturedWork = () => {
  return (
    <section className="w-full bg-[#07033B] px-2 sm:px-4 lg:px-6 py-12 lg:py-20">
      <div className="max-w-[1450px] mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-12 lg:mb-16">
          <div className="flex-1 h-px bg-[#08BCA1] max-w-md"></div>
          <h2 className="mx-8 text-white text-base lg:text-lg font-normal">
            Featured Work
          </h2>
          <div className="flex-1 h-px bg-[#08BCA1] max-w-md"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Project 1 - PekoPay Landing */}
          <div className="group relative overflow-hidden border border-[#1B64FF] rounded-lg backdrop-blur-sm">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(48.7% 100% at 50% 100%, #24003C 0%, #090F78 100%)",
              }}
            />
            <div className="relative p-6 lg:p-8 h-full flex flex-col">
              {/* Project Image/Preview */}
              <div
                className="
    flex-1 
    mb-6 
    rounded-lg 
    py-4 px-0    /* no left/right padding */
    min-h-[200px] lg:min-h-[280px] 
    flex 
    items-center 
    justify-between /* flush to edges */
  "
              >
                {/* Landing takes ¾ of width */}
                <img
                  src="src/images/landing.svg"
                  alt="Landing Preview"
                  className="w-3/4 h-full object-cover rounded"
                />

                {/* Phone takes ¼ of width */}
                <img
                  src="src/images/loginphone.svg"
                  alt="Login Preview"
                  className="w-1/4 h-full object-cover rounded"
                />
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <a
                    href="https://pekopay.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span className="text-[#08BCA1] text-sm lg:text-base">
                      PekoPay
                    </span>
                    <svg
                      className="w-4 h-4 text-[#08BCA1]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 6.25H5.83333C5.50181 6.25 5.18387 6.3817 4.94945 6.61612C4.71503 6.85054 4.58333 7.16848 4.58333 7.5V14.1667C4.58333 14.4982 4.71503 14.8161 4.94945 15.0505C5.18387 15.285 5.50181 15.4167 5.83333 15.4167H12.5C12.8315 15.4167 13.1495 15.285 13.3839 15.0505C13.6183 14.8161 13.75 14.4982 13.75 14.1667V10M10.4167 9.58333L15.72 4.28M12.0833 3.75H16.25V7.91667"
                      />
                    </svg>
                  </a>
                </div>

                <h3 className="text-white  text-2xl lg:text-3xl leading-tight">
                  Designed the entire frontend from landing page to dashboard
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2 text-[#A3ACB1] text-sm">
                    <span className="px-3 py-1 border border-[#A3ACB1]/30 rounded-md bg-[#A3ACB1]/10">
                      From 0 To 1
                    </span>
                    <span className="px-3 py-1 border border-[#A3ACB1]/30 rounded-md bg-[#A3ACB1]/10">
                      Fintech
                    </span>
                    <span className="px-3 py-1 border border-[#A3ACB1]/30 rounded-md bg-[#A3ACB1]/10">
                      Payment
                    </span>
                    <span className="px-3 py-1 border border-[#A3ACB1]/30 rounded-md bg-[#A3ACB1]/10">
                      Responsive Web
                    </span>
                  </div>

                  <Button
                    className={cn(
                      "w-24 h-10 border border-[#08BCA1] text-white text-sm font-normal flex-shrink-0",
                      "bg-gradient-to-r from-[#0A23AF] to-[#147FA4]",
                      "hover:from-[#0A23AF]/90 hover:to-[#147FA4]/90",
                      "hover:shadow-lg hover:shadow-[#08BCA1]/20",
                      "hover:border-2",
                      "transition-all duration-200",
                      "backdrop-blur-sm",
                    )}
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 - PekoPay Dashboard */}
          <div className="group relative overflow-hidden border border-[#FF715C] rounded-lg backdrop-blur-sm">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, #64392F 10.83%, #3E1C31 89.17%)",
              }}
            />
            <div className="relative p-6 lg:p-8 h-full flex flex-col">
              {/* Project Image/Preview */}
              <div className="flex-1 mb-6 bg-[#CAD4DB] rounded-lg p-1 min-h-[200px] lg:min-h-[280px] flex items-center justify-center">
                <div className="w-full h-full bg-white rounded overflow-hidden flex items-center justify-center">
                  <img
                    src="src/images/payment.png"
                    alt="Payment"
                    className="w-full h-full object-over"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <a
                    href="https://pekopay.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <span className="text-[#08BCA1] text-sm lg:text-base">
                      PekoPay
                    </span>
                    <svg
                      className="w-4 h-4 text-[#08BCA1]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M10 6.25H5.83333C5.50181 6.25 5.18387 6.3817 4.94945 6.61612C4.71503 6.85054 4.58333 7.16848 4.58333 7.5V14.1667C4.58333 14.4982 4.71503 14.8161 4.94945 15.0505C5.18387 15.285 5.50181 15.4167 5.83333 15.4167H12.5C12.8315 15.4167 13.1495 15.285 13.3839 15.0505C13.6183 14.8161 13.75 14.4982 13.75 14.1667V10M10.4167 9.58333L15.72 4.28M12.0833 3.75H16.25V7.91667"
                      />
                    </svg>
                  </a>
                </div>

                <h3 className="text-white  text-2xl lg:text-3xl leading-tight">
                  Simplified the adding payment methods workflow
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2 text-[#A3ACB1] text-sm">
                    <span className="px-3 py-1 border border-[#A3ACB1]/30 rounded-md bg-[#A3ACB1]/10">
                      From 4 Steps To 2
                    </span>
                    <span className="px-3 py-1 border border-[#A3ACB1]/30 rounded-md bg-[#A3ACB1]/10">
                      UX/UI Design
                    </span>
                  </div>

                  <Button
                    className={cn(
                      "w-24 h-10 border border-[#FF715C] text-white text-sm font-normal flex-shrink-0",
                      "bg-gradient-to-r from-[#FF34A4] to-[#FF9937]",
                      "hover:from-[#FF34A4]/90 hover:to-[#FF9937]/90",
                      "hover:shadow-lg hover:shadow-[#08BCA1]/20",
                      "hover:border-2",
                      "transition-all duration-200",
                      "backdrop-blur-sm",
                    )}
                  >
                    View
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 - Coming Soon */}
          <div className="group relative overflow-hidden border border-[#FF31AC] rounded-lg backdrop-blur-sm">
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, #4A044C 0%, #20083A 76%)",
              }}
            />
            <div className="relative p-6 lg:p-8 h-full flex flex-col min-h-[300px] lg:min-h-[400px]">
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center text-white/50">
                  <div className="text-2xl lg:text-3xl mb-2">🚀</div>
                  <div className="text-lg lg:text-xl">Coming Soon</div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 - Coming Soon */}
          <div className="group relative overflow-hidden border border-[#0D82B8] rounded-lg backdrop-blur-sm">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(284deg, #004B78 0%, #020C38 98.11%)",
              }}
            />
            <div className="relative p-6 lg:p-8 h-full flex flex-col min-h-[300px] lg:min-h-[400px]">
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center text-white/50">
                  <div className="text-2xl lg:text-3xl mb-2">⚡</div>
                  <div className="text-lg lg:text-xl">Coming Soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
