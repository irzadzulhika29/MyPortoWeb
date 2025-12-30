import React from "react";
import NoiseOverlay from "./components/ui/NoiseOverlay";
import CustomCursor from "./components/ui/CustomCursor";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import TechStack from "./components/tech/TechStack";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import SocialProof from "./components/socialproof/SocialProof";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="min-h-screen bg-obsidian text-white selection:bg-cyan selection:text-obsidian relative overflow-hidden">
      <NoiseOverlay />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <SocialProof />
        <Contact />
      </main>
    </div>
  );
}

export default App;
