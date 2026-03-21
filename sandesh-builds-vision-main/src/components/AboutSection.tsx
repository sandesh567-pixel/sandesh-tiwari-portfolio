import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code, Cpu, Wifi, BookOpen, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const passions = [
  { icon: Code, label: "Web Development", desc: "Building modern responsive web apps" },
  { icon: Wifi, label: "Computer Networking", desc: "LAN/WAN setup & configuration" },
  { icon: Cpu, label: "Hardware Troubleshooting", desc: "Diagnosis & repair of systems" },
  { icon: BookOpen, label: "Modern Technologies", desc: "Always learning new tech stacks" },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading title="About Me" subtitle="Get to know me better" />
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              I'm <span className="gradient-text">Sandesh Tiwari</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A Bachelor of Information Technology (BIT) student at Texas College of Management & IT in Nepal. I'm passionate about building modern digital solutions, from responsive web apps to robust network configurations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I've completed 8–9 months of intensive training in Hardware and Networking Technician Level-2 under CTEVT, gaining practical skills in computer hardware, network configuration, and troubleshooting.
            </p>
            <Button variant="outline" className="rounded-full" asChild>
<a href="/cv-sandesh.pdf" target="_blank" rel="noopener">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>

            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="p-5 rounded-2xl bg-primary/10 border border-primary/20 text-center">
              <div className="text-3xl font-display font-bold gradient-text">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Done</div>
            </div>
            <div className="p-5 rounded-2xl bg-primary/10 border border-primary/20 text-center">
              <div className="text-3xl font-display font-bold gradient-text">1+</div>
              <div className="text-sm text-muted-foreground mt-1">Year Experience</div>
            </div>
            <div className="p-5 rounded-2xl bg-primary/10 border border-primary/20 text-center">
              <div className="text-3xl font-display font-bold gradient-text">5+</div>
              <div className="text-sm text-muted-foreground mt-1">Tech Skills</div>
            </div>
            <div className="p-5 rounded-2xl bg-primary/10 border border-primary/20 text-center">
              <div className="text-3xl font-display font-bold gradient-text">3</div>
              <div className="text-sm text-muted-foreground mt-1">Certifications</div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {passions.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-5 rounded-xl bg-card border border-border card-shadow hover:card-shadow-hover transition-all hover:border-primary/30 text-center"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                <p.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold text-foreground block">{p.label}</span>
              <span className="text-xs text-muted-foreground mt-1 block">{p.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
