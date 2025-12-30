import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import AchievementList from "./AchievementList";
import TerminalLoader from "../ui/TerminalLoader";

import ACImage from "../../../public/ac.png"
import IFLImage from "../../../public/ifl.png"
import { link } from "framer-motion/client";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [showLoader, setShowLoader] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenLoader = (project) => {
    setSelectedProject(project);
    setShowLoader(true);
  };

  const handleLoaderComplete = () => {
    // Keep loader open to show project details
    // User can close manually with ESC button
  };

  const projectsData = [
    {
      title: "Akademi Competition",
      link:"https://akademi.competition.id",
      description:
        "Academy Competition is an online learning platform designed to help university students prepare for academic competitions such as Business Case Competition (BCC), debate, and other collegiate contests",
      
      tags: ["React.js", "Tailwind CSS", "Tanstack Query", "Go"],
      image: ACImage,
    },
    {
      title: "IFL Web",
      link:"https://www.iflchaptermalang.org",
      description:
        "Indonesian Future Leaders is a youth-led non-governmental organization dedicated to empowering young Indonesians to develop their quality and capabilities in driving positive social change. The platform serves as a hub for programs, initiatives, and resources that support youth leadership, community impact, and nation-building for a better Indonesia.",
      tags: ["React.js", "Tailwind CSS", "Laravel"],
      image:
        IFLImage,
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan/5 to-transparent pointer-events-none" />
      <div className="absolute -left-20 top-40 w-60 h-60 bg-neon-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <TerminalLoader
        isOpen={showLoader}
        onClose={() => {
          setShowLoader(false);
          setSelectedProject(null);
        }}
        onComplete={handleLoaderComplete}
        project={selectedProject}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div>
            <h3 className="text-cyan font-mono mb-4">03. / Work</h3>
            <h2 className="text-4xl md:text-5xl font-grotesk font-bold">
              Selected{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Projects
              </span>
            </h2>
          </div>

          {/* Custom Tab Switcher */}
          <div className="glass-panel p-1 rounded-lg flex relative bg-obsidian/40 border border-white/10 backdrop-blur-md">
            {["projects", "achievements"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2 rounded-md text-sm font-mono transition-colors z-10 ${
                  activeTab === tab
                    ? "text-cyan"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/5 border border-white/10 rounded-md -z-10 shadow-[0_0_15px_rgba(0,245,212,0.1)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab === "projects" ? "// PROJECTS" : "// ACHIEVEMENTS"}
              </button>
            ))}
          </div>
        </div>

        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "projects" ? (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projectsData.map((project, idx) => (
                  <ProjectCard
                    key={idx}
                    project={project}
                    onViewProject={() => handleOpenLoader(project)}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto"
              >
                <AchievementList />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
