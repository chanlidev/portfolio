import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import FeaturedWork from "@/components/FeaturedWork";
import ContactSection from "@/components/ContactSection";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: number;
  twinkleSpeed: number;
  driftDirection: number;
  driftSpeed: number;
}

const StarField = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const starCount = window.innerWidth < 640 ? 70 : 140; // slightly reduced for subtlety

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2.2 + 0.8, // smaller avg size
          opacity: Math.random() * 0.6 + 0.2,
          animationDelay: Math.random() * 3,
          twinkleSpeed: Math.random() * 2 + 2,
          driftDirection: Math.random() * 360,
          driftSpeed: Math.random() * 15 + 20,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes drift {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(36px, 22px);
          }
        }
        @keyframes driftAlt {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-28px, 38px);
          }
        }
        @keyframes driftSlow {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(22px, -30px);
          }
        }
      `}</style>

      {stars.map((star) => {
        const driftAnimationName =
          star.driftDirection < 120
            ? "drift"
            : star.driftDirection < 240
              ? "driftAlt"
              : "driftSlow";

        return (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.twinkleSpeed}s`,
              boxShadow:
                star.size > 2
                  ? `0 0 ${star.size * 2}px rgba(255,255,255,0.45)`
                  : "none",
              animation:
                `pulse ${star.twinkleSpeed}s infinite ${star.animationDelay}s, ` +
                `${driftAnimationName} ${star.driftSpeed}s infinite linear`,
            }}
          />
        );
      })}

      {/* A few larger soft glows for depth */}
      <div
        className="absolute rounded-full"
        style={{
          top: "18%",
          left: "12%",
          width: "10px",
          height: "10px",
          background: "rgba(255,255,255,0.9)",
          boxShadow:
            "0 0 10px rgba(255,255,255,0.8), 0 0 28px rgba(8,188,161,0.35)",
          animation: "pulse 3s infinite, drift 20s infinite linear",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          top: "62%",
          left: "84%",
          width: "10px",
          height: "10px",
          background: "rgba(255,255,255,0.75)",
          boxShadow:
            "0 0 12px rgba(255,255,255,0.6), 0 0 26px rgba(67,9,133,0.35)",
          animation: "pulse 4s infinite, driftAlt 24s infinite linear",
        }}
      />
    </div>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Index = () => {
  return (
    <>
      <div className="min-h-screen w-full relative overflow-hidden">
        {/* Base background */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #07033B 40%, #430985 100%)",
          }}
        />

        {/* Radial vignette to focus hero */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 55% at 50% 20%, rgba(8,188,161,0.18) 0%, rgba(8,188,161,0.08) 40%, rgba(0,0,0,0) 70%)",
          }}
        />

        {/* Subtle stars */}
        <StarField />

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <Header />

          {/* Hero */}
          <main className="flex-1 flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 pt-6 lg:pt-14 pb-16 lg:pb-28">
            <div className="max-w-5xl w-full text-center">
              <motion.p
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={fadeInUp}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-slate-200 text-xs sm:text-sm"
              >
                <span className="inline-block h-2 w-2 rounded-full bg-[#08BCA1]" />
                Product Designer · Frontend Developer · Calgary, AB
              </motion.p>

              <motion.h1
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={fadeInUp}
                className="mt-6 sm:mt-7 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] tracking-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  Hi, I’m Chan Li.
                </span>{" "}
                <span className="block text-white/90">
                  I design & build thoughtful product experiences.
                </span>
              </motion.h1>

              <motion.p
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={fadeInUp}
                className="mt-5 sm:mt-6 mx-auto max-w-2xl text-slate-200/90 text-base sm:text-lg leading-relaxed"
              >
                Blending UX strategy with hands-on engineering, I turn complex
                workflows into clear, fast interfaces. Explore some recent work,
                or get in touch to collaborate.
              </motion.p>

              <motion.div
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={fadeInUp}
                className="mt-8 sm:mt-10 flex items-center justify-center gap-3 sm:gap-4"
              >
                <a
                  href="#work"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm sm:text-base font-medium text-[#061a14] bg-[#08BCA1] hover:brightness-110 active:brightness-95 transition shadow-[0_8px_30px_rgba(8,188,161,0.35)]"
                  aria-label="Skip to work section"
                >
                  View my work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm sm:text-base font-medium text-white/90 border border-white/20 bg-white/5 hover:bg-white/10 transition"
                  aria-label="Jump to contact section"
                >
                  Contact me
                </a>
              </motion.div>

              {/* Scroll cue */}
              <motion.div
                custom={4}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.7 }}
                variants={fadeInUp}
                className="mt-12 sm:mt-16 flex items-center justify-center"
              >
                <a
                  href="#work"
                  className="group inline-flex flex-col items-center text-white/60 hover:text-white/90 transition"
                  aria-label="Scroll to featured work"
                >
                  <span className="text-xs tracking-wide uppercase">
                    Scroll
                  </span>
                  <span className="mt-2 h-7 w-px bg-gradient-to-b from-white/60 to-transparent group-hover:from-white/90" />
                </a>
              </motion.div>
            </div>
          </main>
        </div>
      </div>

      {/* Sections */}
      <section id="work" className="w-full">
        <FeaturedWork />
      </section>

      <section id="contact" className="w-full">
        <ContactSection />
      </section>
    </>
  );
};

export default Index;
