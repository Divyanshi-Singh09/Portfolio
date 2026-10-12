import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { toast } from "sonner";

export default function ProjectCard({ project, onOpenDetails, index }) {
  const handleLinkClick = (e, type, url, isPlaceholder) => {
    e.stopPropagation();
    if (isPlaceholder) {
      e.preventDefault();
      toast.info(
        `${project.title} ${type} link is a placeholder. Update it with your live URL in src/data/portfolioData.js!`,
        { duration: 4000 }
      );
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-3xl glass-card border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-600/10"
    >
      {/* Top Image Preview Container */}
      <div
        className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-zinc-950"
        onClick={() => onOpenDetails(project)}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070711] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

        {/* Category Badge */}
        <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider glass-panel border-white/20 text-cyan-300 backdrop-blur-md">
          {project.category}
        </div>

        {/* Quick View Button overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
          <span className="px-4 py-2 rounded-full glass-panel border-white/30 text-xs font-medium text-white flex items-center gap-1.5 shadow-lg">
            <span>Explore Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          {/* Title & Quick Actions */}
          <div className="flex items-start justify-between gap-3 mb-2.5">
            <h3
              onClick={() => onOpenDetails(project)}
              className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-violet-300 transition-colors cursor-pointer"
            >
              {project.title}
            </h3>
            <div className="flex items-center gap-1.5 shrink-0">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) =>
                  handleLinkClick(e, "GitHub", project.githubUrl, project.isPlaceholderLink)
                }
                aria-label={`GitHub code for ${project.title}`}
                className="p-2 rounded-xl text-zinc-400 hover:text-white glass-panel-subtle hover:bg-white/10 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) =>
                  handleLinkClick(e, "Live Demo", project.liveUrl, project.isPlaceholderLink)
                }
                aria-label={`Live demo for ${project.title}`}
                className="p-2 rounded-xl text-zinc-400 hover:text-cyan-400 glass-panel-subtle hover:bg-white/10 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Key Features Bullet Highlights */}
          <ul className="mb-5 space-y-1.5">
            {project.features.slice(0, 2).map((feat, fIdx) => (
              <li key={fIdx} className="text-[12px] text-zinc-400 flex items-center gap-2 truncate">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                <span className="truncate">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips & Expand Trigger */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] border border-white/5 text-zinc-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.02] text-zinc-500">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          <button
            onClick={() => onOpenDetails(project)}
            className="w-full py-2.5 rounded-xl text-xs font-medium text-zinc-300 glass-panel-subtle border-white/10 hover:border-violet-500/40 hover:text-white hover:bg-violet-600/10 transition-all flex items-center justify-center gap-1.5"
          >
            <span>View Architecture & Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
