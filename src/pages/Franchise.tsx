import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  TrendingUp,
  Users,
  Award,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  IndianRupee,
  Building2,
  Handshake,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { SEO } from "@/components/SEO";

const benefits = [
  {
    icon: TrendingUp,
    title: "Proven Business Model",
    description: "Join a brand with established systems, processes, and a track record of success.",
  },
  {
    icon: Users,
    title: "Training & Support",
    description: "Comprehensive training programs and ongoing operational support for you and your team.",
  },
  {
    icon: Award,
    title: "Brand Recognition",
    description: "Leverage our strong brand identity and loyal customer base in your market.",
  },
  {
    icon: Handshake,
    title: "Marketing Support",
    description: "Benefit from national marketing campaigns and localized promotional strategies.",
  },
];

const investmentDetails = [
  { label: "Franchise Fee", value: "₹3-5 Lakhs" },
  { label: "Setup Cost", value: "₹10-15 Lakhs" },
  { label: "Space Required", value: "200-400 sq.ft" },
  { label: "ROI Period", value: "18-24 Months" },
];

const requirements = [
  "Passion for chai and customer service",
  "Minimum investment capacity of ₹15-20 Lakhs",
  "Prime retail location with good footfall",
  "Commitment to quality standards",
  "Business acumen and entrepreneurial spirit",
  "Willingness to undergo training program",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Franchise = () => {
  return (
    <>
      <SEO
        title="Franchise Opportunity - Sardar Cafe | Own a Cafe Franchise"
        description="Join Sardar Cafe franchise opportunity. Investment starting from ₹15 Lakhs, proven business model with 18-24 months ROI. Complete training, marketing support, and comprehensive setup assistance. Start your entrepreneurial journey today!"
        keywords="Sardar Cafe franchise, cafe franchise opportunity, chai cafe franchise, coffee shop franchise, franchise investment, cafe business opportunity, Sardar Cafe franchise cost, cafe franchise India, Hyderabad cafe franchise, low investment franchise"
        url="https://sardarcafe.com/franchise"
      />
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=1920&h=600&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-center mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-6">
              Franchise Opportunity
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Partner with <span className="text-cream">Sardar Cafe</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              Join India's fastest-growing chai brand. Start your entrepreneurial journey with a proven
              business model and comprehensive support system.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-base bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <a
                  href="https://wa.me/918333833659?text=Hi! I'm interested in the Sardar Cafe franchise opportunity."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Enquire Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base border-white text-white hover:bg-white hover:text-foreground">
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-accent text-accent-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "15+", label: "Outlets" },
              { value: "5+", label: "Cities" },
              { value: "50K+", label: "Happy Customers" },
              { value: "98%", label: "Franchisee Satisfaction" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-serif font-bold mb-1">{stat.value}</div>
                <div className="text-accent-foreground/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.span variants={itemVariants} className="text-primary font-medium">
              Why Partner With Us
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4"
            >
              Franchise Benefits
            </motion.h2>
            <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need to build a successful chai business in your locality.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className="text-center p-8 rounded-2xl bg-card hover:shadow-lg transition-shadow duration-300 border border-border/50"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-6">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Investment Details */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium">Investment Overview</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">
                Affordable Entry, High Returns
              </h2>
              <p className="text-muted-foreground mb-8">
                Start your chai business with a reasonable investment and benefit from our proven
                operational model. We provide complete setup support including equipment, training, and
                marketing materials.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {investmentDetails.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-card rounded-lg border border-border/50"
                  >
                    <div className="text-xs text-muted-foreground mb-1">{detail.label}</div>
                    <div className="text-xl font-serif font-bold text-primary">{detail.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop"
                alt="Chai preparation"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=600&h=500&fit=crop"
                alt="Business meeting"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-primary font-medium">Who We're Looking For</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">
                Ideal Partner Profile
              </h2>
              <p className="text-muted-foreground mb-8">
                We're looking for passionate entrepreneurs who share our vision of delivering exceptional
                chai experiences across India.
              </p>

              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{req}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Building2 className="h-16 w-16 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-accent-foreground/80 text-lg mb-8">
              Take the first step towards owning your own chai business. Get in touch with our franchise
              team today for a detailed discussion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-base border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
              >
                <a
                  href="https://wa.me/918333833659?text=Hi! I'm interested in the Sardar Cafe franchise opportunity. Please share more details."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Enquiry
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="text-base bg-accent-foreground text-accent hover:bg-accent-foreground/90"
              >
                <a href="tel:+918333833659">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: +91 83338 33659
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Phone,
                title: "Call Us",
                content: "+91 83338 33659",
                href: "tel:+918333833659",
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "franchise@sardarcafe.com",
                href: "mailto:franchise@sardarcafe.com",
              },
              {
                icon: MapPin,
                title: "Head Office",
                content: "Hafeezpet, Hyderabad, Telangana",
                href: "/contact",
              },
            ].map((contact) => (
              <motion.a
                key={contact.title}
                variants={itemVariants}
                href={contact.href}
                className="flex items-center gap-4 p-6 rounded-xl bg-card border border-border/50 hover:shadow-lg transition-shadow"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <contact.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{contact.title}</h3>
                  <p className="text-muted-foreground text-sm">{contact.content}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Franchise;
