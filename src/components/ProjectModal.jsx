import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle, Layers, Sparkles, AlertCircle } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { toast } from "sonner";

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const handleLinkClick = (e, type, url, isPlaceholder) => {
    if (isPlaceholder) {
      e.preventDefault();
      toast.info(
        `${project.title} ${type} link is currently configured as a placeholder. Add your live URL in portfolioData.js!`,
        { duration: 4000 }
      );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel bg-[#0d0d1e]/95 border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full glass-panel-subtle text-zinc-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Project Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-white/10 bg-zinc-900">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-mono font-medium glass-panel border-white/20 text-cyan-300">
                {project.category}
              </div>
            </div>

            {/* Title & Short Tagline */}
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-heading">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 mb-6 leading-relaxed">
              {project.fullDescription || project.shortDescription}
            </p>

            {/* Key Features List */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-violet-400 mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Key Engineered Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-zinc-300"
                  >
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-violet-400 mb-3 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-violet-400" />
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-violet-600/15 border border-violet-500/25 text-violet-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Placeholder Link Notice */}
            {project.isPlaceholderLink && (
              <div className="mb-6 p-3 rounded-xl bg-violet-950/40 border border-violet-500/30 flex items-center gap-2.5 text-xs text-violet-300">
                <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>
                  Demo & GitHub links are marked as configurable placeholders. Replace them in{" "}
                  <code className="text-cyan-300 font-mono">src/data/portfolioData.js</code>.
                </span>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) =>
                  handleLinkClick(e, "Live Demo", project.liveUrl, project.isPlaceholderLink)
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-white bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 transition-all shadow-md shadow-violet-600/20 active:scale-95"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Live Demo</span>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) =>
                  handleLinkClick(e, "GitHub", project.githubUrl, project.isPlaceholderLink)
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium text-zinc-300 glass-panel border-white/15 hover:border-violet-500/40 hover:text-white transition-all active:scale-95"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
