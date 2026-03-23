import { Briefcase } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  { role: "Software Developer", company: "Hiver", period: "Dec 2024 – Present", desc: "Developed the Hiver app and multiple supporting websites, contributing across application flows, web experiences, and platform structure using no-code and AI-assisted development tools.", skills: ["FlutterFlow", "Dart", "Flutter", "Firebase", "Supabase", "Cursor AI", "GitHub", "Lovable AI"] },

  { role: "Full-Stack Developer", company: "PrimeVend", period: "Jan 2025 – May 2025", desc: "Built a website for a vending machine company, working across frontend development, deployment, and domain configuration.", skills: ["HTML", "CSS", "JavaSScript", "PHP", "GitHub Pages", "Squarespace", "Google Domains"] },

  { role: "IT Coordinator", company: "NSLS Lewis University", period: "Jul 2024 – Jun 2025", desc: "Managed the chapter website, email communication, and social media while also troubleshooting technical issues across meetings and events.", skills: ["Canva", "Zoom", "Google Meet", "Google Workspace", "Mail Merge", "Troubleshooting"] },

  { role: "Software Engineer – AI Training", company: "Outlier", period: "May 2024 – Aug 2024", desc: "Improved AI model outputs through code-based evaluation and language-specific problem solving.", skills: ["Python", "JavaScript", "Java"] },

  { role: "Robotics Teacher", company: "RoboThink", period: "Sep 2024 – Nov 2024", desc: "Taught elementary students robotics concepts and guided them in building robots through hands-on activities.", skills: ["Robotics", "Teaching"] },

    { role: "Web Designer", company: "Words Alive", period: "Jul 2021 – Dec 2021", desc: "Built partner websites in Squarespace and created banners and graphics to support digital outreach and branding.", skills: ["Squarespace", "Canva"] },
];

const FlipCard = ({ exp, i }: { exp: typeof experiences[0]; i: number }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="cursor-pointer [perspective:800px]"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}
      >
        {/* Front */}
        <div className="glass-card-hover p-5 [backface-visibility:hidden]">
          <div className="flex items-center gap-2 mb-1">
            <Briefcase size={14} className="text-primary" />
            <span className="font-mono text-xs text-primary">{exp.period}</span>
          </div>
          <h3 className="font-semibold text-foreground text-left">{exp.role}</h3>
          <p className="text-sm text-secondary font-medium mb-2 text-left">@ {exp.company}</p>
          <p className="text-sm text-muted-foreground text-left">{exp.desc}</p>
          <p className="text-xs text-muted-foreground/60 mt-3 text-right italic">Click to flip</p>
        </div>

        {/* Back */}
        <div className="glass-card-hover p-5 absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center">
          <h3 className="font-semibold text-foreground mb-3 text-left">Tech Used:</h3>
          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground/60 mt-3 text-right italic">Click to flip back</p>
        </div>
      </div>
    </div>
  );
};

const ExperienceSection = () => (
  <section id="experience" className="py-24">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Professional <span className="gradient-text">Experience</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
          A timeline of my work building and supporting software systems
        </p>
      </AnimatedSection>

      {/* Desktop: alternating timeline */}
      <div className="relative max-w-4xl mx-auto hidden md:block">
        <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-border" />
        <div className="space-y-12">
          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`relative flex items-start ${isLeft ? "justify-start" : "justify-end"}`}>
                  <div className={`absolute left-1/2 -translate-x-1/2 top-3 w-4 h-4 rounded-full border-2 border-primary bg-background z-10 ${i === 0 ? "animate-pulse shadow-[0_0_8px_hsl(var(--primary)/0.6)]" : ""}`} />
                  <div className={`w-[45%] ${isLeft ? "pr-4" : "pl-4"}`}>
                    <FlipCard exp={exp} i={i} />
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>

      {/* Mobile: single-column timeline */}
      <div className="relative max-w-2xl mx-auto md:hidden">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="relative pl-14">
                <div className={`absolute left-3 top-1 w-4 h-4 rounded-full border-2 border-primary bg-background ${i === 0 ? "animate-pulse shadow-[0_0_8px_hsl(var(--primary)/0.6)]" : ""}`} />
                <FlipCard exp={exp} i={i} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
