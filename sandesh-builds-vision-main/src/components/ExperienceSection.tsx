import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <SectionHeading title="Experience" subtitle="Where I've worked" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <div className="relative bg-card rounded-2xl border border-border p-8 card-shadow hover:card-shadow-hover transition-shadow overflow-hidden">
          {/* Accent strip */}
          <div className="absolute top-0 left-0 w-1.5 h-full gradient-bg rounded-l-2xl" />

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center">
                <Briefcase className="h-7 w-7 text-primary-foreground" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-display font-bold text-foreground mb-1">Marketing & Sales Role</h3>
              <p className="text-primary font-semibold mb-3">Search Solution Pvt. Ltd.</p>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <MapPin className="h-3.5 w-3.5" />
                  Nepal
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <Calendar className="h-3.5 w-3.5" />
                  Recent
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Promoting products, interacting with customers, and developing strong communication and interpersonal skills in a professional environment.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Marketing", "Sales", "Communication", "Customer Relations"].map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ExperienceSection;
