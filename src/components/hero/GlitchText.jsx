import React from "react";
import { motion } from "framer-motion";

const GlitchText = ({ text }) => {
  return (
    <div className="relative inline-block group">
      <h1 className="text-6xl md:text-8xl font-grotesk font-bold text-white relative z-10">
        {text}
      </h1>

      {/* Glitch Layer 1 - Red/Cyan Shift */}
      <span
        className="absolute top-0 left-0 -z-10 w-full h-full text-6xl md:text-8xl font-grotesk font-bold text-cyan opacity-0 group-hover:opacity-70 group-hover:animate-pulse transition-opacity duration-100"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
          transform: "translate(-2px, -2px)",
        }}
      >
        {text}
      </span>

      <span
        className="absolute top-0 left-0 -z-10 w-full h-full text-6xl md:text-8xl font-grotesk font-bold text-neon-purple opacity-0 group-hover:opacity-70 group-hover:animate-pulse transition-opacity duration-100 delay-75"
        style={{
          clipPath: "polygon(0 80%, 100% 20%, 100% 100%, 0 100%)",
          transform: "translate(2px, 2px)",
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default GlitchText;
