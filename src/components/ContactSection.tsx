import { motion } from "framer-motion";
import { useState } from "react";

const ACCENT = "#08BCA1";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("chan.li.yyc@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  };

  return (
    <motion.section
      id="contact"
      className="relative w-full px-4 sm:px-8 lg:px-12 pt-20 lg:pt-24 pb-24 lg:pb-36"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={container}
      aria-labelledby="contact-heading"
      style={{
        background:
          "linear-gradient(180deg, rgba(7,3,59,1) 0%, rgba(67,9,133,1) 100%)",
      }}
    >
      <div className="relative z-10 max-w-[900px] mx-auto">
        {/* Glass card */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
        >
          {/* Top accent line */}
          <div
            className="h-1 rounded-t-2xl"
            style={{
              background: `linear-gradient(90deg, ${ACCENT} 0%, rgba(8,188,161,0.2) 60%, transparent 100%)`,
            }}
          />

          <div className="px-6 sm:px-10 lg:px-14 py-10 sm:py-12 lg:py-14 text-center space-y-6">
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-slate-200 text-xs sm:text-sm"
            >
              <span
                className="inline-block h-2 w-2 rounded-full"
                style={{ background: ACCENT }}
              />
              Currently exploring new opportunities
            </motion.p>

            <motion.h2
              id="contact-heading"
              variants={item}
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight"
            >
              Let’s build something great
            </motion.h2>

            <motion.p
              variants={item}
              className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            >
              Whether it’s refining a workflow, shipping a new feature, or
              designing a full product, I combine UX strategy with front-end
              engineering to move fast and ship thoughtfully.
            </motion.p>

            {/* Primary actions */}
            <motion.div
              variants={item}
              className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
            >
              {/* Email (primary) */}
              <a
                href="mailto:chan.li.yyc@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm sm:text-base font-medium text-[#061a14] bg-[var(--accent,_#08BCA1)] hover:brightness-110 active:brightness-95 transition shadow-[0_8px_30px_rgba(8,188,161,0.35)]"
                style={{ ["--accent" as any]: ACCENT }}
              >
                {/* Mail icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.25L22 6.4V6a2 2 0 0 0-2-2ZM2 8.15V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.15l-9.34 5.83a2 2 0 0 1-2.32 0L2 8.15Z" />
                </svg>
                Email me
              </a>

              {/* Resume (glass) */}
              <a
                href="https://drive.google.com/file/d/1N0khIdbmGdyf9Nmjppm37mlUrf_D40Qi/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm sm:text-base font-medium text-white/90 border border-white/15 bg-white/5 hover:bg-white/10 transition"
              >
                {/* File icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="opacity-90"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm1 7V3.5L18.5 9H15ZM8 13a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2H8Zm0 4a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2H8Z" />
                </svg>
                Resume
              </a>

              {/* GitHub (glass) */}
              <a
                href="https://github.com/chanlidev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm sm:text-base font-medium text-white/90 border border-white/15 bg-white/5 hover:bg-white/10 transition"
              >
                {/* GitHub icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="opacity-90"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 .5C5.65.5.8 5.35.8 11.7c0 4.92 3.18 9.09 7.6 10.56.55.11.75-.23.75-.52 0-.26-.01-.96-.02-1.88-3.09.67-3.75-1.49-3.75-1.49-.5-1.27-1.22-1.61-1.22-1.61-.99-.67.08-.66.08-.66 1.1.08 1.68 1.14 1.68 1.14.98 1.68 2.57 1.2 3.2.92.1-.71.39-1.2.71-1.48-2.47-.28-5.07-1.23-5.07-5.49 0-1.21.43-2.21 1.14-2.98-.11-.28-.5-1.42.11-2.96 0 0 .95-.3 3.12 1.14.9-.25 1.86-.37 2.82-.37.96 0 1.92.12 2.82.37 2.17-1.44 3.12-1.14 3.12-1.14.61 1.54.22 2.68.11 2.96.71.77 1.14 1.77 1.14 2.98 0 4.27-2.6 5.2-5.08 5.48.4.34.76 1.01.76 2.04 0 1.47-.01 2.65-.01 3.01 0 .29.2.64.76.53 4.41-1.47 7.59-5.64 7.59-10.56C23.2 5.35 18.34.5 12 .5Z"
                  />
                </svg>
                GitHub
              </a>
            </motion.div>

            {/* Email line + copy */}
            <motion.div
              variants={item}
              className="pt-6 border-t border-white/10 flex flex-col items-center gap-3"
            >
              <div className="text-white/80 text-sm sm:text-base">
                Prefer typing?{" "}
                <a
                  href="mailto:chan.li.yyc@gmail.com"
                  className="text-white hover:text-white underline decoration-[var(--accent,_#08BCA1)] underline-offset-4"
                  style={{ ["--accent" as any]: ACCENT }}
                >
                  chan.li.yyc@gmail.com
                </a>
              </div>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs sm:text-sm text-white/90 border border-white/10 bg-white/5 hover:bg-white/10 transition"
                aria-live="polite"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1Zm3 4H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm0 14H8V7h11v12Z" />
                </svg>
                {copied ? "Copied!" : "Copy email"}
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Subtle bottom note */}
        <motion.p
          variants={item}
          className="mt-6 text-center text-white/50 text-sm"
        >
          Available for full-time roles in Calgary · Open to select freelance
          work
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ContactSection;
