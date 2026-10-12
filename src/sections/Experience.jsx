import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, Edit3 } from "lucide-react";
import { experienceData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070711]">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle border-violet-500/30 text-violet-400 text-xs font-mono uppercase tracking-widest mb-3"
          >
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Development Journey</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-heading"
          >
            Work Experience & <span className="text-gradient">Career Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Practical engineering focus, architecture milestones, and production full-stack developments.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {experienceData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-6 sm:pl-10 group"
            >
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#070711] border-2 border-violet-500 group-hover:border-cyan-400 group-hover:scale-125 transition-all shadow-[0_0_12px_rgba(139,92,246,0.6)]" />

              {/* Date stamp positioned on the left for larger displays */}
              <div className="md:absolute md:-left-36 md:top-1 text-xs font-mono text-zinc-400 md:text-right md:w-28 mb-2 md:mb-0">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/5">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  {item.period}
                </span>
              </div>

              {/* Timeline Content Card */}
              <div className="glass-card p-6 sm:p-7 rounded-2xl border-white/10 group-hover:border-violet-500/30 transition-all">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-violet-300 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-cyan-300 flex items-center gap-1.5 mt-0.5">
                      <span>{item.organization}</span>
                      <span className="text-zinc-600">•</span>
                      <span className="text-zinc-400 text-xs flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-zinc-500" />
                        {item.location}
                      </span>
                    </p>
                  </div>

                  {item.isEditablePlaceholder && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/5">
                      <Edit3 className="w-3 h-3 text-violet-400" />
                      Editable Entry
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Responsibilities list */}
                <ul className="space-y-2 mb-5">
                  {item.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="text-xs sm:text-sm text-zinc-400 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/5">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-violet-600/15 border border-violet-500/25 text-violet-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
