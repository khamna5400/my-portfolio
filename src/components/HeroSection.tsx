import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background grid */}
    <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--muted)/0.08)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--muted)/0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
    {/* Radial glow */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

    <div className="container mx-auto px-6 text-center relative z-10">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-mono text-sm text-primary mb-4 tracking-widest uppercase"
      >
        Hello, World
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6"
      >
        Software Engineer &<br />
        <span className="gradient-text">Full-Stack Developer</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg mb-10 leading-relaxed"
      >
        I build full-stack applications with a focus on clean architecture, scalable systems, and real-world usability. My work spans web platforms, mobile apps, and backend systems.
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_-5px_hsl(var(--glow-cyan)/0.5)] transition-all duration-300"
      >
        View My Engineering Work
        <ArrowDown size={18} />
      </motion.a>
    </div>
  </section>
);

export default HeroSection;
