import { Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const certs = [
  { name: "Microsoft Certified Office Specialist", detail: "Access Expert", color: "primary" },
  { name: "CompTIA Cloud Essentials+", detail: "Cloud Fundamentals", color: "secondary" },
  { name: "Red Hat System Admin I", detail: "Linux Administration", color: "primary" },
  { name: "SheCodes Basics", detail: "Web Development", color: "secondary" },
];

const CredentialsSection = () => (
  <section id="credentials" className="py-24">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Verified <span className="gradient-text">Credentials</span>
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-lg mx-auto">
          Industry-recognized certifications that validate my expertise.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {certs.map((cert, i) => (
          <AnimatedSection key={cert.name} delay={i * 0.1}>
            <div className="glass-card-hover p-6 text-center group h-full flex flex-col items-center justify-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${cert.color === "primary" ? "bg-primary/10" : "bg-secondary/10"}`}>
                <Award size={24} className={cert.color === "primary" ? "text-primary" : "text-secondary"} />
              </div>
              <h3 className="font-semibold text-sm text-foreground mb-1">{cert.name}</h3>
              <p className="text-xs text-muted-foreground">{cert.detail}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CredentialsSection;
