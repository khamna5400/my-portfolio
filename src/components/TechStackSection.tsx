import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    title: "Languages",
    items: ["HTML", "CSS", "Java", "Python", "JavaScript", "Dart", "Flutter", "Assembly", "PHP", "SQL", "Typescript", "JavaFX"],
    accent: "primary" as const,
  },
  {
    title: "Frameworks & Development",
    items: ["React", "Node.js", "FlutterFlow", "JavaFX", "REST APIs", "Squarespace", "WordPress", "Dreamweaver", "GitHub Pages"],
    accent: "secondary" as const,
  },
  {
    title: "Databases & Systems",
    items: ["PostgreSQL", "MySQL", "Firebase", "Supabase", "Linux", "Unix", "Windows Server"],
    accent: "primary" as const,
  },
  {
    title: "Tools, AI & Design",
    items: ["Git", "GitHub", "Eclipse", "VS Code", "Microsoft Visual Studio", "Jupyter Notebook", "GitHub Copilot", "Figma", "Cursor AI", "Adobe Suite", "Google Workspace", "Microsoft Office", "Canva"],
    accent: "secondary" as const,
  },
];

const TechStackSection = () => (
  <section id="tech" className="py-24">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
          The tools and technologies I use to bring ideas to life.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((cat, i) => (
          <AnimatedSection key={cat.title} delay={i * 0.1}>
            <div className="glass-card-hover p-6 h-full">
              <h3 className={`font-mono text-sm font-semibold mb-4 ${cat.accent === "primary" ? "glow-text-cyan" : "glow-text-emerald"}`}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-md bg-muted/60 text-foreground/80 border border-border/50 hover:border-primary/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
