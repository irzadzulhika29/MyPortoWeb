import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Button from "../ui/Button";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform progress to degrees (0 to 360)
  const progressDegrees = useTransform(smoothProgress, [0, 1], [0, 360]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#tech", label: "Tech" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled ? "top-2" : "top-6"
        }`}
      >
        {/* Outer wrapper for progress border */}
        <div className="relative p-[2px] rounded-2xl">
          {/* Animated progress border */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: useTransform(
                progressDegrees,
                (deg) =>
                  `conic-gradient(from 0deg, #00f5d4 0deg, #a855f7 ${
                    deg * 0.5
                  }deg, #00f5d4 ${deg}deg, transparent ${deg}deg, transparent 360deg)`
              ),
            }}
          />

          {/* Glow effect behind progress */}
          <motion.div
            className="absolute inset-0 rounded-2xl blur-md pointer-events-none opacity-50"
            style={{
              background: useTransform(
                progressDegrees,
                (deg) =>
                  `conic-gradient(from 0deg, #00f5d4 0deg, #a855f7 ${
                    deg * 0.5
                  }deg, #00f5d4 ${deg}deg, transparent ${deg}deg, transparent 360deg)`
              ),
            }}
          />

          {/* Glass container - centered & wider */}
          <div
            className={`relative min-w-max px-16 py-4 rounded-2xl transition-all duration-500 ${
              scrolled
                ? "bg-obsidian/90 backdrop-blur-xl shadow-2xl shadow-cyan/5"
                : "bg-obsidian/80 backdrop-blur-md"
            }`}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center gap-12">
              {/* Logo */}
              <a
                href="#"
                className="group flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-cyan/20 to-neon-purple/20 border border-white/20 hover:border-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan/20"
              >
                <span className="text-xs font-bold font-mono text-gradient tracking-tighter">
                  MID
                </span>
              </a>

              {/* Separator */}
              <div className="hidden md:block h-6 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

              {/* Nav Links */}
              <div className="hidden md:flex items-center gap-8 font-manrope text-sm">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="relative text-gray-400 hover:text-white transition-colors group"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {/* Underline effect */}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-cyan group-hover:w-full transition-all duration-300" />
                    {/* Glow on hover */}
                    <span className="absolute inset-0 bg-cyan/10 rounded opacity-0 group-hover:opacity-100 blur-sm transition-opacity" />
                  </motion.a>
                ))}
              </div>

              {/* Separator */}
              <div className="hidden md:block h-6 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <a
                  href="#contact"
                  className="px-6 py-2.5 text-xs font-mono border border-cyan/50 text-cyan rounded-lg hover:bg-cyan/10 hover:border-cyan transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Contact Me</span>
                  {/* Shine effect */}
                  <motion.span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>
              </motion.div>
            </div>

            {/* Animated border gradient (decorative) */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan/0 via-cyan/20 to-cyan/0"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                style={{ opacity: scrolled ? 0.3 : 0 }}
              />
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
