import React, { useState } from "react";
import Button from "../ui/Button";
import Magnetic from "../ui/Magnetic";
import { SiGithub, SiLinkedin, SiX, SiInstagram } from "react-icons/si";
import { supabase } from "../../lib/supabase";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { error } = await supabase.from("contact_submissions").insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-8 rounded-2xl relative overflow-hidden"
            >
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
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan outline-none transition-colors"
                    placeholder="John Doe"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-cyan mb-2">
                    / EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan outline-none transition-colors"
                    placeholder="john@example.com"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-cyan mb-2">
                    / MESSAGE
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:border-cyan outline-none transition-colors"
                    placeholder="Project details..."
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-sm font-mono">
                    ✓ Message sent successfully!
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-sm font-mono">
                    ✗ Failed to send. Please try again.
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full justify-center group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span>Submit</span>
                  )}
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
