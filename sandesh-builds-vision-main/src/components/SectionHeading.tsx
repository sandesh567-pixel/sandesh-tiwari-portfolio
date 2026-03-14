import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">{title}</h2>
    <div className="w-16 h-1 gradient-bg rounded-full mx-auto mb-3" />
    {subtitle && <p className="text-muted-foreground max-w-lg mx-auto">{subtitle}</p>}
  </motion.div>
);

export default SectionHeading;
