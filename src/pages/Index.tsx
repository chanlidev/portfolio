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
      const starCount = 300; // Number of stars

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

      {/* Add some larger glowing stars */}
      <div
        className="absolute w-1 h-1 bg-white rounded-full opacity-80"
        style={{
          top: "20%",
          left: "15%",
          boxShadow:
            "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(173,216,230,0.4)",
          animation: "pulse 3s infinite, drift 20s infinite linear",
        }}
      />
      <div
        className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-60"
        style={{
          top: "65%",
          left: "85%",
          boxShadow:
            "0 0 12px rgba(255,255,255,0.6), 0 0 24px rgba(147,112,219,0.3)",
          animation: "pulse 4s infinite, driftAlt 25s infinite linear",
        }}
      />
      <div
        className="absolute w-1 h-1 bg-white rounded-full opacity-70"
        style={{
          top: "40%",
          left: "75%",
          boxShadow:
            "0 0 8px rgba(255,255,255,0.7), 0 0 16px rgba(100,149,237,0.4)",
          animation: "pulse 2.5s infinite, driftSlow 22s infinite linear",
        }}
      />
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

        {/* Nebula-like glow effects */}
        <div className="absolute inset-0">
          <div
            className="absolute w-96 h-96 rounded-full opacity-10"
            style={{
              background:
                "radial-gradient(circle, rgba(147,112,219,0.4) 0%, transparent 70%)",
              top: "10%",
              left: "70%",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute w-80 h-80 rounded-full opacity-15"
            style={{
              background:
                "radial-gradient(circle, rgba(100,149,237,0.3) 0%, transparent 70%)",
              top: "60%",
              left: "10%",
              filter: "blur(50px)",
            }}
          />
          <div
            className="absolute w-64 h-64 rounded-full opacity-8"
            style={{
              background:
                "radial-gradient(circle, rgba(173,216,230,0.2) 0%, transparent 70%)",
              top: "30%",
              left: "40%",
              filter: "blur(40px)",
            }}
          />
        </div>

        {/* Content container */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header Navigation */}
          <Header />

          {/* Main Content */}
          <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-12 pt-0 lg:pt-20 pb-12 lg:pb-20">
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
        0 0 5px rgba(255,105,180,0.8),
        0 0 10px rgba(255,105,180,0.6),
        0 0 15px rgba(255,105,180,0.4),
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
              <p className="text-white text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12 lg:mb-16 drop-shadow-lg opacity-0 animate-fadeInUp animate-delay-300">
                Hey there! 👋 I’m a UX/UI designer and developer based in
                Calgary with a background in e-commerce. At PekoPay, I turn user
                insights into seamless, intuitive payment experiences that
                delight every tap and click. 🚀 I designed and coded this
                portfolio myself—enjoy exploring my work!
              </p>

              {/* Contact Button */}
              <a href="mailto:chan.li.yyc@gmail.com">
                <Button
                  className={cn(
                    "h-14 px-8 border border-[#1B64FF] text-white text-base font-normal",
                    "bg-[#1C0C7A]",
                    "hover:bg-[#1C0C7A]",
                    "transition-all duration-200",
                    "min-w-[240px]",
                    "backdrop-blur-sm drop-shadow-lg",
                    "hover:border-2",
                    "hover:shadow-lg hover:shadow-[#08BCA1]/20",
                    "opacity-0 animate-slideInFromBottom animate-delay-600",
                  )}
                >
                  <span className="text-[#08BCA1]">///</span>
                  <span className="mx-4">Contact Me Now</span>
                  <span className="text-[#08BCA1]">///</span>
                </Button>
              </a>
            </div>
          </main>
        </div>
      </div>
      <div className="w-full bg-[#07033B]">
        <FeaturedWork />
        <ContactSection />
      </div>
    </>
  );
};

export default Index;
