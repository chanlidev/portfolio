import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems: string[] = ["My Work", "About Me", "Resume"];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen((prev) => !prev);

  return (
    <header className="w-full px-4 sm:px-8 lg:px-12 pt-4 lg:pt-10 bg-transparent">
      <div className="flex justify-between items-center">
        {/* Profile Avatar */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="w-12 h-12 rounded-full border border-[#1B64FF]"
            />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex flex-wrap gap-3 sm:gap-6">
          {navItems.map((label) => {
            const button = (
              <Button
                variant="outline"
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
                {label}
              </Button>
            );

            if (label === "My Work") {
              return (
                <Link key={label} to="/">
                  {button}
                </Link>
              );
            }

            if (label === "About Me") {
              return (
                <Link key={label} to="/about-me">
                  {button}
                </Link>
              );
            }

            // Default for Resume (or other items)
            return <React.Fragment key={label}>{button}</React.Fragment>;
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={toggleMobile}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu items */}
      {mobileOpen && (
        <nav className="sm:hidden mt-4 flex flex-col gap-3">
          {navItems.map((label) => {
            const button = (
              <Button
                variant="outline"
                className={cn(
                  "w-full flex items-center justify-center",
                  "border border-[#1B64FF] text-white text-base font-normal",
                  "bg-gradient-to-r from-[#1C0C7A] to-[#200349]",
                  "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
                  "backdrop-blur-sm transition-all duration-200",
                  "hover:border-2 hover:border-[#1B64FF]",
                  "hover:bg-gradient-to-r hover:from-[#1C0C7A] hover:to-[#200349]",
                  "hover:text-white hover:shadow-lg hover:shadow-[#08BCA1]/20",
                )}
              >
                {label}
              </Button>
            );

            if (label === "My Work") {
              return (
                <Link key={label} to="/">
                  {button}
                </Link>
              );
            }

            if (label === "About Me") {
              return (
                <Link key={label} to="/about-me">
                  {button}
                </Link>
              );
            }

            return <React.Fragment key={label}>{button}</React.Fragment>;
          })}
        </nav>
      )}
    </header>
  );
};

export default Header;
