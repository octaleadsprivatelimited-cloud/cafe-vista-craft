import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

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
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [postsToShow, setPostsToShow] = useState<number>(3); // Initial number of posts to display
  const POSTS_PER_PAGE = 3; // Number of posts to load each time

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts.slice(1) 
    : blogPosts.slice(1).filter((post) => post.category === selectedCategory);

  // Get featured post (always show the first post, or filter if category is selected)
  const featuredPost = selectedCategory === "All" || blogPosts[0].category === selectedCategory
    ? blogPosts[0]
    : null;

  // Get posts to display (limited by postsToShow)
  const displayedPosts = filteredPosts.slice(0, postsToShow);
  const hasMorePosts = filteredPosts.length > postsToShow;

  // Reset posts to show when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setPostsToShow(POSTS_PER_PAGE); // Reset to initial count
  };

  // Load more posts
  const handleLoadMore = () => {
    setPostsToShow((prev) => prev + POSTS_PER_PAGE);
  };
  return (
    <>
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
            <span className="text-cream font-medium">Our Blog</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mt-2 mb-4 text-white">
              Coffee Stories & Tips
            </h1>
            <p className="text-lg text-white/80">
              Dive into the world of specialty coffee. From brewing guides to origin stories, 
              we share our passion and knowledge to help you appreciate every cup.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
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
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  Featured
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <Button asChild>
                  <Link to={`/blog/${featuredPost.slug}`}>
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

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
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card hover:bg-primary/10 hover:text-primary border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <motion.div
              key={`${selectedCategory}-${postsToShow}`}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {displayedPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <Link to={`/blog/${post.slug}`}>
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
                </Link>
              </motion.article>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No articles found in this category.
              </p>
            </div>
          )}

          {/* Load More */}
          {hasMorePosts && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Button variant="outline" size="lg" onClick={handleLoadMore}>
                Load More Articles
              </Button>
            </motion.div>
          )}
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
            <form 
              action="https://formspree.io/f/xqekgjqn" 
              method="POST"
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                formData.append("_subject", "Newsletter Subscription from Sardar Cafe Website");
                
                fetch("https://formspree.io/f/xqekgjqn", {
                  method: "POST",
                  body: formData,
                })
                  .then((response) => {
                    if (response.ok) {
                      alert("Thank you for subscribing! We'll keep you updated with our latest news.");
                      form.reset();
                    } else {
                      alert("Subscription failed. Please try again.");
                    }
                  })
                  .catch(() => {
                    alert("Subscription failed. Please try again.");
                  });
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input type="hidden" name="_subject" value="Newsletter Subscription from Sardar Cafe Website" />
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
                href="https://wa.me/918333833659?text=Hi! I have a question about coffee."
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
