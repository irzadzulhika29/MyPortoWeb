import React from "react";
import ScrambleText from "./ScrambleText";
import DraggableNameTag from "./DraggableNameTag";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h3 className="text-cyan font-mono mb-4">01. / About Me</h3>
            <h2 className="text-4xl md:text-5xl font-grotesk font-bold mb-6">
              Engineering the <br />
              <span className="text-gradient">Future of Web</span>
            </h2>

            <div className="space-y-6 text-gray-400 font-manrope text-lg leading-relaxed">
              <p>
                <ScrambleText text="I am a passionate Front End Developer and Machine Learning Engineer driven by the intersection of design and data." />
              </p>
              <p>
                Driven by curiosity about how technology works, I build
                applications that are not only functional but also deliver
                engaging and interactive web experiences.
              </p>
              <p>
                I focus on the synergy of Front-end development, Machine
                Learning, and business strategy to create intelligent,
                high-performance applications that drive growth.
              </p>
            </div>
          </div>

          {/* Visual Content - Draggable Name Tag */}
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center items-center min-h-[500px] perspective-1000">
            <DraggableNameTag imageSrc="/irza.svg">
              <h3 className="text-xl font-grotesk font-bold text-white">
                IRZA
              </h3>
            </DraggableNameTag>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
