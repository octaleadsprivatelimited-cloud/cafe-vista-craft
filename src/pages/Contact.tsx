import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content: "Plot number 8-415/73, Miyapur,\nManjeera Pipeline Rd, Sapthagiri Colony,\nHafeezpet, Hyderabad 500049",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 83338 33659",
    href: "tel:+918333833659",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "info@sardarcafe.com",
    href: "mailto:info@sardarcafe.com",
  },
  {
    icon: Clock,
    title: "Opening Hours",
    content: "Mon-Fri: 7AM - 10PM\nSat-Sun: 8AM - 11PM",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1920&h=600&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-primary font-medium">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mt-2 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Have a question, feedback, or just want to say hello? We'd love to hear from you. 
              Reach out and let's start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-card"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-card"
                    maxLength={255}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what's on your mind..."
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-card resize-none"
                    maxLength={1000}
                  />
                </div>
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              {/* WhatsApp CTA */}
              <div className="mt-8 p-6 bg-accent/10 rounded-xl">
                <h3 className="font-serif font-semibold text-lg mb-2">Prefer WhatsApp?</h3>
                <p className="text-muted-foreground mb-4">
                  For quick inquiries or orders, reach us directly on WhatsApp.
                </p>
                <a
                  href="https://wa.me/918333833659?text=Hi! I have a question about Sardar Cafe."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className="p-5 bg-card rounded-xl border border-border/50"
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-3">
                      <info.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold mb-1">{info.title}</h3>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors whitespace-pre-line"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2247646097!2d78.3691!3d17.4969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ff82c39f3b%3A0x123456789!2sMiyapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1702000000000!5m2!1sen!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sardar Cafe Location"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-4"
          >
            {[
              {
                q: "Do you offer delivery?",
                a: "Yes! You can order via WhatsApp for delivery within Miyapur and surrounding areas. Minimum order of ₹300 applies.",
              },
              {
                q: "Can I book the café for private events?",
                a: "Absolutely! We offer private event bookings for groups of 15+. Contact us via WhatsApp for pricing and availability.",
              },
              {
                q: "Do you have dairy-free options?",
                a: "Yes, we offer oat milk, almond milk, and soy milk as alternatives at a small additional charge.",
              },
              {
                q: "Is there WiFi available?",
                a: "Free high-speed WiFi is available for all customers. Ask our staff for the password!",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border/50"
              >
                <h3 className="font-serif font-semibold text-lg mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
