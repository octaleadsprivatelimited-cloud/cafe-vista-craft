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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import franchiseImage from "@/assets/jpeg-optimizer_IMG_20250710_151954308_HDR.jpg";
import heroBackgroundImage from "@/assets/Home-hero.avif";
import { SEO } from "@/components/SEO";

// Import menu category images
import teaImage from "@/assets/Masala Chai.webp";
import coffeeImage from "@/assets/Coffee.avif";
import milkImage from "@/assets/menu-milk.jpg";
import thickShakeImage from "@/assets/menu-thick-shake.jpg";
import mocktailImage from "@/assets/menu-mocktail.jpg";
import specialImage from "@/assets/menu-special.jpg";
import milkShakeImage from "@/assets/menu-milkshake.jpg";
import lassiImage from "@/assets/menu-lassi.jpg";
import sandwichImage from "@/assets/menu-sandwich.avif";
import tandooriChickenImage from "@/assets/menu-tandoori-chicken.avif";
import mayonnaiseImage from "@/assets/menu-mayonnaise.avif";
import sweetCornCupImage from "@/assets/menu-sweet-corn-cup.webp";
import breadOmelettesImage from "@/assets/menu-bread-omelettes.jpg";
import frenchFriesImage from "@/assets/menu-french-fries.avif";

// Menu categories matching Menu.tsx
const menuCategories = [
  { id: "tea", name: "Tea", icon: Coffee },
  { id: "coffee", name: "Coffee", icon: Coffee },
  { id: "milk", name: "Milk", icon: Coffee },
  { id: "thick-shake", name: "Thick Shake", icon: Coffee },
  { id: "mocktail", name: "Mocktail", icon: Coffee },
  { id: "special-drinks", name: "Sardar Cafe Special", icon: Coffee },
  { id: "milk-shake", name: "Milk Shake", icon: Coffee },
  { id: "lassi", name: "Lassi", icon: Coffee },
  { id: "special-snacks-veg", name: "Special Snacks (Veg)", icon: Coffee },
  { id: "special-snacks-nonveg", name: "Special Snacks (Non-Veg)", icon: Coffee },
  { id: "add-ons", name: "Add-Ons", icon: Coffee },
  { id: "sweet-corn-cup", name: "Special Sweet Corn Cup", icon: Coffee },
  { id: "bread-omelettes", name: "Bread Omelettes", icon: Coffee },
  { id: "french-fries", name: "French Fries", icon: Coffee },
];

const categoryImages: Record<string, string> = {
  tea: teaImage,
  coffee: coffeeImage,
  milk: milkImage,
  "thick-shake": thickShakeImage,
  mocktail: mocktailImage,
  "special-drinks": specialImage,
  "milk-shake": milkShakeImage,
  lassi: lassiImage,
  "special-snacks-veg": sandwichImage,
  "special-snacks-nonveg": tandooriChickenImage,
  "add-ons": mayonnaiseImage,
  "sweet-corn-cup": sweetCornCupImage,
  "bread-omelettes": breadOmelettesImage,
  "french-fries": frenchFriesImage,
};

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
    content: "I've been to many chai stalls in Hyderabad, and Sardar Cafe stands out. Their masala chai is simply unmatched in quality.",
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
  const navigate = useNavigate();

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleCategoryClick = (categoryId: string) => {
    navigate(`/menu#category-${categoryId}`);
    // Scroll to category after navigation
    setTimeout(() => {
      const element = document.getElementById(`category-${categoryId}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <>
      <SEO
        title="Sardar Cafe - Authentic Chai & Coffee in Hyderabad | Miyapur"
        description="Experience authentic Indian chai and premium coffee at Sardar Cafe in Miyapur, Hyderabad. Traditional masala chai, kulhad chai, samosa, and more. Visit us at Hafeezpet or order via WhatsApp!"
        keywords="Sardar Cafe, chai cafe Hyderabad, masala chai, kulhad chai, coffee shop Miyapur, best chai in Hyderabad, traditional Indian chai, cafe near me, Hafeezpet cafe, chai delivery, coffee delivery, Sardar Cafe franchise, authentic chai, Hyderabad cafe, Miyapur cafe, Sardar Cafe menu, chai near me, coffee near me"
        url="https://sardarcafe.com"
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBackgroundImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black/75" />
        </div>

        <div className="container-custom relative z-10 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-center lg:text-right"
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
            <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
              <Button asChild size="lg" className="text-sm sm:text-base w-full sm:w-auto px-4 sm:px-8">
                <Link to="/menu">
                  <span className="whitespace-normal sm:whitespace-nowrap">View Menu</span>
                  <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                </Link>
              </Button>
              <Button asChild size="lg" className="text-sm sm:text-base w-full sm:w-auto px-4 sm:px-8">
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                  <span className="whitespace-normal sm:whitespace-nowrap">Contact Us</span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-sm sm:text-base border-green-500 text-green-500 hover:bg-green-500 hover:text-white w-full sm:w-auto px-4 sm:px-8">
                <a
                  href="https://wa.me/918333833659?text=Hi! I'd like to place an order."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5 flex-shrink-0" />
                  <span className="whitespace-normal sm:whitespace-nowrap">WhatsApp</span>
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
      <section className="py-6 bg-primary text-primary-foreground">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-6 w-6 mx-auto mb-1.5 opacity-80" />
                <div className="text-2xl md:text-3xl font-serif font-bold mb-0.5">{stat.value}</div>
                <div className="text-primary-foreground/80 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories */}
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
              Explore Our Menu
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif font-bold mt-2">
              All Categories
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {menuCategories.map((category, index) => {
              const bgImage = categoryImages[category.id] || specialImage;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  onClick={() => handleCategoryClick(category.id)}
                  className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-muted"
                >
                  {/* Background image */}
                  <img
                    src={bgImage}
                    alt={category.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
                  {/* Content */}
                  <div className="relative h-full flex items-center justify-center p-4">
                    <h3 className="text-white font-serif font-semibold text-sm sm:text-base text-center group-hover:scale-105 transition-transform duration-300">
                      {category.name}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

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
                <Button asChild variant="outline" size="lg" className="border-accent-foreground text-foreground hover:bg-accent-foreground hover:text-accent">
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
                src={franchiseImage}
                alt="Sardar Cafe franchise opportunity - real cafe interior"
                className="rounded-2xl shadow-xl w-full h-auto"
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
