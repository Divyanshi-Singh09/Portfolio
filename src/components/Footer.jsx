import { ArrowUp, Mail, Heart, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./SocialIcons";
import { personalData } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[#05050d] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Brand & Initials */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 p-[1px] flex items-center justify-center">
            <div className="w-full h-full rounded-[11px] bg-[#070711] flex items-center justify-center font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300">
              {personalData.initials}
            </div>
          </div>
          <div className="text-left">
            <h4 className="font-heading font-bold text-lg text-white leading-tight">
              {personalData.name}
            </h4>
            <span className="text-xs text-zinc-400 font-mono">{personalData.role}</span>
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 my-6 text-xs sm:text-sm text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 my-4">
          <a
            href={personalData.socialLinks.github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-full glass-panel-subtle text-zinc-400 hover:text-white hover:border-violet-500/40 hover:bg-violet-600/10 transition-all"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalData.socialLinks.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-full glass-panel-subtle text-zinc-400 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-600/10 transition-all"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personalData.socialLinks.leetcode.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="p-2.5 rounded-full glass-panel-subtle text-zinc-400 hover:text-white hover:border-amber-500/40 hover:bg-amber-600/10 transition-all"
          >
            <LeetcodeIcon className="w-4 h-4 text-amber-400" />
          </a>
          <a
            href={`mailto:${personalData.email}`}
            aria-label="Email Divyanshi"
            className="p-2.5 rounded-full glass-panel-subtle text-zinc-400 hover:text-white hover:border-violet-500/40 hover:bg-violet-600/10 transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Footer Text & Dynamic Year */}
        <div className="mt-8 pt-8 border-t border-white/5 w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} {personalData.name}. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            <span>Designed &amp; Developed by</span>
            <span className="text-zinc-300 font-medium">{personalData.name}</span>
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-cyan-300 transition-colors group cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
