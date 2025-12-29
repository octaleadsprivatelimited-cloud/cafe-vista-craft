import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import all gallery images
import chaiImage1 from "@/assets/gallery-chai-1.jpg";
import chaiImage2 from "@/assets/gallery-chai-2.jpg";
import chaiImage3 from "@/assets/gallery-chai-3.jpg";
import chaiImage4 from "@/assets/gallery-chai-4.jpg";
import chaiImage5 from "@/assets/gallery-chai-5.jpg";
import interiorImage1 from "@/assets/gallery-interior-1.jpg";
import img1 from "@/assets/jpeg-optimizer_IMG_20250710_125047340_HDR.jpg";
import img2 from "@/assets/jpeg-optimizer_IMG_20250710_150613237_HDR.jpg";
import img3 from "@/assets/jpeg-optimizer_IMG_20250710_150722130_HDR.jpg";
import img4 from "@/assets/jpeg-optimizer_IMG_20250710_150727278_HDR.jpg";
import img5 from "@/assets/jpeg-optimizer_IMG_20250710_151137892.jpg";
import img6 from "@/assets/jpeg-optimizer_IMG_20250710_151139462.jpg";
import img7 from "@/assets/jpeg-optimizer_IMG_20250710_151144426.jpg";
import img8 from "@/assets/jpeg-optimizer_IMG_20250710_151654878.jpg";
import img9 from "@/assets/jpeg-optimizer_IMG_20250710_151954308_HDR.jpg";
import img10 from "@/assets/jpeg-optimizer_IMG_20250710_152044799_HDR.jpg";
import img11 from "@/assets/jpeg-optimizer_IMG_20250710_152046056_HDR.jpg";
import img12 from "@/assets/jpeg-optimizer_IMG_20250710_152052251_HDR.jpg";
import img13 from "@/assets/jpeg-optimizer_IMG_20250710_152057372_HDR.jpg";
import img14 from "@/assets/jpeg-optimizer_IMG_20250710_173734019_HDR.jpg";
import img15 from "@/assets/jpeg-optimizer_IMG_20250710_173752589_HDR.jpg";
import img16 from "@/assets/jpeg-optimizer_IMG_20250710_223022437_HDR.jpg";
import img17 from "@/assets/jpeg-optimizer_IMG_20250710_223230522_HDR.jpg";
import img18 from "@/assets/jpeg-optimizer_IMG_20250710_223231966_HDR.jpg";
import img19 from "@/assets/jpeg-optimizer_IMG_20250710_223245020_HDR.jpg";
import img20 from "@/assets/jpeg-optimizer_IMG_20250710_223347878_HDR.jpg";

const galleryImages = [
  {
    id: 1,
    src: chaiImage1,
    alt: "Traditional Indian masala chai in clay kulhad",
    category: "chai",
  },
  {
    id: 2,
    src: chaiImage2,
    alt: "Chai being poured in traditional style",
    category: "chai",
  },
  {
    id: 3,
    src: chaiImage3,
    alt: "Cutting chai served on tray",
    category: "chai",
  },
  {
    id: 4,
    src: chaiImage4,
    alt: "Traditional chai preparation with spices",
    category: "chai",
  },
  {
    id: 5,
    src: chaiImage5,
    alt: "Customers enjoying chai together",
    category: "community",
  },
  {
    id: 6,
    src: interiorImage1,
    alt: "Cozy café interior with warm lighting",
    category: "interior",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    alt: "Barista crafting beverages",
    category: "barista",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
    alt: "Beautifully presented coffee",
    category: "drinks",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=600&fit=crop",
    alt: "Iced beverages",
    category: "drinks",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&h=600&fit=crop",
    alt: "Group of friends at café",
    category: "community",
  },
  {
    id: 11,
    src: img1,
    alt: "Sardar Cafe interior and ambiance",
    category: "interior",
  },
  {
    id: 12,
    src: img2,
    alt: "Cafe space and atmosphere",
    category: "interior",
  },
  {
    id: 13,
    src: img3,
    alt: "Cafe environment and setting",
    category: "interior",
  },
  {
    id: 14,
    src: img4,
    alt: "Cafe interior design",
    category: "interior",
  },
  {
    id: 15,
    src: img5,
    alt: "Beverages and drinks at Sardar Cafe",
    category: "drinks",
  },
  {
    id: 16,
    src: img6,
    alt: "Fresh beverages being prepared",
    category: "drinks",
  },
  {
    id: 17,
    src: img7,
    alt: "Delicious drinks and refreshments",
    category: "drinks",
  },
  {
    id: 18,
    src: img8,
    alt: "Cafe menu items and beverages",
    category: "drinks",
  },
  {
    id: 19,
    src: img9,
    alt: "Cafe atmosphere and space",
    category: "interior",
  },
  {
    id: 20,
    src: img10,
    alt: "Sardar Cafe interior view",
    category: "interior",
  },
  {
    id: 21,
    src: img11,
    alt: "Cafe environment and ambiance",
    category: "interior",
  },
  {
    id: 22,
    src: img12,
    alt: "Cafe space and design",
    category: "interior",
  },
  {
    id: 23,
    src: img13,
    alt: "Cafe interior and setting",
    category: "interior",
  },
  {
    id: 24,
    src: img14,
    alt: "Evening ambiance at Sardar Cafe",
    category: "interior",
  },
  {
    id: 25,
    src: img15,
    alt: "Cafe space and atmosphere",
    category: "interior",
  },
  {
    id: 26,
    src: img16,
    alt: "Night view of Sardar Cafe",
    category: "interior",
  },
  {
    id: 27,
    src: img17,
    alt: "Cafe interior and environment",
    category: "interior",
  },
  {
    id: 28,
    src: img18,
    alt: "Cafe space and design",
    category: "interior",
  },
  {
    id: 29,
    src: img19,
    alt: "Cafe atmosphere and setting",
    category: "interior",
  },
  {
    id: 30,
    src: img20,
    alt: "Sardar Cafe interior view",
    category: "interior",
  },
];

const categories = [
  { id: "all", name: "All" },
  { id: "chai", name: "Chai" },
  { id: "interior", name: "Our Space" },
  { id: "drinks", name: "Drinks" },
  { id: "barista", name: "Baristas" },
  { id: "community", name: "Community" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&h=600&fit=crop')",
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
            <span className="text-cream font-medium">Visual Journey</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mt-2 mb-4 text-white">
              Our Gallery
            </h1>
            <p className="text-lg text-white/80">
              Take a peek inside Sardar Cafe. From our cozy corners to the artistry in every cup, 
              these moments capture the essence of who we are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Masonry Grid */}
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="break-inside-avoid group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                        View
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-white/80 transition-colors"
              >
                <X className="h-8 w-8" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full rounded-lg"
              />
              <p className="text-white/80 text-center mt-4">{selectedImage.alt}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Experience It in Person
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Photos only tell part of the story. Visit us to experience the warmth, 
              aroma, and community that make Sardar Cafe special.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a
                  href="https://wa.me/918333833659?text=Hi! I'd like to book a table at Sardar Cafe."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reserve a Table
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on Instagram
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
