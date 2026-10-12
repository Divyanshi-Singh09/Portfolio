import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, Sparkles, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { educationData, certificationsData } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3"
          >
            <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
            <span>Academic & Certifications</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-heading"
          >
            Education & <span className="text-gradient">Certifications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Computer Science & Engineering foundation, core software methodologies, and professional industry credentials.
          </motion.p>
        </div>

        {/* Education & Certifications Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* B.Tech Degree Card (7 cols) */}
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border-white/10 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300"
            >
              <div>
                {/* Header Icon & Year */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-2xl bg-cyan-600/15 border border-cyan-500/30 text-cyan-300 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    {edu.period}
                  </span>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm font-medium text-violet-300 mb-1">{edu.institution}</p>
                {edu.university && (
                  <p className="text-xs text-zinc-400 mb-3 font-mono">Affiliation: {edu.university}</p>
                )}
                <div className="inline-block text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full mb-4">
                  {edu.specialization}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                  {edu.description}
                </p>
              </div>

              {/* Coursework list */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  Relevant Coursework
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-zinc-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Certifications Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {certificationsData.map((cert, cIdx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + cIdx * 0.15 }}
                className="glass-card p-6 sm:p-7 rounded-3xl border-white/10 flex flex-col justify-between flex-1 group hover:border-violet-500/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="p-3 rounded-2xl bg-violet-600/15 border border-violet-500/30 text-violet-300 group-hover:scale-105 transition-transform">
                      <Award className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Verified
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white font-heading group-hover:text-violet-300 transition-colors mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-cyan-300 mb-3 font-mono">
                    Issued by: {cert.issuer}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-5">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                    Competencies Validated
                  </span>
                  <div className="space-y-1.5">
                    {cert.skillsGained.map((sk, sIdx) => (
                      <div key={sIdx} className="text-xs text-zinc-400 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{sk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
