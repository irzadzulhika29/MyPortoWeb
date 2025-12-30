import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const DraggableNameTag = ({ children, imageSrc }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const rotateX = useTransform(springY, [-50, 50], [10, -10]);
  const rotateY = useTransform(springX, [-50, 50], [-10, 10]);

  return (
    <motion.div
      ref={ref}
      drag
      dragElastic={0.1}
      dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
      style={{ x: springX, y: springY, rotateX, rotateY }}
      whileDrag={{ scale: 1.05, cursor: "grabbing" }}
      className="cursor-grab relative"
    >
      {/* Name Tag Frame */}
      <div className="relative group">
        {/* Lanyard/Strap */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-1 h-20 bg-gradient-to-b from-cyan/50 to-transparent rounded-full" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-16 h-8 rounded-full border-2 border-cyan/30 rotate-90" />

        {/* Name Tag Card */}
        <div className="relative bg-gradient-to-br from-obsidian via-deep-space to-obsidian border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-sm">
          {/* Clip/Hole at top */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-obsidian border-2 border-cyan/50 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-cyan/50 rounded-full" />
          </div>

          {/* Decorative corners */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan/50 rounded-tl-lg" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan/50 rounded-tr-lg" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan/50 rounded-bl-lg" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan/50 rounded-br-lg" />

          {/* Image Container */}
          <div className="relative overflow-hidden rounded-xl aspect-[3/4] w-64">
            <img
              src={imageSrc}
              alt="Profile"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              draggable={false}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Name Section */}
          <div className="mt-4 text-center">
            <div className="font-mono text-xs text-cyan mb-1">DEVELOPER</div>
            {children}
            <div className="mt-2 flex justify-center gap-2">
              <span className="px-2 py-1 bg-cyan/10 text-cyan text-xs font-mono rounded">
                FRONT END
              </span>
              <span className="px-2 py-1 bg-neon-purple/10 text-neon-purple text-xs font-mono rounded">
                ML/AI
              </span>
            </div>
          </div>

          {/* Barcode decoration */}
          <div className="mt-4 flex justify-center gap-0.5">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="bg-white/20"
                style={{
                  width: Math.random() > 0.5 ? "2px" : "1px",
                  height: "16px",
                }}
              />
            ))}
          </div>
        </div>

        {/* Shadow */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-cyan/10 blur-2xl rounded-full" />

        {/* Drag hint */}
        <motion.div
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-xs font-mono text-gray-500"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          [ DRAG ME ]
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DraggableNameTag;
