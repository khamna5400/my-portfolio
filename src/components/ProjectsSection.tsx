import { ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Hiver",
    desc: "Full-stack social platform built with Flutter and structured backend architecture supporting event discovery and user interaction.",
    tags: ["Flutter", "Dart", "Firebase", "Backend Systems"],
    link: "https://thehiverapp.com/",
  },
  {
    title: "PrimeVend",
    desc: "Service-based website developed for a vending machine company, featuring service information, machine request functionality, and a contact form.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "GitHub Pages", "Squarespace", "Google Domains"],
    link: "https://www.primevend.net/",
  },
  {
    title: "GigAfter",
    desc: "Full-stack platform for live music venues to manage artist bookings, contracts, scheduling, and payment workflows.",
    tags: ["Full-Stack Architecture", "Backend Logic", "Supabase", "Data Systems"],
    link: "https://www.gigafter.com/",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
          A selection of work that showcases my engineering and development capabilities.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {projects.map((proj, i) => (
          <AnimatedSection key={proj.title} delay={i * 0.1}>
            <a href={proj.link} target="_blank" rel="noopener noreferrer" className="glass-card-hover p-6 flex flex-col h-full group block">
              {/* Decorative top bar */}
              <div className="flex items-center gap-1.5 mb-5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-secondary/60" />
                <div className="w-3 h-3 rounded-full bg-primary/60" />
              </div>

              <h3 className="font-semibold text-lg text-foreground mb-2 flex items-center gap-2">
                {proj.title}
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </h3>
              <p className="text-sm text-muted-foreground mb-5 flex-1">{proj.desc}</p>

              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-xs rounded-md bg-primary/10 text-primary font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
