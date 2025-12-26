import { useState } from "react";
import { motion } from "framer-motion";
import { Coffee, Milk, IceCream, GlassWater, Sparkles, CupSoda, Wine } from "lucide-react";

const menuCategories = [
  { id: "tea", name: "Tea", icon: Coffee },
  { id: "coffee", name: "Coffee", icon: Coffee },
  { id: "milk", name: "Milk", icon: Milk },
  { id: "thick-shake", name: "Thick Shake", icon: IceCream },
  { id: "mocktail", name: "Mocktail", icon: GlassWater },
  { id: "special-drinks", name: "Sardar Cafe Special", icon: Sparkles },
  { id: "milk-shake", name: "Milk Shake", icon: CupSoda },
  { id: "lassi", name: "Lassi", icon: Wine },
];

const menuItems = {
  tea: [
    { name: "Dum Tea", description: "Traditional slow-brewed aromatic tea", price: "₹15" },
    { name: "Masala Tea", description: "Spiced tea with traditional Indian masala", price: "₹20" },
    { name: "Black Tea", description: "Classic strong black tea", price: "₹15" },
    { name: "Ginger Tea", description: "Refreshing tea with fresh ginger", price: "₹20" },
    { name: "Lemon Tea", description: "Zesty tea with fresh lemon", price: "₹20" },
    { name: "Elaichi Tea", description: "Cardamom flavored aromatic tea", price: "₹20" },
    { name: "Belam Tea", description: "Sweet jaggery infused tea", price: "₹20" },
    { name: "Pepper Tea", description: "Spicy tea with black pepper", price: "₹20" },
    { name: "Green Tea", description: "Healthy antioxidant-rich green tea", price: "₹20" },
    { name: "Sonti Tea", description: "Dry ginger infused traditional tea", price: "₹20" },
  ],
  coffee: [
    { name: "Coffee", description: "Classic freshly brewed coffee", price: "₹20" },
    { name: "Black Coffee", description: "Strong black coffee without milk", price: "₹20" },
    { name: "Chocolate Coffee", description: "Rich coffee with chocolate flavor", price: "₹30" },
    { name: "Gold Coffee", description: "Premium signature gold coffee", price: "₹90" },
  ],
  milk: [
    { name: "Milk", description: "Fresh warm milk", price: "₹15" },
    { name: "Pepper Milk", description: "Warm milk with black pepper", price: "₹20" },
    { name: "Boost", description: "Energizing Boost milk drink", price: "₹20" },
    { name: "Horlicks", description: "Nutritious Horlicks milk", price: "₹20" },
    { name: "Bournvita", description: "Chocolatey Bournvita milk", price: "₹20" },
  ],
  "thick-shake": [
    { name: "Vanilla Shake", description: "Creamy vanilla thick shake", price: "₹99" },
    { name: "Chocolate Shake", description: "Rich chocolate thick shake", price: "₹99" },
    { name: "Butterscotch Shake", description: "Sweet butterscotch thick shake", price: "₹99" },
    { name: "Banana Shake", description: "Fresh banana thick shake", price: "₹99" },
    { name: "Mango Shake", description: "Tropical mango thick shake", price: "₹99" },
  ],
  mocktail: [
    { name: "Blue Bleed", description: "Refreshing blue curacao mocktail", price: "₹49" },
    { name: "Lime Mint", description: "Cool lime and mint refresher", price: "₹49" },
    { name: "Rose Mint", description: "Fragrant rose with mint twist", price: "₹49" },
    { name: "Orange Mint", description: "Citrus orange with fresh mint", price: "₹49" },
  ],
  "special-drinks": [
    { name: "Vodka Coffee", description: "Non-alcoholic vodka flavored coffee", price: "₹30" },
    { name: "Beer Coffee", description: "Non-alcoholic beer flavored coffee", price: "₹30" },
    { name: "Scotch Coffee", description: "Non-alcoholic scotch flavored coffee", price: "₹30" },
    { name: "Whisky Coffee", description: "Non-alcoholic whisky flavored coffee", price: "₹30" },
    { name: "Rum Coffee", description: "Non-alcoholic rum flavored coffee", price: "₹30" },
    { name: "Brandy Coffee", description: "Non-alcoholic brandy flavored coffee", price: "₹30" },
  ],
  "milk-shake": [
    { name: "Vanilla", description: "Classic vanilla milk shake", price: "₹59" },
    { name: "Butterscotch", description: "Sweet butterscotch milk shake", price: "₹59" },
    { name: "Oreo", description: "Creamy Oreo milk shake", price: "₹59" },
    { name: "Strawberry", description: "Fresh strawberry milk shake", price: "₹59" },
  ],
  lassi: [
    { name: "Sweet Lassi", description: "Traditional sweet yogurt drink", price: "₹40" },
    { name: "Mango Lassi", description: "Creamy mango flavored lassi", price: "₹40" },
    { name: "Banana Lassi", description: "Fresh banana blended lassi", price: "₹40" },
    { name: "Strawberry Lassi", description: "Fruity strawberry lassi", price: "₹40" },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("tea");

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&h=600&fit=crop')",
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
            <span className="text-cream font-medium">Discover</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mt-2 mb-4 text-white">
              Our Menu
            </h1>
            <p className="text-lg text-white/80">
              Explore our carefully curated selection of handcrafted beverages and delicious treats, 
              made with love and the finest ingredients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Menu Items Grid */}
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                className="group bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif text-xl font-semibold group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-lg font-bold text-primary">{item.price}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Order?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Skip the line! Order ahead via WhatsApp and have your favorite drinks ready when you arrive.
            </p>
            <a
              href="https://wa.me/918333833659?text=Hi! I'd like to place an order from the menu."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Order via WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Menu;
