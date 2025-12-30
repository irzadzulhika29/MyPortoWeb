import React from "react";
import { motion } from "framer-motion";
import { FiAward, FiStar, FiGithub, FiTrendingUp } from "react-icons/fi";
import { SiTensorflow } from "react-icons/si";

import HologyImage from "../../../public/hology.jpg";
import { image } from "framer-motion/client";

const AchievementCard = ({ achievement, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
      className="group relative rounded-xl bg-obsidian/40 border border-white/5 overflow-hidden hover:bg-obsidian/60 transition-all duration-300"
    >
      {/* Glow Effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/5 rounded-full blur-[50px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan/10 transition-colors" />

      {/* Cyber Corners */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-cyan transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-cyan transition-colors" />

      {/* Achievement Image */}
      {achievement.image && (
        <div className="relative h-40 w-full overflow-hidden">
          <img
            src={achievement.image}
            alt={achievement.title}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 rounded-lg bg-white/5 text-cyan border border-white/10 group-hover:border-cyan/30 group-hover:shadow-[0_0_15px_rgba(0,245,212,0.15)] transition-all duration-300">
            {achievement.icon}
          </div>
          <span className="font-mono text-xs text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
            {achievement.year}
          </span>
        </div>

        <h4 className="text-lg font-syne font-bold text-white mb-2 group-hover:text-cyan transition-colors">
          {achievement.title}
        </h4>

        <p className="text-gray-400 font-manrope text-xs leading-relaxed mb-4">
          {achievement.organization}
        </p>

        {/* Decorative Dash Line */}
        <div className="mt-auto pt-4 border-t border-dashed border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-600">
          <span>RANK: {achievement.rank}</span>
          <span className="group-hover:text-cyan transition-colors">
            VERIFIED
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const AchievementList = () => {
  const achievements = [
    {
      title: "Finalist Data Mining",
      image: HologyImage,
      organization: "Hology 8.0 (FILKOM Universitas Brawijaya)",
      year: "2025",
      rank: "Finalist",
      icon: <FiAward className="text-2xl" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {achievements.map((item, idx) => (
        <AchievementCard key={idx} achievement={item} index={idx} />
      ))}
    </div>
  );
};

export default AchievementList;
