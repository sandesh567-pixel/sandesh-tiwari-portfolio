import { motion } from "framer-motion";
import { ArrowDown, Briefcase, Github, Linkedin, Mail, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const profileImg = "https://i.postimg.cc/7ZYJSjsP/IMG-6819-copy.jpg";

const stats = [
  { value: "10+", label: "Projects" },
  { value: "5+", label: "Skills" },
  { value: "1+", label: "Years Exp" },
];

const socials = [
  { icon: Github, href: "https://github.com/sandesh567-pixel", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#contact", label: "Email" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-background" id="hero">
    {/* Background decorative elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/8 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/5" />
    </div>

    <div className="relative z-10 container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/15 border border-primary/20 text-primary text-sm font-semibold mb-6 backdrop-blur-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            Available for Freelance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground mb-4 leading-tight"
          >
            Hi, I'm{" "}
            <span className="gradient-text">Sandesh</span>
            <br />
            <span className="text-foreground">Tiwari</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 text-sm md:text-base mb-6"
          >
            {["IT Student", "Full Stack Developer", "Hardware & Networking"].map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                {i > 0 && <span className="w-1 h-6 rounded-full bg-primary/30" />}
                <span className="text-muted-foreground">{role}</span>
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground max-w-lg mb-8 text-base md:text-lg leading-relaxed"
          >
            Passionate about technology, networking, and building modern digital solutions that make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <Button size="lg" className="group rounded-full px-8" asChild>
              <a href="#contact">
                <Briefcase className="mr-2 h-4 w-4" />
                Hire Me
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
              <a href="#projects">
                <ArrowDown className="mr-2 h-4 w-4" />
                View Projects
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-8 pt-6 border-t border-border"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-display font-bold gradient-text">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right - Image & Decorations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute -inset-8 rounded-full border border-primary/10" />

            {/* Image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden ring-4 ring-primary/20 ring-offset-4 ring-offset-background">
              <img
                src={profileImg}
                alt="Sandesh Tiwari"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-8 bg-card border border-border rounded-xl px-4 py-3 card-shadow"
            >
              <div className="text-lg font-bold text-foreground">10+</div>
              <div className="text-xs text-muted-foreground">Projects</div>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 bottom-12 bg-card border border-border rounded-xl px-4 py-3 card-shadow"
            >
              <div className="text-lg font-bold text-foreground">5+</div>
              <div className="text-xs text-muted-foreground">Tech Skills</div>
            </motion.div>

            {/* Social links */}
            <div className="absolute -right-6 bottom-1/3 flex flex-col gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors card-shadow"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
      >
        <div className="w-1 h-2 rounded-full bg-primary" />
      </motion.div>
    </motion.div>

    {/* Section divider */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
        <path d="M0 60L1440 60L1440 0C1200 50 240 50 0 0L0 60Z" fill="hsl(var(--background))" />
      </svg>
    </div>
  </section>
);

export default HeroSection;
