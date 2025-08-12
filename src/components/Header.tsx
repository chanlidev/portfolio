import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const ACCENT = "#08BCA1";

type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

const nav: NavItem[] = [
  { label: "My Work", href: "/#work" },
  { label: "About Me", href: "/about-me" },
  {
    label: "Resume",
    href: "https://drive.google.com/file/d/1N0khIdbmGdyf9Nmjppm37mlUrf_D40Qi/view",
    external: true,
  },
  { label: "Contact", href: "/#contact" },
];

const Header: React.FC = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggle = () => setMobileOpen((v) => !v);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const baseLink =
    "inline-flex items-center rounded-xl px-3 py-2 text-sm font-medium transition";
  const desktopLink =
    "text-white/80 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10";
  const activeLink = "text-white border-white/15 bg-white/5";

  const isActive = (item: NavItem) => {
    // Simple active state: highlight About on /about-me; otherwise none for hash links
    if (!item.external && item.href === "/about-me")
      return pathname === "/about-me";
    if (!item.external && item.href === "/") return pathname === "/";
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Glass bar */}
      <div className="w-full border-b border-white/10 bg-white/5 backdrop-blur-md">
        <div className="mx-auto max-w-[1450px] px-4 lg:px-12">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <Link to="/" className="flex items-center gap-3">
              <span className="relative inline-block">
                <img
                  src="/images/profile.jpeg"
                  alt="Profile"
                  className="h-10 w-10 rounded-full border border-white/15 shadow-sm transition-transform duration-200 hover:scale-[1.03]"
                />
                <span
                  className="absolute -right-1 -bottom-1 h-2.5 w-2.5 rounded-full"
                  style={{
                    background: ACCENT,
                    boxShadow: `0 0 10px ${ACCENT}66`,
                  }}
                  aria-hidden
                />
              </span>
              <span className="hidden sm:block text-white/90 text-sm font-semibold tracking-wide">
                Chan Li
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-2">
              {nav.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseLink} ${desktopLink}`}
                    style={{
                      boxShadow: "0 0 0 rgba(0,0,0,0)",
                    }}
                  >
                    {item.label}
                  </a>
                ) : item.href.startsWith("/#") ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`${baseLink} ${desktopLink}`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`${baseLink} ${desktopLink} ${
                      isActive(item) ? activeLink : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ),
              )}
            </nav>

            {/* Mobile toggle */}
            <button
              className="md:hidden grid place-items-center h-10 w-10 rounded-lg border border-white/10 text-white/90 hover:bg-white/10 transition"
              onClick={toggle}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`md:hidden transition-[max-height,opacity] duration-300 overflow-hidden border-b border-white/10 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: "rgba(10,12,30,0.55)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="mx-auto max-w-[1450px] px-4 lg:px-12 py-3">
          <nav className="flex flex-col gap-2">
            {nav.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="w-full rounded-xl px-4 py-3 text-base text-white/90 border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  {item.label}
                </a>
              ) : item.href.startsWith("/#") ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="w-full rounded-xl px-4 py-3 text-base text-white/90 border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`w-full rounded-xl px-4 py-3 text-base border ${
                    isActive(item)
                      ? "border-white/15 bg-white/10 text-white"
                      : "border-white/10 bg-white/5 text-white/90 hover:bg-white/10"
                  } transition`}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
