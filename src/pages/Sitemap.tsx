import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { blogPosts } from "@/data/blogPosts";

const Sitemap = () => {
  const pages = [
    { name: "Home", path: "/", priority: "1.0", changefreq: "weekly" },
    { name: "Menu", path: "/menu", priority: "0.9", changefreq: "monthly" },
    { name: "About Us", path: "/about", priority: "0.8", changefreq: "monthly" },
    { name: "Contact", path: "/contact", priority: "0.9", changefreq: "monthly" },
    { name: "Our Coffee", path: "/our-coffee", priority: "0.8", changefreq: "monthly" },
    { name: "Gallery", path: "/gallery", priority: "0.7", changefreq: "weekly" },
    { name: "Blog", path: "/blog", priority: "0.8", changefreq: "weekly" },
    { name: "Franchise", path: "/franchise", priority: "0.9", changefreq: "monthly" },
  ];

  return (
    <>
      <SEO
        title="Sitemap - Sardar Cafe | All Pages & Links"
        description="Browse the complete sitemap of Sardar Cafe website. Find all pages, blog posts, and navigation links for easy access to our menu, about us, contact, gallery, blog, and franchise information."
        keywords="Sardar Cafe sitemap, website sitemap, site navigation, all pages, Sardar Cafe links, website structure"
        url="https://sardarcafe.com/sitemap"
      />
      
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=600&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-cream font-medium">Navigation</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mt-2 mb-4 text-white">
              Sitemap
            </h1>
            <p className="text-lg text-white/80">
              Find all pages and content on our website. Browse our menu, learn about us, explore our gallery, read our blog, and discover franchise opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Main Pages</h2>
              <ul className="space-y-3">
                {pages.map((page) => (
                  <li key={page.path}>
                    <Link
                      to={page.path}
                      className="flex items-center justify-between p-4 rounded-lg bg-card border border-border/50 hover:bg-muted transition-colors group"
                    >
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {page.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Priority: {page.priority}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Blog Posts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">Blog Posts</h2>
              <ul className="space-y-3">
                {blogPosts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="flex items-center justify-between p-4 rounded-lg bg-card border border-border/50 hover:bg-muted transition-colors group"
                    >
                      <span className="font-medium group-hover:text-primary transition-colors line-clamp-1">
                        {post.title}
                      </span>
                      <span className="text-sm text-muted-foreground ml-2">
                        {post.date}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* XML Sitemap Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-12 p-6 rounded-lg bg-secondary/50 text-center"
          >
            <p className="text-muted-foreground mb-4">
              For search engines, you can also access our XML sitemap:
            </p>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              View XML Sitemap
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Sitemap;

