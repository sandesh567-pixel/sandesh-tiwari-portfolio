import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award, Shield, BookOpen } from "lucide-react";

const certs = [
  { title: "Hardware and Networking Technician Level-2", org: "CTEVT", icon: Shield },
  { title: "Cisco Packet Tracer Network Practice", org: "Self-directed", icon: Award },
  { title: "Ongoing Full Stack Development Learning", org: "Continuous", icon: BookOpen },
];

const CertificationsSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <SectionHeading title="Certifications & Training" subtitle="My credentials" />
      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-6 bg-card rounded-2xl border border-border card-shadow hover:card-shadow-hover hover:border-primary/30 transition-all text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <c.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-foreground text-sm mb-2">{c.title}</h3>
            <p className="text-xs text-muted-foreground">{c.org}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
