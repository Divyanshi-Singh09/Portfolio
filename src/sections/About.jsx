import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  GraduationCap,
  Code2,
  Sparkles,
  Terminal,
  CheckCircle2,
  ExternalLink,
  Award,
} from "lucide-react";
import { personalData } from "../data/portfolioData";

const iconMap = {
  MapPin,
  Briefcase,
  GraduationCap,
  Code2,
  Award,
};

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle border-violet-500/30 text-violet-400 text-xs font-mono uppercase tracking-widest mb-3"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Discover</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Combining modern design, responsive architecture, and efficient backend engineering.
          </motion.p>
        </div>

        {/* Two-Column About Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Portrait & Futuristic Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Animated Gradient Outer Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 opacity-70 blur-lg group-hover:opacity-100 transition-opacity duration-500" />

              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden glass-panel border-white/15 bg-[#0a0a16] p-3 sm:p-4">
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-zinc-900">
                  <img
                    src={personalData.avatarUrl}
                    alt={personalData.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback if image fails
                      e.target.style.display = "none";
                    }}
                  />
                  {/* Glassmorphic Cyber Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070711] via-transparent to-transparent opacity-80" />

                  {/* Corner Tech Badges */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-zinc-300 glass-panel px-3 py-2 rounded-xl border-white/10 backdrop-blur-md">
                    <span className="flex items-center gap-1.5 text-white">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      {personalData.name}
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1 text-[11px]">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Full Stack Dev
                    </span>
                  </div>
                </div>

                {/* Key Highlights Grid below photo */}
                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/10">
                  {personalData.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-center"
                    >
                      <div className="text-base sm:text-lg font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-300">
                        {item.value}
                      </div>
                      <div className="text-[11px] text-zinc-400">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Text & 4 Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Bio Paragraphs */}
            <div className="space-y-4 mb-8 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p className="text-base sm:text-lg font-medium text-white">
                "I'm <span className="text-violet-400 font-semibold">{personalData.name}</span>, a{" "}
                <span className="text-cyan-400 font-semibold">{personalData.role}</span> passionate
                about building modern, scalable, and user-friendly web applications."
              </p>
              <p className="text-zinc-400">
                I enjoy working with frontend and backend technologies, designing interactive
                interfaces, developing robust APIs, and solving challenging programming problems.
              </p>
              <p className="text-zinc-400">
                My goal is to build meaningful digital products that combine clean design, efficient
                functionality, and excellent user experience.
              </p>
            </div>

            {/* 4 Editable Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalData.aboutCards.map((card, idx) => {
                const IconComponent = iconMap[card.icon] || Code2;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card p-4 rounded-2xl border-white/10 group relative"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-xl bg-violet-600/15 border border-violet-500/25 text-violet-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500">
                          {card.title}
                        </span>
                        <h4 className="text-sm font-semibold text-white truncate mt-0.5 group-hover:text-violet-300 transition-colors">
                          {card.value}
                        </h4>
                        <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
                          {card.subtext}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
