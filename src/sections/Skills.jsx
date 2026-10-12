import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Sparkles, Layers } from "lucide-react";
import { skillsData } from "../data/portfolioData";
import SkillCard from "../components/SkillCard";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...skillsData.map((cat) => cat.category)];
  }, []);

  const displayedSkills = useMemo(() => {
    if (activeCategory === "All") {
      return skillsData.flatMap((cat) =>
        cat.skills.map((s) => ({ ...s, category: cat.category }))
      );
    }
    const found = skillsData.find((cat) => cat.category === activeCategory);
    return found ? found.skills.map((s) => ({ ...s, category: found.category })) : [];
  }, [activeCategory]);

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070711]">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-3"
          >
            <Cpu className="w-3.5 h-3.5 text-violet-400" />
            <span>Technical Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4"
          >
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            A curated stack of modern frontend frameworks, backend engines, databases, and core software engineering principles.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-white font-semibold"
                    : "text-zinc-400 hover:text-zinc-200 glass-panel-subtle border-white/5 hover:border-white/10"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillsTab"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 border border-white/20 shadow-lg shadow-violet-500/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Category Description info if single category selected */}
        {activeCategory !== "All" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <p className="text-xs sm:text-sm font-mono text-cyan-400/90 inline-block px-4 py-1.5 rounded-full bg-cyan-950/30 border border-cyan-800/40">
              {skillsData.find((c) => c.category === activeCategory)?.description}
            </p>
          </motion.div>
        )}

        {/* Responsive Grid of Skill Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill, index) => (
              <SkillCard key={`${skill.category}-${skill.name}`} skill={skill} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
