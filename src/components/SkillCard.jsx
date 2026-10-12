import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Zap,
  Component,
  Sparkles,
  Smartphone,
  Server,
  Layers,
  Send,
  ShieldCheck,
  Activity,
  Database,
  Flame,
  Coffee,
  GitBranch,
  Terminal,
  Cloud,
  Box,
  Binary,
  Cpu,
  CheckCircle2,
  Globe,
} from "lucide-react";
import { GithubIcon } from "./SocialIcons";

const iconMap = {
  Code,
  Palette,
  Zap,
  Component,
  Sparkles,
  Smartphone,
  Server,
  Layers,
  Send,
  ShieldCheck,
  Activity,
  Database,
  Flame,
  Coffee,
  GitBranch,
  Github: GithubIcon,
  Terminal,
  Cloud,
  Box,
  Binary,
  Cpu,
  CheckCircle2,
  Globe,
};

export default function SkillCard({ skill, index }) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const IconComponent = iconMap[skill.icon] || Code;

  // 3D Tilt interaction on mouse move
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = -(y / (rect.height / 2)) * 10;
    const rotY = (x / (rect.width / 2)) * 10;
    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.03 }}
      style={{
        transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="group relative rounded-2xl glass-card p-4 sm:p-5 flex flex-col justify-between border-white/10 overflow-hidden cursor-default"
    >
      {/* Subtle corner light highlight */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-violet-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-cyan-400/20 transition-all duration-500" />

      <div className="flex items-center gap-3.5 mb-3">
        <div className="p-2.5 rounded-xl bg-violet-600/15 border border-violet-500/20 text-violet-400 group-hover:text-cyan-300 group-hover:border-cyan-500/40 group-hover:bg-cyan-500/15 transition-all duration-300 shadow-sm">
          <IconComponent className="w-5 h-5 transition-transform group-hover:scale-110" />
        </div>
        <div>
          <h4 className="text-sm sm:text-base font-semibold text-white group-hover:text-violet-300 transition-colors">
            {skill.name}
          </h4>
        </div>
      </div>

      <div className="pt-2 border-t border-white/5 flex items-center justify-between">
        <span className="text-[11px] font-mono text-zinc-400 group-hover:text-zinc-300 transition-colors">
          {skill.level}
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-violet-500 group-hover:bg-cyan-400 transition-colors shadow-sm" />
      </div>
    </motion.div>
  );
}
