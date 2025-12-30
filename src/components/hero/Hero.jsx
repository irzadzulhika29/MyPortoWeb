import React, { useState } from "react";
import NeuralNetworkCanvas from "./NeuralNetworkCanvas";
import GlitchText from "./GlitchText";
import Button from "../ui/Button";
import PDFViewer from "../ui/PDFViewer";
import { motion } from "framer-motion";

const Hero = () => {
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  const handleExploreWork = () => {
    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background - R3F Canvas */}
        <NeuralNetworkCanvas />

        {/* Overlay to darken background slightly for text readability if needed */}
        <div className="absolute inset-0 bg-obsidian/30 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-2">
              <GlitchText text="Visual Data" />
            </div>
            <h2 className="text-5xl md:text-7xl font-grotesk font-bold text-white mb-6">
              Meets{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-neon-purple">
                Intelligence
              </span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl mb-10 font-manrope leading-relaxed">
              Frontend Developer x Machine Learning Engineer.
              <br />
              Crafting immersive digital experiences with precision and depth.
            </p>

            <motion.div
              className="flex flex-col md:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button variant="primary" onClick={handleExploreWork}>
                Explore Work
              </Button>
              <Button variant="glass" onClick={() => setIsPdfOpen(true)}>
                View Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-sm flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span>Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-cyan to-transparent opacity-50" />
        </motion.div>
      </section>

      {/* PDF Viewer Modal */}
      <PDFViewer
        isOpen={isPdfOpen}
        onClose={() => setIsPdfOpen(false)}
        pdfUrl="/cv.pdf"
      />
    </>
  );
};

export default Hero;
