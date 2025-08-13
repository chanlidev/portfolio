import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ACCENT = "#08BCA1";

const FeaturedWork = () => {
  const navigate = useNavigate();

  // Animation
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.6 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  // Unified card look (match Contact)
  const cardClass =
    "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg cursor-pointer will-change-transform transition-all duration-300 hover:border-[rgba(8,188,161,0.6)] hover:shadow-[0_10px_40px_rgba(8,188,161,0.25)]";

  const overlayClass =
    "absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 via-white/[0.04] to-transparent";

  return (
    <motion.section
      id="work"
      className="relative w-full px-4 sm:px-8 lg:px-12 pt-16 lg:pt-20 pb-20 lg:pb-36 -mt-px -mb-px"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      style={{
        background: "linear-gradient(180deg, #430985 0%, #07033B 100%)",
      }}
      aria-labelledby="work-heading"
    >
      <div className="relative z-10 max-w-[1450px] mx-auto">
        {/* Section header chip + title */}
        <div className="text-center mb-10 lg:mb-14">
          <motion.p
            variants={cardVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-slate-200 text-xs sm:text-sm"
          >
            <span
              className="inline-block h-2 w-2 rounded-full"
              style={{ background: ACCENT }}
            />
            Selected projects
          </motion.p>

          <motion.h2
            id="work-heading"
            variants={cardVariants}
            className="mt-4 text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight"
          >
            Featured Work
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
        >
          {/* Card 1 */}
          <motion.div
            role="button"
            tabIndex={0}
            aria-label="Open PekoPay Landing case study"
            onClick={() => navigate("/landing-page")}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && navigate("/landing-page")
            }
            className={cardClass}
            variants={cardVariants}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.995 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Top accent line */}
            <div
              className="h-1 w-full"
              style={{
                background: `linear-gradient(90deg, ${ACCENT} 0%, rgba(8,188,161,0.15) 60%, transparent 100%)`,
              }}
            />
            <div className={overlayClass} />

            <div className="relative p-4 lg:p-6 h-full flex flex-col">
              {/* Preview */}
              <div className="flex-1 mb-6 rounded-lg py-4 px-0 min-h-[200px] lg:min-h-[280px] flex items-center justify-between">
                <img
                  src="/images/Group 62.png"
                  alt="PekoPay landing preview"
                  className="w-4/5 h-auto object-contain rounded transition-transform duration-300 group-hover:scale-105"
                />
                <img
                  src="/images/Iphone 16.png"
                  alt="PekoPay mobile preview"
                  className="w-1/5 h-auto object-contain rounded transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <a
                    href="https://pekopay.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
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

                <h3 className="text-white text-2xl lg:text-3xl leading-tight">
                  Designing the Entire Frontend from Landing Page to Dashboard
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2 text-slate-300 text-sm">
                    <span className="px-3 py-1 border border-white/15 rounded-md bg-white/5">
                      From 0 to 1
                    </span>
                    <span className="px-3 py-1 border border-white/15 rounded-md bg-white/5">
                      Fintech
                    </span>
                    <span className="px-3 py-1 border border-white/15 rounded-md bg-white/5">
                      Payment
                    </span>
                    <span className="px-3 py-1 border border-white/15 rounded-md bg-white/5">
                      Responsive Web
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            role="button"
            tabIndex={0}
            aria-label="Open Automated Payment case study"
            onClick={() => navigate("/automated-payment")}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") &&
              navigate("/automated-payment")
            }
            className={cardClass}
            variants={cardVariants}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.995 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div
              className="h-1 w-full"
              style={{
                background: `linear-gradient(90deg, ${ACCENT} 0%, rgba(8,188,161,0.15) 60%, transparent 100%)`,
              }}
            />
            <div className={overlayClass} />

            <div className="relative p-4 lg:p-6 h-full flex flex-col">
              <div className="flex-1 mb-6 rounded-lg p-1 min-h-[200px] lg:min-h-[280px] flex items-center justify-center">
                <div className="w-full h-full rounded overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/payment.gif"
                    alt="Automated payment flow"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
                    onClick={(e) => e.stopPropagation()}
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

                <h3 className="text-white text-2xl lg:text-3xl leading-tight">
                  Simplifying the Automated Payment Setup Workflow
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2 text-slate-300 text-sm">
                    <span className="px-3 py-1 border border-white/15 rounded-md bg-white/5">
                      From 5 Steps to 2
                    </span>
                    <span className="px-3 py-1 border border-white/15 rounded-md bg-white/5">
                      UX/UI Design
                    </span>
                    <span className="px-3 py-1 border border-white/15 rounded-md bg-white/5">
                      Responsive Web
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            role="button"
            tabIndex={0}
            aria-label="Open TradeTrack case study"
            onClick={() => navigate("/inventory-system")}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") &&
              navigate("/inventory-system")
            }
            className={cardClass}
            variants={cardVariants}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.995 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div
              className="h-1 w-full"
              style={{
                background: `linear-gradient(90deg, ${ACCENT} 0%, rgba(8,188,161,0.15) 60%, transparent 100%)`,
              }}
            />
            <div className={overlayClass} />

            <div className="relative p-4 lg:p-6 h-full flex flex-col">
              <div className="flex-1 mb-6 rounded-lg py-4 px-0 min-h-[200px] lg:min-h-[280px] flex justify-center items-center space-x-2">
                <img
                  src="/images/Iphone 14.png"
                  alt="TradeTrack mobile"
                  className="w-1/5 h-auto object-contain rounded -rotate-12 transition-transform duration-300 group-hover:scale-110"
                />
                <img
                  src="/images/TTdesk.svg"
                  alt="TradeTrack desktop"
                  className="w-4/5 h-auto object-contain rounded rotate-12 transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-[#08BCA1] text-sm lg:text-base">
                    TradeTrack
                  </span>
                </div>

                <h3 className="text-white text-2xl lg:text-3xl leading-tight">
                  Building an Inventory System for the Trades Industry
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2 text-slate-300 text-sm">
                    <span className="px-3 py-1 border border-white/15 rounded-md bg-white/5">
                      Inventory Management
                    </span>
                    <span className="px-3 py-1 border border-white/15 rounded-md bg-white/5">
                      Mobile App
                    </span>
                    <span className="px-3 py-1 border border-white/15 rounded-md bg-white/5">
                      Web App
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            role="button"
            tabIndex={0}
            aria-label="Open Graphic Design portfolio"
            onClick={() => navigate("/graphic-design")}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") &&
              navigate("/graphic-design")
            }
            className={cardClass}
            variants={cardVariants}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.995 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div
              className="h-1 w-full"
              style={{
                background: `linear-gradient(90deg, ${ACCENT} 0%, rgba(8,188,161,0.15) 60%, transparent 100%)`,
              }}
            />
            <div className={overlayClass} />

            <div className="relative p-4 lg:p-6 h-full flex flex-col">
              <div className="flex-1 mb-12 rounded-lg p-1 min-h-[200px] lg:min-h-[280px] flex items-center justify-center">
                <div className="w-full h-full rounded overflow-hidden flex items-center justify-center">
                  <img
                    src="/images/image 8.png"
                    alt="Graphic design montage"
                    className="w-5/6 h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-white text-2xl lg:text-3xl leading-tight">
                  Crafting Visual Stories with Thoughtful and Impactful Design
                </h3>

                <div className="flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-2 text-slate-300 text-sm">
                    <span className="px-3 py-1 border border-white/15 rounded-md bg-white/5">
                      Graphic Design
                    </span>
                    <span className="px-3 py-1 border border-white/15 rounded-md bg-white/5">
                      Posters
                    </span>
                    <span className="px-3 py-1 border border-white/15 rounded-md bg-white/5">
                      Postcards
                    </span>
                    <span className="px-3 py-1 border border-white/15 rounded-md bg-white/5">
                      Brochure
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedWork;
