import React, { useState } from "react";
import GlassCard from "../ui/GlassCard";
import Button from "../ui/Button";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";
import { FiExternalLink, FiMaximize2 } from "react-icons/fi";

const ProjectCard = ({ project, onViewProject }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <GlassCard
      className="relative group h-[520px] flex flex-col p-0 border-white/5 bg-obsidian/20 overflow-visible"
      hoverEffect={false} // Custom hover effect
    >
      {/* Cyberpunk Decor Borders (Corners) */}
      <div className="absolute -top-px -left-px w-8 h-8 border-t border-l border-cyan/30 rounded-tl-xl transition-all duration-300 group-hover:border-cyan group-hover:w-full group-hover:h-full group-hover:rounded-xl" />
      <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r border-cyan/30 rounded-br-xl transition-all duration-300 group-hover:border-cyan group-hover:w-full group-hover:h-full group-hover:rounded-xl" />

      {/* Image Container with Glitch Effect Parent */}
      <div
        className="relative h-[280px] w-full overflow-hidden rounded-t-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 bg-obsidian/10 z-10 transition-opacity group-hover:opacity-0" />

        {/* Image */}
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />

        {/* Overlay Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />

        {/* Hover Overlay Actions */}
        <div
          className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
            isHovered
              ? "opacity-100 backdrop-blur-sm bg-obsidian/40"
              : "opacity-0"
          }`}
        >
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full border-2 border-cyan/50 text-cyan bg-obsidian/80 flex items-center justify-center hover:bg-cyan hover:text-black transition-all duration-300 hover:scale-110"
            >
              <FiExternalLink className="text-2xl" />
            </a>
          )}
        </div>

        {/* Status Tag */}
        <div className="absolute top-4 right-4 px-2 py-1 bg-black/60 backdrop-blur border border-white/10 rounded text-[10px] font-mono text-cyan flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          DEPLOYED
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 relative flex flex-col">
        <div className="flex justify-center items-start mb-2">
          <h3 className="text-xl font-bold font-syne text-white group-hover:text-cyan transition-colors">
            {project.title}
          </h3>
        </div>

        <p className="text-gray-400 text-sm font-manrope line-clamp-2 mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase font-mono tracking-wider text-cyan/80 bg-cyan/5 border border-cyan/10 px-2 py-1 rounded hover:bg-cyan/10 hover:border-cyan/30 transition-colors"
            >
              # {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center mt-auto pt-4 border-t border-white/5">
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="h-8 px-4 text-xs !rounded-lg border-cyan/30 text-cyan hover:bg-cyan/20 hover:text-white font-mono tracking-tight"
              onClick={onViewProject}
            >
              INIT_VIEW <FiExternalLink className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
