import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 bg-accent border-t border-border">
    <div className="container mx-auto px-6">
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-5">
          <a href="mailto:khamna5400@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="https://github.com/khamna5400/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/hk-hamnakhan/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 Hamna Khan | All Rights Reserved</p>
      </div>
    </div>
  </footer>
);

export default Footer;
