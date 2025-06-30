import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navItems: string[] = ["My Work", "About Me", "Resume"];

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen((prev) => !prev);

  // One solid bg, plus border and the same hover effects
  const btnBase = cn(
    "flex items-center justify-center",
    "border border-[#1B64FF] text-white font-normal",
    "bg-[#1C0C7A]",
    "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]",
    "backdrop-blur-sm transition-all duration-200",
    // hover effects preserved:
    "hover:border-2 hover:border-[#1B64FF]",
    "hover:bg-[#1C0C7A]",
    "hover:text-white",
    "hover:shadow-lg hover:shadow-[#08BCA1]/20",
  );

  return (
    <header className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 pt-6 lg:pt-10 bg-transparent">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex-shrink-0">
          <img
            src="/images/profile.jpeg"
            alt="Profile"
            className={cn(
              "w-12 h-12 rounded-full",
              // keep the same 2px border always
              "border border-[#1B64FF] box-border",
              // on hover, add a ring + shadow rather than changing the border
              "hover:ring-2 hover:ring-[#1B64FF] hover:shadow-lg hover:shadow-[#08BCA1]/20",
              "backdrop-blur-sm transition-all duration-200",
            )}
          />
        </Link>

        <nav className="hidden md:flex gap-4">
          {navItems.map((label) => {
            const btn = (
              <Button
                variant="outline"
                className={cn(btnBase, "h-9 w-32 text-sm")}
              >
                {label}
              </Button>
            );

            if (label === "Resume") {
              return (
                <a
                  key={label}
                  href="https://drive.google.com/file/d/1R0BT0FvMzCuiv1gx8Uo6ljCiNjrhfoqO/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {btn}
                </a>
              );
            }

            return (
              <Link key={label} to={label === "About Me" ? "/about-me" : "/"}>
                {btn}
              </Link>
            );
          })}
        </nav>

        <button
          className="md:hidden p-2 text-white"
          onClick={toggleMobile}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="sm:hidden mt-4 flex flex-col gap-3">
          {navItems.map((label) => {
            const btn = (
              <Button
                variant="outline"
                className={cn(btnBase, "w-full text-base")}
              >
                {label}
              </Button>
            );

            if (label === "Resume") {
              return (
                <a
                  key={label}
                  href="https://drive.google.com/file/d/1R0BT0FvMzCuiv1gx8Uo6ljCiNjrhfoqO/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {btn}
                </a>
              );
            }

            return (
              <Link key={label} to={label === "About Me" ? "/about-me" : "/"}>
                {btn}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
};

export default Header;
