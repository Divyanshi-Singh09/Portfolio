import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown, Sparkles, ArrowRight } from "lucide-react";
import { personalData } from "../data/portfolioData";
import { useScrollSpy } from "../hooks/useScrollSpy";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(
    navItems.map((item) => item.id),
    150
  );

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
      <div
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between ${
          isScrolled
            ? "glass-panel bg-[#070711]/85 border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
            : "glass-panel-subtle bg-[#070711]/50 border-white/5"
        }`}
      >
        {/* Logo / Initials */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "home")}
          className="group flex items-center gap-2.5 text-white focus:outline-none"
          aria-label="Divyanshi Singh Home"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 via-indigo-600 to-cyan-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-violet-500/20">
            <div className="w-full h-full rounded-[10px] bg-[#070711] flex items-center justify-center">
              <span className="font-heading font-bold text-base tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300">
                {personalData.initials}
              </span>
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#070711] rounded-full" />
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="font-heading font-semibold text-sm leading-tight text-white group-hover:text-violet-300 transition-colors">
              {personalData.name}
            </span>
            <span className="text-[11px] text-zinc-400 font-mono tracking-wide">
              {personalData.role}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/5 rounded-full px-3 py-1.5" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/30 to-cyan-500/20 border border-violet-500/40"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Action: Resume & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {personalData.resumeAvailable && (
            <a
              href={personalData.resumeUrl}
              download="Divyanshi_Singh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 transition-all duration-300 shadow-md shadow-violet-600/25 hover:shadow-cyan-500/25 active:scale-95 group"
            >
              <FileDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
              <span>Resume</span>
            </a>
          )}

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-zinc-300 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500/50"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Overlay Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden mt-3 max-w-7xl mx-auto rounded-2xl glass-panel bg-[#070711]/95 border-white/15 p-5 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-1.5 pb-3">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-gradient-to-r from-violet-600/25 to-cyan-500/15 text-white border border-violet-500/30"
                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#06B6D4]" />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Resume & Contact Button */}
            <div className="pt-3 border-t border-white/10 flex flex-col sm:flex-row gap-2.5">
              {personalData.resumeAvailable && (
                <a
                  href={personalData.resumeUrl}
                  download="Divyanshi_Singh_Resume.pdf"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-cyan-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              )}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 bg-white/5 border border-white/10 hover:text-white"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
