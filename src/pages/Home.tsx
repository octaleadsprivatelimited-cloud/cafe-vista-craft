import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Coffee,
  Leaf,
  Users,
  Star,
  MapPin,
  Clock,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  MessageCircle,
  Building2,
  Award,
  Heart,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const featuredItems = [
  {
    name: "Masala Chai",
    description: "Aromatic tea with traditional Indian spices",
    price: "₹30",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop",
  },
  {
    name: "Irani Chai",
    description: "Hyderabadi style creamy layered tea",
    price: "₹40",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=400&fit=crop",
  },
  {
    name: "Kulhad Chai",
    description: "Earthy clay pot chai with authentic taste",
    price: "₹35",
    image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?w=400&h=400&fit=crop",
  },
  {
    name: "Samosa",
    description: "Crispy pastry filled with spiced potatoes",
    price: "₹20",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=400&fit=crop",
  },
];

const features = [
  {
    icon: Coffee,
    title: "Premium Ingredients",
    description: "We source the finest tea leaves and spices from trusted suppliers for authentic taste.",
  },
  {
    icon: Users,
    title: "Expert Chai Makers",
    description: "Our chai masters craft each cup with precision, care, and generations of knowledge.",
  },
  {
    icon: Leaf,
    title: "Traditional Recipes",
    description: "Authentic family recipes passed down through generations for the perfect brew.",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Regular Customer",
    content: "Sardar Cafe has become my daily ritual. The masala chai is consistently perfect, and the atmosphere feels like home.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Rahul Verma",
    role: "Chai Enthusiast",
    content: "I've been to many chai stalls in Hyderabad, and Sardar Cafe stands out. Their Irani chai is simply unmatched in quality.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Ananya Reddy",
    role: "Remote Worker",
    content: "The perfect spot for chai breaks. Amazing chai, great snacks, and the staff always remembers my order!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const stats = [
  { value: "15+", label: "Outlets", icon: Building2 },
  { value: "50K+", label: "Happy Customers", icon: Heart },
  { value: "10+", label: "Years Experience", icon: Award },
  { value: "20+", label: "Chai Varieties", icon: Sparkles },
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

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              Welcome to Sardar Cafe
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
              Authentic Chai,
              <br />
              <span className="text-cream">Timeless Tradition</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">
              Experience the art of traditional Indian chai in a warm, inviting atmosphere. Every cup tells a story of quality, 
              passion, and heritage.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/menu">
                  View Menu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" className="text-base">
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                <a
                  href="https://wa.me/918333833659?text=Hi! I'd like to place an order."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-2 opacity-80" />
                <div className="text-3xl md:text-4xl font-serif font-bold mb-1">{stat.value}</div>
                <div className="text-primary-foreground/80 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.span variants={itemVariants} className="text-primary font-medium">
              Our Favorites
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif font-bold mt-2">
              Featured Drinks & Snacks
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {featuredItems.map((item, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif font-semibold text-lg">{item.name}</h3>
                    <span className="text-primary font-semibold">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button asChild variant="outline">
              <Link to="/menu">
                View Full Menu
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.span variants={itemVariants} className="text-primary font-medium">
              Why Choose Us
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif font-bold mt-2">
              The Sardar Cafe Difference
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="text-center p-8 rounded-2xl bg-card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Franchise CTA Section */}
      <section className="section-padding bg-accent text-accent-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-accent-foreground/20 text-accent-foreground text-sm font-medium mb-4">
                Business Opportunity
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Own a Sardar Cafe Franchise
              </h2>
              <p className="text-accent-foreground/80 text-lg mb-6 leading-relaxed">
                Join India's fastest-growing chai brand. Start your entrepreneurial journey with a proven 
                business model, comprehensive training, and ongoing support. Low investment, high returns!
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Investment starting from ₹15 Lakhs",
                  "Complete training & setup support",
                  "Proven business model with 18-24 months ROI",
                  "Marketing & operational support",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-foreground" />
                    <span className="text-accent-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-accent-foreground text-accent hover:bg-accent-foreground/90">
                  <Link to="/franchise">
                    <Building2 className="mr-2 h-5 w-5" />
                    Learn More
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
                  <a
                    href="https://wa.me/918333833659?text=Hi! I'm interested in the Sardar Cafe franchise opportunity."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Enquire Now
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=500&fit=crop"
                alt="Franchise opportunity"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-card text-foreground p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-serif font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Successful Outlets</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-12"
          >
            <motion.span variants={itemVariants} className="text-primary-foreground/80 font-medium">
              Testimonials
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif font-bold mt-2">
              What Our Customers Say
            </motion.h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-serif leading-relaxed mb-8">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                  <p className="text-primary-foreground/70 text-sm">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-primary-foreground" : "bg-primary-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants}>
              <span className="text-primary font-medium">Visit Us</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">
                Find Your New Favorite Spot
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Plot number 8-415/73, Miyapur,<br />
                      Manjeera Pipeline Rd, Sapthagiri Colony,<br />
                      Hafeezpet, Hyderabad, Telangana 500049
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Opening Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 7:00 AM - 10:00 PM<br />
                      Saturday - Sunday: 8:00 AM - 11:00 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link to="/contact">Get Directions</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="aspect-video rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop"
                alt="Sardar Cafe interior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
