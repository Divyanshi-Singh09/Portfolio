import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Sparkles, Send, Eye, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "../components/SocialIcons";
import HeroScene from "../three/HeroScene";
import { personalData } from "../data/portfolioData";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect for headline roles
  useEffect(() => {
    const roles = personalData.headlineRoles;
    const current = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedRole.length < current.length) {
          setDisplayedRole(current.slice(0, displayedRole.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayedRole.length > 0) {
          setDisplayedRole(current.slice(0, displayedRole.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex]);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden cyber-radial-glow"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />

      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border-white/10 mb-6 group cursor-default"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-zinc-300">
              Open to Opportunities & Freelance
            </span>
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
          </motion.div>

          {/* Subtitle / Hello Intro */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg font-mono text-cyan-400 tracking-wider mb-2"
          >
            Hello, I'm
          </motion.p>

          {/* Main Name Heading with Shimmer Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-3"
          >
            <span className="text-gradient hover:opacity-90 transition-opacity">
              {personalData.name}
            </span>
          </motion.h1>

          {/* Dynamic Role Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="h-10 sm:h-12 flex items-center mb-5"
          >
            <span className="font-heading font-semibold text-xl sm:text-2xl md:text-3xl text-zinc-300 mr-2">
              A Passionate
            </span>
            <span className="font-heading font-semibold text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 border-r-2 border-cyan-400 animate-pulse pr-1">
              {displayedRole}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg sm:text-xl font-medium text-zinc-200 max-w-2xl mb-3"
          >
            "{personalData.tagline}"
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-sm sm:text-base text-zinc-400 max-w-2xl mb-8 leading-relaxed"
          >
            {personalData.heroDescription}
          </motion.p>

          {/* Hero Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
          >
            {/* View My Projects Button */}
            <button
              onClick={() => scrollTo("projects")}
              className="relative group px-6 py-3.5 rounded-full font-medium text-sm text-white overflow-hidden shadow-lg shadow-violet-600/30 hover:shadow-cyan-500/30 transition-all duration-300 active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 transition-all duration-300 group-hover:opacity-90" />
              <span className="relative z-10 flex items-center gap-2">
                <Eye className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>View My Projects</span>
              </span>
            </button>

            {/* Contact Me Button */}
            <button
              onClick={() => scrollTo("contact")}
              className="relative px-6 py-3.5 rounded-full font-medium text-sm text-zinc-200 glass-panel border-white/15 hover:border-violet-500/50 hover:text-white transition-all duration-300 hover:bg-white/[0.08] active:scale-95 group"
            >
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                <span>Contact Me</span>
              </span>
            </button>
          </motion.div>

          {/* Social Quick Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-3 text-zinc-400"
          >
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest mr-2">
              Connect:
            </span>
            <a
              href={personalData.socialLinks.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full glass-panel-subtle hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalData.socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full glass-panel-subtle hover:text-white hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalData.socialLinks.leetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode Profile"
              className="p-2.5 rounded-full glass-panel-subtle hover:text-white hover:border-amber-500/40 hover:bg-amber-500/10 transition-all"
            >
              <LeetcodeIcon className="w-4 h-4 text-amber-400" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              aria-label="Email Divyanshi Singh"
              className="p-2.5 rounded-full glass-panel-subtle hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Centerpiece Experience */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 h-[380px] sm:h-[480px] lg:h-[540px] w-full relative flex items-center justify-center"
        >
          {/* Subtle Backlight Glow for 3D sphere */}
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 via-indigo-500/20 to-cyan-400/20 rounded-full blur-3xl opacity-60" />

          {/* Interactive Three.js Canvas Scene */}
          <HeroScene />

          {/* Floating UI Badges around 3D sphere */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="absolute top-6 left-2 sm:left-4 glass-panel px-3.5 py-2 rounded-xl border-white/10 flex items-center gap-2.5 shadow-xl pointer-events-none"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-xs font-mono text-zinc-300">Interactive 3D WebGL</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 right-2 sm:right-4 glass-panel px-3.5 py-2 rounded-xl border-white/10 flex items-center gap-2.5 shadow-xl pointer-events-none"
          >
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-zinc-300">Clean MERN Stack Architecture</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group"
        onClick={() => scrollTo("about")}
      >
        <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500 group-hover:text-cyan-400 transition-colors">
          Explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full glass-panel-subtle flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-violet-500/40 transition-colors"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
