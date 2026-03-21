import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap, Wrench, Calendar } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "Class 10",
    place: "Samata Shikshya Niketan",
detail: "2022 AD",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: GraduationCap,
    title: "+2 SLC (Science - Physical Group)",
    place: "Reliance International Academy, Sarswatinagar, Kathmandu",
detail: "2024 AD",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: Wrench,
    title: "Hardware and Networking Technician Level-2",
    place: "CTEVT (Council for Technical Education and Vocational Training)",
    detail: "Duration: 8–9 months",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: GraduationCap,
    title: "Bachelor of Information Technology (BIT)",
    place: "Texas College of Management & IT",
    detail: "Currently pursuing",
    color: "bg-primary/10 text-primary",
  },
];

const EducationSection = () => (
  <section id="education" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <SectionHeading title="Education" subtitle="My academic journey" />
      <div className="max-w-3xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className={`relative flex items-start gap-6 mb-8 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full gradient-bg -translate-x-1.5 mt-6 z-10 ring-4 ring-secondary" />

            <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
              <div className="p-6 bg-card rounded-xl border border-border card-shadow hover:card-shadow-hover transition-shadow">
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-primary text-sm font-medium mb-2">{item.place}</p>
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                  <Calendar className="h-3 w-3" />
                  {item.detail}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
