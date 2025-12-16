import { motion } from "framer-motion";
import { Globe, Thermometer, Timer, Award, Leaf, Coffee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const origins = [
  {
    country: "Ethiopia",
    region: "Yirgacheffe",
    flavor: "Floral, Citrus, Bright",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop",
  },
  {
    country: "Colombia",
    region: "Huila",
    flavor: "Caramel, Nutty, Balanced",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
  },
  {
    country: "Guatemala",
    region: "Antigua",
    flavor: "Chocolate, Spice, Full-bodied",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=300&fit=crop",
  },
  {
    country: "Brazil",
    region: "Minas Gerais",
    flavor: "Smooth, Sweet, Low Acidity",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop",
  },
];

const brewingMethods = [
  {
    name: "Espresso",
    description: "High-pressure extraction for bold, concentrated flavor",
    time: "25-30 seconds",
    temp: "200°F",
    icon: Coffee,
  },
  {
    name: "Pour Over",
    description: "Manual brewing for clarity and nuanced flavors",
    time: "3-4 minutes",
    temp: "195-205°F",
    icon: Timer,
  },
  {
    name: "Cold Brew",
    description: "24-hour steep for smooth, sweet, low-acid coffee",
    time: "24 hours",
    temp: "Room temp",
    icon: Thermometer,
  },
  {
    name: "French Press",
    description: "Full immersion for rich, full-bodied experience",
    time: "4 minutes",
    temp: "200°F",
    icon: Timer,
  },
];

const qualityStandards = [
  {
    icon: Globe,
    title: "Direct Trade",
    description: "We work directly with farmers, ensuring fair prices and sustainable practices.",
  },
  {
    icon: Leaf,
    title: "Organic Focus",
    description: "80% of our beans are certified organic, grown without harmful pesticides.",
  },
  {
    icon: Award,
    title: "Specialty Grade",
    description: "Only beans scoring 80+ points on the SCA scale make it into our roaster.",
  },
  {
    icon: Timer,
    title: "Fresh Roasted",
    description: "We roast in small batches weekly to ensure peak freshness in every cup.",
  },
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

const OurCoffee = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1920&h=600&fit=crop')",
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
            <span className="text-primary font-medium">Bean to Cup</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mt-2 mb-4">
              Our Coffee
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover the journey of our exceptional beans – from remote mountain farms 
              to your perfect cup. Quality is our obsession.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origins Section */}
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
              Sourcing
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
              From the World's Finest Regions
            </motion.h2>
            <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl mx-auto">
              We travel to coffee-growing regions around the world to establish direct relationships 
              with farmers who share our commitment to quality and sustainability.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {origins.map((origin) => (
              <motion.div
                key={origin.country}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl"
              >
                <img
                  src={origin.image}
                  alt={origin.country}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="font-serif font-semibold text-xl">{origin.country}</h3>
                  <p className="text-white/80 text-sm">{origin.region}</p>
                  <p className="text-white/60 text-xs mt-1">{origin.flavor}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Roasting Process */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-medium">The Art of Roasting</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">
                Small Batch, Maximum Flavor
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Roasting is where science meets art. Our head roaster, Marcus, has spent 
                  over a decade perfecting profiles that bring out each origin's unique character.
                </p>
                <p>
                  We roast in small batches of just 12 pounds at a time, monitoring temperature 
                  curves and development time to ensure consistency and peak flavor development.
                </p>
                <p>
                  From light roasts that showcase bright acidity and floral notes to our signature 
                  medium roast with its perfect balance of sweetness and body – every batch is 
                  a labor of love.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-serif font-bold text-primary">12lb</div>
                  <div className="text-xs text-muted-foreground">Batch Size</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-serif font-bold text-primary">15min</div>
                  <div className="text-xs text-muted-foreground">Avg Roast Time</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-serif font-bold text-primary">400°F</div>
                  <div className="text-xs text-muted-foreground">Peak Temp</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=600&h=500&fit=crop"
                alt="Coffee roasting"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brewing Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium">Brewing Excellence</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-4">
              Crafted to Perfection
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Different brewing methods unlock different flavors. Our baristas are trained 
              in multiple techniques to help you find your perfect cup.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {brewingMethods.map((method) => (
              <motion.div
                key={method.name}
                variants={itemVariants}
                className="bg-card p-6 rounded-xl border border-border/50 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  <method.icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">{method.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                <div className="flex gap-4 text-xs">
                  <div>
                    <span className="text-muted-foreground">Time: </span>
                    <span className="font-medium">{method.time}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Temp: </span>
                    <span className="font-medium">{method.temp}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-foreground/80 font-medium">Our Standards</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">
              Quality Without Compromise
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {qualityStandards.map((standard) => (
              <motion.div
                key={standard.title}
                variants={itemVariants}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-foreground/10 mb-4">
                  <standard.icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">{standard.title}</h3>
                <p className="text-primary-foreground/80 text-sm">{standard.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Taste the Difference
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Experience our carefully sourced, expertly roasted coffee. Visit us or order 
              your favorites via WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/menu">
                  View Our Menu
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://wa.me/1234567890?text=Hi! I'd like to order some coffee beans."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Order Beans via WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OurCoffee;
