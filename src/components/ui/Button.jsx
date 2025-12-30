import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer";

  const variants = {
    primary:
      "bg-cyan text-obsidian hover:shadow-[0_0_20px_rgba(0,242,234,0.4)] hover:scale-105",
    glass: "glass-panel text-white hover:bg-white/10 hover:border-white/30",
    outline: "border border-cyan text-cyan hover:bg-cyan/10",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
