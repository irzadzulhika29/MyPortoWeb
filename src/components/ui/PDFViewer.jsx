import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PDFViewer = ({ isOpen, onClose, pdfUrl }) => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    console.log("PDF Viewer isOpen:", isOpen);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev - 0.2, 0.5));
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume_Irza.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark/95 backdrop-blur-md z-[9999]"
          />

          {/* PDF Viewer Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed inset-4 md:inset-10 z-[10000] flex items-center justify-center pointer-events-none"
          >
            {/* Futuristic Frame */}
            <div className="relative w-full h-full max-w-6xl pointer-events-auto">
              {/* Glowing Corner Accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-cyan animate-pulse" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-cyan animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-cyan animate-pulse" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-cyan animate-pulse" />

              {/* Main Container with Glass Effect */}
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                {/* Noise Overlay */}
                <div className="absolute inset-0 opacity-5 pointer-events-none z-10">
                  <div className="absolute inset-0 bg-repeat animate-noise" 
                       style={{
                         backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' /%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
                       }}
                  />
                </div>

                {/* Glass Background */}
                <div className="absolute inset-0 bg-linear-to-br from-dark/90 via-dark-lighter/90 to-dark/90 backdrop-blur-xl" />
                
                {/* Glowing Border */}
                <div className="absolute inset-0 border border-cyan/30 rounded-xl" />
                <div className="absolute inset-0 border border-cyan/10 rounded-xl blur-sm" />

                {/* Header Bar */}
                <div className="relative z-20 flex items-center justify-between p-4 md:p-6 border-b border-cyan/20">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer" onClick={onClose} />
                      <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors" />
                      <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors" />
                    </div>
                    <h3 className="text-cyan font-mono text-sm md:text-base flex items-center gap-2">
                      <span className="animate-pulse">▸</span> RESUME.PDF
                    </h3>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-2 md:gap-4">
                    <button
                      onClick={handleZoomOut}
                      className="p-2 hover:bg-cyan/10 rounded-lg transition-colors group"
                      title="Zoom Out"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                      </svg>
                    </button>
                    <span className="text-gray-400 font-mono text-sm hidden md:block">
                      {Math.round(scale * 100)}%
                    </span>
                    <button
                      onClick={handleZoomIn}
                      className="p-2 hover:bg-cyan/10 rounded-lg transition-colors group"
                      title="Zoom In"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </button>
                    <button
                      onClick={handleDownload}
                      className="p-2 hover:bg-cyan/10 rounded-lg transition-colors group"
                      title="Download"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                    <button
                      onClick={onClose}
                      className="p-2 hover:bg-red-500/10 rounded-lg transition-colors group"
                      title="Close"
                    >
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* PDF Content Area */}
                <div className="relative z-10 h-[calc(100%-80px)] overflow-auto p-4 md:p-6 scrollbar-thin scrollbar-thumb-cyan/30 scrollbar-track-transparent">
                  <div
                    className="flex justify-center items-start min-h-full"
                    style={{ transform: `scale(${scale})`, transformOrigin: "top center", transition: "transform 0.3s ease" }}
                  >
                    <iframe
                      src={pdfUrl}
                      className="w-full h-250 md:h-300 rounded-lg border border-cyan/20 bg-white"
                      title="PDF Viewer"
                    />
                  </div>
                </div>

                {/* Scan Line Effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                  <div className="absolute w-full h-px bg-linear-to-r from-transparent via-cyan to-transparent animate-scan" />
                </div>
              </div>

              {/* Outer Glow */}
              <div className="absolute inset-0 -z-10 bg-cyan/5 blur-2xl rounded-xl" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PDFViewer;
