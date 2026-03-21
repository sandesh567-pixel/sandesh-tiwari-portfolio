import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch("https://formsubmit.co/sdhtw567@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Message sent successfully!",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        toast({
          title: "Error",
          description: "Failed to send. Try again.",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Error",
        description: "Network issue. Check connection.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background/50 to-secondary">
      <div className="container mx-auto px-4">
        <SectionHeading title="Get In Touch" subtitle="Ready to start your project?" />
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto mt-16">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 lg:max-w-md"
          >
            <div className="p-8 bg-card rounded-2xl border border-border shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                <Mail className="h-7 w-7 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-2">Email Me</h4>
              <p className="text-primary font-semibold">sdhtw567@gmail.com</p>
            </div>
            
            <div className="p-8 bg-card rounded-2xl border border-border shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                <Phone className="h-7 w-7 text-green-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">WhatsApp</h4>
              <p className="text-primary font-semibold">
                <a href="https://wa.me/9779813979853" target="_blank" rel="noopener" className="hover:underline">
                  +977 9813979853
                </a>
              </p>
            </div>

            <div className="p-8 bg-card rounded-2xl border border-border shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="h-7 w-7 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold mb-2">Location</h4>
              <p className="text-muted-foreground">Kathmandu, Nepal</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl border border-border shadow-xl hover:shadow-2xl transition-all duration-300 space-y-6">
              <input type="hidden" name="_subject" value="Portfolio Contact Form" />
              <input type="hidden" name="_captcha" value="false" />
              
              <Input 
                required 
                name="name" 
                placeholder="Full Name" 
                className="h-14 text-lg"
              />
              
              <Input 
                required 
                type="email" 
                name="_replyto" 
                placeholder="Email Address" 
                className="h-14 text-lg"
              />
              
              <Textarea 
                required 
                name="message" 
                placeholder="Tell me about your project or how I can help you..." 
                rows={6}
                className="text-lg resize-none"
              />
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full h-14 text-lg bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

