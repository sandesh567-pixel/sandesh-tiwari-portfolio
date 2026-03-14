import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { MessageSquare, Lightbulb, Users, Handshake } from "lucide-react";

const technical = [
  { name: "HTML", pct: 85 },
  { name: "CSS", pct: 80 },
  { name: "JavaScript (Basic)", pct: 55 },
  { name: "C Programming", pct: 65 },
  { name: "Hardware Maintenance", pct: 80 },
  { name: "Network Configuration", pct: 75 },
  { name: "Cisco Packet Tracer", pct: 70 },
  { name: "Subnetting", pct: 70 },
  { name: "Router Configuration", pct: 65 },
  { name: "Troubleshooting", pct: 80 },
];

const soft = [
  { name: "Communication", icon: MessageSquare },
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Customer Handling", icon: Handshake },
  { name: "Teamwork", icon: Users },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading title="Skills" subtitle="What I bring to the table" />
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-6 bg-card rounded-2xl border border-border card-shadow"
        >
          <h3 className="font-display font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="w-2 h-6 rounded-full gradient-bg" />
            Technical Skills
          </h3>
          <div className="space-y-4">
            {technical.map((s, i) => (
              <div key={s.name}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-foreground font-medium">{s.name}</span>
                  <span className="text-primary font-semibold">{s.pct}%</span>
                </div>
                <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full gradient-bg rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.05 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="p-6 bg-card rounded-2xl border border-border card-shadow mb-6">
            <h3 className="font-display font-semibold text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-6 rounded-full gradient-bg" />
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {soft.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-5 rounded-xl bg-accent border border-primary/10 text-center hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <s.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{s.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Extra CTA */}
          <div className="p-6 rounded-2xl gradient-bg text-center">
            <h4 className="text-lg font-display font-bold text-primary-foreground mb-2">Want to work together?</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">I'm always open to new opportunities</p>
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary-foreground text-primary font-semibold text-sm hover:opacity-90 transition-opacity">
              Let's Talk
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
