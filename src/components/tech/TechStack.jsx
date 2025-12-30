import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiPandas,
  SiScikitlearn,
  SiNumpy,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiVuedotjs,
  SiAngular,
  SiExpress,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiGit,
  SiFirebase,
  SiVercel,
  SiGraphql,
  SiPrisma,
  SiKeras,
  SiOpencv,
  SiJupyter,
  SiAnaconda,
  SiPlotly,
  SiApachespark,
  SiHuggingface,
  SiMlflow,
} from "react-icons/si";
import { TbBrandOpenai } from "react-icons/tb";

const TechStack = () => {
  const [activeTab, setActiveTab] = useState("webdev");

  const categories = {
    webdev: {
      label: "WEB_DEV",
      color: "cyan",
      technologies: [
        { icon: <SiReact />, name: "React", color: "#61DAFB" },
        { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff" },
        { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
        { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <SiTailwindcss />, name: "Tailwind", color: "#38B2AC" },
        { icon: <SiNodedotjs />, name: "Node.js", color: "#339933" },
        { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
        { icon: <SiHtml5 />, name: "HTML5", color: "#E34F26" },
        { icon: <SiCss3 />, name: "CSS3", color: "#1572B6" },
        { icon: <SiVuedotjs />, name: "Vue.js", color: "#4FC08D" },
        { icon: <SiExpress />, name: "Express", color: "#ffffff" },
        { icon: <SiPostgresql />, name: "PostgreSQL", color: "#4169E1" },
        { icon: <SiRedis />, name: "Redis", color: "#DC382D" },
        { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
        { icon: <SiGit />, name: "Git", color: "#F05032" },
        { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
        { icon: <SiVercel />, name: "Vercel", color: "#ffffff" },
        { icon: <SiGraphql />, name: "GraphQL", color: "#E10098" },
        { icon: <SiPrisma />, name: "Prisma", color: "#2D3748" },
        { icon: <SiAngular />, name: "Angular", color: "#DD0031" },
      ],
    },
    ml: {
      label: "MACHINE_LEARNING",
      color: "neon-purple",
      technologies: [
        { icon: <SiPython />, name: "Python", color: "#3776AB" },
        { icon: <SiPytorch />, name: "PyTorch", color: "#EE4C2C" },
        { icon: <SiTensorflow />, name: "TensorFlow", color: "#FF6F00" },
        { icon: <SiPandas />, name: "Pandas", color: "#150458" },
        { icon: <SiScikitlearn />, name: "Scikit", color: "#F7931E" },
        { icon: <SiNumpy />, name: "NumPy", color: "#013243" },
        { icon: <SiKeras />, name: "Keras", color: "#D00000" },
        { icon: <SiOpencv />, name: "OpenCV", color: "#5C3EE8" },
        { icon: <SiJupyter />, name: "Jupyter", color: "#F37626" },
        { icon: <SiAnaconda />, name: "Anaconda", color: "#44A833" },
        { icon: <SiPlotly />, name: "Plotly", color: "#3F4F75" },
        { icon: <TbBrandOpenai />, name: "OpenAI", color: "#412991" },
        { icon: <SiHuggingface />, name: "HuggingFace", color: "#FFD21E" },
        { icon: <SiMlflow />, name: "MLflow", color: "#0194E2" },
        { icon: <SiApachespark />, name: "Spark", color: "#E25A1C" },
      ],
    },
  };

  // Generate random positions for desktop-like layout
  const generateRandomPositions = (count) => {
    const positions = [];
    for (let i = 0; i < count; i++) {
      positions.push({
        x: Math.random() * 80 + 10, // 10% to 90%
        y: Math.random() * 70 + 15, // 15% to 85%
        rotation: Math.random() * 20 - 10, // -10 to 10 degrees
        scale: 0.8 + Math.random() * 0.4, // 0.8 to 1.2
        floatDuration: 3 + Math.random() * 4, // 3s to 7s
        floatDelay: Math.random() * 2, // 0s to 2s
        floatX: Math.random() * 30 - 15, // -15 to 15
        floatY: Math.random() * 30 - 15, // -15 to 15
      });
    }
    return positions;
  };

  const positions = useMemo(() => {
    return {
      webdev: generateRandomPositions(categories.webdev.technologies.length),
      ml: generateRandomPositions(categories.ml.technologies.length),
    };
  }, []);

  return (
    <section id="tech" className="py-24 relative z-10 overflow-hidden">
      {/* Matrix-like background animation */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyan font-mono text-xs"
            style={{ left: `${i * 5}%` }}
            animate={{
              y: ["-100%", "100vh"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {Math.random() > 0.5 ? "1" : "0"}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative">
        <h3 className="text-cyan font-mono mb-4">02. / Tech Stack</h3>
        <h2 className="text-4xl md:text-5xl font-grotesk font-bold mb-8">
          Digital <span className="text-neon-purple">Arsenal</span>
        </h2>

        {/* Hacker-style Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {Object.entries(categories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`relative px-6 py-3 font-mono text-sm border transition-all duration-300 ${
                activeTab === key
                  ? `border-${category.color} text-${category.color} bg-${category.color}/10`
                  : "border-white/20 text-gray-500 hover:border-white/40"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Scanning line effect */}
              {activeTab === key && (
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r from-transparent via-${category.color}/20 to-transparent`}
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              )}

              {/* Blinking cursor effect */}
              <span className="relative z-10">
                {">"} {category.label}
                {activeTab === key && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    _
                  </motion.span>
                )}
              </span>

              {/* Corner decorations */}
              <div
                className={`absolute top-0 left-0 w-2 h-2 border-t border-l ${
                  activeTab === key
                    ? `border-${category.color}`
                    : "border-white/20"
                }`}
              />
              <div
                className={`absolute top-0 right-0 w-2 h-2 border-t border-r ${
                  activeTab === key
                    ? `border-${category.color}`
                    : "border-white/20"
                }`}
              />
              <div
                className={`absolute bottom-0 left-0 w-2 h-2 border-b border-l ${
                  activeTab === key
                    ? `border-${category.color}`
                    : "border-white/20"
                }`}
              />
              <div
                className={`absolute bottom-0 right-0 w-2 h-2 border-b border-r ${
                  activeTab === key
                    ? `border-${category.color}`
                    : "border-white/20"
                }`}
              />
            </motion.button>
          ))}
        </div>

        {/* Desktop-like floating icons container */}
        <div className="relative w-full h-[500px] border border-white/10 rounded-2xl bg-obsidian/30 backdrop-blur-sm overflow-hidden">
          {/* Grid background */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 245, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 245, 212, 0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full"
            >
              {categories[activeTab].technologies.map((tech, index) => {
                const pos = positions[activeTab][index];
                return (
                  <motion.div
                    key={tech.name}
                    className="absolute cursor-pointer group"
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                    }}
                    initial={{
                      opacity: 0,
                      scale: 0,
                      rotate: pos.rotation - 180,
                    }}
                    animate={{
                      opacity: 1,
                      scale: pos.scale,
                      rotate: pos.rotation,
                      x: [0, pos.floatX, 0, -pos.floatX * 0.5, 0],
                      y: [0, pos.floatY, 0, -pos.floatY * 0.5, 0],
                    }}
                    transition={{
                      opacity: { duration: 0.3, delay: index * 0.05 },
                      scale: { duration: 0.5, delay: index * 0.05 },
                      rotate: { duration: 0.5, delay: index * 0.05 },
                      x: {
                        duration: pos.floatDuration,
                        repeat: Infinity,
                        delay: pos.floatDelay,
                        ease: "easeInOut",
                      },
                      y: {
                        duration: pos.floatDuration * 1.2,
                        repeat: Infinity,
                        delay: pos.floatDelay,
                        ease: "easeInOut",
                      },
                    }}
                    whileHover={{
                      scale: pos.scale * 1.3,
                      zIndex: 50,
                      rotate: 0,
                    }}
                  >
                    {/* Icon container */}
                    <div
                      className="relative flex flex-col items-center gap-1 p-2 rounded-xl bg-obsidian/60 backdrop-blur-sm border border-white/10 
                                 hover:border-white/30 hover:bg-obsidian/80 transition-all duration-300
                                 hover:shadow-lg hover:shadow-cyan/20"
                    >
                      {/* Tech icon - small size */}
                      <div
                        className="text-2xl transition-all duration-300"
                        style={{ color: tech.color }}
                      >
                        {tech.icon}
                      </div>

                      {/* Tech name - hidden by default, show on hover */}
                      <span className="text-[10px] font-mono text-gray-400 group-hover:text-white transition-colors whitespace-nowrap">
                        {tech.name}
                      </span>

                      {/* Glow effect on hover */}
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"
                        style={{ backgroundColor: tech.color }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Corner decorations */}
          <div className="absolute top-2 left-2 text-cyan/30 font-mono text-xs">
            [TECH_CLOUD]
          </div>
          <div className="absolute top-2 right-2 text-cyan/30 font-mono text-xs">
            v2.0
          </div>
          <div className="absolute bottom-2 left-2 text-cyan/30 font-mono text-xs">
            {categories[activeTab].technologies.length} items
          </div>
          <div className="absolute bottom-2 right-2 text-cyan/30 font-mono text-xs">
            [INTERACTIVE]
          </div>
        </div>

        {/* Status bar */}
        <motion.div
          className="mt-8 inline-flex items-center gap-3 px-4 py-2 border border-white/10 rounded font-mono text-xs text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-green-500"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span>SYSTEM_STATUS: OPERATIONAL</span>
          <span className="text-cyan">|</span>
          <span>
            {categories[activeTab].technologies.length} MODULES_LOADED
          </span>
          <span className="text-cyan">|</span>
          <span className="text-neon-purple">HOVER TO EXPLORE</span>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
