import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, MapPin, Send, Phone } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  { icon: Mail, label: "sdhtw567@gmail.com", href: "mailto:sdhtw567@gmail.com" },
  { icon: Github, label: "github.com/sandesh567-pixel", href: "https://github.com/sandesh567-pixel" },
  { icon: Linkedin, label: "linkedin.com/in/sandeshtiwari", href: "https://linkedin.com/in/sandeshtiwari" },
  { icon: MapPin, label: "Nepal", href: null },
];

const ContactSection = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
      setSending(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading title="Contact Me" subtitle="Let's work together" />
        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-4"
          >
            <div className="p-6 rounded-2xl gradient-bg text-primary-foreground mb-6">
              <h3 className="text-lg font-display font-bold mb-2">Let's talk!</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            {contactInfo.map(({ icon: Icon, label, href }) => (
              <div key={label} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border card-shadow">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors truncate">
                    {label}
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground">{label}</span>
                )}
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="md:col-span-3 p-6 bg-card rounded-2xl border border-border card-shadow space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Your Name" required className="rounded-xl" />
              <Input type="email" placeholder="Your Email" required className="rounded-xl" />
            </div>
            <Input placeholder="Subject" required className="rounded-xl" />
            <Textarea placeholder="Your Message" rows={5} required className="rounded-xl resize-none" />
            <Button type="submit" disabled={sending} className="w-full rounded-xl" size="lg">
              <Send className="mr-2 h-4 w-4" /> {sending ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
