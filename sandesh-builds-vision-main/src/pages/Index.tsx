import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionDivider from "@/components/SectionDivider";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SectionDivider fromBg="background" toBg="secondary" />
    <EducationSection />
    <SectionDivider fromBg="secondary" toBg="background" />
    <SkillsSection />
    <SectionDivider fromBg="background" toBg="secondary" />
    <ProjectsSection />
    <SectionDivider fromBg="secondary" toBg="background" />
    <ServicesSection />
    <SectionDivider fromBg="background" toBg="secondary" />
    <ExperienceSection />
    <SectionDivider fromBg="secondary" toBg="background" />
    <CertificationsSection />
    <SectionDivider fromBg="background" toBg="secondary" />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
