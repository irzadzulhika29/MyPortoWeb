import React from "react";
import { motion } from "framer-motion";
/* eslint-disable no-unused-vars */

const LevitatingIcon = ({ children, delay = 0, color = "#00F2EA" }) => {
  return (
    <div className="relative group">
      <motion.div
        animate={{
          y: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }}
        className="relative z-10 glass-panel p-6 rounded-2xl flex items-center justify-center text-4xl text-gray-400 transition-all duration-300 group-hover:text-white group-hover:scale-110"
        style={{
          boxShadow: "0 0 0 rgba(0,0,0,0)", // Initial shadow
        }}
      >
        <span
          className="group-hover:drop-shadow-[0_0_8px_var(--glow-color)] transition-all duration-300"
          style={{ "--glow-color": color }}
        >
          {children}
        </span>
      </motion.div>

      {/* Glow Effect on Hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-300 -z-10"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

export default LevitatingIcon;
