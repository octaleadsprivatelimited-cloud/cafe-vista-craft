import { motion } from "framer-motion";
import { Heart, Target, Award, Users, Coffee, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Every cup is crafted with genuine love for the art of coffee making.",
  },
  {
    icon: Target,
    title: "Quality",
    description: "We never compromise on the quality of our beans, equipment, or service.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building connections one conversation at a time in our cozy space.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to ethical sourcing and environmentally conscious practices.",
  },
];

const milestones = [
  { year: "2018", event: "Sardar Cafe opens its doors in Hyderabad" },
  { year: "2019", event: "Launched our signature house blend" },
  { year: "2020", event: "Expanded with delivery services" },
  { year: "2022", event: "Won 'Best Local Cafe' in Hyderabad" },
  { year: "2024", event: "Introduced specialty single-origin coffees" },
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

const About = () => {
  return (
    <>
      <SEO
        title="About Us - Sardar Cafe | Our Story & Mission"
        description="Learn about Sardar Cafe's journey from a small kitchen to a beloved neighborhood cafe in Hyderabad. Discover our passion for quality coffee, traditional recipes, and community building since 2018."
        keywords="Sardar Cafe about, Sardar Cafe story, cafe history Hyderabad, coffee shop story, Sardar Cafe mission, cafe values, quality coffee Hyderabad, traditional chai cafe, community cafe, Sardar Cafe journey"
        url="https://sardarcafe.com/about"
      />
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&h=600&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-cream font-medium">Our Story</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mt-2 mb-4 text-white">
              About Sardar Cafe
            </h1>
            <p className="text-lg text-white/80">
              More than just a coffee shop – we're a community built on passion, 
              quality, and the simple joy of a perfectly crafted cup.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-medium">How It Started</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">
                From a Dream to Your Daily Ritual
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  It all began with a small kitchen, a passion for quality coffee, and an 
                  unshakeable belief that great coffee could bring people together. In 2018, 
                  Rajesh Kumar took a leap of faith, leaving his corporate career to pursue his 
                  lifelong passion for specialty coffee in Hyderabad.
                </p>
                <p>
                  What started as a cozy corner café in Miyapur has grown into a beloved 
                  neighborhood institution. But our mission remains the same: to serve exceptional coffee 
                  in a space that feels like home, where strangers become friends and every 
                  visit is a moment of genuine connection.
                </p>
                <p>
                  Today, Sardar Cafe stands as a testament to what happens when passion meets 
                  persistence. We've served thousands of cups of coffee, but we still treat 
                  every single one like it's our first – with care, attention, and a little 
                  bit of magic.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=700&fit=crop"
                alt="Coffee being poured"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-serif font-bold">6+</div>
                <div className="text-sm opacity-80">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.span variants={itemVariants} className="text-primary font-medium">
              Our Mission
            </motion.span>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-serif font-bold mt-2 mb-6">
              Brewing Happiness, One Cup at a Time
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
              We exist to create moments of joy through exceptional coffee experiences. 
              From sourcing the finest beans to perfecting every pour, we're dedicated to 
              making your day a little brighter.
            </motion.p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="bg-card p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <value.icon className="h-7 w-7" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-medium">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">
              Milestones Along the Way
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="font-serif font-bold text-2xl text-primary">{milestone.year}</span>
                </div>
                <div className="relative flex-1 pb-8 border-l-2 border-border pl-6">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary" />
                  <p className="text-foreground">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Coffee className="h-12 w-12 mx-auto text-primary mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Come Be Part of Our Story
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a coffee connoisseur or just looking for a cozy spot to unwind, 
              we'd love to welcome you to our little corner of Hyderabad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Visit Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-sm sm:text-base w-full sm:w-auto px-4 sm:px-8">
                <a
                  href="https://wa.me/918333833659?text=Hi! I'd like to learn more about Sardar Cafe."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="whitespace-normal sm:whitespace-nowrap">Chat on WhatsApp</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
