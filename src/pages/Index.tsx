import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import FeaturedWork from "@/components/FeaturedWork";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";

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
    // Generate random stars
    const generateStars = () => {
      const newStars: Star[] = [];
      const starCount = 160; // Number of stars

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100, // Position as percentage
          y: Math.random() * 100,
          size: Math.random() * 3 + 1, // Size between 1-4px
          opacity: Math.random() * 0.8 + 0.2, // Opacity between 0.2-1
          animationDelay: Math.random() * 3, // Animation delay up to 3s
          twinkleSpeed: Math.random() * 2 + 2, // Animation duration between 2-4s
          driftDirection: Math.random() * 360, // Random direction in degrees
          driftSpeed: Math.random() * 15 + 15, // Drift duration between 15-30s
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <style jsx>{`
        @keyframes drift {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 30px);
          }
        }

        @keyframes driftAlt {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-40px, 50px);
          }
        }

        @keyframes driftSlow {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(30px, -40px);
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
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.twinkleSpeed}s`,
              boxShadow:
                star.size > 2.5
                  ? `0 0 ${star.size * 2}px rgba(255,255,255,0.5)`
                  : "none",
              animation: `pulse ${star.twinkleSpeed}s infinite ${star.animationDelay}s, ${driftAnimationName} ${star.driftSpeed}s infinite linear`,
            }}
          />
        );
      })}
    </div>
  );
};

const Index = () => {
  return (
    <>
      <div className="min-h-screen w-full relative overflow-hidden">
        {/* Main gradient background */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: "linear-gradient(180deg, #07033B 41.95%, #430985 100%)",
          }}
        />

        {/* Galaxy starfield effect */}
        <StarField />

        {/* Content container */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header Navigation */}
          <Header />

          {/* Main Content */}
          <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-12 pt-0 lg:pt-20 pb-16 lg:pb-32">
            <div className="text-center max-w-4xl mx-auto">
              {/* Main Heading */}
              <h1 className="mb-8 lg:mb-12 opacity-0 animate-fadeInScale">
                <span
                  className="block text-6xl sm:text-8xl lg:text-[120px] xl:text-[140px] 2xl:text-[160px] leading-tight italic"
                  style={{
                    fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
                    fontWeight: "700",
                    color: "#FFFFFF",
                    textShadow: `
        0 0 2px rgba(255,105,180,0.8),
        0 0 2px rgba(255,105,180,0.6),
        0 0 2px rgba(255,105,180,0.4),
        1px 1px 3px rgba(0,0,0,0.8),
        2px 2px 6px rgba(0,0,0,0.6)
      `,
                    filter:
                      "drop-shadow(0 0 15px rgba(255,105,180,0.6)) drop-shadow(0 0 25px rgba(255,20,147,0.4))",
                  }}
                >
                  CHAN LI
                </span>
              </h1>
              {/* Description */}
              <p className="text-white text-base lg:text-lg max-w-2xl mx-auto leading-relaxed  drop-shadow-lg opacity-0 animate-fadeInUp animate-delay-300">
                Hey there! 👋 I’m a Calgary-based UX/UI designer and developer
                who loves turning complex problems into simple solutions. I
                designed and coded this portfolio myself—enjoy exploring my
                work!
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="w-full">
        <FeaturedWork />
        <ContactSection />
      </div>
    </>
  );
};

export default Index;
