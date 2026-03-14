import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "RC Plane Engineering Project",
    desc: "Designed and built a thermocol-based RC plane with motor and control system.",
    tech: ["Engineering", "Electronics"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Banking System (C++)",
    desc: "Developed a basic banking management system using C++ concepts.",
    tech: ["C++", "OOP"],
    color: "from-accent to-accent/50",
  },
  {
    title: "Network Design — Cisco Packet Tracer",
    desc: "Created multiple network topologies including routers, switches, and subnetting.",
    tech: ["Cisco", "Networking", "Subnetting"],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Personal Portfolio Website",
    desc: "Designed a responsive personal portfolio website showcasing projects and skills.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "from-accent to-accent/50",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <SectionHeading title="Projects" subtitle="Things I've built" />
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-card rounded-2xl border border-border overflow-hidden card-shadow hover:card-shadow-hover transition-all"
          >
            {/* Gradient header strip */}
            <div className={`h-2 w-full bg-gradient-to-r ${p.color}`} />
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display font-semibold text-foreground text-lg">{p.title}</h3>
                <a
                  href="https://github.com/sandeshtiwari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors flex-shrink-0"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
