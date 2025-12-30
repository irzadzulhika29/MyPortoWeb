import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TerminalLoader = ({ isOpen, onClose, onComplete, project }) => {
  const [typedTitle, setTypedTitle] = useState("");
  const [typedDescription, setTypedDescription] = useState("");
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    if (!isOpen || !project) {
      setTypedTitle("");
      setTypedDescription("");
      setShowDescription(false);
      return;
    }

    // Type title first
    let charIndex = 0;
    const title = project.title || "";
    
    const titleInterval = setInterval(() => {
      if (charIndex < title.length) {
        setTypedTitle(title.substring(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(titleInterval);
        // Start typing description after title is done
        setTimeout(() => {
          setShowDescription(true);
          let descIndex = 0;
          const description = project.description || "";
          
          const descInterval = setInterval(() => {
            if (descIndex < description.length) {
              setTypedDescription(description.substring(0, descIndex + 1));
              descIndex++;
            } else {
              clearInterval(descInterval);
              // Notify completion after 2 seconds
              setTimeout(() => {
                onComplete?.();
              }, 2000);
            }
          }, 30);
        }, 500);
      }
    }, 50);

    return () => {
      clearInterval(titleInterval);
    };
  }, [isOpen, project, onComplete]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-obsidian flex items-center justify-center font-mono"
        >
          {/* Grid Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 245, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 245, 212, 0.1) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="w-full max-w-2xl p-6 relative">
            {/* Terminal Window */}
            <div className="border border-cyan/30 bg-black/80 rounded-lg overflow-hidden shadow-[0_0_30px_rgba(0,245,212,0.1)]">
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-2 border-b border-cyan/20 bg-cyan/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-xs text-cyan/70">
                  REMOTE_ACCESS_TERMINAL
                </div>
                <button
                  onClick={onClose}
                  className="text-cyan/70 hover:text-cyan text-xs"
                >
                  [ESC]
                </button>
              </div>

              {/* Content */}
              <div className="p-6 min-h-[300px] font-mono text-sm">
                {project && (
                  <div className="space-y-6">
                    {/* Project Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="border border-cyan/30 rounded-lg overflow-hidden"
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                    </motion.div>

                    {/* Project Title with Typing Effect */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-cyan border-l-2 border-cyan pl-3"
                    >
                      <div className="text-xs text-cyan/60 mb-1">// PROJECT_NAME</div>
                      <div className="text-lg font-bold">
                        {typedTitle}
                        {typedTitle.length < (project.title?.length || 0) && (
                          <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="inline-block w-2 h-4 bg-cyan ml-1 align-middle"
                          />
                        )}
                      </div>
                    </motion.div>

                    {/* Project Tags */}
                    {project.tags && typedTitle.length === project.title?.length && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-wrap gap-2"
                      >
                        {project.tags.map((tag, idx) => (
                          <span 
                            key={idx}
                            className="text-xs px-2 py-1 bg-cyan/10 border border-cyan/30 rounded text-cyan"
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>
                    )}

                    {/* Description with Typing Effect */}
                    {showDescription && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-cyan/70 border-l-2 border-neon-purple pl-3"
                      >
                        <div className="text-xs text-cyan/60 mb-1">// DESCRIPTION</div>
                        <div className="text-sm leading-relaxed">
                          {typedDescription}
                          {typedDescription.length < (project.description?.length || 0) && (
                            <motion.span
                              animate={{ opacity: [0, 1, 0] }}
                              transition={{ repeat: Infinity, duration: 0.8 }}
                              className="inline-block w-2 h-3 bg-cyan ml-1 align-middle"
                            />
                          )}
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Decor elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-cyan/20 rounded-tl-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-cyan/20 rounded-br-3xl"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TerminalLoader;
