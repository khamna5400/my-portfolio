import AnimatedSection from "./AnimatedSection";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/YOUR_FORM_ID_HERE/viewform?embedded=true";

const ContactSection = () => (
  <section id="contact" className="py-24">
    <div className="container mx-auto px-6">
      <AnimatedSection>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build the <span className="gradient-text">Next Generation</span> of Software.
          </h2>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            I'm currently open to opportunities in full-stack engineering and software development.
            If you're building a system, scaling a platform, or need a developer who understands both frontend and backend architecture, I’d be happy to connect.<br /><br /> Feel free to reach out using the form below.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="max-w-2xl mx-auto glass-card p-2 rounded-xl overflow-hidden">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeGhVlv1cJYML4MaJS2tg09Ef15RzJFKYr3tjSHw16M7U-mLA/viewform?embedded=true"
            width="100%"
            height="800"
            className="rounded-lg border-0"
            title="Contact Form"
          >
            Loading…
          </iframe>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
