import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ExperienceItem = ({ exp, index, isLeft }) => {
  return (
    <div
      className={`flex justify-between items-center w-full mb-12 ${
        isLeft ? "flex-row-reverse" : ""
      }`}
    >
      <div className="hidden md:block w-5/12"></div>

      {/* Timeline Node */}
      <div className="z-20 flex items-center order-1 w-8 h-8 rounded-full bg-obsidian border-2 border-cyan shadow-[0_0_10px_rgba(0,242,234,0.5)]">
        <div className="w-2 h-2 mx-auto rounded-full bg-cyan" />
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`order-1 w-full md:w-5/12 p-6 glass-panel rounded-xl ${
          isLeft ? "text-right" : "text-left"
        }`}
      >
        <h4 className="font-syne font-bold text-xl text-white mb-1">
          {exp.role}
        </h4>
        <h5 className="font-mono text-cyan text-sm mb-1">{exp.company}</h5>
        <div className="flex flex-col md:flex-row gap-1 md:gap-3 text-xs text-gray-500 font-mono mb-3">
          <span>{exp.period}</span>
          <span className="hidden md:inline text-cyan">•</span>
          <span>{exp.location}</span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {exp.description}
        </p>
        <div
          className={`flex flex-wrap gap-2 ${
            isLeft ? "justify-end" : "justify-start"
          }`}
        >
          {exp.tech.map((t) => (
            <span
              key={t}
              className="text-xs bg-white/5 px-2 py-1 rounded text-gray-300 border border-white/5"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences = [
    {
      role: "Manager of Information System",
      company: "Indonesian Future Leaders (IFL) Chapter Malang",
      period: "Oct 2025 – Present",
      location: "Malang, Indonesia",
      description:
        "Leading the information systems department to align organizational needs with web architecture, managing cross-functional teams to deliver digital features on schedule, and ensuring system reliability through rigorous Quality Assurance and technical documentation.",
      tech: ["Project Management", "System Architecture", "QA", "Leadership"],
    },
    {
      role: "Front-End Web Developer",
      company: "Akademi Competition",
      period: "Sep 2025 – Present",
      location: "Malang, Indonesia (Remote/On-site)",
      description:
        "Developing and maintaining high-performance e-learning web modules by transforming complex UI/UX designs into responsive, modular components, while collaborating with product teams to ensure seamless technical execution and minimal rework.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Tanstack Query"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden"
      ref={containerRef}
    >
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h3 className="text-cyan font-mono mb-4">04. / Journey</h3>
          <h2 className="text-4xl md:text-5xl font-grotesk font-bold">
            Experience
          </h2>
        </div>

        <div className="relative wrap overflow-hidden p-4 h-full">
          {/* Vertical Line */}
          <div
            className="absolute left-4 md:left-1/2 ml-[-1px] w-0.5 h-full bg-white/10"
            style={{ transform: "translateX(-50%)" }}
          ></div>
          <motion.div
            style={{ height }}
            className="absolute left-4 md:left-1/2 ml-[-1px] w-0.5 bg-gradient-to-b from-cyan via-neon-purple to-cyan shadow-[0_0_15px_rgba(0,242,234,0.6)]"
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, idx) => (
              <ExperienceItem
                key={idx}
                exp={exp}
                index={idx}
                isLeft={idx % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
