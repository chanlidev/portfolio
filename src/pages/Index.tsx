import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

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
        <header className="w-full px-4 sm:px-8 lg:px-12 pt-8 lg:pt-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-4">
            {/* Profile Avatar */}
            <div className="flex-shrink-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b49071bfc601b680e70f8d9e4c6ea4cedad9e9b?placeholderIfAbsent=true"
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-white/20"
              />
            </div>

            {/* Navigation Menu */}
            <nav className="flex flex-wrap gap-3 sm:gap-6">
              <Button
                variant="outline"
                className={cn(
                  "h-9 px-4 border border-[#1B64FF] text-white text-sm font-normal",
                  "bg-gradient-to-r from-[#1C0C7A] to-[#200349]",
                  "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
                  "hover:border-2 hover:border-[#1B64FF]",
                  "backdrop-blur-sm transition-all duration-200",
                )}
              >
                My Work
              </Button>

              <Button
                variant="outline"
                className={cn(
                  "h-9 px-3 border border-[#1B64FF] text-white text-sm font-normal",
                  "bg-[#07033B]/80",
                  "hover:border-2 hover:border-[#1B64FF]",
                  "backdrop-blur-sm transition-all duration-200",
                )}
              >
                About Me
              </Button>

              <Button
                variant="outline"
                className={cn(
                  "h-9 px-10 border border-[#1B64FF] text-white text-sm font-normal",
                  "bg-[#07033B]/80",
                  "hover:border-2 hover:border-[#1B64FF]",
                  "backdrop-blur-sm transition-all duration-200",
                )}
              >
                CV
              </Button>

              <Button
                variant="outline"
                className={cn(
                  "h-9 px-5 border border-[#1B64FF] text-white text-sm font-normal",
                  "bg-[#07033B]/80",
                  "hover:border-2 hover:border-[#1B64FF]",
                  "backdrop-blur-sm transition-all duration-200",
                )}
              >
                Connect
              </Button>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-12 py-12 lg:py-20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Heading */}
            <h1 className="mb-8 lg:mb-12">
              <span
                className="block text-4xl sm:text-6xl lg:text-8xl xl:text-[100px] leading-tight italic"
                style={{
                  fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
                  fontWeight: "700",
                  color: "#FFFFFF",
                  textShadow: `
                    0 0 10px rgba(255, 255, 255, 0.8),
                    0 0 20px rgba(255, 255, 255, 0.6),
                    0 0 30px rgba(255, 255, 255, 0.4),
                    0 0 40px rgba(255, 255, 255, 0.3),
                    2px 2px 4px rgba(0, 0, 0, 0.8),
                    4px 4px 8px rgba(0, 0, 0, 0.6)
                  `,
                  filter:
                    "drop-shadow(0 0 25px rgba(255, 255, 255, 0.6)) drop-shadow(0 0 35px rgba(255, 255, 255, 0.4))",
                }}
              >
                CHAN LI
              </span>
            </h1>
            {/* Description */}
            <p className="text-white text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12 lg:mb-16 drop-shadow-lg">
              Hi! I'm a UX/UI Designer based in Calgary, AB. I have five years
              of experience in e-commerce and currently working in payments at
              Pekopay
            </p>

            {/* Contact Button */}
            <Button
              className={cn(
                "h-14 px-8 border border-[#08BCA1] text-white text-base font-normal",
                "bg-gradient-to-r from-[#0A23AF] to-[#147FA4]",
                "hover:from-[#0A23AF]/90 hover:to-[#147FA4]/90",
                "transition-all duration-200",
                "min-w-[240px]",
                "backdrop-blur-sm drop-shadow-lg",
                "hover:shadow-lg hover:shadow-[#08BCA1]/20",
              )}
            >
              <span className="text-[#08BCA1]">///</span>
              <span className="mx-4">Contact Me Now</span>
              <span className="text-[#08BCA1]">///</span>
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
