import React from "react";
import Button from "../ui/Button";
import Magnetic from "../ui/Magnetic";
import { SiGithub, SiLinkedin, SiX, SiInstagram } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-deep-space/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Detailed Info */}
          <div className="w-full md:w-1/2">
            <h3 className="text-cyan font-mono mb-4">05. / Contact</h3>
            <h2 className="text-4xl md:text-5xl font-grotesk font-bold mb-6">
              Let's Build the <br />{" "}
              <span className="text-neon-purple">Impossible</span>
            </h2>
            <p className="text-gray-400 font-manrope text-lg mb-12 max-w-md">
              Have an idea that defies convention? I'm currently available for
              freelance projects and open to full-time opportunities.
            </p>

            <div className="flex gap-4">
              {[
                { icon: <SiGithub />, href: "#" },
                { icon: <SiLinkedin />, href: "#" },
                { icon: <SiX />, href: "#" },
                { icon: <SiInstagram />, href: "#" },
              ].map((social, idx) => (
                <Magnetic key={idx}>
                  <a
                    href={social.href}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-obsidian transition-colors text-xl"
                  >
                    {social.icon}
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          {/* HUD Form */}
          <div className="w-full md:w-1/2 relative">
            <form className="glass-panel p-8 rounded-2xl relative overflow-hidden">
              {/* Decorative HUD Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan/50 rounded-tl-lg" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan/50 rounded-br-lg" />

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-cyan mb-2">
                    / NAME
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-cyan mb-2">
                    / EMAIL
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-cyan mb-2">
                    / MESSAGE
                  </label>
                  <textarea
                    rows="4"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan outline-none transition-colors"
                    placeholder="Project details..."
                  ></textarea>
                </div>

                <Button
                  variant="primary"
                  className="w-full justify-center group"
                >
                  <span>Submit</span>
                 
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center text-gray-500 font-mono text-xs">
          <p>© 2025 Irza. All rights reserved.</p>
          <p>Designed & Built with React, Tailwind & R3F.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
