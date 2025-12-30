import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { supabase } from "../../lib/supabase";

const SocialProof = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(6);

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  if (isLoading) {
    return (
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin w-8 h-8 border-2 border-cyan border-t-transparent rounded-full" />
          </div>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return null; // Don't render section if no testimonials
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-cyan font-mono mb-4">04. / Social Proof</h3>
          <h2 className="text-4xl md:text-5xl font-grotesk font-bold mb-6">
            What People <span className="text-gradient">Say</span>
          </h2>
          <p className="text-gray-400 font-manrope text-lg max-w-2xl mx-auto">
            Messages and feedback from visitors who reached out through the
            contact form.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="group relative"
            >
              {/* Card */}
              <div className="glass-panel p-6 rounded-2xl h-full relative overflow-hidden border border-white/5 hover:border-cyan/30 transition-colors duration-300">
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-bl from-cyan/20 to-transparent rotate-45" />
                </div>

                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan to-neon-purple flex items-center justify-center text-white font-grotesk font-bold text-sm">
                    {getInitials(testimonial.name)}
                  </div>
                  <div>
                    <h4 className="text-white font-grotesk font-semibold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs font-mono">
                      {formatDate(testimonial.created_at)}
                    </p>
                  </div>
                </div>

                {/* Message */}
                <p className="text-gray-400 font-manrope text-sm leading-relaxed line-clamp-4">
                  "{testimonial.message}"
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan/5 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
