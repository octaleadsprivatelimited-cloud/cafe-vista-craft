import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    slug: "perfect-home-espresso",
    title: "How to Make the Perfect Espresso at Home",
    excerpt: "Master the art of home espresso with our comprehensive guide covering grind size, tamping pressure, and extraction timing.",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&h=500&fit=crop",
    author: "Marcus Chen",
    date: "December 10, 2024",
    readTime: "5 min read",
    category: "Brewing Guide",
  },
  {
    id: 2,
    slug: "coffee-origins-ethiopia",
    title: "Exploring Coffee Origins: Ethiopia",
    excerpt: "Journey to the birthplace of coffee and discover why Ethiopian beans are prized for their complex, fruity flavors.",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&h=500&fit=crop",
    author: "James Williams",
    date: "December 5, 2024",
    readTime: "7 min read",
    category: "Coffee Origins",
  },
  {
    id: 3,
    slug: "cold-brew-vs-iced-coffee",
    title: "Cold Brew vs. Iced Coffee: What's the Difference?",
    excerpt: "Understand the key differences between these popular cold coffee drinks and find out which one suits your taste.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=500&fit=crop",
    author: "Sofia Rodriguez",
    date: "November 28, 2024",
    readTime: "4 min read",
    category: "Coffee 101",
  },
  {
    id: 4,
    slug: "latte-art-basics",
    title: "Latte Art for Beginners: Your First Heart",
    excerpt: "Learn the fundamentals of milk steaming and pouring to create your first beautiful latte art design.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=500&fit=crop",
    author: "Sofia Rodriguez",
    date: "November 20, 2024",
    readTime: "6 min read",
    category: "Brewing Guide",
  },
  {
    id: 5,
    slug: "sustainable-coffee",
    title: "Why Sustainable Coffee Matters",
    excerpt: "Explore the importance of ethical sourcing and how your coffee choices impact farmers and the environment.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=500&fit=crop",
    author: "James Williams",
    date: "November 15, 2024",
    readTime: "8 min read",
    category: "Sustainability",
  },
  {
    id: 6,
    slug: "perfect-coffee-water-ratio",
    title: "The Golden Ratio: Coffee to Water Perfection",
    excerpt: "Discover the science behind the perfect coffee-to-water ratio and how to adjust it for your preferred strength.",
    image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&h=500&fit=crop",
    author: "Marcus Chen",
    date: "November 8, 2024",
    readTime: "4 min read",
    category: "Brewing Guide",
  },
];

const categories = ["All", "Brewing Guide", "Coffee Origins", "Coffee 101", "Sustainability"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Blog = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1920&h=600&fit=crop')",
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
            <span className="text-primary font-medium">Our Blog</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mt-2 mb-4">
              Coffee Stories & Tips
            </h1>
            <p className="text-lg text-muted-foreground">
              Dive into the world of specialty coffee. From brewing guides to origin stories, 
              we share our passion and knowledge to help you appreciate every cup.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-card rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="aspect-video lg:aspect-auto lg:h-full">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Featured
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {blogPosts[0].author}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {blogPosts[0].date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {blogPosts[0].readTime}
                </div>
              </div>
              <Button>
                Read Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Latest Articles</h2>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium bg-card hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Posts Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.slice(1).map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary">{post.category}</span>
                  <h3 className="font-serif font-semibold text-lg mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.author}</span>
                    <div className="flex items-center gap-3">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Get Coffee Tips in Your Inbox
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for brewing guides, coffee news, and exclusive offers. 
              No spam, just great coffee content.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Have a Coffee Question?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Our team loves talking coffee! Reach out via WhatsApp and we'll be happy to 
              help with recommendations, brewing tips, or anything coffee-related.
            </p>
            <Button asChild size="lg" variant="secondary">
              <a
                href="https://wa.me/1234567890?text=Hi! I have a question about coffee."
                target="_blank"
                rel="noopener noreferrer"
              >
                Ask Us on WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;
