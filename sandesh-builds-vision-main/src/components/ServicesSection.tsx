import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Globe, Layout, Code, Cpu, Wifi, Bug } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Development", desc: "Custom responsive websites tailored to your needs." },
  { icon: Layout, title: "Landing Page Design", desc: "High-converting, beautifully designed landing pages." },
  { icon: Code, title: "Frontend Development", desc: "Clean, modern frontend interfaces using latest tech." },
  { icon: Cpu, title: "Hardware Troubleshooting", desc: "Diagnosis and repair of computer hardware issues." },
  { icon: Wifi, title: "Basic Network Setup", desc: "LAN/WAN configuration, router setup, and cabling." },
  { icon: Bug, title: "Website Bug Fixing", desc: "Identify and fix bugs in existing websites." },
];

const ServicesSection = () => (
  <section id="services" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading title="Services" subtitle="What I can do for you" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative p-6 bg-card rounded-2xl border border-border card-shadow hover:card-shadow-hover hover:border-primary/30 transition-all text-center overflow-hidden"
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rounded-xl transition-all">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
