import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
                className="w-8 h-8 rounded-full border-2 border-white/20"
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
                  "hover:from-[#1C0C7A]/90 hover:to-[#200349]/90",
                )}
              >
                My Work
              </Button>

              <Button
                variant="outline"
                className={cn(
                  "h-9 px-3 border border-[#1B64FF] text-white text-sm font-normal",
                  "bg-[#07033B] hover:bg-[#07033B]/90",
                )}
              >
                About Me
              </Button>

              <Button
                variant="outline"
                className={cn(
                  "h-9 px-10 border border-[#1B64FF] text-white text-sm font-normal",
                  "bg-[#07033B] hover:bg-[#07033B]/90",
                )}
              >
                CV
              </Button>

              <Button
                variant="outline"
                className={cn(
                  "h-9 px-5 border border-[#1B64FF] text-white text-sm font-normal",
                  "bg-[#07033B] hover:bg-[#07033B]/90",
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
            <h1 className="font-lexend-zetta font-normal text-white mb-8 lg:mb-12">
              <span className="block text-4xl sm:text-6xl lg:text-8xl xl:text-[100px] leading-tight">
                CHAN LI
              </span>
            </h1>

            {/* Description */}
            <p className="text-white text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed mb-12 lg:mb-16">
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
