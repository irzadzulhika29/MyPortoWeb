import React from "react";

const GlassCard = ({ children, className = "", hoverEffect = false }) => {
  return (
    <div
      className={`
        glass-panel rounded-2xl p-6 transition-all duration-300
        ${
          hoverEffect
            ? "hover:bg-white/10 hover:shadow-2xl hover:-translate-y-1"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
